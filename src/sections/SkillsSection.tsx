import { useEffect, useRef, useState } from 'react'
import { skillsData } from '../config'

function SkillBar({ name, percentage, index, visible }: { name: string; percentage: number; index: number; visible: boolean }) {
  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(15px)',
        transition: `opacity 0.5s ease ${0.1 * index}s, transform 0.5s ease ${0.1 * index}s`,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '8px',
        }}
      >
        <span
          className="font-mono-data"
          style={{
            fontSize: '0.8rem',
            color: 'rgba(255,255,255,0.7)',
            letterSpacing: '0.05em',
          }}
        >
          {name}
        </span>
        <span
          className="font-mono-data"
          style={{
            fontSize: '0.75rem',
            color: 'rgba(255,255,255,0.5)',
          }}
        >
          {percentage}%
        </span>
      </div>
      <div
        style={{
          width: '100%',
          height: '4px',
          background: 'rgba(255,255,255,0.08)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '100%',
            background: '#ffffff',
            width: visible ? `${percentage}%` : '0%',
            transition: `width 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 * index}s`,
          }}
        />
      </div>
    </div>
  )
}

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 },
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="habilidades"
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        background: '#000000',
        zIndex: 2,
        padding: 'clamp(80px, 15vh, 160px) clamp(24px, 6vw, 80px)',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Label */}
        <div
          className="font-mono-data"
          style={{
            fontSize: '0.65rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.4)',
            marginBottom: '24px',
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.7s ease',
          }}
        >
          {skillsData.label}
        </div>

        {/* Title */}
        <div
          className="font-geist-mono"
          style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 500,
            letterSpacing: '-0.02em',
            color: '#ffffff',
            lineHeight: 1.15,
            marginBottom: '60px',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
          }}
        >
          {skillsData.title.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i < skillsData.title.split('\n').length - 1 && <br />}
            </span>
          ))}
        </div>

        {/* Skills Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px 80px',
          }}
          className="skills-grid"
        >
          {skillsData.items.map((skill, i) => (
            <SkillBar
              key={i}
              name={skill.name}
              percentage={skill.percentage}
              index={i}
              visible={visible}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
