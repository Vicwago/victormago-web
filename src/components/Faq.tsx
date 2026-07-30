import JsonLd from '@/components/JsonLd'

export type FaqEntry = { q: string; a: string }

// FAQ con <details> nativo: accesible, indexable y sin JavaScript.
// Emite además el JSON-LD FAQPage para resultados enriquecidos y AEO.
export default function Faq({ items }: { items: FaqEntry[] }) {
  return (
    <>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }} />
      <div>
        {items.map((f, i) => (
          <details key={i} className="faq-item">
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </>
  )
}
