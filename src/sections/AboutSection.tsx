import { useEffect, useRef, useState } from 'react'
import { aboutData } from '../config'

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.2 },
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="sobre-mi"
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        background: '#000000',
        zIndex: 2,
        padding: 'clamp(80px, 15vh, 160px) clamp(24px, 6vw, 80px)',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(40px, 6vw, 80px)',
          alignItems: 'center',
        }}
        className="about-grid"
      >
        {/* Photo Column */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(-30px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          <div
            style={{
              width: '100%',
              aspectRatio: '3 / 4',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <img
              src={aboutData.image}
              alt="Oscar Tapia"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                filter: 'contrast(0.95) saturate(0.9)',
              }}
            />
          </div>
        </div>

        {/* Bio Column */}
        <div>
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
              transition: 'opacity 0.4s ease 0.1s',
            }}
          >
            {aboutData.label}
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
              marginBottom: '32px',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
            }}
          >
            {aboutData.title.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < aboutData.title.split('\n').length - 1 && <br />}
              </span>
            ))}
          </div>

          {/* Paragraphs */}
          {aboutData.paragraphs.map((para, i) => (
            <p
              key={i}
              style={{
                fontSize: '1.08rem',
                lineHeight: 1.75,
                color: 'rgba(232,230,224,0.85)',
                margin: '0 0 22px 0',
                fontFamily: '"Inter", sans-serif',
                fontWeight: 300,
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.6s ease ${0.4 + i * 0.15}s, transform 0.6s ease ${0.4 + i * 0.15}s`,
              }}
            >
              {para}
            </p>
          ))}

          {/* Stats */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px',
              marginTop: '32px',
              paddingTop: '32px',
              borderTop: '1px solid rgba(255,255,255,0.08)',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(15px)',
              transition: 'opacity 0.5s ease 0.8s, transform 0.5s ease 0.8s',
            }}
          >
            {aboutData.stats.map((stat, i) => (
              <div key={i}>
                <div
                  className="font-geist-mono"
                  style={{
                    fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '6px',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="font-mono-data"
                  style={{
                    fontSize: '0.6rem',
                    color: 'rgba(255,255,255,0.4)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
