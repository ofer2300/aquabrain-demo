# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

**Last updated:** 2025-11-04

---

## Project Overview

**aquabrain-demo** is a modern Next.js 14 starter application demonstrating best practices for building internationalized web applications with full Hebrew language support and RTL (Right-to-Left) text direction.

### Key Features

- **Next.js 14** with App Router architecture
- **Full Hebrew/RTL Support** with `next-intl` integration
- **TypeScript** for type safety throughout
- **Tailwind CSS** for utility-first responsive styling
- **Dark Mode** support with CSS custom properties
- **Interactive Components** with React hooks
- **Clean Architecture** demonstrating modern React patterns

### Use Case

This project serves as:
1. A reference implementation for Hebrew/RTL web applications
2. A starter template for Next.js + TypeScript + Tailwind projects
3. A demonstration of internationalization (i18n) best practices
4. An educational resource for modern React development

---

## Technology Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Next.js** | 14.2.5 | React framework with App Router |
| **React** | 18.3.1 | UI library |
| **TypeScript** | ^5 | Static typing and improved DX |
| **Tailwind CSS** | ^3.4.4 | Utility-first CSS framework |
| **next-intl** | ^3.15.3 | Internationalization library |
| **PostCSS** | ^8.4.38 | CSS transformation tool |
| **ESLint** | ^8 | Code linting and quality |

---

## Project Structure

```
aquabrain-demo/
├── app/                      # Next.js App Router directory
│   ├── layout.tsx           # Root layout (HTML, lang="he", dir="rtl")
│   ├── page.tsx             # Home/landing page
│   ├── demo/
│   │   └── page.tsx         # Interactive demo with list management
│   └── globals.css          # Global styles + Tailwind + dark mode
├── public/                   # Static assets
├── package.json             # Dependencies and scripts
├── next.config.ts           # Next.js configuration (i18n setup)
├── tsconfig.json            # TypeScript configuration
├── tailwind.config.ts       # Tailwind CSS theme configuration
├── postcss.config.js        # PostCSS plugins
├── .env.example             # Environment variables template
└── CLAUDE.md               # This file
```

---

## Quick Start

### Prerequisites

- **Node.js** 18+ (LTS recommended)
- **npm** or **yarn** or **pnpm**
- Modern code editor (VS Code recommended)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd aquabrain-demo

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Start development server
npm run dev
```

The application will be available at `http://localhost:3000`

### Available Scripts

```bash
npm run dev     # Start development server (hot reload enabled)
npm run build   # Build for production
npm run start   # Start production server
npm run lint    # Run ESLint checks
```

---

## Architecture & Implementation

### App Router Structure

This project uses Next.js 14's **App Router** (not Pages Router):

- **`app/layout.tsx`** - Root layout defining HTML structure, metadata, and global settings
- **`app/page.tsx`** - Home page component (server component by default)
- **`app/demo/page.tsx`** - Demo page with client-side interactivity

### Hebrew & RTL Implementation

**How RTL is configured:**

1. **Root Layout** (`app/layout.tsx`):
   ```typescript
   <html lang="he" dir="rtl">
   ```

2. **Metadata Configuration**:
   ```typescript
   export const metadata: Metadata = {
     title: "AquaBrain Demo",
     description: "הדגמה של אפליקציית Next.js עם תמיכה בעברית",
   }
   ```

3. **Tailwind CSS RTL Support** (`app/globals.css`):
   - Custom RTL utilities
   - Direction-aware spacing
   - Layout adjustments for RTL context

**Best Practices:**
- Use logical properties (start/end) instead of left/right in CSS
- Test layouts in both RTL and LTR contexts
- Use Tailwind's direction utilities where needed

### Dark Mode Implementation

Dark mode is implemented using **CSS custom properties**:

**Configuration** (`app/globals.css`):
```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    /* ... more variables ... */
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    /* ... dark theme values ... */
  }
}
```

**Usage in Components:**
```tsx
<div className="bg-background text-foreground">
  {/* Content automatically adapts to theme */}
</div>
```

The dark mode toggle functionality can be added using `next-themes` package (not currently installed).

### State Management

This project uses **React hooks** for state management:

**Example from Demo Page** (`app/demo/page.tsx`):
```typescript
'use client'

const [items, setItems] = useState<string[]>(['פריט 1', 'פריט 2', 'פריט 3'])
const [newItem, setNewItem] = useState('')

const addItem = () => {
  if (newItem.trim()) {
    setItems([...items, newItem])
    setNewItem('')
  }
}
```

**Key Patterns:**
- Use `'use client'` directive for components with interactivity
- Keep server components as default for better performance
- Lift state up when needed for component communication

### Styling Approach

**Tailwind CSS Philosophy:**

1. **Utility-First**: Compose styles using utility classes
2. **Responsive Design**: Mobile-first breakpoints (sm, md, lg, xl)
3. **Dark Mode**: Use dark: variant for theme-aware styling
4. **Custom Theme**: Extend via `tailwind.config.ts`

**Common Patterns:**
```tsx
// Responsive layout
<div className="flex flex-col md:flex-row gap-4">

// Dark mode variant
<button className="bg-white dark:bg-gray-800">

// RTL-aware spacing
<div className="mr-4 rtl:mr-0 rtl:ml-4">
```

**Component Organization:**
- Keep inline styles minimal
- Use Tailwind utilities for consistency
- Extract repeated patterns to components
- Consider using `@apply` in globals.css for common patterns

---

## Development Guidelines

### Adding New Pages

1. **Create page file** in `app/` directory:
   ```typescript
   // app/about/page.tsx
   export default function AboutPage() {
     return <div>About content</div>
   }
   ```

2. **Add metadata** (optional but recommended):
   ```typescript
   export const metadata = {
     title: "אודות - AquaBrain",
     description: "מידע על הפרויקט"
   }
   ```

3. **Update navigation** in existing pages if needed

### Creating Components

**Best Practices:**
- Create reusable components in `components/` directory (create if needed)
- Use TypeScript interfaces for props
- Document complex components with JSDoc comments
- Use `'use client'` only when necessary (interactivity, hooks, browser APIs)

**Example Component Structure:**
```typescript
// components/Card.tsx
interface CardProps {
  title: string
  children: React.ReactNode
  className?: string
}

export default function Card({ title, children, className = '' }: CardProps) {
  return (
    <div className={`rounded-lg border p-6 ${className}`}>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      {children}
    </div>
  )
}
```

### Styling Guidelines

1. **Use Tailwind utilities first** - Avoid custom CSS when possible
2. **Mobile-first approach** - Design for mobile, enhance for desktop
3. **Consistent spacing** - Use Tailwind's spacing scale (p-4, mb-6, etc.)
4. **Color system** - Use theme colors via CSS variables
5. **Typography** - Maintain consistent text sizes and weights

### TypeScript Best Practices

- **Define interfaces** for all component props
- **Use type annotations** for complex state
- **Avoid `any` type** - Use `unknown` if type is truly unknown
- **Enable strict mode** - Already enabled in tsconfig.json
- **Export types** when needed by other components

---

## Configuration Files

### Next.js Configuration (`next.config.ts`)

```typescript
const config: NextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['he'],
    defaultLocale: 'he',
  },
}
```

**Available Options:**
- `reactStrictMode`: Enables React strict mode (recommended)
- `i18n`: Internationalization configuration
- `images`: Image optimization settings (add if needed)
- `env`: Environment variables exposed to browser

### TypeScript Configuration (`tsconfig.json`)

**Key Settings:**
- `strict: true` - Enables all strict type checking
- `paths: { "@/*": ["./*"] }` - Allows `@/` imports from root
- `moduleResolution: "bundler"` - Modern module resolution

**Usage of path aliases:**
```typescript
// Instead of: import Component from '../../components/Component'
import Component from '@/components/Component'
```

### Tailwind Configuration (`tailwind.config.ts`)

**Content Paths** (where Tailwind looks for classes):
```typescript
content: [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
]
```

**Extending the Theme:**
```typescript
theme: {
  extend: {
    colors: {
      // Add custom colors here
    },
    fontFamily: {
      // Add custom fonts here
    }
  }
}
```

### Environment Variables (`.env.local`)

Create from template:
```bash
cp .env.example .env.local
```

**Available Variables:**
```env
NEXT_PUBLIC_APP_NAME=AquaBrain Demo
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Add API keys or other environment-specific values
# API_KEY=your_api_key_here
```

**Important:**
- Use `NEXT_PUBLIC_` prefix for browser-accessible variables
- Never commit `.env.local` to Git
- Keep sensitive data in environment variables, not in code

---

## Build & Deployment

### Production Build

```bash
# Create optimized production build
npm run build

# The build output will be in .next/ directory
# Static assets will be optimized and minified
```

**Build Output:**
- Optimized JavaScript bundles
- CSS extracted and minified
- Images optimized (if using next/image)
- Static pages pre-rendered

### Starting Production Server

```bash
# After building
npm run start

# Server will start on port 3000 by default
```

### Deployment Options

**Recommended Platforms:**

1. **Vercel** (Official Next.js platform):
   ```bash
   # Install Vercel CLI
   npm i -g vercel

   # Deploy
   vercel
   ```

2. **Netlify**:
   - Connect Git repository
   - Set build command: `npm run build`
   - Set publish directory: `.next`

3. **Docker** (self-hosted):
   ```dockerfile
   FROM node:18-alpine
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci
   COPY . .
   RUN npm run build
   CMD ["npm", "start"]
   ```

**Environment Variables in Production:**
- Set via platform dashboard (Vercel, Netlify, etc.)
- Or use `.env.production` file
- Ensure all `NEXT_PUBLIC_*` variables are set

---

## Pages Overview

### Home Page (`app/page.tsx`)

**Purpose:** Landing page introducing the project

**Key Features:**
- Project branding and title
- Feature highlights (Next.js 14, Hebrew support, Tailwind)
- Navigation to demo page
- Link to GitHub repository
- Responsive layout
- Dark mode compatible

**Content Structure:**
- Hero section with main title
- Feature cards showcasing technologies
- Call-to-action button to demo
- Footer with repository link

### Demo Page (`app/demo/page.tsx`)

**Purpose:** Interactive demonstration of React functionality

**Key Features:**
- List management (add/remove items)
- Client-side state management with React hooks
- Input handling and validation
- Dynamic rendering
- Hebrew UI with RTL support

**Implementation Highlights:**
```typescript
'use client' // Required for interactivity

const [items, setItems] = useState<string[]>([...])
const [newItem, setNewItem] = useState('')

const addItem = () => { /* ... */ }
const deleteItem = (index: number) => { /* ... */ }
```

**User Interactions:**
- Text input for new items
- Add button with validation (requires non-empty input)
- Delete button for each item
- Real-time UI updates

---

## Internationalization (i18n)

### Current Implementation

**Configured for Hebrew:**
- `next.config.ts`: Hebrew set as default and only locale
- Root layout: `<html lang="he" dir="rtl">`
- All UI text currently in Hebrew

### Adding More Languages

To add additional languages (e.g., English):

1. **Update Next.js config** (`next.config.ts`):
   ```typescript
   i18n: {
     locales: ['he', 'en'],
     defaultLocale: 'he',
   }
   ```

2. **Create translation files** (using next-intl):
   ```
   messages/
   ├── he.json
   └── en.json
   ```

3. **Set up middleware** for locale detection:
   ```typescript
   // middleware.ts
   import createMiddleware from 'next-intl/middleware'

   export default createMiddleware({
     locales: ['he', 'en'],
     defaultLocale: 'he'
   })
   ```

4. **Update components** to use translations:
   ```typescript
   import { useTranslations } from 'next-intl'

   const t = useTranslations('HomePage')
   return <h1>{t('title')}</h1>
   ```

---

## Common Tasks

### Adding a New Feature

1. **Plan the feature** - Identify affected components/pages
2. **Create necessary files** - Components, pages, utilities
3. **Implement with TypeScript** - Define types and interfaces
4. **Style with Tailwind** - Use utility classes
5. **Test RTL layout** - Ensure proper rendering in Hebrew
6. **Test dark mode** - Verify visibility in both themes
7. **Update documentation** - Add to CLAUDE.md if significant

### Debugging

**Development Tools:**
- React DevTools browser extension
- Next.js error overlay (automatic in dev mode)
- Console.log for state inspection
- TypeScript errors in IDE

**Common Issues:**

1. **Build errors:**
   ```bash
   # Clear Next.js cache
   rm -rf .next
   npm run build
   ```

2. **Hydration errors:**
   - Check for server/client content mismatch
   - Ensure `'use client'` is used for interactive components

3. **Styling issues:**
   - Verify Tailwind classes are correct
   - Check for conflicting CSS
   - Inspect with browser DevTools

### Performance Optimization

**Best Practices:**
- Use Next.js Image component for images
- Implement dynamic imports for heavy components
- Keep client components minimal
- Use Server Components as default
- Optimize fonts with next/font

**Example Dynamic Import:**
```typescript
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('@/components/HeavyComponent'), {
  loading: () => <p>Loading...</p>
})
```

---

## Testing

### Manual Testing Checklist

- [ ] All pages load without errors
- [ ] RTL layout displays correctly
- [ ] Dark mode toggle works (if implemented)
- [ ] Interactive features function as expected
- [ ] Mobile responsive design works
- [ ] Build completes successfully
- [ ] Production build runs correctly

### Adding Automated Tests

**Recommended Tools:**
- **Jest** - Unit testing
- **React Testing Library** - Component testing
- **Playwright** or **Cypress** - E2E testing

**Installation:**
```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
npm install --save-dev @playwright/test
```

---

## Browser Support

**Target Browsers:**
- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

**Compatibility Notes:**
- Modern JavaScript features (ES2022+)
- CSS Grid and Flexbox
- CSS Custom Properties (for dark mode)
- RTL text direction support

---

## Troubleshooting

### Common Issues

**1. Port 3000 already in use:**
```bash
# Use different port
PORT=3001 npm run dev

# Or kill existing process
lsof -ti:3000 | xargs kill
```

**2. Module not found errors:**
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

**3. TypeScript errors:**
```bash
# Check TypeScript configuration
npx tsc --noEmit

# If types are missing
npm install --save-dev @types/react @types/node
```

**4. Tailwind styles not applying:**
- Check `tailwind.config.ts` content paths
- Ensure classes are not dynamically concatenated
- Restart dev server after config changes

**5. Build fails:**
- Check for TypeScript errors
- Verify all dependencies are installed
- Clear `.next` directory and rebuild

### Getting Help

- **Next.js Documentation:** https://nextjs.org/docs
- **Tailwind CSS Docs:** https://tailwindcss.com/docs
- **React Documentation:** https://react.dev
- **TypeScript Handbook:** https://www.typescriptlang.org/docs

---

## Git Workflow

**Current Branch:** `claude/create-claude-md-011CUoUW6DMzYRvcrkGvbkqr`

### Recommended Workflow

1. **Create feature branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make changes and commit:**
   ```bash
   git add .
   git commit -m "feat: add new feature description"
   ```

3. **Push to remote:**
   ```bash
   git push -u origin feature/your-feature-name
   ```

4. **Create Pull Request** for review

### Commit Message Convention

```
<type>: <description>

Types:
- feat: New feature
- fix: Bug fix
- docs: Documentation changes
- style: Code style changes (formatting, etc.)
- refactor: Code refactoring
- test: Adding tests
- chore: Maintenance tasks
```

**Examples:**
- `feat: add user profile page`
- `fix: resolve RTL layout issue in navigation`
- `docs: update CLAUDE.md with new components`
- `style: format code with prettier`

---

## Future Enhancements

**Potential Improvements:**

1. **Dark Mode Toggle**
   - Add UI toggle button
   - Implement with `next-themes` package
   - Persist user preference

2. **More Languages**
   - Add English translation
   - Implement language switcher
   - Create translation workflow

3. **Component Library**
   - Create reusable UI components
   - Add Button, Card, Modal components
   - Document component API

4. **API Integration**
   - Add API routes in `app/api/`
   - Implement data fetching
   - Add loading states

5. **Authentication**
   - Integrate NextAuth.js
   - Add login/signup pages
   - Protected routes

6. **Testing**
   - Unit tests for utilities
   - Component tests
   - E2E test coverage

7. **SEO Optimization**
   - Add meta tags
   - Implement sitemap
   - Add robots.txt

8. **Performance**
   - Implement caching strategies
   - Optimize bundle size
   - Add analytics

---

## Important Notes for Claude Code

When working with this codebase:

1. **Always maintain RTL support** - Test Hebrew layout for any UI changes
2. **Use TypeScript types** - Don't use `any`, define proper interfaces
3. **Follow Tailwind patterns** - Use utility classes consistently
4. **Server Components first** - Only use `'use client'` when needed
5. **Test dark mode** - Ensure new components work in both themes
6. **Preserve existing patterns** - Match the coding style in existing files
7. **Update documentation** - Keep CLAUDE.md current with significant changes

---

**For questions or contributions, refer to the project repository or contact the maintainers.**
