'use client';

import { useState } from 'react';
import { CMSDocument, createDocument, updateDocument } from '../../lib/firebase';
import { CMSEditor } from '../components/CMSEditor';
import { ContentList } from '../components/ContentList';

export default function ProductionsAdminPage() {
  const [mode, setMode] = useState<'list' | 'edit' | 'new'>('list');
  const [editingItem, setEditingItem] = useState<CMSDocument | null>(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleEdit = (item: CMSDocument) => {
    setEditingItem(item);
    setMode('edit');
  };

  const handleNew = () => {
    setEditingItem(null);
    setMode('new');
  };

  const handleSave = async (data: Partial<CMSDocument>) => {
    if (editingItem?.id) {
      await updateDocument('productions', editingItem.id, data);
    } else {
      await createDocument('productions', data);
    }
    setMode('list');
    setRefreshTrigger(prev => prev + 1);
  };

  const handleCancel = () => {
    setMode('list');
    setEditingItem(null);
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-light text-white mb-2">Productions</h1>
        <p className="text-gray-400">Manage theatre productions and plays</p>
      </div>

      {mode === 'list' ? (
        <ContentList
          contentType="productions"
          onEdit={handleEdit}
          onNew={handleNew}
          refreshTrigger={refreshTrigger}
        />
      ) : (
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-xl text-white mb-6">
            {mode === 'edit' ? 'Edit Production' : 'New Production'}
          </h2>
          <CMSEditor
            contentType="productions"
            initialData={editingItem || undefined}
            onSave={handleSave}
            onCancel={handleCancel}
            additionalFields={
              <div className="space-y-4 pt-4 border-t border-gray-700">
                <h3 className="text-gray-300 font-medium">Production Details</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Playwright</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:border-gold"
                      placeholder="Playwright name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Director</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:border-gold"
                      placeholder="Director name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Duration</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:border-gold"
                      placeholder="e.g., 2 hours"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Total Performances</label>
                    <input
                      type="number"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:border-gold"
                      placeholder="Number of shows"
                    />
                  </div>
                </div>
              </div>
            }
          />
        </div>
      )}
    </div>
  );
}
