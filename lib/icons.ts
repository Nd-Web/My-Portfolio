// Shared technology icon map used across Skills and Projects components

export const techIcons: Record<string, string> = {
  // Backend
  'Node.js': '\u2B21',
  'Express': '\uD83D\uDE82',
  'Supabase': '\uD83D\uDFE2',
  'PostgreSQL': '\uD83D\uDC18',
  'REST APIs': '\uD83D\uDD0C',
  'MongoDB': '\uD83C\uDF43',
  'Redis': '\uD83D\uDD34',
  'WebSocket': '\uD83D\uDD0C',
  'Socket.io': '\uD83D\uDD0C',
  'GraphQL': '\uD83D\uDCC8',
  // Frontend
  'React': '\u269B\uFE0F',
  'Next.js': '\u25B2',
  'Tailwind CSS': '\uD83C\uDFA8',
  'Tailwind': '\uD83C\uDFA8',
  'TypeScript': '\uD83D\uDCD8',
  'JavaScript': '\uD83D\uDCDC',
  'Framer Motion': '\uD83C\uDFAC',
  // AI & Tools
  'OpenAI API': '\uD83E\uDDE0',
  'OpenAI': '\uD83E\uDDE0',
  'Vapi': '\uD83C\uDFA4',
  'LangChain': '\u26D3\uFE0F',
  'Vector DBs': '\uD83D\uDCCA',
  'Prompt Engineering': '\u2728',
  'Stripe API': '\uD83D\uDCB3',
  // DevOps & Other
  'Git': '\uD83D\uDCE6',
  'Docker': '\uD83D\uDC33',
  'AWS': '\u2601\uFE0F',
  'CI/CD': '\uD83D\uDD04',
  'Linux': '\uD83D\uDC27',
  'Python': '\uD83D\uDC0D',
};

// Fallback icon for unknown technologies
export const defaultTechIcon = '\uD83D\uDCE6';