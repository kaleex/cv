# 🎨 Style Guide - alejandroquilez.dev

## Color Palette

### 🌙 Dark Theme (Default)

| Variable | Hex | Usage |
|----------|-----|-------|
| `--bg-primary` | `#0a0a0f` | Main background |
| `--bg-secondary` | `#1a1a2e` | Cards, headers, sections |
| `--bg-card` | `rgba(255, 255, 255, 0.03)` | Card backgrounds |
| `--bg-card-hover` | `rgba(255, 107, 0, 0.05)` | Card hover state |
| `--text-primary` | `#ffffff` | Main text |
| `--text-secondary` | `#c4c4c4` | Secondary text, subtitles |
| `--text-muted` | `#9a9a9a` | Muted text, hints |
| `--accent` | `#FF6B00` | Primary accent (orange) |
| `--accent-hover` | `#FF8533` | Accent hover state |
| `--accent-light` | `rgba(255, 107, 0, 0.1)` | Accent backgrounds |
| `--border-color` | `rgba(255, 107, 0, 0.2)` | Default borders |
| `--border-hover` | `rgba(255, 107, 0, 0.4)` | Border hover state |
| `--shadow` | `0 4px 20px rgba(0, 0, 0, 0.3)` | Box shadows |

### ☀️ Light Theme

| Variable | Hex | Usage |
|----------|-----|-------|
| `--bg-primary` | `#ffffff` | Main background |
| `--bg-secondary` | `#f5f5f7` | Cards, headers, sections |
| `--bg-card` | `rgba(0, 0, 0, 0.02)` | Card backgrounds |
| `--bg-card-hover` | `rgba(255, 107, 0, 0.08)` | Card hover state |
| `--text-primary` | `#1a1a2e` | Main text |
| `--text-secondary` | `#3a3a3a` | Secondary text, subtitles |
| `--text-muted` | `#555555` | Muted text, hints |
| `--accent` | `#e55a00` | Primary accent (darker orange) |
| `--accent-hover` | `#FF6B00` | Accent hover state |
| `--border-color` | `rgba(0, 0, 0, 0.1)` | Default borders |
| `--shadow` | `0 4px 20px rgba(0, 0, 0, 0.1)` | Box shadows |

---

## Gradient Colors

### Primary Gradient (Blue → Purple)
Used for titles, buttons, and decorative elements.

```css
background: linear-gradient(90deg, #3b82f6, #8b5cf6);
/* Or 135deg for diagonal */
background: linear-gradient(135deg, #3b82f6, #8b5cf6);
```

| Color | Hex | Name |
|-------|-----|------|
| Blue | `#3b82f6` | Tailwind Blue 500 |
| Light Blue | `#60a5fa` | Tailwind Blue 400 |
| Purple | `#8b5cf6` | Tailwind Violet 500 |
| Light Purple | `#a78bfa` | Tailwind Violet 400 |

### Header Gradient (Light Mode)
```css
background: linear-gradient(135deg, #e8f4fd 0%, #f0e6ff 100%);
```

| Color | Hex | Usage |
|-------|-----|-------|
| Light Blue | `#e8f4fd` | Start color |
| Light Lavender | `#f0e6ff` | End color |

---

## Typography

### Font Stack
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

### Monospace (Logo, Code)
```css
font-family: 'JetBrains Mono', 'Fira Code', monospace;
```

### Font Sizes

| Element | Size | Weight |
|---------|------|--------|
| H1 (Hero) | `clamp(2rem, 5vw, 3.5rem)` | 700 |
| H1 (Page) | `2.5rem` | 700 |
| H2 (Section) | `2.25rem` | 700 |
| H3 (Card) | `1.25rem` | 600 |
| Body | `1rem` | 400 |
| Small | `0.9rem` | 400 |
| Caption | `0.8rem` | 400 |

---

## Shadows

### Card Shadow (Dark)
```css
box-shadow: 
  8px 8px 30px rgba(139, 92, 246, 0.4),
  4px 4px 15px rgba(59, 130, 246, 0.3);
```

### Card Shadow (Light)
```css
box-shadow: 
  8px 8px 25px rgba(139, 92, 246, 0.25),
  4px 4px 12px rgba(59, 130, 246, 0.2);
```

### Default Shadow
```css
box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3); /* Dark */
box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Light */
```

---

## Border Radius

| Element | Radius |
|---------|--------|
| Cards | `16px` |
| Buttons (pill) | `50px` |
| Small elements | `8px` |
| Tags/badges | `6px` |

---

## Spacing Scale

Based on `rem` units (1rem = 16px):

| Name | Value | Pixels |
|------|-------|--------|
| xs | `0.25rem` | 4px |
| sm | `0.5rem` | 8px |
| md | `1rem` | 16px |
| lg | `1.5rem` | 24px |
| xl | `2rem` | 32px |
| 2xl | `3rem` | 48px |
| 3xl | `4rem` | 64px |

---

## Buttons

### Primary Button
```css
background: linear-gradient(90deg, #3b82f6, #8b5cf6);
color: white;
border: 2px solid rgba(255, 255, 255, 0.2);
border-radius: 50px;
padding: 1rem 2rem;
```

### Secondary Button
```css
background: var(--bg-secondary);
color: var(--text-primary);
border: 1px solid var(--border-color);
border-radius: 50px;
```

---

## Animations

### Transitions
```css
transition: all 0.3s ease;
```

### Hover Transform
```css
transform: translateY(-2px);
/* Or with scale */
transform: translateY(-3px) scale(1.02);
```

### Gradient Title Effect
```css
background: linear-gradient(90deg, #60a5fa, #a78bfa);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

---

## Z-Index Scale

| Layer | Z-Index |
|-------|---------|
| Background | 0 |
| Content | 1 |
| Dropdown | 10 |
| Sticky elements | 100 |
| Modal | 1000 |
| Tooltip | 1100 |

---

## Breakpoints

| Name | Width | Usage |
|------|-------|-------|
| Mobile | `max-width: 480px` | Small phones |
| Tablet | `max-width: 768px` | Tablets, large phones |
| Desktop | `min-width: 769px` | Desktops |

---

## File Structure

```
src/
├── index.css          # CSS variables, reset, base styles
├── App.css            # Main app styles, hero, sections
├── components/
│   ├── Navbar.css
│   └── Footer.css
└── pages/
    ├── Skills.css
    ├── Experience.css
    ├── Repos.css
    ├── Badges.css
    ├── Contact.css
    └── Card.css
```

---

## Usage Examples

### Apply gradient text
```css
.gradient-text {
  background: linear-gradient(90deg, #60a5fa, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Card with hover effect
```css
.card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.card:hover {
  border-color: var(--border-hover);
  transform: translateY(-2px);
}
```

---

*Last updated: January 2026*
