'use client';

import { useState } from 'react';
import { CMSDocument, createDocument, updateDocument } from '../../lib/firebase';
import { CMSEditor } from '../components/CMSEditor';
import { ContentList } from '../components/ContentList';

export default function ActivitiesAdminPage() {
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
      await updateDocument('activities', editingItem.id, data);
    } else {
      await createDocument('activities', data);
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
        <h1 className="text-3xl font-light text-white mb-2">Cultural Activities</h1>
        <p className="text-gray-400">Manage cultural events and activities (Basanta Utsav, Bhasha Dibos, etc.)</p>
      </div>

      {mode === 'list' ? (
        <ContentList
          contentType="activities"
          onEdit={handleEdit}
          onNew={handleNew}
          refreshTrigger={refreshTrigger}
        />
      ) : (
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-xl text-white mb-6">
            {mode === 'edit' ? 'Edit Activity' : 'New Activity'}
          </h2>
          <CMSEditor
            contentType="activities"
            initialData={editingItem || undefined}
            onSave={handleSave}
            onCancel={handleCancel}
            additionalFields={
              <div className="space-y-4 pt-4 border-t border-gray-700">
                <h3 className="text-gray-300 font-medium">Activity Details</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Category</label>
                    <select className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:border-gold">
                      <option value="basanta-utsav">Basanta Utsav (Spring Festival)</option>
                      <option value="bhasha-dibos">Bhasha Dibos (Language Day)</option>
                      <option value="rabindra-jayanti">Rabindra Jayanti</option>
                      <option value="film-festival">Children Film Festival</option>
                      <option value="other">Other Cultural Program</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Venue</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:border-gold"
                      placeholder="Event venue"
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
