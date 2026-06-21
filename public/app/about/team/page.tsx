import { PageHeader } from '../../components/PageHeader';
import { BackgroundPhotos } from '../../components/BackgroundPhotos';

// Team photos from productions
const teamPhotos = [
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FSwapnomoy%2FIMG_1111.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FJodi%20aar%20ekbar%2FIMG_9073.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fthumbnails%2FAdharmoni%2FIMG_8391.jpg?alt=media',
];

export default function TeamPage() {
  return (
    <main>
      <PageHeader
        eyebrow="About Us"
        title={{ en: 'The Team', bn: 'আমাদের দল', hi: 'हमारी टीम' }}
        description={{
          en: 'A Fusion of Generations - Meet the passionate artists behind Samatat Sanskriti.',
          bn: 'প্রজন্মের সংমিশ্রণ - সমতট সংস্কৃতির পেছনের উৎসাহী শিল্পীদের সাথে পরিচিত হন।',
          hi: 'पीढ़ियों का संगम - समतट संस्कृति के पीछे के जुनूनी कलाकारों से मिलें।'
        }}
        compact
      />

      {/* Introduction */}
      <section className="section section-charcoal section-with-photos">
        <BackgroundPhotos variant="corner" opacity={0.08} position="right" />
        <div className="container max-w-4xl">
          <p className="text-light-gray text-lg leading-relaxed text-center">
            Samatat Sanskriti is a unique family consisting of theatre workers of different ages and backgrounds.
            From founding pioneers to energetic youth, from trained professionals to passionate enthusiasts,
            our team represents the beautiful diversity of community theatre.
          </p>
        </div>
      </section>

      {/* Team Categories */}
      <section className="section section-dark">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* The Pioneers */}
            <div className="card p-8 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `url(${teamPhotos[0]})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
              <div className="relative z-10">
                <div className="text-5xl mb-4">🎭</div>
                <h2 className="text-gold text-2xl mb-4">The Pioneers</h2>
                <p className="text-light-gray leading-relaxed mb-4">
                  The young enthusiasts who founded the group in 1999 are now the senior mentors.
                  Though many are retired or middle-aged, they still find their life-force in the
                  daily activities of the group.
                </p>
                <p className="text-white/80 text-sm italic">
                  &ldquo;Theatre is not what we do, it&apos;s who we are.&rdquo;
                </p>
              </div>
            </div>

            {/* The Youth Brigade */}
            <div className="card p-8 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `url(${teamPhotos[1]})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
              <div className="relative z-10">
                <div className="text-5xl mb-4">⚡</div>
                <h2 className="text-gold text-2xl mb-4">The Youth Brigade</h2>
                <p className="text-light-gray leading-relaxed mb-4">
                  The children who joined our workshops in the early 2000s are today&apos;s visionary youths.
                  They are the backbone of Samatat, now writing scripts, directing plays, and handling
                  the complex logistics of our festivals.
                </p>
                <p className="text-white/80 text-sm italic">
                  From students to leaders, carrying the torch forward.
                </p>
              </div>
            </div>

            {/* The Ageless Enthusiasts */}
            <div className="card p-8 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `url(${teamPhotos[2]})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
              <div className="relative z-10">
                <div className="text-5xl mb-4">✨</div>
                <h2 className="text-gold text-2xl mb-4">The Ageless Enthusiasts</h2>
                <p className="text-light-gray leading-relaxed mb-4">
                  We also attract professionals—teachers, guardians, and office-goers—who &ldquo;refuse to grow up.&rdquo;
                  They join us to experience the intoxicating spirit of theatre, leaving their daily stresses
                  behind to become artists.
                </p>
                <p className="text-white/80 text-sm italic">
                  Age is no barrier when passion drives you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Unites Us */}
      <section className="section section-charcoal">
        <div className="container max-w-4xl">
          <h2 className="text-gold text-3xl mb-8 text-center">What Unites Us</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="text-2xl">❤️</div>
              <div>
                <h3 className="text-white text-lg mb-2">Love for Theatre</h3>
                <p className="text-light-gray">
                  Every member, regardless of age or background, shares an unwavering passion for the stage.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-2xl">🎯</div>
              <div>
                <h3 className="text-white text-lg mb-2">Commitment to Quality</h3>
                <p className="text-light-gray">
                  We believe in putting our best foot forward, whether it&apos;s a small workshop or a major production.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-2xl">🌱</div>
              <div>
                <h3 className="text-white text-lg mb-2">Mentorship Culture</h3>
                <p className="text-light-gray">
                  Senior members actively guide newcomers, ensuring knowledge and traditions are passed on.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-2xl">🤗</div>
              <div>
                <h3 className="text-white text-lg mb-2">Family Spirit</h3>
                <p className="text-light-gray">
                  We celebrate together, support each other through challenges, and treat every member as family.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="section section-dark">
        <div className="container text-center">
          <h2 className="text-gold text-3xl mb-4">Become Part of Our Family</h2>
          <p className="text-light-gray max-w-2xl mx-auto mb-8">
            Whether you want to act, direct, design sets, manage productions, or simply volunteer,
            there&apos;s a place for you at Samatat. No experience necessary—just passion.
          </p>
          <a href="/contact#join" className="btn btn-primary">Join Our Team</a>
        </div>
      </section>
    </main>
  );
}
