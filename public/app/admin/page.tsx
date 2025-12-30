'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getDocuments, ContentType } from '../lib/firebase';

interface ContentStats {
  type: ContentType;
  label: string;
  icon: string;
  count: number;
  href: string;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<ContentStats[]>([]);
  const [loading, setLoading] = useState(true);

  const contentTypes: { type: ContentType; label: string; icon: string }[] = [
    { type: 'productions', label: 'Productions', icon: '🎭' },
    { type: 'festivals', label: 'Festivals', icon: '🎪' },
    { type: 'activities', label: 'Activities', icon: '🎨' },
    { type: 'workshops', label: 'Workshops', icon: '📚' },
    { type: 'news', label: 'News Articles', icon: '📰' },
    { type: 'media', label: 'Media Items', icon: '🖼️' },
    { type: 'team', label: 'Team Members', icon: '👥' },
    { type: 'testimonials', label: 'Testimonials', icon: '💬' },
    { type: 'sponsors', label: 'Sponsors', icon: '🤝' },
  ];

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const statsData = await Promise.all(
          contentTypes.map(async (ct) => {
            try {
              const docs = await getDocuments(ct.type);
              return {
                type: ct.type,
                label: ct.label,
                icon: ct.icon,
                count: docs.length,
                href: `/admin/${ct.type}`,
              };
            } catch {
              return {
                type: ct.type,
                label: ct.label,
                icon: ct.icon,
                count: 0,
                href: `/admin/${ct.type}`,
              };
            }
          })
        );
        setStats(statsData);
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-light text-white mb-2">Dashboard</h1>
        <p className="text-gray-400">Welcome to Samatat Content Management System</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {loading ? (
          Array(9).fill(0).map((_, i) => (
            <div key={i} className="bg-gray-800 rounded-lg p-6 border border-gray-700 animate-pulse">
              <div className="h-8 bg-gray-700 rounded w-1/3 mb-4"></div>
              <div className="h-12 bg-gray-700 rounded w-1/2"></div>
            </div>
          ))
        ) : (
          stats.map((stat) => (
            <Link
              key={stat.type}
              href={stat.href}
              className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-gold/50 transition-colors group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">{stat.icon}</span>
                <span className="text-xs text-gray-500 group-hover:text-gold transition-colors">
                  Manage →
                </span>
              </div>
              <div className="text-3xl font-light text-white mb-1">{stat.count}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </Link>
          ))
        )}
      </div>

      {/* Quick Actions */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h2 className="text-xl font-medium text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link
            href="/admin/productions?action=new"
            className="flex items-center gap-3 px-4 py-3 bg-gold/10 border border-gold/30 rounded-lg text-gold hover:bg-gold/20 transition-colors"
          >
            <span>➕</span>
            <span className="text-sm">New Production</span>
          </Link>
          <Link
            href="/admin/activities?action=new"
            className="flex items-center gap-3 px-4 py-3 bg-gold/10 border border-gold/30 rounded-lg text-gold hover:bg-gold/20 transition-colors"
          >
            <span>➕</span>
            <span className="text-sm">New Activity</span>
          </Link>
          <Link
            href="/admin/news?action=new"
            className="flex items-center gap-3 px-4 py-3 bg-gold/10 border border-gold/30 rounded-lg text-gold hover:bg-gold/20 transition-colors"
          >
            <span>➕</span>
            <span className="text-sm">New News Article</span>
          </Link>
          <Link
            href="/admin/media?action=new"
            className="flex items-center gap-3 px-4 py-3 bg-gold/10 border border-gold/30 rounded-lg text-gold hover:bg-gold/20 transition-colors"
          >
            <span>➕</span>
            <span className="text-sm">Upload Media</span>
          </Link>
        </div>
      </div>

      {/* Help Section */}
      <div className="mt-8 bg-gray-800/50 rounded-lg p-6 border border-gray-700">
        <h2 className="text-xl font-medium text-white mb-4">CMS Guide</h2>
        <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-400">
          <div>
            <h3 className="text-gold mb-2 font-medium">Content Management</h3>
            <ul className="space-y-1">
              <li>• Add new productions, festivals, and activities</li>
              <li>• Upload images and videos to the media gallery</li>
              <li>• Manage team members and testimonials</li>
              <li>• Toggle publish status to control visibility</li>
            </ul>
          </div>
          <div>
            <h3 className="text-gold mb-2 font-medium">Multi-language Support</h3>
            <ul className="space-y-1">
              <li>• Add content in English, Bengali, and Hindi</li>
              <li>• All text fields support trilingual input</li>
              <li>• Use the tabs to switch between languages</li>
              <li>• Preview content in each language before publishing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
