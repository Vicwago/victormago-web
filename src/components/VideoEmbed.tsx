'use client'
import { useState } from 'react'
import { C, mix } from '@/lib/theme'

// Embed ligero de YouTube: no carga el iframe (≈1 MB de JS de YouTube)
// hasta que el usuario pulsa play. Miniatura servida por i.ytimg.com.
export default function VideoEmbed({ id, title }: { id: string; title: string }) {
  const [play, setPlay] = useState(false)
  return (
    <div style={{ position: 'relative', aspectRatio: '16/9', background: C.bgCard, border: `1px solid ${C.border}`, overflow: 'hidden' }}>
      {play ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
        />
      ) : (
        <button
          onClick={() => setPlay(true)}
          aria-label={`Reproducir vídeo: ${title}`}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', background: 'transparent', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt=""
            loading="lazy"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.6)' }}
          />
          <span style={{ position: 'relative', width: 64, height: 64, borderRadius: '50%', background: mix(90, 'var(--cta)'), display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--cta-text)"><path d="M8 5v14l11-7z"/></svg>
          </span>
        </button>
      )}
    </div>
  )
}
