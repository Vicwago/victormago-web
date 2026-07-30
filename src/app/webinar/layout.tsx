import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Webinar de IA para empresas',
  description:
    'Webinar práctico de IA para empresas: qué puede automatizar tu equipo y cómo empezar esta semana. Plazas limitadas.',
  alternates: { canonical: '/webinar' },
}

export default function WebinarLayout({ children }: { children: React.ReactNode }) {
  return children
}
