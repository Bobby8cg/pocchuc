/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Surfaces
        'surface-base-light': '#FAF8F5',
        'surface-base-dark': '#0A1F26',
        'surface-elevated-light': '#FFFFFF',
        'surface-elevated-dark': '#152B33',
        // Ink
        'ink-primary-light': '#0A1F26',
        'ink-primary-dark': '#FAF8F5',
        // Accents
        'accent-primary': '#E8862B',
        'accent-primary-hover': '#C84B31',
        // Status
        'status-success': '#2F5D3A',
        'status-warning': '#C97B1F',
        'status-error': '#B23A2E',
        // Dividers
        'divider-light': '#E5E2DC',
        'divider-dark': '#1F3842',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['72px', { lineHeight: '80px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-lg': ['56px', { lineHeight: '64px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-md': ['44px', { lineHeight: '52px', letterSpacing: '-0.01em', fontWeight: '700' }],
        'h1': ['36px', { lineHeight: '44px', letterSpacing: '-0.01em', fontWeight: '700' }],
        'h2': ['28px', { lineHeight: '36px', letterSpacing: '-0.005em', fontWeight: '600' }],
        'h3': ['22px', { lineHeight: '30px', fontWeight: '600' }],
        'h4': ['18px', { lineHeight: '26px', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'button': ['14px', { lineHeight: '20px', letterSpacing: '0.01em', fontWeight: '600' }],
        'caption': ['12px', { lineHeight: '16px', letterSpacing: '0.08em', fontWeight: '500' }],
        'overline': ['11px', { lineHeight: '16px', letterSpacing: '0.1em', fontWeight: '600' }],
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '20px',
        '2xl': '32px',
      },
      spacing: {
        '1.5': '12px',
        '2.5': '40px',
        '7': '40px',
        '9': '64px',
        '11': '96px',
        '12': '128px',
      },
    },
  },
  plugins: [],
};
