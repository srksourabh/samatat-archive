import { PageHeader } from '../../components/PageHeader';

export default function PresidentPage() {
  return (
    <main>
      <PageHeader eyebrow="About Us" title={{ en: "President's Message", bn: 'সভাপতির বার্তা', hi: 'अध्यक्ष का संदेश' }} description={{ en: 'A message from our President.', bn: 'আমাদের সভাপতির কাছ থেকে একটি বার্তা।', hi: 'हमारे अध्यक्ष का संदेश।' }} />
      <section className="section section-charcoal">
        <div className="container max-w-4xl">
          <div className="quote">
            <p className="quote-text">&ldquo;Theatre has the power to transform lives and communities. At Samatat Sanskriti, we are committed to keeping this tradition alive while embracing new forms of artistic expression.&rdquo;</p>
            <footer className="quote-author"><strong>President, Samatat Sanskriti</strong></footer>
          </div>
        </div>
      </section>
    </main>
  );
}
