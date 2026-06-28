import Link from 'next/link';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: 'building-real-time-apis-with-nodejs',
    title: 'Building Real-Time APIs with Node.js and WebSocket',
    excerpt: 'A deep dive into architecting scalable real-time APIs using Node.js, Socket.io, and Redis pub/sub. Learn patterns for handling thousands of concurrent connections.',
    date: '2026-03-15',
    readTime: '8 min read',
    category: 'Backend',
  },
  {
    slug: 'integrating-openai-into-production-apps',
    title: 'Integrating OpenAI into Production Applications',
    excerpt: 'Practical lessons from shipping AI-powered features: prompt engineering, cost optimization, error handling, and building reliable fallbacks for production workloads.',
    date: '2026-02-28',
    readTime: '6 min read',
    category: 'AI',
  },
  {
    slug: 'supabase-vs-firebase-for-backend-engineers',
    title: 'Supabase vs Firebase: A Backend Engineer\'s Perspective',
    excerpt: 'Comparing Supabase and Firebase across real-world criteria: data modeling, migrations, real-time subscriptions, and self-hosting flexibility for backend-focused teams.',
    date: '2026-01-20',
    readTime: '10 min read',
    category: 'Backend',
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black dark:bg-black animated-gradient">
      <div className="max-w-4xl mx-auto px-6 py-32">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">Blog</span>
        </h1>
        <p className="text-gray-400 text-lg mb-12">
          Thoughts on backend engineering, AI integration, and building scalable systems.
        </p>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-purple-500/50 transition-all duration-300 dark:bg-white/5"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-400 rounded-full border border-purple-500/30">
                  {post.category}
                </span>
                <time className="text-gray-500 text-sm">{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                <span className="text-gray-500 text-sm">{post.readTime}</span>
              </div>
              <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                {post.excerpt}
              </p>
              <div className="mt-4">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-purple-400 text-sm font-medium hover:text-purple-300 transition-colors inline-flex items-center gap-1"
                >
                  Read more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/#contact"
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-white hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </main>
  );
}