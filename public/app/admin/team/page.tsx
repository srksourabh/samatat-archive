'use client';

import { useState } from 'react';
import { CMSDocument, createDocument, updateDocument } from '../../lib/firebase';
import { CMSEditor } from '../components/CMSEditor';
import { ContentList } from '../components/ContentList';

export default function TeamAdminPage() {
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
      await updateDocument('team', editingItem.id, data);
    } else {
      await createDocument('team', data);
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
        <h1 className="text-3xl font-light text-white mb-2">Team Members</h1>
        <p className="text-gray-400">Manage team members and their profiles</p>
      </div>

      {mode === 'list' ? (
        <ContentList
          contentType="team"
          onEdit={handleEdit}
          onNew={handleNew}
          refreshTrigger={refreshTrigger}
        />
      ) : (
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-xl text-white mb-6">
            {mode === 'edit' ? 'Edit Team Member' : 'New Team Member'}
          </h2>
          <CMSEditor
            contentType="team"
            initialData={editingItem || undefined}
            onSave={handleSave}
            onCancel={handleCancel}
            additionalFields={
              <div className="space-y-4 pt-4 border-t border-gray-700">
                <h3 className="text-gray-300 font-medium">Member Details</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Role/Position</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:border-gold"
                      placeholder="e.g., President, Actor, Director"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Display Order</label>
                    <input
                      type="number"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:border-gold"
                      placeholder="1, 2, 3..."
                      min="1"
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
