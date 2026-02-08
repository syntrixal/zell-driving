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
      "Practical advice on observation, speed control, and decision making to help you feel calmer and more in control behind the wheel.",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=500&fit=crop",
    content:
      "Learning to drive is a big milestone, and it’s completely normal to feel nervous at first. Focus on building strong foundations: a comfortable driving position, smooth clutch control, and calm observation. Break each skill into small, repeatable steps rather than trying to master everything at once.\n\nWork closely with your instructor to identify the situations that make you most anxious, whether that’s roundabouts, busy junctions, or hill starts. Gradually increase the difficulty of your routes instead of jumping straight into the most challenging roads. Confidence comes from repetition, feedback, and feeling safe in the car.\n\nFinally, remember that every confident driver you see on the road was once a beginner too. Progress might feel slow from one lesson to the next, but over time these small improvements add up to a big change in how you feel behind the wheel.",
    date: "2026-01-12",
  },
  {
    slug: "how-to-pass-your-driving-test-first-time",
    title: "How to Prepare and Pass Your Driving Test on the First Attempt",
    excerpt:
      "A clear, structured approach to test preparation so you arrive on the day feeling calm, focused, and ready.",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=500&fit=crop",
    content:
      "Passing your driving test first time isn’t about luck—it’s about preparation and consistency. Start by agreeing a realistic test-ready date with your instructor. Rushing to book before you’re ready usually leads to more stress and extra costs later.\n\nUse mock tests to mirror the real experience: no coaching, independent driving, and feedback only at the end. Treat any faults as data, not failure. Together with your instructor, turn that feedback into a focused practice plan for the next few lessons.\n\nIn the final week, prioritise rest and routine. Drive the kinds of routes you’re likely to see on test, but don’t over‑cram. On the day, arrive early, bring your licence, and remember: the examiner wants you to pass—they’re simply checking that you’re safe and consistent on your own.",
    date: "2026-01-05",
  },
  {
    slug: "manual-vs-automatic-which-is-right-for-you",
    title: "Manual vs Automatic: Which Type of Driving Lessons Should You Choose?",
    excerpt:
      "Unsure whether to learn in a manual or automatic car? We break down the pros and cons so you can choose with confidence.",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=500&fit=crop",
    content:
      "Choosing between manual and automatic driving lessons depends on how and where you plan to drive. Manual gives you a fully flexible licence, allowing you to drive both manual and automatic cars once you pass. It can also be useful if you expect to drive older vehicles or travel to countries where manuals are more common.\n\nAutomatic lessons remove the complexity of clutch control and gear changes, letting you focus more on observations, positioning, and planning. Many learners find this reduces stress and helps them progress more quickly, especially in busy town and city driving.\n\nThere’s no right or wrong choice—only the one that best matches your lifestyle. If you’re unsure, speak with your instructor about your goals, budget, and timeline. Together, you can decide which route will get you confidently and safely on the road.",
    date: "2025-12-18",
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

