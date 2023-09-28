import { Quicksand } from 'next/font/google';

// Font: Quicksand
export const quicksand = Quicksand({
  display: 'swap',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  fallback: ['system-ui', 'Arial', 'sans-serif'],
  variable: '--font-quicksand',
});
