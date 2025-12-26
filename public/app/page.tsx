'use client';

import Link from 'next/link';
import { T } from './components/TranslatedContent';
import { homeContent } from '../lib/content';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="container hero-content py-32 md:py-40">
          <p className="hero-eyebrow">
            <T content={homeContent.hero.eyebrow} />
          </p>
          <h1 className="hero-title">
            <T content={homeContent.hero.title} />
          </h1>
          <p className="hero-subtitle">
            <T content={homeContent.hero.subtitle} />
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="#whats-on" className="btn btn-primary">
              <T content={homeContent.hero.cta1} />
            </Link>
            <Link href="#about" className="btn btn-secondary">
              <T content={homeContent.hero.cta2} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="section-charcoal py-16">
        <div className="container">
          <div className="stat-grid">
            <div className="stat-item">
              <div className="stat-number"><T content={homeContent.stats.years} /></div>
              <div className="stat-label"><T content={homeContent.stats.yearsLabel} /></div>
            </div>
            <div className="stat-item">
              <div className="stat-number"><T content={homeContent.stats.productions} /></div>
              <div className="stat-label"><T content={homeContent.stats.productionsLabel} /></div>
            </div>
            <div className="stat-item">
              <div className="stat-number"><T content={homeContent.stats.festivals} /></div>
              <div className="stat-label"><T content={homeContent.stats.festivalsLabel} /></div>
            </div>
            <div className="stat-item">
              <div className="stat-number"><T content={homeContent.stats.workshops} /></div>
              <div className="stat-label"><T content={homeContent.stats.workshopsLabel} /></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Production */}
      <section id="whats-on" className="section section-dark">
        <div className="container">
          <div className="featured-banner" style={{ backgroundColor: '#1a1a1a' }}>
            <div className="image-placeholder absolute inset-0 flex items-center justify-center text-8xl opacity-20">
              <span>Theatre</span>
            </div>
            <div className="featured-content">
              <p className="section-eyebrow mb-4">
                <T content={homeContent.featured.eyebrow} />
              </p>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-2">
                <T content={homeContent.featured.title} />
              </h2>
              <p className="text-gold text-lg mb-4">
                <T content={homeContent.featured.author} />
              </p>
              <p className="text-gray max-w-2xl mb-6 leading-relaxed">
                <T content={homeContent.featured.description} />
              </p>
              <div className="flex flex-wrap items-center gap-6 mb-6 text-sm text-gray">
                <span><T content={homeContent.featured.dates} /></span>
                <span className="hidden sm:inline">|</span>
                <span><T content={homeContent.featured.venue} /></span>
              </div>
              <Link href="/shows" className="btn btn-primary">
                <T content={homeContent.featured.cta} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow"><T content={homeContent.upcoming.eyebrow} /></p>
            <h2 className="section-title"><T content={homeContent.upcoming.title} /></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {homeContent.upcoming.events.map((event, index) => (
              <article key={index} className="card">
                <div className="card-image image-placeholder">
                  <span className="text-4xl">
                    {event.type.en === 'Workshop' ? 'W' : event.type.en === 'Production' ? 'P' : 'F'}
                  </span>
                </div>
                <div className="card-content">
                  <p className="card-eyebrow"><T content={event.type} /></p>
                  <h3 className="card-title"><T content={event.title} /></h3>
                  <p className="card-description"><T content={event.description} /></p>
                  <div className="card-meta">
                    <span><T content={event.date} /></span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/shows" className="btn-text">
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="section section-charcoal">
        <div className="container max-w-4xl">
          <blockquote className="quote">
            <p className="quote-text">
              &ldquo;<T content={homeContent.quote.text} />&rdquo;
            </p>
            <footer className="quote-author">
              <strong><T content={homeContent.quote.author} /></strong>
              <span className="mx-2">—</span>
              <T content={homeContent.quote.role} />
            </footer>
          </blockquote>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section section-dark">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-eyebrow"><T content={homeContent.about.eyebrow} /></p>
              <h2 className="section-title mb-6"><T content={homeContent.about.title} /></h2>
              <p className="text-lg text-gray leading-relaxed mb-6">
                <T content={homeContent.about.description} />
              </p>
              <p className="text-gray leading-relaxed mb-6">
                <T content={homeContent.about.paragraph1} />
              </p>
              <p className="text-gray leading-relaxed mb-8">
                <T content={homeContent.about.paragraph2} />
              </p>
              <Link href="/about" className="btn-text">
                <T content={homeContent.about.cta} />
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className="aspect-[4/5] bg-charcoal rounded image-placeholder">
                <span className="text-6xl opacity-30">SS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section section-charcoal">
        <div className="container">
          <div className="section-header text-center max-w-2xl mx-auto">
            <p className="section-eyebrow"><T content={homeContent.programs.eyebrow} /></p>
            <h2 className="section-title"><T content={homeContent.programs.title} /></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {homeContent.programs.items.map((program, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center mx-auto mb-6 text-gold text-2xl font-light">
                  {index + 1}
                </div>
                <h3 className="text-xl font-medium text-white mb-3">
                  <T content={program.title} />
                </h3>
                <p className="text-gray text-sm leading-relaxed">
                  <T content={program.description} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-dark">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-6">
              <T content={homeContent.cta.title} />
            </h2>
            <p className="section-description mx-auto mb-10">
              <T content={homeContent.cta.description} />
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn btn-primary">
                <T content={homeContent.cta.button1} />
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                <T content={homeContent.cta.button2} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
