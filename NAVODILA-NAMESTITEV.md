# Sveta mesta · Holy Places – namestitev / installation

## Slovenščina

Mapa vsebuje celotno igro kot spletno aplikacijo (PWA) za Android, iPhone/iPad, Windows, Mac in Linux.

### 1. Objava na GitHub Pages
1. V repozitoriju `sveta-mesta` izberite **Add file → Upload files**.
2. Povlecite **vse datoteke in mapo `glasba`** iz te mape in kliknite **Commit changes**.
3. Settings → Pages → Branch `main`, mapa `/ (root)` → Save (če še ni nastavljeno).
4. Igra je na `https://stiksoft.github.io/sveta-mesta/`.

### 2. Namestitev na napravo
- **Android (Chrome):** meni ⋮ → *Namesti aplikacijo*.
- **iPhone/iPad (Safari):** Deli → *Dodaj na začetni zaslon*.
- **Windows / Linux (Chrome, Edge):** ikona za namestitev v naslovni vrstici.
- **Mac:** Chrome – ikona za namestitev; Safari – Datoteka → *Dodaj v Dock*.

### 3. Glasba in bhajani
- Vgrajena **tanpura** z zvončki deluje brez interneta.
- **Moji bhajani:** v igri odprite *Zvok → Dodaj posnetke* in izberite svoje posnetke (npr. kupljeni album *Prabhupāda Bhajans* s store.krishna.com). Ostanejo samo na tisti napravi.
- **Mapa `glasba/`:** če imate dovoljenje lastnika avtorskih pravic, lahko posnetke naložite v mapo `glasba/` in jih navedete v datoteki `glasba/seznam.json` (glej `PRIMER-seznam.json`). Takrat jih slišijo vsi obiskovalci. Posnetki Śrīle Prabhupāde so © The Bhaktivedanta Book Trust, zato jih brez dovoljenja ne objavljajte v javnem repozitoriju.

### 4. Posodobitve
Ob vsaki spremembi datotek v `sw.js` zvišajte številko v vrstici `const CACHE='sveta-mesta-v8'` (npr. na v9).

## English

This folder contains the whole game as a web app (PWA) for Android, iPhone/iPad, Windows, Mac and Linux.

1. Upload **all files and the `glasba` folder** to the GitHub repository and enable GitHub Pages (branch `main`, `/ (root)`).
2. Install on a device: Android – Chrome menu → *Install app*; iPhone – Safari Share → *Add to Home Screen*; Windows/Linux/Mac – the install icon in Chrome or Edge.
3. Music: the built-in tanpura works offline. Under *Sound → Add recordings* you can add your own bhajans (they stay on that device). With the copyright owner's permission you may also place recordings in `glasba/` and list them in `glasba/seznam.json`. Śrīla Prabhupāda's recordings are © The Bhaktivedanta Book Trust.
4. After every update raise the number in `const CACHE='sveta-mesta-v8'` in `sw.js`.
