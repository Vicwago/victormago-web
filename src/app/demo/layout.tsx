'use client'
export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 99999, overflow: 'auto', background: '#ffffff', fontFamily: 'system-ui, sans-serif', color: '#000' }}>
      <style>{`body { overflow: hidden !important; }`}</style>
      {children}
    </div>
  )
}
