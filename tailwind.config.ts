import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        arabic: ['Tajawal', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.875rem', { lineHeight: '1.4' }],      /* 14px */
        'sm': ['1rem', { lineHeight: '1.5' }],           /* 16px */
        'base': ['1.125rem', { lineHeight: '1.6' }],    /* 18px - increased from 16px */
        'lg': ['1.375rem', { lineHeight: '1.65' }],     /* 22px - increased from 18px */
        'xl': ['1.625rem', { lineHeight: '1.7' }],      /* 26px - increased from 20px */
        '2xl': ['2rem', { lineHeight: '1.75' }],        /* 32px - increased from 24px */
        '3xl': ['2.5rem', { lineHeight: '1.8' }],       /* 40px - increased from 30px */
        '4xl': ['3rem', { lineHeight: '1.8' }],         /* 48px - increased from 36px */
        '5xl': ['3.75rem', { lineHeight: '1.85' }],     /* 60px - increased from 48px */
        '6xl': ['4.5rem', { lineHeight: '1.9' }],       /* 72px - increased from 60px */
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        hope: "hsl(var(--hope))",
        urgency: "hsl(var(--urgency))",
        trust: "hsl(var(--trust))",
        progress: "hsl(var(--progress))",
        peace: "hsl(var(--peace))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-up": "slide-up 0.5s ease-out",
        "count-up": "count-up 2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
