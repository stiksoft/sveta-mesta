# Sveta mesta – namestitev aplikacije

Mapa vsebuje celotno igro kot spletno aplikacijo (PWA), ki se namesti na Android, iPhone/iPad, Windows, Mac in Linux z eno kodo.

## 1. Objava (enkrat)

Aplikacija se namesti z naslova https. Najpreprosteje:

**GitHub Pages**
1. Ustvarite nov repozitorij, npr. `sveta-mesta`.
2. Naložite vse datoteke iz te mape (index.html, sw.js, manifest.webmanifest, ikone, navodila.mp4, navodila-poster.jpg).
3. Settings → Pages → Source: branch `main`, mapa `/ (root)` → Save.
4. Igra je čez minuto na `https://<uporabnik>.github.io/sveta-mesta/`.

**Netlify Drop** (brez računa za poskus): odprite app.netlify.com/drop in povlecite to mapo v okno.

Vse datoteke morajo biti v isti mapi. Za preizkus na računalniku lahko index.html odprete tudi neposredno, a namestitev in delovanje brez interneta delujeta šele z naslova https.

## 2. Namestitev na napravo

- **Android (Chrome):** odprite naslov igre → meni ⋮ → *Namesti aplikacijo* / *Dodaj na začetni zaslon*.
- **iPhone/iPad (Safari):** odprite naslov → gumb Deli → *Dodaj na začetni zaslon* → Dodaj.
- **Windows / Linux (Chrome ali Edge):** ikona za namestitev desno v naslovni vrstici ali meni → *Namesti Sveta mesta*. Aplikacija dobi svoje okno in bližnjico v meniju Start.
- **Mac:** Chrome – ikona za namestitev v naslovni vrstici; Safari (macOS 14+) – Datoteka → *Dodaj v Dock*.

Po prvem zagonu igra deluje tudi brez interneta. Napredek igre se shrani na posamezni napravi.

## 3. Posodobitve

Ko zamenjate datoteke na strežniku, v `sw.js` zvišajte številko v vrstici `const CACHE='sveta-mesta-v2'` (npr. na v3), da naprave prenesejo novo različico.
