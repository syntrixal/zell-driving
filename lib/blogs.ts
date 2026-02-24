export type Blog = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  content: string;
  date: string;
};

const blogs: Blog[] = [
  {
    slug: "essential-driving-tips-for-beginners",
    title: "7 Essential Driving Tips Every Beginner Should Know to Build Confidence",
    excerpt:
      "Practical advice on observation, speed control, and decision making to help you feel calmer and more in control behind the wheel during your automatic driving lessons in Liverpool.",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=500&fit=crop",
    content:
      "Learning to drive is a big milestone, and it's completely normal to feel nervous at first. With automatic driving lessons in Liverpool, you can focus on building strong foundations: a comfortable driving position, smooth control, and calm observation. Break each skill into small, repeatable steps rather than trying to master everything at once.\n\nWork closely with your Zell Driving School instructor to identify the situations that make you most anxious, whether that's roundabouts, busy junctions, or city driving. Gradually increase the difficulty of your routes instead of jumping straight into the most challenging roads. Confidence comes from repetition, feedback, and feeling safe in the car.\n\nFinally, remember that every confident driver you see on the road was once a beginner too. Progress might feel slow from one lesson to the next, but over time these small improvements add up to a big change in how you feel behind the wheel.",
    date: "2026-01-12",
  },
  {
    slug: "how-to-pass-your-driving-test-first-time-liverpool",
    title: "How to Prepare and Pass Your Driving Test on the First Attempt in Liverpool",
    excerpt:
      "A clear, structured approach to test preparation so you arrive on the day feeling calm, focused, and ready. Tips from Liverpool's leading automatic driving school.",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=500&fit=crop",
    content:
      "Passing your driving test first time isn't about luck—it's about preparation and consistency. At Zell Driving School we help you agree a realistic test-ready date with your instructor. Rushing to book before you're ready usually leads to more stress and extra costs later.\n\nUse mock tests to mirror the real experience: no coaching, independent driving, and feedback only at the end. Treat any faults as data, not failure. Together with your instructor, turn that feedback into a focused practice plan for the next few lessons.\n\nIn the final week, prioritise rest and routine. Drive the kinds of routes you're likely to see on test in Liverpool, but don't over-cram. On the day, arrive early, bring your licence, and remember: the examiner wants you to pass—they're simply checking that you're safe and consistent on your own.",
    date: "2026-01-05",
  },
  {
    slug: "why-choose-automatic-driving-lessons-liverpool",
    title: "Why Choose Automatic Driving Lessons in Liverpool",
    excerpt:
      "Learn why more learners in Liverpool are choosing automatic driving lessons. Fewer controls, faster progress, and a stress-free path to your licence with Zell Driving School.",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=500&fit=crop",
    content:
      "Automatic driving lessons in Liverpool let you focus on what matters most: observations, positioning, and planning. Without clutch and gear changes, many learners find they progress more quickly and feel less stressed, especially in busy city driving.\n\nZell Driving School specialises in automatic driving lessons across Liverpool. Our DVSA-approved instructors use modern automatic vehicles so you can build confidence in a comfortable, consistent environment. Whether you're a complete beginner or switching from manual, we'll tailor your lessons to your pace.\n\nIf you're looking for an automatic driving school in Liverpool that puts your progress first, get in touch. We cover all Liverpool areas and offer flexible booking to suit your schedule.",
    date: "2025-12-18",
  },
  {
    slug: "best-areas-for-driving-lessons-liverpool",
    title: "Best Areas for Driving Lessons in Liverpool: Where We Cover",
    excerpt:
      "Zell Driving School covers Liverpool and surrounding areas. Find out where we offer automatic driving lessons and convenient pick-ups for learners.",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=500&fit=crop",
    content:
      "We offer automatic driving lessons across Liverpool and the surrounding region. Our instructors know the local test routes and busy streets, so you get relevant, real-world practice from your first lesson.\n\nWe provide pick-ups from your home, work, or a agreed location within our coverage area. That means less travel time and more time behind the wheel. Our automatic driving school Liverpool service is designed to be convenient and flexible.\n\nWhether you're in the city centre or the suburbs, we're here to help you pass your test and become a confident, safe driver. Contact Zell Driving School to check coverage for your postcode and book your first automatic driving lesson in Liverpool.",
    date: "2025-12-10",
  },
  {
    slug: "what-to-expect-first-automatic-driving-lesson",
    title: "What to Expect on Your First Automatic Driving Lesson in Liverpool",
    excerpt:
      "Your first automatic driving lesson with Zell Driving School: from introductions to getting behind the wheel. A clear guide for Liverpool learners.",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=500&fit=crop",
    content:
      "Your first automatic driving lesson in Liverpool is all about feeling comfortable and safe. Your Zell Driving School instructor will introduce themselves, explain how the lesson will run, and answer any questions before you set off.\n\nIn an automatic car there's no clutch or gear stick to worry about—you'll focus on the pedals, steering, and mirrors. Many learners are surprised how quickly they feel at ease. We'll start in a quiet area where you can get used to the controls before moving to busier roads when you're ready.\n\nWe recommend bringing your provisional licence and wearing comfortable shoes. There's no pressure to perform; the first lesson is about building a solid foundation for your automatic driving journey in Liverpool.",
    date: "2025-12-01",
  },
  {
    slug: "automatic-driving-school-liverpool-guide",
    title: "Your Guide to Choosing an Automatic Driving School in Liverpool",
    excerpt:
      "How to pick the right automatic driving school in Liverpool: what to look for, questions to ask, and why Zell Driving School is the choice for many Liverpool learners.",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=500&fit=crop",
    content:
      "Choosing an automatic driving school in Liverpool can feel overwhelming. Look for a school that specialises in automatic lessons, uses modern dual-control cars, and has DVSA-approved instructors who are patient and clear.\n\nAt Zell Driving School we focus only on automatic driving lessons in Liverpool. That means our instructors and lesson plans are tailored to automatic learners, so you get the most out of every hour. We offer flexible scheduling, transparent pricing, and pick-ups across Liverpool.\n\nWhen you're ready to learn automatic driving in Liverpool, get in touch. We'll match you with an instructor and get you started on the road to your full licence.",
    date: "2025-11-20",
  },
];

export function getAllBlogs(): Blog[] {
  // Newest first
  return [...blogs].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getBlogBySlug(slug: string): Blog | undefined {
  return blogs.find((b) => b.slug === slug);
}

export function getAllBlogSlugs() {
  return blogs.map((b) => ({ slug: b.slug }));
}
