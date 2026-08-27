# Generador de tarjetas para redes — identidad "El punto".
#
# Uso:  python scripts/generar-tarjetas.py
# Edita la lista TARJETAS de abajo y ejecuta. Los JPG se guardan en public/ig/.
# Luego: git push + npx vercel deploy --prod --yes, y se inyectan en Buffer
# con el fetch+DataTransfer documentado en entregables/REGISTRO-CONTENIDO.md
#
# Formatos:  H_LI = 1200x628 (LinkedIn)  ·  H_IG = 1080x1350 (Instagram 4:5)
# Temas:     PAPEL (fondo crema)          ·  NOCHE (fondo azul oscuro)
from pathlib import Path
from playwright.sync_api import sync_playwright

BASE = """<!DOCTYPE html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,100..900&family=Chivo+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  * {{ margin:0; padding:0; box-sizing:border-box; }}
  body {{ width:{W}px; height:{H}px; background:{BG}; font-family:'Archivo',sans-serif; position:relative; overflow:hidden; }}
  .arc {{ position:absolute; {ARCPOS} width:{AW}px; height:{AH}px; border:4px solid {ACC}; border-radius:50%; clip-path:polygon(0 0, 55% 0, 55% 100%, 0 100%); opacity:.45; }}
  .ball {{ position:absolute; {BALLPOS} width:{BS}px; height:{BS}px; border-radius:50%; background:{ACC}; }}
  .inner {{ position:relative; z-index:2; padding:{PAD}; height:100%; display:flex; flex-direction:column; }}
  .kicker {{ font-family:'Chivo Mono',monospace; font-size:{KS}px; letter-spacing:.3em; text-transform:uppercase; color:{ACC}; margin-bottom:{KMB}px; }}
  h1 {{ font-stretch:118%; font-weight:800; font-size:{TS}px; line-height:1.05; letter-spacing:-0.02em; color:{FG}; max-width:{MW}ch; }}
  h1 span {{ color:{ACC}; }}
  ul {{ margin-top:{ULM}px; list-style:none; }}
  li {{ font-size:{LS}px; font-weight:500; color:{SUB}; line-height:1.45; margin-bottom:{LMB}px; display:flex; gap:20px; }}
  li b {{ font-family:'Chivo Mono',monospace; color:{ACC}; font-weight:500; flex-shrink:0; }}
  .pie {{ margin-top:auto; display:flex; justify-content:space-between; align-items:flex-end; border-top:2px solid {LINE}; padding-top:{PT}px; }}
  .cta {{ display:inline-block; background:{ACC}; color:{CTAFG}; font-weight:700; font-size:{CS}px; padding:{CP}; border-radius:999px; }}
  .marca {{ font-family:'Chivo Mono',monospace; font-size:{MS}px; letter-spacing:.2em; text-transform:uppercase; color:#8B889A; }}
</style></head><body>
  <div class="arc"></div><div class="ball"></div>
  <div class="inner">
    <p class="kicker">{KICKER}</p>
    <h1>{TITULO}<span>.</span></h1>
    {LISTA}
    <div class="pie"><span class="cta">{CTA}</span><span class="marca">victormago.com</span></div>
  </div>
</body></html>"""

PAPEL = dict(BG="#F5F3EB", FG="#14122A", SUB="#4E4C60", ACC="#2C03F3", CTAFG="#F5F3EB", LINE="rgba(20,18,42,.14)")
NOCHE = dict(BG="#071233", FG="#F2F6FB", SUB="#A9BDD9", ACC="#76C1FF", CTAFG="#071233", LINE="rgba(242,246,251,.20)")

H_LI = dict(W=1200, H=628, PAD="70px 80px", KS=20, KMB=26, TS=62, MW=15, ULM=34, LS=25, LMB=16,
            PT=24, CS=23, CP="12px 28px", MS=18, BS=18,
            ARCPOS="right:-160px; bottom:-60%;", AW=520, AH=1100, BALLPOS="right:250px; top:70px;")
H_IG = dict(W=1080, H=1350, PAD="110px 90px", KS=26, KMB=44, TS=88, MW=12, ULM=76, LS=35, LMB=36,
            PT=36, CS=30, CP="16px 38px", MS=24, BS=26,
            ARCPOS="right:-140px; bottom:-30%;", AW=620, AH=1500, BALLPOS="right:330px; top:130px;")


def lista(items):
    if not items:
        return ""
    filas = "".join("<li><b>%02d</b> %s</li>" % (i + 1, t) for i, t in enumerate(items))
    return "<ul>" + filas + "</ul>"


TARJETAS = [
    dict(out="li-metodo.jpg", fmt=H_LI, tema=PAPEL, kicker="Cómo trabajo",
         titulo="Construyo tu web antes de que pagues un euro",
         items=[], cta="El método, en victormago.com →"),
    dict(out="li-proceso-roto.jpg", fmt=H_LI, tema=NOCHE, kicker="El error más caro",
         titulo="Automatizar un proceso roto solo te da errores más rápidos",
         items=[], cta="Cómo evitarlo →"),
    dict(out="ig-preguntas.jpg", fmt=H_IG, tema=PAPEL, kicker="Guárdate esto",
         titulo="4 preguntas para quien te venda IA",
         items=["¿Qué proceso mío mejora, exactamente?",
                "¿Qué pasa el día que tú no estés?",
                "¿Dónde acaban los datos de mis clientes?",
                "¿Qué parte sigo decidiendo yo?"],
         cta="Más ideas, en la bio →"),
    dict(out="li-septiembre.jpg", fmt=H_LI, tema=PAPEL, kicker="Septiembre",
         titulo="Todos los años me escribe alguien diciendo: este año sí",
         items=[], cta="Empieza por lo pequeño →"),
]

OUT = Path("C:/Users/victor/Documents/WebVictor/public/ig")
with sync_playwright() as p:
    b = p.chromium.launch()
    for t in TARJETAS:
        cfg = {}
        cfg.update(t["fmt"])
        cfg.update(t["tema"])
        cfg["KICKER"] = t["kicker"]
        cfg["TITULO"] = t["titulo"]
        cfg["LISTA"] = lista(t["items"])
        cfg["CTA"] = t["cta"]
        page = b.new_page(viewport={"width": cfg["W"], "height": cfg["H"]})
        page.set_content(BASE.format(**cfg), wait_until="networkidle")
        page.wait_for_timeout(500)
        dest = OUT / t["out"]
        page.screenshot(path=str(dest), type="jpeg", quality=92)
        print("OK", t["out"], dest.stat().st_size // 1024, "KB")
        page.close()
    b.close()
