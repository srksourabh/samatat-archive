'use client';

import { useState, useEffect } from 'react';
import { CMSDocument, ContentType, getDocuments, deleteDocument, updateDocument } from '../../lib/firebase';
import { useLanguage } from '../../components/LanguageSwitcher';

interface ContentListProps {
  contentType: ContentType;
  onEdit: (item: CMSDocument) => void;
  onNew: () => void;
  refreshTrigger?: number;
}

export function ContentList({ contentType, onEdit, onNew, refreshTrigger }: ContentListProps) {
  const [items, setItems] = useState<CMSDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);
  const lang = useLanguage();

  useEffect(() => {
    fetchItems();
  }, [contentType, refreshTrigger]);

  const fetchItems = async () => {
    setLoading(true);
    try {
      const docs = await getDocuments(contentType);
      setItems(docs);
    } catch (error) {
      console.error('Error fetching items:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this item? This action cannot be undone.')) {
      return;
    }

    setDeleting(id);
    try {
      await deleteDocument(contentType, id);
      setItems(items.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error deleting item:', error);
      alert('Failed to delete item. Please try again.');
    } finally {
      setDeleting(null);
    }
  };

  const togglePublish = async (item: CMSDocument) => {
    try {
      await updateDocument(contentType, item.id!, { published: !item.published });
      setItems(items.map(i =>
        i.id === item.id ? { ...i, published: !i.published } : i
      ));
    } catch (error) {
      console.error('Error toggling publish:', error);
      alert('Failed to update item. Please try again.');
    }
  };

  if (loading) {
    return (
      <div className="space-y-4">
        {Array(5).fill(0).map((_, i) => (
          <div key={i} className="bg-gray-800 rounded-lg p-4 border border-gray-700 animate-pulse">
            <div className="h-6 bg-gray-700 rounded w-1/3 mb-2"></div>
            <div className="h-4 bg-gray-700 rounded w-2/3"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-400">{items.length} items</p>
        <button
          onClick={onNew}
          className="px-4 py-2 bg-gold text-black font-medium rounded hover:bg-gold-light transition-colors flex items-center gap-2"
        >
          <span>+</span> Add New
        </button>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-12 text-gray-400">
          <p className="mb-4">No items yet</p>
          <button
            onClick={onNew}
            className="px-4 py-2 bg-gold/20 text-gold rounded hover:bg-gold/30 transition-colors"
          >
            Create your first item
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-gray-600 transition-colors"
            >
              <div className="flex items-start gap-4">
                {/* Thumbnail */}
                {item.imageUrl && (
                  <div className="w-20 h-16 rounded overflow-hidden bg-gray-700 flex-shrink-0">
                    <img
                      src={item.imageUrl}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-white font-medium truncate">
                      {(item.title as Record<string, string>)?.[lang] || (item.title as Record<string, string>)?.en || 'Untitled'}
                    </h3>
                    {item.featured && (
                      <span className="px-2 py-0.5 bg-gold/20 text-gold text-xs rounded">Featured</span>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm truncate">
                    {(item.description as Record<string, string>)?.[lang] || (item.description as Record<string, string>)?.en || 'No description'}
                  </p>
                  <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                    {item.year && <span>Year: {item.year}</span>}
                    <span>
                      {item.published ? (
                        <span className="text-green-400">Published</span>
                      ) : (
                        <span className="text-yellow-400">Draft</span>
                      )}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    onClick={() => togglePublish(item)}
                    className={`px-3 py-1.5 text-xs rounded transition-colors ${
                      item.published
                        ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                        : 'bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30'
                    }`}
                  >
                    {item.published ? 'Unpublish' : 'Publish'}
                  </button>
                  <button
                    onClick={() => onEdit(item)}
                    className="px-3 py-1.5 text-xs bg-gray-700 text-gray-300 rounded hover:bg-gray-600 transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id!)}
                    disabled={deleting === item.id}
                    className="px-3 py-1.5 text-xs bg-red-500/20 text-red-400 rounded hover:bg-red-500/30 transition-colors disabled:opacity-50"
                  >
                    {deleting === item.id ? '...' : 'Delete'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
