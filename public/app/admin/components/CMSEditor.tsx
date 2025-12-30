'use client';

import { useState, useRef } from 'react';
import { CMSDocument, uploadFile, ContentType } from '../../lib/firebase';
import { Timestamp } from 'firebase/firestore';

type Language = 'en' | 'bn' | 'hi';

interface CMSEditorProps {
  contentType: ContentType;
  initialData?: Partial<CMSDocument>;
  onSave: (data: Partial<CMSDocument>) => Promise<void>;
  onCancel: () => void;
  additionalFields?: React.ReactNode;
}

const languageLabels: Record<Language, string> = {
  en: 'English',
  bn: 'Bengali (বাংলা)',
  hi: 'Hindi (हिन्दी)',
};

export function CMSEditor({ contentType, initialData, onSave, onCancel, additionalFields }: CMSEditorProps) {
  const [activeTab, setActiveTab] = useState<Language>('en');
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState<Partial<CMSDocument>>({
    title: initialData?.title || { en: '', bn: '', hi: '' },
    description: initialData?.description || { en: '', bn: '', hi: '' },
    content: initialData?.content || { en: '', bn: '', hi: '' },
    imageUrl: initialData?.imageUrl || '',
    videoUrl: initialData?.videoUrl || '',
    youtubeVideoId: initialData?.youtubeVideoId || '',
    gallery: initialData?.gallery || [],
    published: initialData?.published ?? false,
    featured: initialData?.featured ?? false,
    order: initialData?.order || 0,
    category: initialData?.category || '',
    tags: initialData?.tags || [],
    year: initialData?.year || new Date().getFullYear(),
  });

  const updateLocalizedField = (field: 'title' | 'description' | 'content', value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: {
        ...((prev[field] as Record<Language, string>) || { en: '', bn: '', hi: '' }),
        [activeTab]: value,
      },
    }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const path = `${contentType}/${Date.now()}_${file.name}`;
      const url = await uploadFile(path, file);
      setFormData(prev => ({ ...prev, imageUrl: url }));
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Failed to upload image. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const handleGalleryUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    try {
      const uploadPromises = Array.from(files).map(async (file) => {
        const path = `${contentType}/gallery/${Date.now()}_${file.name}`;
        return uploadFile(path, file);
      });
      const urls = await Promise.all(uploadPromises);
      setFormData(prev => ({
        ...prev,
        gallery: [...(prev.gallery || []), ...urls],
      }));
    } catch (error) {
      console.error('Gallery upload failed:', error);
      alert('Failed to upload images. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const removeGalleryImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      gallery: (prev.gallery || []).filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      await onSave(formData);
    } catch (error) {
      console.error('Save failed:', error);
      alert('Failed to save. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Language Tabs */}
      <div className="flex gap-2 border-b border-gray-700 pb-2">
        {(Object.keys(languageLabels) as Language[]).map((lang) => (
          <button
            key={lang}
            type="button"
            onClick={() => setActiveTab(lang)}
            className={`px-4 py-2 rounded-t text-sm transition-colors ${
              activeTab === lang
                ? 'bg-gold text-black font-medium'
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
          >
            {languageLabels[lang]}
          </button>
        ))}
      </div>

      {/* Title */}
      <div>
        <label className="block text-sm text-gray-300 mb-2">
          Title ({languageLabels[activeTab]}) *
        </label>
        <input
          type="text"
          required={activeTab === 'en'}
          value={(formData.title as Record<Language, string>)?.[activeTab] || ''}
          onChange={(e) => updateLocalizedField('title', e.target.value)}
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-gold"
          placeholder={`Enter title in ${languageLabels[activeTab]}`}
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm text-gray-300 mb-2">
          Short Description ({languageLabels[activeTab]})
        </label>
        <textarea
          rows={3}
          value={(formData.description as Record<Language, string>)?.[activeTab] || ''}
          onChange={(e) => updateLocalizedField('description', e.target.value)}
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-gold resize-y"
          placeholder={`Enter short description in ${languageLabels[activeTab]}`}
        />
      </div>

      {/* Full Content */}
      <div>
        <label className="block text-sm text-gray-300 mb-2">
          Full Content ({languageLabels[activeTab]})
        </label>
        <textarea
          rows={8}
          value={(formData.content as Record<Language, string>)?.[activeTab] || ''}
          onChange={(e) => updateLocalizedField('content', e.target.value)}
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-gold resize-y font-mono text-sm"
          placeholder={`Enter full content in ${languageLabels[activeTab]}. Markdown supported.`}
        />
      </div>

      {/* Featured Image */}
      <div>
        <label className="block text-sm text-gray-300 mb-2">Featured Image</label>
        <div className="flex gap-4 items-start">
          {formData.imageUrl && (
            <div className="relative w-32 h-24 rounded overflow-hidden bg-gray-700">
              <img
                src={formData.imageUrl}
                alt="Preview"
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, imageUrl: '' }))}
                className="absolute top-1 right-1 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center"
              >
                ×
              </button>
            </div>
          )}
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              ref={fileInputRef}
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading}
              className="px-4 py-2 bg-gray-700 border border-gray-600 rounded text-gray-300 hover:bg-gray-600 transition-colors disabled:opacity-50"
            >
              {uploading ? 'Uploading...' : 'Upload Image'}
            </button>
            <p className="text-xs text-gray-500 mt-1">JPG, PNG, WebP. Max 5MB.</p>
          </div>
        </div>
      </div>

      {/* YouTube Video ID */}
      <div>
        <label className="block text-sm text-gray-300 mb-2">YouTube Video ID</label>
        <input
          type="text"
          value={formData.youtubeVideoId || ''}
          onChange={(e) => setFormData(prev => ({ ...prev, youtubeVideoId: e.target.value }))}
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-gold"
          placeholder="e.g., dQw4w9WgXcQ (from youtube.com/watch?v=dQw4w9WgXcQ)"
        />
      </div>

      {/* Gallery */}
      <div>
        <label className="block text-sm text-gray-300 mb-2">Photo Gallery</label>
        <div className="grid grid-cols-4 gap-2 mb-3">
          {(formData.gallery || []).map((url, index) => (
            <div key={index} className="relative aspect-square rounded overflow-hidden bg-gray-700">
              <img src={url} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" />
              <button
                type="button"
                onClick={() => removeGalleryImage(index)}
                className="absolute top-1 right-1 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center"
              >
                ×
              </button>
            </div>
          ))}
        </div>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleGalleryUpload}
          className="hidden"
          id="gallery-upload"
        />
        <label
          htmlFor="gallery-upload"
          className={`inline-block px-4 py-2 bg-gray-700 border border-gray-600 rounded text-gray-300 hover:bg-gray-600 transition-colors cursor-pointer ${uploading ? 'opacity-50 pointer-events-none' : ''}`}
        >
          {uploading ? 'Uploading...' : 'Add Gallery Images'}
        </label>
      </div>

      {/* Year */}
      <div>
        <label className="block text-sm text-gray-300 mb-2">Year</label>
        <input
          type="number"
          value={formData.year || new Date().getFullYear()}
          onChange={(e) => setFormData(prev => ({ ...prev, year: parseInt(e.target.value) }))}
          className="w-32 px-4 py-3 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:border-gold"
          min="1999"
          max="2099"
        />
      </div>

      {/* Additional Fields from parent */}
      {additionalFields}

      {/* Publishing Options */}
      <div className="flex gap-6 items-center pt-4 border-t border-gray-700">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.published}
            onChange={(e) => setFormData(prev => ({ ...prev, published: e.target.checked }))}
            className="w-4 h-4 rounded border-gray-600 text-gold focus:ring-gold bg-gray-700"
          />
          <span className="text-gray-300">Published</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.featured}
            onChange={(e) => setFormData(prev => ({ ...prev, featured: e.target.checked }))}
            className="w-4 h-4 rounded border-gray-600 text-gold focus:ring-gold bg-gray-700"
          />
          <span className="text-gray-300">Featured</span>
        </label>
      </div>

      {/* Actions */}
      <div className="flex gap-4 pt-4">
        <button
          type="submit"
          disabled={saving}
          className="px-6 py-3 bg-gold text-black font-medium rounded hover:bg-gold-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {saving ? 'Saving...' : initialData?.id ? 'Update' : 'Create'}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-3 bg-gray-700 text-gray-300 rounded hover:bg-gray-600 transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
