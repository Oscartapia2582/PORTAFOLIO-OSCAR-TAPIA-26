import { useEffect, useRef, useState } from 'react'
import { testimonialsData } from '../config'

export default function TestimonialsSection() {
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
      id="testimonios"
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
            transition: 'opacity 0.7s ease',
          }}
        >
          {testimonialsData.label}
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
          {testimonialsData.title.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i < testimonialsData.title.split('\n').length - 1 && <br />}
            </span>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}
          className="testimonials-grid"
        >
          {testimonialsData.items.map((item, i) => (
            <div
              key={i}
              style={{
                background: '#111111',
                border: '1px solid rgba(255,255,255,0.06)',
                padding: 'clamp(32px, 3vw, 40px)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: `opacity 0.7s ease ${0.15 * i}s, transform 0.7s ease ${0.15 * i}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
              }}
            >
              {/* Quote mark */}
              <div
                className="font-geist-mono"
                style={{
                  fontSize: '3rem',
                  color: 'rgba(255,255,255,0.1)',
                  lineHeight: 1,
                  marginBottom: '16px',
                  userSelect: 'none',
                }}
              >
                &ldquo;
              </div>

              {/* Quote text */}
              <p
                style={{
                  fontSize: '1rem',
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.75)',
                  lineHeight: 1.7,
                  fontFamily: '"Inter", sans-serif',
                  fontStyle: 'italic',
                  margin: 0,
                }}
              >
                {item.quote}
              </p>

              {/* Separator */}
              <div
                style={{
                  width: '100%',
                  height: '1px',
                  background: 'rgba(255,255,255,0.08)',
                  margin: '24px 0',
                }}
              />

              {/* Name */}
              <div
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  fontFamily: '"Inter", sans-serif',
                  marginBottom: '4px',
                }}
              >
                {item.name}
              </div>

              {/* Role */}
              <div
                style={{
                  fontSize: '0.8rem',
                  color: 'rgba(255,255,255,0.45)',
                  fontFamily: '"Inter", sans-serif',
                }}
              >
                {item.role}
              </div>

              {/* Stars */}
              <div
                style={{
                  marginTop: '12px',
                  fontSize: '0.9rem',
                  color: '#1c4a96',
                  letterSpacing: '0.15em',
                }}
              >
                {'★'.repeat(item.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
