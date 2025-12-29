'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { PageHeader } from '../components/PageHeader';
import { BackgroundPhotos } from '../components/BackgroundPhotos';
import { useLanguage } from '../components/LanguageSwitcher';
import { ProductionGalleryModal } from '../components/ProductionGalleryModal';
import { productions, Production } from '../../lib/productionsData';

// Get unique categories for filtering
const allCategories = Array.from(new Set(productions.map(p => p.category.en)));

export default function ProductionsPage() {
  const lang = useLanguage();
  const [selectedProduction, setSelectedProduction] = useState<Production | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter productions based on category and search
  const filteredProductions = useMemo(() => {
    return productions.filter(prod => {
      const matchesCategory = selectedCategory === 'All' || prod.category.en === selectedCategory;
      const matchesSearch = searchQuery === '' ||
        prod.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.description.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (prod.playwright?.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Stats
  const totalPhotos = productions.reduce((sum, p) => sum + p.photoCount, 0);

  return (
    <main className="min-h-screen bg-charcoal">
      <PageHeader
        eyebrow="Our Work"
        title={{ en: 'Theatre Productions', bn: 'থিয়েটার প্রযোজনা', hi: 'थिएटर प्रोडक्शन' }}
        description={{
          en: '150+ original productions since 1999, bringing meaningful stories to life',
          bn: '১৯৯৯ সাল থেকে ১৫০+ মৌলিক প্রযোজনা, অর্থবহ গল্পকে জীবন্ত করে তুলছে',
          hi: '1999 से 150+ मूल प्रोडक्शन, सार्थक कहानियों को जीवंत करते हुए'
        }}
        compact
      />

      {/* Search and Filter Section */}
      <section className="section section-charcoal pt-8 pb-4">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-light-gray/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search productions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white placeholder-light-gray/50 focus:border-gold/50 focus:outline-none transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setSelectedCategory('All')}
                className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all ${
                  selectedCategory === 'All'
                    ? 'bg-gold text-black'
                    : 'bg-white/5 text-light-gray hover:bg-white/10'
                }`}
              >
                All ({productions.length})
              </button>
              {allCategories.slice(0, 6).map(cat => {
                const count = productions.filter(p => p.category.en === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all ${
                      selectedCategory === cat
                        ? 'bg-gold text-black'
                        : 'bg-white/5 text-light-gray hover:bg-white/10'
                    }`}
                  >
                    {cat} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results count */}
          <p className="text-light-gray/60 text-sm mb-6">
            Showing {filteredProductions.length} production{filteredProductions.length !== 1 ? 's' : ''}
            {searchQuery && ` for "${searchQuery}"`}
          </p>
        </div>
      </section>

      {/* Production Gallery */}
      <section className="section section-charcoal pt-0">
        <div className="container">
          {filteredProductions.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🎭</div>
              <p className="text-light-gray text-lg">No productions found matching your criteria</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="mt-4 text-gold hover:text-gold-light transition-colors"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredProductions.map((prod) => {
                const title = lang === 'bn' && prod.titleBn ? prod.titleBn :
                             lang === 'hi' && prod.titleHi ? prod.titleHi :
                             prod.title;

                return (
                  <div
                    key={prod.id}
                    className="group relative bg-black/40 rounded-xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-gold/10 cursor-pointer"
                    onClick={() => setSelectedProduction(prod)}
                  >
                    {/* Image Container */}
                    <div className="aspect-[16/10] overflow-hidden relative">
                      <img
                        src={prod.thumbnailUrl}
                        alt={prod.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80" />

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-gold/90 text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                          {prod.category[lang]}
                        </span>
                      </div>

                      {/* Photo Count Badge */}
                      <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {prod.photoCount}
                      </div>

                      {/* Video indicator */}
                      {prod.youtubeVideoId && (
                        <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-red-600/90 text-white text-xs px-2 py-1 rounded-full">
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                          Video
                        </div>
                      )}

                      {/* Hover overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                        <div className="bg-gold text-black px-4 py-2 rounded-full font-medium text-sm flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          View Gallery
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 md:p-6">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-xl font-light text-white group-hover:text-gold transition-colors">
                          {title}
                        </h3>
                        {prod.year && (
                          <span className="text-light-gray/50 text-sm flex-shrink-0">{prod.year}</span>
                        )}
                      </div>

                      {prod.playwright && (
                        <p className="text-gold/70 text-xs mb-2">by {prod.playwright}</p>
                      )}

                      <p className="text-light-gray/70 text-sm leading-relaxed line-clamp-2">
                        {prod.description[lang]}
                      </p>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute inset-0 border border-white/5 rounded-xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gold transition-all duration-500 group-hover:w-full" />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Stats/Legacy */}
      <section className="section section-dark text-center">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { n: productions.length.toString(), l: 'Archived Productions' },
              { n: '26', l: 'Years' },
              { n: totalPhotos.toString(), l: 'Photos' },
              { n: '50K+', l: 'Audience' }
            ].map((s, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-light text-gold mb-2">{s.n}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-light-gray/60">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section section-charcoal relative overflow-hidden">
        <BackgroundPhotos variant="corner" opacity={0.05} position="right" />
        <div className="container max-w-4xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">Our Production Philosophy</h2>
            <p className="text-light-gray text-lg leading-relaxed">
              At Samatat, we bridge the gap between "Star Theatre" and "Pure Theatre."
              Our goal is to cultivate an audience that appreciates the art form for its
              craft, story, and direction rather than just famous faces.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { icon: '📖', label: 'Story First', desc: 'Narrative excellence' },
              { icon: '👥', label: 'Ensemble', desc: 'Collaborative art' },
              { icon: '🎬', label: 'Technical', desc: 'Production quality' },
              { icon: '🌿', label: 'Roots', desc: 'Cultural heritage' }
            ].map((item, i) => (
              <div key={i} className="text-center p-4 rounded-lg bg-black/20 border border-white/5 hover:border-gold/20 transition-colors">
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-gold text-sm font-medium uppercase tracking-wider">{item.label}</div>
                <div className="text-light-gray/50 text-xs mt-1">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Productions Highlight */}
      <section className="section section-charcoal">
        <div className="container">
          <h2 className="section-title text-center mb-12">Featured Highlights</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Most Photos */}
            <div
              className="group bg-gradient-to-br from-gold/10 to-transparent rounded-2xl p-6 border border-gold/20 cursor-pointer hover:border-gold/40 transition-colors"
              onClick={() => setSelectedProduction(productions.find(p => p.id === 'saatmar-palawan') || null)}
            >
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                  <img
                    src={productions.find(p => p.id === 'saatmar-palawan')?.thumbnailUrl}
                    alt="Saatmar Palawan"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-gold text-xs uppercase tracking-widest mb-1">Most Photographed</div>
                  <h3 className="text-xl text-white group-hover:text-gold transition-colors">Saatmar Palawan</h3>
                  <p className="text-light-gray/60 text-sm">147 photos from this epic production</p>
                </div>
              </div>
            </div>

            {/* Classic Tagore */}
            <div
              className="group bg-gradient-to-br from-burgundy/20 to-transparent rounded-2xl p-6 border border-burgundy/30 cursor-pointer hover:border-burgundy/50 transition-colors"
              onClick={() => setSelectedProduction(productions.find(p => p.id === 'bisarjan') || null)}
            >
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                  <img
                    src={productions.find(p => p.id === 'bisarjan')?.thumbnailUrl}
                    alt="Bisarjan"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-burgundy text-xs uppercase tracking-widest mb-1">Tagore Classic</div>
                  <h3 className="text-xl text-white group-hover:text-gold transition-colors">Bisarjan</h3>
                  <p className="text-light-gray/60 text-sm">Rabindranath Tagore's masterpiece</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-charcoal text-center border-t border-white/5">
        <div className="container max-w-2xl">
          <h2 className="text-3xl font-light text-white mb-6">Want to See Us Live?</h2>
          <p className="text-light-gray mb-10">
            Check out our upcoming shows and festivals to experience Samatat theatre in person.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/shows" className="btn btn-primary px-10">
              Upcoming Shows
            </Link>
            <Link href="/festivals" className="btn btn-secondary px-10">
              Our Festivals
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Modal */}
      {selectedProduction && (
        <ProductionGalleryModal
          production={selectedProduction}
          isOpen={!!selectedProduction}
          onClose={() => setSelectedProduction(null)}
        />
      )}
    </main>
  );
}
