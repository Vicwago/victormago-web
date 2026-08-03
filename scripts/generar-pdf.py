# Genera public/recursos/5-automatizaciones-pymes.pdf desde
# src/lib/automatizaciones.json con la identidad visual de la web.
# Uso:  python scripts/generar-pdf.py
import json
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).parent.parent
data = json.loads((ROOT / "src/lib/automatizaciones.json").read_text(encoding="utf-8"))

def bloque(a):
    pasos = "".join(f"<li>{p}</li>" for p in a["proceso"])
    return f"""
    <section class="auto">
      <p class="num">{a['n']} /</p>
      <h2>{a['titulo']}</h2>
      <p class="dolor">{a['dolor']}</p>
      <p class="label">Cómo se monta</p>
      <ol>{pasos}</ol>
      <div class="grid">
        <div class="card"><p class="label">Herramientas</p><p>{a['herramientas']}</p></div>
        <div class="card"><p class="label">Qué puedes esperar</p><p>{a['resultado']}</p></div>
      </div>
      <p class="consejo"><strong>Consejo práctico:</strong> {a['consejo']}</p>
    </section>"""

html = f"""<!DOCTYPE html>
<html lang="es"><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,100..900&family=Public+Sans:wght@300;400;600&family=Chivo+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  * {{ margin: 0; padding: 0; box-sizing: border-box; }}
  body {{ background: #F5F3EB; color: #14122A; font-family: 'Public Sans', sans-serif; }}
  .page {{ padding: 48px 52px; }}
  .portada {{ min-height: 92vh; display: flex; flex-direction: column; justify-content: center; position: relative; }}
  .eyebrow {{ font-family: 'Chivo Mono', monospace; font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase; color: #2C03F3; margin-bottom: 22px; }}
  h1 {{ font-family: 'Archivo', sans-serif; font-stretch: 118%; font-weight: 800; font-size: 40px; line-height: 1.02; letter-spacing: -0.02em; margin-bottom: 18px; max-width: 15ch; }}
  h1 .dot {{ color: #2C03F3; }}
  .sub {{ font-size: 14px; font-weight: 300; color: #4E4C60; line-height: 1.7; max-width: 48ch; margin-bottom: 26px; }}
  .autor {{ font-family: 'Chivo Mono', monospace; font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: #8B889A; }}
  .tram {{ border: none; height: 7px; border-top: 1.5px solid #DCD8C8; border-bottom: 1.5px solid #DCD8C8; margin: 34px 0; }}
  .auto {{ page-break-before: always; padding-top: 8px; }}
  .num {{ font-family: 'Chivo Mono', monospace; font-size: 13px; color: #2C03F3; margin-bottom: 10px; }}
  h2 {{ font-family: 'Archivo', sans-serif; font-weight: 700; font-size: 22px; letter-spacing: -0.015em; line-height: 1.15; margin-bottom: 12px; }}
  .dolor {{ font-size: 13px; font-weight: 300; color: #4E4C60; line-height: 1.75; margin-bottom: 16px; max-width: 62ch; }}
  .label {{ font-family: 'Chivo Mono', monospace; font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: #8B889A; margin-bottom: 8px; }}
  ol {{ padding-left: 20px; margin-bottom: 16px; }}
  li {{ font-size: 12.5px; font-weight: 300; color: #4E4C60; line-height: 1.7; margin-bottom: 6px; max-width: 60ch; }}
  .grid {{ display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 14px; }}
  .card {{ background: #FCFBF6; border: 1.5px solid #DCD8C8; border-radius: 12px; padding: 14px 16px; }}
  .card p:last-child {{ font-size: 12px; font-weight: 300; color: #4E4C60; line-height: 1.6; }}
  .consejo {{ font-size: 12px; font-weight: 300; color: #4E4C60; line-height: 1.65; background: rgba(44,3,243,0.05); border: 1.5px solid rgba(44,3,243,0.25); border-radius: 12px; padding: 12px 16px; }}
  .consejo strong {{ color: #14122A; font-weight: 600; }}
  .cierre {{ page-break-before: always; min-height: 80vh; display: flex; flex-direction: column; justify-content: center; }}
  .cierre h2 {{ font-size: 30px; margin-bottom: 14px; }}
  .cta {{ display: inline-block; background: #2C03F3; color: #F5F3EB; font-weight: 600; font-size: 14px; padding: 13px 30px; border-radius: 999px; text-decoration: none; margin: 18px 0; }}
  .pie {{ font-size: 11px; color: #8B889A; margin-top: 30px; line-height: 1.6; }}
  a {{ color: #2C03F3; }}
</style></head>
<body>
  <div class="page portada">
    <p class="eyebrow">Recurso gratuito · victormago.com</p>
    <h1>5 automatizaciones que cualquier pyme puede montar esta semana<span class="dot">.</span></h1>
    <p class="sub">Sin teoría. Cada automatización viene con el proceso que resuelve, la herramienta
    con la que se monta y el resultado que puedes esperar. Sale de proyectos reales con empresas de Galicia.</p>
    <hr class="tram">
    <p class="autor">Víctor Mago · Consultor de IA y automatización · A Coruña</p>
  </div>
  {''.join(bloque(a) for a in data)}
  <div class="page cierre">
    <p class="eyebrow">¿Y ahora qué?</p>
    <h2>¿Cuál de las cinco es la tuya<span class="dot">?</span></h2>
    <p class="sub">En 20 minutos te digo cuál automatizaría primero en tu empresa y qué resultado
    puedes esperar — gratis y sin compromiso. Si la IA no te va a ayudar, también te lo digo.</p>
    <a class="cta" href="https://victormago.com/contacto">Reserva 20 min gratis → victormago.com/contacto</a>
    <p class="pie">© 2026 Víctor Mago. Todos los derechos reservados.<br>
    Los proyectos los ejecuto con NorteIA · norteia.es<br>
    Newsletter semanal "IA que Impulsa": victormago.com/blog</p>
  </div>
</body></html>"""

out = ROOT / "public/recursos/5-automatizaciones-pymes.pdf"
with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    page.set_content(html, wait_until="networkidle")
    page.pdf(path=str(out), format="A4", print_background=True,
             margin={"top": "0", "bottom": "0", "left": "0", "right": "0"})
    browser.close()
print(f"OK {out} ({out.stat().st_size // 1024} KB)")
