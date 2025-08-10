/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(-902deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 27.91%);',
      },
      fontFamily: {
        Urbanist: 'Urbanist',
        gilroy: 'Gilroy',
      },
      dropShadow: {
        'phone-shadow': '0px 15px 4px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        'gray-1': 'hsl(0,0%,93.3%)',
        'gray-2': 'hsl(0,0%,92.9%)',
        'gray-3': 'hsl(0,0%,31%)',
        'black-1': 'hsl(240,0.9%,22.9%)',
        'blue-1': 'hsl(221.3,51.1%,18.4%)',
        'blue-2': 'hsl(206.2,63%,58.6%)',
        'blue-3': 'hsl(183.2,67.1%,48.8%)',
        'orange-1': 'hsl(15,83.5%,64.3%)',
        'orange-1-hover': 'hsl(15,60.5%,64.3%)',
        'green-1': 'hsl(100,35.3%,93.3%)',
        'red-1': 'hsl(300,23.5%,93.3%)',
        'sea-1': 'hsl(182,100%,39%)',
        'white-1': 'hsl(225,11%,93%)',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/line-clamp')],
};
