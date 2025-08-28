export const projects = [
  {
    slug: 'careersnap-job-tracker',
    title: 'CareerSnap — Job Tracker',
    year: 2025,
    stack: ['React', 'Express', 'MongoDB', 'JWT', 'Recharts'],
    summary: 'One-screen pipeline with tagging, reminders, and analytics.',
    problem:
      'Before CareerSnap, candidates tracked applications in messy spreadsheets or kanban boards with inconsistent notes and no reminders.',
    approach:
      'React one-screen layout + CSS Modules; Express API with JWT auth; optimistic updates; lean MongoDB schema for stages/tags/reminders.',
    outcome:
      'Faster entry and fewer missed follow-ups; clear pipeline and lightweight analytics.',
    links: {
      demo: '#',
      repo: 'https://github.com/yourname/careersnap',
    },

    // Add your real numbers here
    evidence: {
      metrics: [
        { label: 'LCP (Desktop)', value: '0.4 s' },
        { label: 'LCP (Mobile)', value: '1.4 s' },
        { label: 'CLS', value: '0' },
        { label: 'FCP (Desktop)', value: '0.3 s' },
        { label: 'FCP (Mobile)', value: '1.4 s' },
        { label: 'TBT', value: '0 ms' },
        { label: 'Speed Index (Desktop)', value: '0.3 s' },
        { label: 'Speed Index (Mobile)', value: '1.4 s' },
        { label: 'Bundle (JS)', value: '92 kB gzip' },
        { label: 'Bundle (CSS)', value: '2.15 kB gzip' },
      ],
      screenshots: [
        {
          src: '/projects/careersnap-before.png',
          caption: 'Before: job tracking in spreadsheets (2020–2025)',
        },
        {
          src: '/projects/careersnap-after.png',
          caption: 'After: CareerSnap one-screen tracker',
        },
      ],
      code: `// Express JWT guard (slice)
import jwt from 'jsonwebtoken'
export function requireAuth(req,res,next){
  const token = req.headers.authorization?.split(' ')[1]
  if(!token) return res.status(401).json({error:'No token'})
  try{
    req.user = jwt.verify(token, process.env.JWT_SECRET)
    next()
  }catch{
    res.status(401).json({error:'Invalid token'})
  }
}`,
    },

    next: [
      'Bulk CSV import/export',
      'Calendar integration for reminders',
      'Saved filters & shareable views',
    ],
    draft: false,
  },
  {
    slug: 'budget-tracker',
    title: 'Budget Tracker',
    year: 2025,
    stack: ['React', 'CSV', 'LocalStorage', 'Recharts'],
    summary: 'Fast expense entry, CSV import/export, and clean charts.',
    problem:
      'Before this tool, users had to track expenses manually in spreadsheets, with no easy way to visualize trends or import/export data.',
    approach:
      'Built with React and Recharts for interactive charts, LocalStorage for persistence, and CSV import/export for easy data migration.',
    outcome:
      'Reduced friction for personal finance tracking; users can log expenses quickly and see instant insights via charts.',
    links: {
      demo: '#',
      repo: 'https://github.com/yourname/budget-tracker',
    },
    evidence: {
      metrics: [
        { label: 'LCP (Desktop)', value: '0.4 s' },
        { label: 'LCP (Mobile)', value: '1.4 s' },
        { label: 'CLS', value: '0' },
        { label: 'FCP (Desktop)', value: '0.3 s' },
        { label: 'FCP (Mobile)', value: '1.4 s' },
        { label: 'TBT', value: '0 ms' },
        { label: 'Speed Index (Desktop)', value: '0.3 s' },
        { label: 'Speed Index (Mobile)', value: '1.4 s' },
        { label: 'Bundle (JS)', value: '92 kB gzip' },
        { label: 'Bundle (CSS)', value: '2.15 kB gzip' },
      ],
      screenshots: [
        {
          src: '/projects/budget-tracker-before.png',
          caption: 'Before: tracking expenses in spreadsheets',
        },
        {
          src: '/projects/budget-tracker-after.png',
          caption: 'After: Budget Tracker with charts and CSV support',
        },
      ],
      code: `// CSV validation (slice)
function validateRow(row) {
  if (!row.date || !row.amount) return false
  if (isNaN(Number(row.amount))) return false
  return true
}`,
    },
    next: [
      'Recurring expense detection',
      'Monthly budget goals with alerts',
      'Cloud sync across devices',
    ],
    draft: false,
  },
  {
    slug: 'verity',
    title: 'Verity App',
    year: 2025,
    stack: ['React', 'Node', 'MongoDB'],
    summary: 'Fact-checking social platform. Coming soon.',
    draft: true, //  hidden for now
  },
];
