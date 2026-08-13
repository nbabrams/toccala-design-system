Pill-shaped CTA button in the three variants the Toccala style tile defines: primary (deep green), secondary (green 1.5px outline) and accent (terracotta).

```jsx
<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="accent" size="lg">Accent Button</Button>
<Button size="card">Get Started</Button>
```

Radius is always `--radius-pill` (999px) — never a squared button. Sizes carry the exact paddings from the source: `md` and `lg` are 18/38, `card` is 16/34. Hover/press states are extrapolated (the source file is static): 8% darken on hover, 0.985 scale on press.
