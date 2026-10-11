import ServicioPage, { servicioMetadata } from '@/components/ServicioPage'
import { getServicio } from '@/lib/servicios'

const s = getServicio('automatizacion-ia-pymes-galicia')!

export const metadata = servicioMetadata(s)

export default function Page() {
  return <ServicioPage s={s} />
}
