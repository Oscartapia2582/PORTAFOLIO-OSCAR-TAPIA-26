import { useEffect, useRef, useState } from 'react'
import { servicesData } from '../config'

export default function ServicesSection() {
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
      id="servicios"
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        background: '#0a0a0a',
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
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          {servicesData.label}
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
          {servicesData.title.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i < servicesData.title.split('\n').length - 1 && <br />}
            </span>
          ))}
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1px',
          }}
          className="services-grid"
        >
          {servicesData.items.map((service, i) => (
            <div
              key={i}
              style={{
                background: '#111111',
                border: '1px solid rgba(255,255,255,0.06)',
                padding: 'clamp(32px, 4vw, 48px)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: `opacity 0.6s ease ${0.08 * i}s, transform 0.6s ease ${0.08 * i}s`,
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#1a1a1a'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#111111'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
              }}
            >
              {/* Icon placeholder — geometric */}
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  marginBottom: '20px',
                  position: 'relative',
                }}
              >
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="4" width="18" height="18" rx="1" fill="rgba(255,255,255,0.15)" />
                  <rect x="26" y="4" width="18" height="18" rx="1" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
                  <rect x="4" y="26" width="18" height="18" rx="1" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
                  <rect x="26" y="26" width="18" height="18" rx="1" fill="rgba(255,255,255,0.08)" />
                </svg>
              </div>

              <div
                className="font-geist-mono"
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  letterSpacing: '-0.01em',
                  marginBottom: '12px',
                }}
              >
                {service.title}
              </div>
              <div
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.55)',
                  lineHeight: 1.6,
                  fontFamily: '"Inter", sans-serif',
                }}
              >
                {service.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
