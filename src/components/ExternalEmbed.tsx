import { useMemo } from 'react'

interface ExternalEmbedProps {
  url: string
  title?: string
}

/**
 * ExternalEmbed - Reusable component for embedding external content via iframe
 * Supports: Behance, Figma, Canva, Power BI, Looker Studio, Framer, Notion, Google Slides
 * 
 * Usage:
 * <ExternalEmbed url="https://www.figma.com/embed/..." title="Figma Design" />
 * <ExternalEmbed url="https://lookerstudio.google.com/embed/..." title="Dashboard" />
 */
export default function ExternalEmbed({ url, title = 'External Content' }: ExternalEmbedProps) {
  // Detect platform from URL to apply specific optimizations
  const platform = useMemo(() => {
    if (url.includes('behance.net') || url.includes('behance')) return 'behance'
    if (url.includes('figma.com')) return 'figma'
    if (url.includes('canva.com')) return 'canva'
    if (url.includes('lookerstudio.google.com') || url.includes('datastudio')) return 'looker'
    if (url.includes('powerbi.microsoft.com') || url.includes('app.powerbi')) return 'powerbi'
    if (url.includes('framer.com') || url.includes('framer.website')) return 'framer'
    if (url.includes('notion.so') || url.includes('notion.site')) return 'notion'
    if (url.includes('docs.google.com/presentation')) return 'gslides'
    return 'generic'
  }, [url])

  // Platform-specific sandbox permissions
  const sandboxPermissions = useMemo(() => {
    const base = 'allow-scripts allow-same-origin allow-popups'
    switch (platform) {
      case 'figma':
        return `${base} allow-forms allow-popups-to-escape-sandbox`
      case 'canva':
        return `${base} allow-forms allow-downloads`
      case 'powerbi':
      case 'looker':
        return `${base} allow-forms allow-downloads`
      default:
        return base
    }
  }, [platform])

  // Platform-specific styles
  const height = useMemo(() => {
    switch (platform) {
      case 'figma': return '600px'
      case 'gslides': return '480px'
      case 'notion': return '800px'
      default: return '900px'
    }
  }, [platform])

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '1100px',
        margin: '0 auto 48px',
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.08)',
        overflow: 'hidden',
      }}
    >
      {/* Platform badge */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 16px',
          background: 'rgba(255,255,255,0.03)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div
          className="font-mono-data"
          style={{
            fontSize: '0.65rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.4)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <PlatformIcon platform={platform} />
          {platform === 'generic' ? 'Contenido Externo' : platform.toUpperCase()}
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono-data"
          style={{
            fontSize: '0.6rem',
            color: 'rgba(255,255,255,0.35)',
            letterSpacing: '0.1em',
            textDecoration: 'none',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
        >
          ABRIR EN NUEVA PESTAÑA ↗
        </a>
      </div>

      {/* Iframe */}
      <iframe
        src={url}
        title={title}
        width="100%"
        height={height}
        frameBorder="0"
        allowFullScreen
        sandbox={sandboxPermissions}
        loading="lazy"
        style={{
          display: 'block',
          background: '#0a0a0a',
        }}
      />
    </div>
  )
}

function PlatformIcon({ platform }: { platform: string }) {
  const iconSize = 14
  const color = 'rgba(255,255,255,0.5)'

  switch (platform) {
    case 'figma':
      return (
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" /><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
          <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" /><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
          <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
        </svg>
      )
    case 'behance':
      return (
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3h6a4 4 0 0 1 4 4 4 4 0 0 1-4 4H3V3z" /><path d="M3 11h7a4 4 0 0 1 4 4 4 4 0 0 1-4 4H3v-8z" />
          <path d="M15 4h6" /><path d="M15 20a4 4 0 1 1 6-3.47" />
        </svg>
      )
    case 'notion':
      return (
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4l4 16 8-8-8-8z" /><path d="M12 4l8 8" />
        </svg>
      )
    default:
      return (
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" />
        </svg>
      )
  }
}
