# FOISSNERLAB Add-on Package

Stand: 2026-06-11

Dieses Paket ergänzt das bestehende Repository `M4nfr41D-spec/FOISSNERLAB` um echte Tool- und Komponenten-Inhalte.

## Neue Struktur

```text
game-labs.html
elementor-lab.html
downloads.html
tools/
  lime-defender.html
  html-text-editor.html
  process-flow-builder-v3-1.html
  acid-303-patch11.html
  manifest.json
elementor-snippets/
  stat-counter.html
  section-head.html
  glass-card.html
  button-set.html
  cta-buttons-3-styles.html
  neu-control.html
```

## Standalone Tools

- Lime Defender – Mini-Shooter / Game Lab
- HTML Text Editor – visueller Editor / Preview-Tool
- FOISSNER Process Flow Builder v3.1 – Prozess- und Decision-Map Builder
- FOISSNER ACID-303 Patch 11 – browserbasierter Acid-/Drum-Sequencer

## Elementor Snippets

- Stat Counter
- Section Head
- Glass Card
- Button Set
- CTA Buttons – 3 Styles
- Neu Control

## Integration

1. Ordnerinhalt in das Root-Verzeichnis des bestehenden FOISSNERLAB-Repos kopieren.
2. Vorhandene `downloads.html` ersetzen.
3. Prüfen, ob `assets/css/foissner-lab.css`, `assets/js/foissner-lab.js` und verwendete Icons im Zielrepo vorhanden sind.
4. Auf Netlify oder GitHub Pages deployen.
5. Danach interne Links prüfen: `game-labs.html`, `elementor-lab.html`, `tools/*`, `elementor-snippets/*`.

Created by Ing. Manfred Foissner · All rights reserved
