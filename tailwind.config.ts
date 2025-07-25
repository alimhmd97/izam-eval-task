import type { Config as TailwindConfig } from 'tailwindcss';

const config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/components/**.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        montserrat: 'var(--font-montserrat)',
        readex: 'var(--font-readex-pro)',
      },
    },
  },
  plugins: [],
} satisfies TailwindConfig;

export default config;
