import { PageHeader } from '../../components/PageHeader';
import { BackgroundPhotos } from '../../components/BackgroundPhotos';

export default function VisionPage() {
  return (
    <main>
      <PageHeader
        eyebrow="About Us"
        title={{ en: 'Vision & Mission', bn: 'দৃষ্টি ও লক্ষ্য', hi: 'विजन और मिशन' }}
        description={{
          en: 'Theatre is not just entertainment; it is a mirror to society.',
          bn: 'নাট্য শুধু বিনোদন নয়; এটি সমাজের দর্পণ।',
          hi: 'रंगमंच सिर्फ मनोरंजन नहीं है; यह समाज का दर्पण है।'
        }}
      />

      {/* Our Philosophy */}
      <section className="section section-charcoal section-with-photos">
        <BackgroundPhotos variant="side" position="right" opacity={0.1} />
        <div className="container max-w-4xl">
          <h2 className="text-gold text-3xl mb-6">Our Philosophy</h2>
          <p className="text-light-gray leading-relaxed text-lg mb-6">
            We believe that theatre is not just entertainment; it is a mirror to society. In an era dominated
            by screens, we strive to keep the visceral, &ldquo;live&rdquo; connection of theatre alive.
          </p>
          <blockquote className="border-l-4 border-gold pl-6 py-4 my-8 bg-black/30 rounded-r-lg">
            <p className="text-white text-xl italic mb-2">
              Our vision is to bridge the gap between &ldquo;Star Theatre&rdquo; and &ldquo;Pure Theatre&rdquo;
            </p>
            <p className="text-light-gray">
              Cultivating an audience that appreciates the art form for its craft, story, and direction
              rather than just famous faces.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section section-dark">
        <div className="container">
          <h2 className="text-gold text-3xl mb-10 text-center">Mission Statement</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-8 border-t-4 border-gold">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl text-white mb-4">To Nurture</h3>
              <p className="text-light-gray leading-relaxed">
                Act as a &ldquo;nursery&rdquo; for the theatre industry, training actors, writers, and technicians
                who sustain the professional Bengali stage. We believe in developing talent from the grassroots,
                nurturing young artists who will carry forward the tradition.
              </p>
            </div>

            <div className="card p-8 border-t-4 border-gold">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl text-white mb-4">To Support</h3>
              <p className="text-light-gray leading-relaxed">
                Use our platform to aid the theatre community. A significant portion of our festival proceeds
                goes to a <span className="text-gold">Welfare Fund</span> for distressed and ill theatre workers,
                ensuring no artist is left behind in times of need.
              </p>
            </div>

            <div className="card p-8 border-t-4 border-gold">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-xl text-white mb-4">To Sustain</h3>
              <p className="text-light-gray leading-relaxed">
                Keep the rich tradition of group theatre alive in the suburbs, proving that high-quality
                productions are not exclusive to the metropolis. Theatre belongs to every community,
                and quality art can flourish anywhere.
              </p>
            </div>

            <div className="card p-8 border-t-4 border-gold">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl text-white mb-4">To Educate</h3>
              <p className="text-light-gray leading-relaxed">
                Continue our work in &ldquo;Theatre in Education,&rdquo; ensuring a constant flow of children
                and students into the cultural fold. Through workshops and school programs, we plant the seeds
                of artistic appreciation in young minds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section section-charcoal">
        <div className="container max-w-4xl">
          <h2 className="text-gold text-3xl mb-8 text-center">Core Values</h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-gold mt-2.5 flex-shrink-0" />
              <div>
                <h3 className="text-white text-lg mb-2">Artistic Integrity</h3>
                <p className="text-light-gray">
                  We prioritize the quality of storytelling and craft over commercial considerations.
                  Every production is a labor of love, created with dedication to the art form.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-gold mt-2.5 flex-shrink-0" />
              <div>
                <h3 className="text-white text-lg mb-2">Community First</h3>
                <p className="text-light-gray">
                  Theatre is a communal experience. We believe in building bridges between artists and audiences,
                  creating a space where everyone feels welcome and engaged.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-gold mt-2.5 flex-shrink-0" />
              <div>
                <h3 className="text-white text-lg mb-2">Cultural Preservation</h3>
                <p className="text-light-gray">
                  While embracing innovation, we remain rooted in the rich traditions of Bengali theatre.
                  We are custodians of a cultural heritage that must be passed on to future generations.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-gold mt-2.5 flex-shrink-0" />
              <div>
                <h3 className="text-white text-lg mb-2">Inclusive Excellence</h3>
                <p className="text-light-gray">
                  Theatre is for everyone. We welcome participants from all backgrounds, ages, and experience levels,
                  believing that diverse perspectives enrich our art.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
