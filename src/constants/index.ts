// Color Palette
export const COLORS = {
  primary: {
    blue: '#0099cc',
    blueDark: '#006699',
    red: '#e63946',
    redDark: '#d62828',
  },
  neutral: {
    white: '#ffffff',
    lightGray: '#f8fafc',
    mediumGray: '#6b7280',
    darkGray: '#1f2937',
    border: '#e5e7eb',
  },
  background: {
    light: '#f0f8ff',
    lighter: '#e6f3ff',
  },
} as const;

// App Configuration
export const APP_CONFIG = {
  name: '🪲TestExpo',
  defaultPage: 'userinfo' as const,
  maxTodoLength: 280,
  animationDuration: 300,
} as const;

// Form Validation
export const VALIDATION = {
  emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phoneRegex: /^\+?[\d\s\-\(\)]{10,}$/,
} as const;

// Responsive Breakpoints
export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1200,
} as const;