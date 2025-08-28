import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip,
} from 'recharts';
import { useEffect, useMemo, useState } from 'react';

// Final values (0–100)
const TARGET = [
  { skill: 'React', value: 90 },
  { skill: 'Node/Express', value: 70 },
  { skill: 'MongoDB', value: 65 },
  { skill: 'CSS/Styling', value: 85 },
  { skill: 'Testing', value: 60 },
  { skill: 'CI/CD', value: 55 },
];

export default function SkillGraph({ height = 260 }) {
  // Safer: guard window and compute once
  const prefersReduced = useMemo(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  // Start from zeros (or final values if reduced motion)
  const [data, setData] = useState(
    TARGET.map((d) => ({ ...d, value: prefersReduced ? d.value : 0 }))
  );

  useEffect(() => {
    if (prefersReduced) return;
    const start = performance.now();
    const duration = 900; // ms
    let raf;

    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      setData(TARGET.map((d) => ({ ...d, value: Math.round(d.value * t) })));
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [prefersReduced]);

  return (
    <div style={{ width: '100%', height }} aria-label='Skill graph'>
      <ResponsiveContainer>
        <RadarChart data={data} outerRadius='90%'>
          <defs>
            <linearGradient id='rg' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='0%' stopColor='var(--brand)' stopOpacity='0.55' />
              <stop offset='100%' stopColor='var(--brand)' stopOpacity='0.20' />
            </linearGradient>
          </defs>

          <PolarGrid stroke='var(--ring)' strokeOpacity={0.25} />
          <PolarAngleAxis
            dataKey='skill'
            tick={{ fill: 'var(--muted)', fontSize: 13 }}
          />
          <PolarRadiusAxis
            angle={30}
            domain={[0, 100]}
            tick={false}
            axisLine={false}
            tickCount={5}
          />

          <Radar
            dataKey='value'
            stroke='var(--brand)'
            strokeWidth={2}
            fill='url(#rg)'
            isAnimationActive={false} // we animate via state
          />

          <Tooltip
            formatter={(v) => [`${v}/100`, 'Level']}
            contentStyle={{
              background: '#0f1115',
              border: '1px solid var(--ring)',
              color: 'var(--text)',
            }}
            cursor={{ stroke: 'var(--ring)', strokeOpacity: 0.2 }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
