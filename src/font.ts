import { Roboto } from 'next/font/google';

//  is font ko layout ki file m import krna h 
export const roboto = Roboto({
    subsets: ['latin'], // Add other subsets like 'latin-ext' if needed
    weight: ['400', '700'], // Specify font weights, e.g., 400 for regular and 700 for bold
    style: ['normal', 'italic'], // Include styles like normal or italic
    display: 'swap', // 'swap' for better loading performance
  });
