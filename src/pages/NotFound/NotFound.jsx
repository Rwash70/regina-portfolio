export default function NotFound() {
  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: 24 }}>
      <h1 style={{ margin: '0 0 8px' }}>Page not found</h1>
      <p>That link doesn’t exist. Try the Projects page.</p>
      <a href='/projects' style={{ color: 'var(--brand)' }}>
        Go to Projects →
      </a>
    </div>
  );
}
