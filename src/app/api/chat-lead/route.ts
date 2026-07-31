import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'
import { notifyMissionControl } from '@/lib/mission-control'

// Cuando alguien deja su email en el chat, avisa a Víctor con la conversación
// y registra el lead en Mission Control.
const getResend = () => new Resend(process.env.RESEND_API_KEY || 're_missing_key')

export async function POST(req: NextRequest) {
  try {
    const { email, transcript = [] } = await req.json()
    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Falta el email' }, { status: 400 })
    }

    const conversacion = (transcript as { role: string; content: string }[])
      .slice(-14)
      .map(m => `<p style="margin:0 0 10px;font-size:13px;line-height:1.6;color:${m.role === 'user' ? '#F5F0E8' : '#9A8E7E'};"><strong>${m.role === 'user' ? 'Visitante' : 'Asistente'}:</strong> ${String(m.content).slice(0, 600)}</p>`)
      .join('')

    await getResend().emails.send({
      from: 'Web victormago.com <web@norteia.es>',
      to: 'victor@norteia.es',
      subject: `Lead desde el CHAT: ${email}`,
      html: `<body style="margin:0;padding:24px;background:#0A0907;font-family:Helvetica,Arial,sans-serif;">
<p style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#7A7060;">victormago.com · Lead del asistente</p>
<p style="font-size:16px;color:#F5F0E8;">Email: <a href="mailto:${email}" style="color:#C4956A;">${email}</a></p>
<p style="font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:#7A7060;margin-top:20px;">Conversación</p>
${conversacion}
</body>`,
    })

    await notifyMissionControl({ origen: 'chat', name: '', email })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Chat lead error:', err)
    return NextResponse.json({ error: 'internal' }, { status: 500 })
  }
}
