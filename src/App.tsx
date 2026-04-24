import { useEffect, useState } from 'react';
import type React from 'react';
import { ThumbsUp, MessageCircle, Repeat2, Send, Globe, ArrowLeft, Copy, Check, Shuffle, Sparkles, MoreHorizontal, Dices } from 'lucide-react';

const C = {
  bg: '#f4f2ee',
  cardBg: '#ffffff',
  border: '#e0dfdc',
  text: '#191919',
  muted: '#666666',
  mutedLight: '#8a8a8a',
  linkedin: '#0a66c2',
  linkedinDark: '#004182',
  subtleBlue: '#eef3f8',
  hoverBg: '#f3f2ef',
};

const UI_FONT = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

const stories = [
  {
    id: 'acquisition',
    title: 'The Acquisition Announcement',
    emoji: '🏆',
    blurb: 'The earnest founder selling their baby',
    persona: {
      name: 'Brayden Chen',
      initial: 'B',
      avatarBg: '#0a66c2',
      headline: 'Founder & CEO | 3x Exits | Dreamer | Husband | Father of 4 🙏',
    },
    prompts: [
      { id: 'num1', label: 'Number of years', examples: ['11', '9', '14', '7', '23', '4'] },
      { id: 'startup1', label: 'Your startup name', examples: ['Blorpify', 'Snorpflux', 'Datazorb', 'Clouderly', 'Yonkify', 'Zingle'] },
      { id: 'room1', label: 'Room in a house', examples: ['garage', 'kitchen', 'basement', 'attic', 'mudroom', 'walk-in closet'] },
      { id: 'bigco1', label: 'Big tech company', examples: ['Microsoft', 'Google', 'Oracle', 'Salesforce', 'Adobe', 'IBM'] },
      { id: 'food1', label: 'Sad dinner food', examples: ['cold beans', 'instant ramen', 'a raw potato', 'plain toast', 'ketchup on rice', 'dry oatmeal'] },
      { id: 'num2', label: 'Number of days', examples: ['47', '92', '31', '68', '15', '104'] },
      { id: 'car1', label: 'Type of car', examples: ['2008 Civic', 'rusted-out minivan', 'leased Corolla', '1997 Ford Taurus', 'Prius with 240k miles', 'company Hertz rental'] },
      { id: 'verb1', label: 'A verb', examples: ['persevere', 'pivot', 'grind', 'manifest', 'execute', 'compound'] },
      { id: 'plNoun1', label: 'Plural noun', examples: ['feelings', 'relationships', 'boundaries', 'vibes', 'spreadsheets', 'customer tickets'] },
      { id: 'jobTitle1', label: 'A profession', examples: ['dentist', 'accountant', 'life coach', 'CrossFit instructor', 'UX designer', 'sommelier'] },
      { id: 'time1', label: 'An hour (1–12)', examples: ['3', '4', '5', '2', '6', '1'] },
      { id: 'adj1', label: 'Adjective', examples: ['valid', 'beautiful', 'brave', 'luminous', 'sacred', 'unstoppable'] },
      { id: 'buzz1', label: 'One-word buzzword', examples: ['grit', 'hustle', 'execution', 'founderlife', 'bootstrapped', 'neverquit'] },
    ],
    template: `I have an announcement. 🙏

{num1} years ago, I started {startup1} from my {room1} with nothing but a laptop and a dream.

Today, I'm proud to share that we've been acquired by {bigco1}. 🚀

The journey wasn't easy.

There were nights I ate {food1} for dinner {num2} days in a row.

There were mornings I cried in my {car1}.

But we never gave up.

Why?

Because when you believe in something, you don't quit.

You {verb1}.

Three lessons I learned building this company:

1. {plNoun1} are everything.
2. Never trust a {jobTitle1}.
3. The best ideas come at {time1} AM.

To anyone doubting themselves tonight: your dream is {adj1}. Keep going.

Agree?

♻️ Repost if this resonates.

#blessed #founderjourney #{buzz1}`
  },
  {
    id: 'uberdriver',
    title: 'The Uber Driver Philosopher',
    emoji: '🚗',
    blurb: 'A stranger changed my life forever',
    persona: {
      name: 'Chad Worthington III',
      initial: 'C',
      avatarBg: '#10457a',
      headline: 'CEO | Keynote Speaker | Forbes Contributor | Father | Lifelong Learner 🧠',
    },
    prompts: [
      { id: 'name1', label: 'A first name', examples: ['Dmitri', 'Rafael', 'Bartholomew', 'Tevin', 'Kenji', 'Oluwaseun'] },
      { id: 'num1', label: 'Number of years', examples: ['23', '17', '31', '9', '42', '14'] },
      { id: 'time1', label: 'Early hour', examples: ['5', '6', '4', '7', '3', '8'] },
      { id: 'adj1', label: 'Adjective', examples: ['hardest', 'truest', 'rawest', 'most sacred', 'most profound', 'most underrated'] },
      { id: 'verb1', label: 'A verb', examples: ['build', 'paint', 'carry', 'climb', 'forge', 'finish'] },
      { id: 'noun1', label: 'A noun', examples: ['house', 'cathedral', 'bridge', 'legacy', 'sandwich', 'empire'] },
      { id: 'plNoun1', label: 'Plural noun', examples: ['hammers', 'bricks', 'pencils', 'receipts', 'timesheets', 'dreams'] },
      { id: 'num2', label: 'Number', examples: ['14', '7', '22', '3', '45', '11'] },
      { id: 'bigco1', label: 'Big tech company', examples: ['Google', 'Meta', 'Apple', 'Amazon', 'Stripe', 'Goldman'] },
      { id: 'num3', label: 'Tip percentage', examples: ['4000', '800', '250', '1500', '10000', '500'] },
      { id: 'adj2', label: 'Adjective', examples: ['reluctant', 'modern-day', 'accidental', 'pocket-sized', 'blue-collar', 'working-class'] },
      { id: 'jobTitle1', label: 'A profession', examples: ['priest', 'therapist', 'philosopher', 'sensei', 'life coach', 'monk'] },
      { id: 'buzz1', label: 'One-word buzzword', examples: ['wisdom', 'humanity', 'authenticity', 'presence', 'empathy', 'gratitude'] },
    ],
    template: `I had a conversation with my Uber driver this morning that changed my life.

Let me explain.

His name was {name1}.

He'd been driving Ubers for {num1} years.

At {time1} AM, as we drove through the city, I asked him the question I ask every driver:

"What's the {adj1} thing you've ever learned?"

He paused.

He looked at me in the rearview mirror.

And said something I will never forget:

"You can't {verb1} a {noun1} if you're still holding the {plNoun1}."

Let that sink in. 🤯

I sat in silence for the next {num2} minutes.

When we arrived at {bigco1} HQ, I tipped him {num3}%.

As I got out of the car, I realized:

{name1} wasn't just an Uber driver.

He was a {adj2} philosopher.

He was, in many ways, a {jobTitle1}.

We need to rethink how we value people in this society.

What's the most profound thing a stranger has ever told you?

↓ Comments are open.

#leadership #humanity #{buzz1}`
  },
  {
    id: 'firing',
    title: 'I Had to Let Someone Go Today',
    emoji: '💼',
    blurb: 'A hard truth about compassionate leadership',
    persona: {
      name: 'Morgan Steele',
      initial: 'M',
      avatarBg: '#7c3aed',
      headline: 'Operator | Builder | Hard Truth Teller | #1 Voice in Leadership | She/Her',
    },
    prompts: [
      { id: 'name1', label: 'A first name', examples: ['Karen', 'Ashleigh', 'Becky', 'Muffy', 'Tiffany', 'Chardonnay'] },
      { id: 'num1', label: 'Number of years', examples: ['8', '4', '12', '6', '2', '15'] },
      { id: 'adj1', label: 'Positive adjective', examples: ['stellar', 'exceptional', 'radiant', 'indispensable', 'award-winning', 'top-performing'] },
      { id: 'startup1', label: 'Your startup name', examples: ['Zorpify', 'Blargle', 'Synergos', 'Vibrance', 'Lumenly', 'Optimizr'] },
      { id: 'pastVerb1', label: 'Past-tense verb', examples: ['whispered', 'microwaved', 'flossed', 'laminated', 'reheated', 'juggled'] },
      { id: 'noun1', label: 'A mundane object', examples: ['bagel', 'tuna sandwich', 'Tupperware', 'pair of clogs', 'stapler', 'keyboard'] },
      { id: 'adj2', label: 'Adjective', examples: ['radical', 'profound', 'revolutionary', 'silent', 'uncomfortable', 'transformational'] },
      { id: 'noun2', label: 'A possession', examples: ['succulent', 'ergonomic mouse', 'motivational poster', 'desk plant', 'lumbar pillow', 'diffuser'] },
      { id: 'adj3', label: 'Adjective', examples: ['quiet', 'teary', 'unmistakable', 'grateful', 'reluctant', 'feral'] },
      { id: 'adj4', label: 'Adjective', examples: ['respected', 'feared', 'effective', 'correct', 'legendary', 'remembered'] },
    ],
    template: `I fired an employee today.

I'm going to get hate for this post.

I don't care.

Her name was {name1}.

She'd been with us for {num1} years.

She was, by all measures, a {adj1} employee.

But yesterday, she did something I cannot tolerate at {startup1}:

She {pastVerb1} a {noun1} during a team meeting.

Letting her go wasn't easy.

She cried.

I cried.

My executive coach cried (over Zoom).

But here's the thing: firing someone is an act of {adj2} love.

You're setting them free. ✨

As she packed her {noun2} into a cardboard box, I gave her a hug and whispered:

"{name1}, one day you will thank me for this."

She didn't respond.

But I could see it in her eyes.

The {adj3} respect.

Leadership isn't about being liked.

It's about being {adj4}.

↓ Thoughts?

#leadership #hardtruths #accountability`
  },
  {
    id: 'morningroutine',
    title: 'My 4 AM Morning Routine',
    emoji: '⏰',
    blurb: 'Why most of you will stay mediocre',
    persona: {
      name: 'Brock Maximus',
      initial: 'B',
      avatarBg: '#dc2626',
      headline: '5AM Club | Performance Coach | Biohacker | Alpha Mindset | Ex-Goldman 💪',
    },
    prompts: [
      { id: 'time1', label: 'Early hour (1–5)', examples: ['4', '3', '5', '2', '4', '1'] },
      { id: 'plNoun1', label: 'Plural noun (flattering)', examples: ['winners', 'champions', 'alphas', 'operators', 'executors', 'killers'] },
      { id: 'plNoun2', label: 'Plural noun (insult)', examples: ['losers', 'NPCs', 'betas', 'mortals', 'slackers', 'quitters'] },
      { id: 'num1', label: 'Number of oz', examples: ['32', '64', '16', '48', '24', '128'] },
      { id: 'liquid1', label: 'A weird liquid', examples: ['bone broth', 'raw goat milk', 'sea salt water', 'ionized rainwater', 'bee propolis', 'liver juice'] },
      { id: 'room1', label: 'Room in a house', examples: ['kitchen', 'garage', 'basement', 'backyard shed', 'guest bathroom', 'walk-in closet'] },
      { id: 'verbIng1', label: 'Activity ending in -ing', examples: ['screaming', 'journaling', 'cold-plunging', 'shadowboxing', 'affirming', 'visualizing'] },
      { id: 'num2', label: 'Number of minutes', examples: ['90', '45', '120', '60', '30', '180'] },
      { id: 'num3', label: 'Number', examples: ['17', '12', '9', '24', '6', '33'] },
      { id: 'plNoun3', label: 'Plural food item', examples: ['egg yolks', 'raw oysters', 'almonds', 'sardines', 'blueberries', 'liver cubes'] },
      { id: 'fam1', label: 'Family member', examples: ['wife', 'husband', 'kids', 'newborn', 'au pair', 'dog'] },
      { id: 'adj1', label: 'Insulting adjective', examples: ['average', 'mediocre', 'soft', 'comfortable', 'broke', 'ordinary'] },
      { id: 'buzz1', label: 'Buzzword', examples: ['alpha', 'discipline', 'dominance', 'optimization', 'biohack', 'sigma'] },
    ],
    template: `People ask me why I wake up at {time1} AM every single day.

The answer is simple.

Because {plNoun1} don't sleep. 🔥

Here's my non-negotiable morning routine that unlocked my true potential:

{time1}:00 AM — Wake up. No snooze. Snoozing is for {plNoun2}.

+5 min — Drink {num1} oz of {liquid1}.

+15 min — Cold plunge in my {room1}.

+30 min — {verbIng1} for exactly {num2} minutes straight.

+90 min — Eat {num3} raw {plNoun3}.

+3 hrs — Finally wake up my {fam1}.

This routine changed my life.

It can change yours too.

But most of you won't do it.

That's why most of you will stay {adj1}.

Save this post. ↓

#hustle #mindset #{buzz1}`
  },
  {
    id: 'rejection',
    title: 'They Rejected Me. I Bought Them.',
    emoji: '📜',
    blurb: '25 years in the making',
    persona: {
      name: 'Priya Anand',
      initial: 'P',
      avatarBg: '#059669',
      headline: 'Founder & CEO | Forbes 30 Under 30 (2008) | Keynote Speaker | Author of "Rise"',
    },
    prompts: [
      { id: 'bigco1', label: 'Big tech company', examples: ['Oracle', 'IBM', 'Deloitte', 'Goldman', 'McKinsey', 'Boeing'] },
      { id: 'adj1', label: 'Adjective', examples: ['qualified', 'experienced', 'polished', 'corporate', 'credentialed', 'serious'] },
      { id: 'field1', label: 'Academic field', examples: ['puppetry', 'marine biology', 'medieval literature', 'improv comedy', 'basket weaving', 'beekeeping'] },
      { id: 'num1', label: 'Number of years', examples: ['25', '19', '33', '12', '47', '8'] },
      { id: 'verb1', label: 'A verb', examples: ['weep', 'smile', 'smirk', 'flex', 'meditate', 'scream'] },
      { id: 'num2', label: 'Big number', examples: ['847', '1200', '230', '4100', '62', '9000'] },
      { id: 'name1', label: 'A name', examples: ['Geoffrey', 'Gerald', 'Cornelius', 'Reginald', 'Blake', 'Bradford'] },
      { id: 'word1', label: 'A single word statement', examples: ['Remember?', 'Oops.', 'Anyway.', 'Cute.', 'Namaste.', 'Well?'] },
      { id: 'plNoun1', label: 'Plural noun', examples: ['croissants', 'LaCroix', 'kombucha bottles', 'matcha lattes', 'overnight oats', 'poke bowls'] },
      { id: 'adj3', label: 'Adjective', examples: ['worthy', 'enough', 'ready', 'destined', 'chosen', 'main-character'] },
      { id: 'noun1', label: 'A noun', examples: ['gift', 'blessing', 'lesson', 'redirection', 'plot twist', 'runway'] },
      { id: 'buzz1', label: 'Buzzword', examples: ['resilience', 'fullcircle', 'poetic', 'cosmic', 'vindication', 'karma'] },
    ],
    template: `25 years ago, I was rejected from {bigco1}.

I still have the letter.

It said I wasn't {adj1} enough.

It said my background in {field1} wasn't "relevant."

I framed that letter.

It has hung above my desk for {num1} years.

Every morning, I look at it and I {verb1}.

Yesterday, I signed the paperwork to acquire {bigco1} for \${num2} million dollars.

The first thing I did?

I walked into their boardroom.

I set the framed rejection letter on the mahogany table.

I looked at the executives — including the very person who had rejected me all those years ago, {name1} — and I said one word.

"{word1}"

Just that.

{name1} started crying.

So did I.

So did the intern who was bringing in {plNoun1}.

Never let anyone tell you that you're not {adj3} enough.

Every rejection is a {noun1} in disguise.

↓ Tag someone who needs to see this today.

#neverquit #fullcircle #{buzz1}`
  },
];

type Story = (typeof stories)[number];
type Answers = Record<string, string>;
type Screen = 'picker' | 'form' | 'reveal';

const rand = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
const pickOne = <T,>(arr: readonly T[]): T => arr[Math.floor(Math.random() * arr.length)];
const genEngagement = () => ({
  likes: rand(847, 14800),
  comments: rand(120, 890),
  reposts: rand(45, 620),
  hours: rand(1, 8),
});

const randomAnswersFor = (s: Story): Answers => {
  const fill: Answers = {};
  s.prompts.forEach(p => { fill[p.id] = pickOne(p.examples); });
  return fill;
};

function useIsMobile() {
  const [m, setM] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(max-width: 640px)').matches
  );
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)');
    const fn = (e: MediaQueryListEvent) => setM(e.matches);
    mq.addEventListener('change', fn);
    return () => mq.removeEventListener('change', fn);
  }, []);
  return m;
}

export default function App() {
  const isMobile = useIsMobile();
  const [screen, setScreen] = useState<Screen>('picker');
  const [story, setStory] = useState<Story | null>(null);
  const [answers, setAnswers] = useState<Answers>({});
  const [copied, setCopied] = useState(false);
  const [engagement, setEngagement] = useState({ likes: 0, comments: 0, reposts: 0, hours: 2 });

  const filled = story ? story.prompts.filter(p => (answers[p.id] || '').trim()).length : 0;
  const total = story ? story.prompts.length : 0;
  const allDone = story && filled === total;

  const pick = (s: Story) => {
    setStory(s);
    setAnswers({});
    setScreen('form');
  };

  const back = () => {
    setScreen('picker');
    setStory(null);
    setAnswers({});
  };

  const reveal = () => {
    setEngagement(genEngagement());
    setScreen('reveal');
  };

  const fillExamples = () => {
    if (!story) return;
    setAnswers(randomAnswersFor(story));
  };

  const reshuffle = () => {
    if (!story) return;
    setAnswers(randomAnswersFor(story));
    setEngagement(genEngagement());
  };

  const plainPost = () => {
    if (!story) return '';
    return story.template.replace(/\{([^}]+)\}/g, (_, id) => (answers[id] || '').trim() || '___');
  };

  const copyPost = async () => {
    try {
      await navigator.clipboard.writeText(plainPost());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error(e);
    }
  };

  const renderPost = () => {
    if (!story) return null;
    const parts = story.template.split(/(\{[^}]+\})/g);
    return parts.map((part, i) => {
      const m = part.match(/^\{([^}]+)\}$/);
      if (m) {
        const word = (answers[m[1]] || '').trim() || '______';
        return <span key={i} style={{ fontWeight: 700 }}>{word}</span>;
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: C.bg,
      color: C.text,
      fontFamily: UI_FONT,
      padding: isMobile ? '20px 12px' : '32px 16px',
    }}>
      <div style={{ maxWidth: 680, margin: '0 auto' }}>

        {/* Header */}
        <header style={{ textAlign: 'center', marginBottom: isMobile ? 20 : 28 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            padding: '4px 10px',
            background: C.linkedin,
            color: 'white',
            borderRadius: 20,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: 14,
          }}>
            <Sparkles size={12} /> Thought Leader Pro™
          </div>
          <h1 style={{
            fontSize: isMobile ? 28 : 38,
            fontWeight: 800,
            margin: 0,
            letterSpacing: '-0.02em',
            lineHeight: 1.05,
            color: C.text,
          }}>
            The LinkedIn Post Generator
          </h1>
          <p style={{
            fontSize: isMobile ? 14 : 15,
            color: C.muted,
            marginTop: 10,
            marginBottom: 0,
          }}>
            Become a thought leader in 60 seconds. No experience required.
          </p>
        </header>

        {/* PICKER SCREEN */}
        {screen === 'picker' && (
          <div>
            <div style={{
              fontSize: 13,
              fontWeight: 600,
              color: C.muted,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: 10,
              paddingLeft: 4,
            }}>
              Choose a post template
            </div>
            <div style={{ display: 'grid', gap: 10 }}>
              {stories.map((s) => (
                <button
                  key={s.id}
                  onClick={() => pick(s)}
                  style={{
                    textAlign: 'left',
                    background: C.cardBg,
                    border: `1px solid ${C.border}`,
                    borderRadius: 8,
                    padding: '16px 18px',
                    cursor: 'pointer',
                    fontFamily: UI_FONT,
                    color: C.text,
                    transition: 'border-color 0.15s, box-shadow 0.15s, transform 0.1s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14,
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = C.linkedin;
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(10, 102, 194, 0.1)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = C.border;
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    width: 44, height: 44, borderRadius: 8,
                    background: C.subtleBlue,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 22, flexShrink: 0,
                  }}>
                    {s.emoji}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 2 }}>{s.title}</div>
                    <div style={{ fontSize: 13, color: C.muted, fontStyle: 'italic' }}>"{s.blurb}"</div>
                  </div>
                  <div style={{ fontSize: 11, color: C.mutedLight, whiteSpace: 'nowrap', fontWeight: 500 }}>
                    {s.prompts.length} fields
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* FORM SCREEN */}
        {screen === 'form' && story && (
          <div>
            <button
              onClick={back}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: UI_FONT, fontSize: 14, fontWeight: 600,
                color: C.linkedin, padding: '6px 8px', marginBottom: 12, marginLeft: -8,
                display: 'flex', alignItems: 'center', gap: 4,
                borderRadius: 4,
              }}
            >
              <ArrowLeft size={16} /> All templates
            </button>

            <div style={{
              background: C.cardBg,
              border: `1px solid ${C.border}`,
              borderRadius: 8,
              padding: isMobile ? '20px 18px' : '24px 28px',
            }}>
              <h2 style={{ fontSize: isMobile ? 20 : 22, fontWeight: 700, margin: 0, marginBottom: 4 }}>
                {story.emoji} {story.title}
              </h2>
              <div style={{ fontSize: 13, color: C.muted, marginBottom: 20 }}>
                Fill in the blanks. Don't peek at the post yet.
              </div>

              {/* Progress */}
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                fontSize: 12, color: C.muted, marginBottom: 6, fontWeight: 600,
              }}>
                <span>Progress</span>
                <span>{filled} / {total}</span>
              </div>
              <div style={{
                height: 6, background: C.hoverBg, borderRadius: 3, overflow: 'hidden', marginBottom: 24,
              }}>
                <div style={{
                  height: '100%',
                  width: `${total ? (filled / total) * 100 : 0}%`,
                  background: C.linkedin,
                  transition: 'width 0.2s',
                }} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(200px, 1fr))', gap: '14px 16px' }}>
                {story.prompts.map((p, i) => (
                  <div key={p.id}>
                    <label style={{
                      display: 'block',
                      fontSize: 12,
                      fontWeight: 600,
                      color: C.text,
                      marginBottom: 4,
                    }}>
                      {i + 1}. {p.label}
                    </label>
                    <input
                      type="text"
                      value={answers[p.id] || ''}
                      onChange={e => setAnswers(prev => ({ ...prev, [p.id]: e.target.value }))}
                      placeholder={`e.g. ${p.examples[0]}`}
                      style={{
                        width: '100%',
                        padding: '8px 10px',
                        background: 'white',
                        border: `1px solid ${C.border}`,
                        borderRadius: 4,
                        fontFamily: UI_FONT,
                        fontSize: 14,
                        color: C.text,
                        outline: 'none',
                        boxSizing: 'border-box',
                        transition: 'border-color 0.1s, box-shadow 0.1s',
                      }}
                      onFocus={e => {
                        e.target.style.borderColor = C.linkedin;
                        e.target.style.boxShadow = `0 0 0 1px ${C.linkedin}`;
                      }}
                      onBlur={e => {
                        e.target.style.borderColor = C.border;
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: 10, marginTop: 28, flexWrap: 'wrap' }}>
                <button
                  onClick={reveal}
                  disabled={!allDone}
                  style={{
                    flex: '1 1 auto',
                    padding: '10px 20px',
                    background: allDone ? C.linkedin : C.border,
                    color: allDone ? 'white' : C.mutedLight,
                    border: 'none',
                    borderRadius: 24,
                    fontFamily: UI_FONT,
                    fontSize: 15,
                    fontWeight: 700,
                    cursor: allDone ? 'pointer' : 'not-allowed',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                    transition: 'background 0.1s',
                  }}
                  onMouseEnter={e => { if (allDone) e.currentTarget.style.background = C.linkedinDark; }}
                  onMouseLeave={e => { if (allDone) e.currentTarget.style.background = C.linkedin; }}
                >
                  <Sparkles size={16} />
                  {allDone ? 'Publish post' : `Fill ${total - filled} more to continue`}
                </button>
                <button
                  onClick={fillExamples}
                  style={{
                    padding: '10px 18px',
                    background: 'transparent',
                    color: C.linkedin,
                    border: `1.5px solid ${C.linkedin}`,
                    borderRadius: 24,
                    fontFamily: UI_FONT,
                    fontSize: 14,
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex', alignItems: 'center', gap: 6,
                  }}
                >
                  <Shuffle size={14} /> Use examples
                </button>
              </div>
            </div>
          </div>
        )}

        {/* REVEAL SCREEN */}
        {screen === 'reveal' && story && (
          <div>
            <button
              onClick={back}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: UI_FONT, fontSize: 14, fontWeight: 600,
                color: C.linkedin, padding: '6px 8px', marginBottom: 12, marginLeft: -8,
                display: 'flex', alignItems: 'center', gap: 4,
              }}
            >
              <ArrowLeft size={16} /> All templates
            </button>

            {/* LinkedIn post card */}
            <div style={{
              background: C.cardBg,
              border: `1px solid ${C.border}`,
              borderRadius: 8,
              overflow: 'hidden',
              boxShadow: '0 0 0 1px rgba(0,0,0,0.03)',
            }}>
              {/* Post header */}
              <div style={{ padding: '12px 16px 0', display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: story.persona.avatarBg,
                  color: 'white',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 22, fontWeight: 700,
                  flexShrink: 0,
                }}>
                  {story.persona.initial}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: C.text, display: 'flex', alignItems: 'center', gap: 6 }}>
                    {story.persona.name}
                    <span style={{ fontSize: 12, fontWeight: 400, color: C.muted }}>• 1st</span>
                  </div>
                  <div style={{ fontSize: 12, color: C.muted, lineHeight: 1.3, marginTop: 1 }}>
                    {story.persona.headline}
                  </div>
                  <div style={{ fontSize: 12, color: C.muted, display: 'flex', alignItems: 'center', gap: 3, marginTop: 2 }}>
                    {engagement.hours}h • <Globe size={11} />
                  </div>
                </div>
                <MoreHorizontal size={20} color={C.muted} style={{ flexShrink: 0, marginTop: 6 }} />
              </div>

              {/* Post body */}
              <div style={{
                padding: '12px 16px',
                fontSize: 14,
                lineHeight: 1.5,
                whiteSpace: 'pre-wrap',
                color: C.text,
              }}>
                {renderPost()}
              </div>

              {/* Engagement counts */}
              <div style={{
                padding: '8px 16px',
                display: 'flex', alignItems: 'center',
                fontSize: 12, color: C.muted,
                borderTop: `1px solid ${C.border}`,
              }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <ReactionBubble bg="#0a66c2" icon="👍" />
                  <ReactionBubble bg="#df704d" icon="❤️" offset />
                  <ReactionBubble bg="#6dae4f" icon="🎉" offset />
                  <span style={{ marginLeft: 6 }}>{engagement.likes.toLocaleString()}</span>
                </div>
                <span style={{ marginLeft: 'auto' }}>
                  {engagement.comments} comments · {engagement.reposts} reposts
                </span>
              </div>

              {/* Action bar */}
              <div style={{
                display: 'flex',
                padding: '4px 8px',
                borderTop: `1px solid ${C.border}`,
              }}>
                <ActionBtn icon={<ThumbsUp size={18} />} label="Like" />
                <ActionBtn icon={<MessageCircle size={18} />} label="Comment" />
                <ActionBtn icon={<Repeat2 size={18} />} label="Repost" />
                <ActionBtn icon={<Send size={18} />} label="Send" />
              </div>
            </div>

            {/* Actions below the post */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 16 }}>
              <button
                onClick={copyPost}
                style={{
                  width: '100%',
                  padding: '14px 20px',
                  background: copied ? '#057642' : C.linkedin,
                  color: 'white',
                  border: 'none',
                  borderRadius: 28,
                  fontFamily: UI_FONT,
                  fontSize: 16,
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  transition: 'background 0.15s',
                }}
                onMouseEnter={e => { if (!copied) e.currentTarget.style.background = C.linkedinDark; }}
                onMouseLeave={e => { if (!copied) e.currentTarget.style.background = C.linkedin; }}
              >
                {copied ? <><Check size={18} /> Copied to clipboard</> : <><Copy size={18} /> Copy post</>}
              </button>
              <div style={{ display: 'flex', gap: 10, flexDirection: isMobile ? 'column' : 'row' }}>
                <button
                  onClick={reshuffle}
                  style={{
                    flex: '1 1 auto',
                    padding: '10px 18px',
                    background: 'transparent',
                    color: C.linkedin,
                    border: `1.5px solid ${C.linkedin}`,
                    borderRadius: 24,
                    fontFamily: UI_FONT,
                    fontSize: 14,
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  }}
                >
                  <Dices size={16} /> Reshuffle words
                </button>
                <button
                  onClick={back}
                  style={{
                    flex: '1 1 auto',
                    padding: '10px 18px',
                    background: 'transparent',
                    color: C.muted,
                    border: `1.5px solid ${C.border}`,
                    borderRadius: 24,
                    fontFamily: UI_FONT,
                    fontSize: 14,
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  }}
                >
                  <Sparkles size={14} /> New template
                </button>
              </div>
            </div>
          </div>
        )}

        <footer style={{
          textAlign: 'center',
          marginTop: 36,
          fontSize: 11,
          color: C.mutedLight,
          letterSpacing: '0.04em',
        }}>
          Not affiliated with LinkedIn. They wouldn't have us.
        </footer>

      </div>
    </div>
  );
}

function ReactionBubble({ bg, icon, offset }: { bg: string; icon: string; offset?: boolean }) {
  return (
    <span style={{
      width: 18, height: 18, borderRadius: '50%',
      background: bg,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 10,
      border: '1.5px solid white',
      marginLeft: offset ? -5 : 0,
    }}>
      {icon}
    </span>
  );
}

function ActionBtn({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button
      style={{
        flex: 1,
        padding: '10px 4px',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        fontFamily: UI_FONT,
        fontSize: 14,
        fontWeight: 600,
        color: C.muted,
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
        borderRadius: 4,
        transition: 'background 0.1s',
      }}
      onMouseEnter={e => e.currentTarget.style.background = C.hoverBg}
      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
