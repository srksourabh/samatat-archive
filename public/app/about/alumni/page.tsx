import { PageHeader } from '../../components/PageHeader';
import { BackgroundPhotos } from '../../components/BackgroundPhotos';

// Alumni data
const creativeLeaders = [
  {
    name: 'Anuran Basuroy',
    role: 'Script Writer & Director',
    description: 'Once a student in our junior workshops, now a creative engine of Samatat, writing original scripts and directing major productions.',
  },
  {
    name: 'Soumyodev Bhui',
    role: 'Script Writer & Director',
    description: 'Started as a workshop participant, now leads creative direction for multiple productions.',
  },
  {
    name: 'Subhadip Sadhukha',
    role: 'Script Writer & Director',
    description: 'From child actor to accomplished playwright and director.',
  },
  {
    name: 'Rakhi Kundu',
    role: 'Script Writer & Director',
    description: 'A journey from student to creative leader, now shaping the artistic vision of Samatat.',
  },
];

const groupFounders = [
  {
    name: 'Subhojit Pal',
    achievement: 'Founded independent theatre group',
    description: 'Taking lessons learned at Samatat to build new theatrical communities.',
  },
  {
    name: 'Sujay Pal',
    achievement: 'Founded independent theatre group',
    description: 'Spreading the spirit of community theatre beyond Uttarpara.',
  },
  {
    name: 'Souma Balial',
    achievement: 'Founded independent theatre group',
    description: 'Carrying forward the tradition of grassroots theatre.',
  },
];

const technicalProfessionals = [
  {
    name: 'Sanjoy Pal',
    role: 'Professional Makeup Artist',
    description: 'Working with various prominent theatre groups in Kolkata.',
  },
  {
    name: 'Sadhan Parui',
    role: 'Light Designer & Operator',
    description: 'Started with us in primary school; today a sought-after technician for multiple professional troupes.',
  },
  {
    name: 'Somnath (Somar)',
    role: 'Light Board Operator',
    description: 'Established himself as a professional in the technical theatre industry.',
  },
  {
    name: 'Sougato Mitra (Bhanu)',
    role: 'Makeup Artist & Administrator',
    description: 'Currently at Rabindra Bharati University, serving the professional theatre community.',
  },
];

export default function AlumniPage() {
  return (
    <main>
      <PageHeader
        eyebrow="About Us"
        title={{ en: 'Alumni Success Stories', bn: 'প্রাক্তন সদস্যদের সাফল্যের গল্প', hi: 'पूर्व छात्र सफलता की कहानियां' }}
        description={{
          en: 'Jobs of the Stars - From workshop students to industry professionals',
          bn: 'তারকাদের কাজ - কর্মশালার শিক্ষার্থী থেকে শিল্প পেশাদার',
          hi: 'सितारों की नौकरियां - कार्यशाला के छात्रों से उद्योग पेशेवरों तक'
        }}
      />

      {/* Introduction */}
      <section className="section section-charcoal section-with-photos">
        <BackgroundPhotos variant="corner" opacity={0.08} position="right" />
        <div className="container max-w-4xl">
          <p className="text-light-gray text-lg leading-relaxed text-center mb-6">
            Samatat takes immense pride in being a launchpad for professional careers. Many of our students
            who started in Class 3 or 4 have grown into established &ldquo;stars&rdquo; of the theatre industry,
            working in critical specialized roles.
          </p>
          <p className="text-gold text-center italic">
            &ldquo;From the stage of Samatat to the stages of Kolkata and beyond.&rdquo;
          </p>
        </div>
      </section>

      {/* Creative Leaders */}
      <section className="section section-dark">
        <div className="container">
          <h2 className="text-gold text-3xl mb-8 text-center">Creative Leaders</h2>
          <p className="text-light-gray text-center mb-10 max-w-2xl mx-auto">
            These alumni are now the creative engines of Samatat and beyond, writing original scripts and directing major productions.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {creativeLeaders.map((person) => (
              <div key={person.name} className="card p-6 text-center border border-gold/20 hover:border-gold/40 transition-colors">
                <div className="w-20 h-20 rounded-full bg-gold/20 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🎬</span>
                </div>
                <h3 className="text-white text-lg mb-1">{person.name}</h3>
                <p className="text-gold text-sm mb-3">{person.role}</p>
                <p className="text-light-gray text-sm">{person.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Group Founders */}
      <section className="section section-charcoal">
        <div className="container">
          <h2 className="text-gold text-3xl mb-8 text-center">Theatre Group Founders</h2>
          <p className="text-light-gray text-center mb-10 max-w-2xl mx-auto">
            Taking the lessons of organization and art learned here, these alumni have successfully founded their own independent theatre groups.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {groupFounders.map((person) => (
              <div key={person.name} className="card p-6 border-t-4 border-gold">
                <div className="text-3xl mb-4">🏛️</div>
                <h3 className="text-white text-xl mb-2">{person.name}</h3>
                <p className="text-gold text-sm mb-3">{person.achievement}</p>
                <p className="text-light-gray">{person.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Professionals */}
      <section className="section section-dark">
        <div className="container">
          <h2 className="text-gold text-3xl mb-8 text-center">Technical Professionals</h2>
          <p className="text-light-gray text-center mb-10 max-w-2xl mx-auto">
            Behind every great production are technical experts. These alumni now work professionally in makeup, lighting, and production management.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalProfessionals.map((person) => (
              <div key={person.name} className="card p-6">
                <div className="text-3xl mb-4">🎭</div>
                <h3 className="text-white text-lg mb-1">{person.name}</h3>
                <p className="text-gold text-sm mb-3">{person.role}</p>
                <p className="text-light-gray text-sm">{person.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="section section-charcoal">
        <div className="container max-w-3xl text-center">
          <blockquote className="text-2xl text-white italic mb-6">
            &ldquo;The best measure of our success is not the applause at the end of a show,
            but the careers and lives we have helped shape.&rdquo;
          </blockquote>
          <p className="text-light-gray">
            These are just a few of the many success stories from Samatat. Every year, our workshops
            and productions continue to nurture new talent, creating the next generation of theatre professionals.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-dark">
        <div className="container text-center">
          <h2 className="text-gold text-3xl mb-4">Start Your Journey</h2>
          <p className="text-light-gray max-w-2xl mx-auto mb-8">
            Every alumni story began with a first step. Whether you dream of being on stage or behind it,
            your journey with Samatat could be the beginning of your professional career.
          </p>
          <a href="/workshops" className="btn btn-primary">Explore Our Workshops</a>
        </div>
      </section>
    </main>
  );
}
