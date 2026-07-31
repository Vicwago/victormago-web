# Genera las portadas del blog y la imagen OG con la identidad "El punto".
# Cada artículo nuevo del pipeline puede añadirse aquí y regenerar.
# Uso:  python scripts/generar-portadas.py
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).parent.parent

PORTADAS = [
    {
        "slug": "automatizar-gestion-documental-procuradores",
        "kicker": "Nicho legal",
        "titulo": "Automatizar el 70% de la gestión documental de un despacho",
        "tema": "noche",
    },
    {
        "slug": "de-la-pista-de-tenis-a-la-ia",
        "kicker": "Mi historia",
        "titulo": "De la pista de tenis a la consultoría de IA",
        "tema": "azul",
    },
    {
        "slug": "eu-ai-act-pymes",
        "kicker": "EU AI Act",
        "titulo": "Qué te obliga YA y qué llega el 2 de agosto de 2026",
        "tema": "papel",
    },
    {
        "slug": "mission-control-crm-agentes-ia",
        "kicker": "Sistemas",
        "titulo": "Así trabaja un CRM con agentes de IA",
        "tema": "noche",
    },
]

TEMAS = {
    "papel": {"bg": "#F5F3EB", "linea": "rgba(20,18,42,0.16)", "texto": "#14122A", "acento": "#2C03F3", "sub": "#4E4C60"},
    "noche": {"bg": "linear-gradient(160deg, #071233 0%, #00193F 100%)", "linea": "rgba(242,246,251,0.22)", "texto": "#F2F6FB", "acento": "#76C1FF", "sub": "#A9BDD9"},
    "azul": {"bg": "#2C03F3", "linea": "rgba(245,243,235,0.28)", "texto": "#F5F3EB", "acento": "#76C1FF", "sub": "#CFC8FF"},
}

def plantilla(kicker, titulo, tema, ancho, alto, marca="victormago.com"):
    t = TEMAS[tema]
    return f"""<!DOCTYPE html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,100..900&family=Chivo+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  * {{ margin:0; padding:0; box-sizing:border-box; }}
  body {{ width:{ancho}px; height:{alto}px; background:{t['bg']}; overflow:hidden; position:relative; font-family:'Archivo',sans-serif; }}
  /* Geometría de pista */
  .court {{ position:absolute; right:-120px; top:50%; transform:translateY(-50%); width:{int(ancho*0.42)}px; height:{int(alto*1.1)}px; border:2.5px solid {t['linea']}; }}
  .court::before {{ content:''; position:absolute; left:10%; right:10%; top:45%; border-top:2.5px solid {t['linea']}; }}
  .court::after {{ content:''; position:absolute; left:50%; top:45%; bottom:0; border-left:2.5px solid {t['linea']}; }}
  .arc {{ position:absolute; right:-60px; bottom:-40%; width:{int(ancho*0.55)}px; height:{int(alto*1.4)}px; border:3.5px solid {t['acento']}; border-radius:50%; clip-path:polygon(0 0, 55% 0, 55% 100%, 0 100%); opacity:0.85; }}
  .ball {{ position:absolute; right:{int(ancho*0.30)}px; top:{int(alto*0.12)}px; width:20px; height:20px; border-radius:50%; background:{t['acento']}; }}
  .inner {{ position:relative; z-index:2; padding:{int(alto*0.10)}px {int(ancho*0.055)}px; height:100%; display:flex; flex-direction:column; justify-content:space-between; }}
  .kicker {{ font-family:'Chivo Mono',monospace; font-size:{int(alto*0.032)}px; letter-spacing:0.3em; text-transform:uppercase; color:{t['acento']}; }}
  h1 {{ font-stretch:118%; font-weight:800; font-size:{int(alto*0.105)}px; line-height:1.04; letter-spacing:-0.02em; color:{t['texto']}; max-width:16ch; }}
  h1 span {{ color:{t['acento']}; }}
  .marca {{ font-family:'Chivo Mono',monospace; font-size:{int(alto*0.030)}px; letter-spacing:0.2em; text-transform:uppercase; color:{t['sub']}; }}
</style></head>
<body>
  <div class="court"></div><div class="arc"></div><div class="ball"></div>
  <div class="inner">
    <p class="kicker">{kicker}</p>
    <h1>{titulo}<span>.</span></h1>
    <p class="marca">{marca}</p>
  </div>
</body></html>"""

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={"width": 1600, "height": 900}, device_scale_factor=1)
    (ROOT / "public/blog").mkdir(exist_ok=True)
    for c in PORTADAS:
        page.set_content(plantilla(c["kicker"], c["titulo"], c["tema"], 1600, 900), wait_until="networkidle")
        out = ROOT / f"public/blog/{c['slug']}.png"
        page.screenshot(path=str(out))
        print(f"OK {out.name} ({out.stat().st_size // 1024} KB)")
    # OG por defecto del sitio
    page2 = browser.new_page(viewport={"width": 1200, "height": 630}, device_scale_factor=1)
    page2.set_content(
        plantilla("Consultor de IA · A Coruña", "Enseño a las empresas a anticiparse con la IA",
                  "papel", 1200, 630, "Víctor Mago · victormago.com"),
        wait_until="networkidle")
    page2.screenshot(path=str(ROOT / "public/og.png"))
    print("OK og.png")
    browser.close()
