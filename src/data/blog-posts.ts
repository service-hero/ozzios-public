// Blog post metadata for SEO head() functions.
// Full content and rendering data stays in the view components.

export type BlogPostMeta = {
  id: string
  title: string
  excerpt: string
  image: string
  date: string
  authorName: string
}

const blogPostsMeta: Record<string, BlogPostMeta> = {
  '22-ai-agents-home-service': {
    id: '22-ai-agents-home-service',
    title: 'I Run a Home Service Company. Here\'s Why I Built 22 AI Agents to Run the Back Office.',
    excerpt: '$4,500/month. That\'s the average overhead small home service businesses spend on marketing and admin. After years of watching jobs slip through the cracks while teams struggled to keep up, I stopped pretending the model wasn\'t broken.',
    image: '/images/blog-post-22-ai-agents-replace-agency.png',
    date: 'February 17, 2025',
    authorName: 'Garrett Elmore',
  },
  'gohighlevel-integration': {
    id: 'gohighlevel-integration',
    title: 'OzziOS Now Integrates with GoHighLevel: Supercharge Your CRM with AI',
    excerpt: 'Connect your GoHighLevel account to OzziOS and let AI agents manage contacts, automate follow-ups, and sync data across your entire business operations—all without leaving the platform.',
    image: '/images/ghl_ozzi_integrated_blog_post.jpg',
    date: 'February 2, 2025',
    authorName: 'Garrett Elmore',
  },
  'future-of-home-service-work': {
    id: 'future-of-home-service-work',
    title: 'The Future of Home Service Businesses: Why AI Employees Are Inevitable',
    excerpt: 'The traditional service business model is broken. Hiring costs $15-25K per employee, training takes months, and your best people leave—taking institutional knowledge with them. Here\'s how AI changes everything.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&h=900&fit=crop&auto=format',
    date: 'December 28, 2024',
    authorName: 'Garrett Elmore',
  },
  'replace-8-tools': {
    id: 'replace-8-tools',
    title: 'How We Replaced 8 Business Tools with One Platform',
    excerpt: 'Mailchimp, Hootsuite, SEMrush, Asana—we cancelled them all. Here\'s how consolidation saved us $2,400/month.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=900&fit=crop&auto=format',
    date: 'December 22, 2024',
    authorName: 'Garrett Elmore',
  },
  'ai-seo-strategy': {
    id: 'ai-seo-strategy',
    title: 'AI-Powered SEO: A Complete Strategy Guide for 2025',
    excerpt: 'Keyword research, technical audits, content optimization—all automated. Learn how AI agents handle SEO at scale.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop&auto=format',
    date: 'December 18, 2024',
    authorName: 'Garrett Elmore',
  },
  'scaling-without-hiring': {
    id: 'scaling-without-hiring',
    title: 'Scaling Your Service Business Without Adding Headcount',
    excerpt: 'We grew from $50K to $200K MRR with the same team size. The secret? AI employees that work 24/7.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=900&fit=crop&auto=format',
    date: 'December 15, 2024',
    authorName: 'Garrett Elmore',
  },
  'content-automation': {
    id: 'content-automation',
    title: 'Content Creation at Scale: From 4 Posts to 40 Per Week',
    excerpt: 'Our AI Content Writer generates blog posts, social content, and email campaigns—all in your brand voice.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=900&fit=crop&auto=format',
    date: 'December 10, 2024',
    authorName: 'Garrett Elmore',
  },
  'customer-reporting-automation': {
    id: 'customer-reporting-automation',
    title: 'Automated Customer Reports That Actually Impress',
    excerpt: 'Stop spending Sundays building reports. Our AI generates interactive dashboards customers can explore themselves.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&h=900&fit=crop&auto=format',
    date: 'December 5, 2024',
    authorName: 'Garrett Elmore',
  },
  'goodbye-overhead': {
    id: 'goodbye-overhead',
    title: 'Why We Stopped Outsourcing Our Marketing (And Never Looked Back)',
    excerpt: '$8K/month for work we couldn\'t see. Now we own the AI—full transparency, better results, fraction of the cost.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&h=900&fit=crop&auto=format',
    date: 'November 28, 2024',
    authorName: 'Garrett Elmore',
  },
}

export function getPostMeta(id: string): BlogPostMeta | undefined {
  return blogPostsMeta[id]
}
