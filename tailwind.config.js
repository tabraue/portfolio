/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.jsx", 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      "green-l": '#88c8a0',
    },
    darkMode: 'media',
    extend: {},
    screens: {
        sm: { min: "640px", max: "767px" },
        // => @media (min-width: 640px to max-width 767px)

        md: { min: "768px", max: "1023px" },
        // => @media (min-width: 768px to max-width 1023px)

        lg: { min: "1024px", max: "1279px" },
        // => @media (min-width: 1024px  to max-width 1279px)

        xl: { min: "1280px", max: "1535px" },
        // => @media (min-width: 1280px  to max-width 1535px)

        "2xl": { min: "1536px" },
        // => @media (min-width: 1536px and higher)
      },
  },
  plugins: [require('flowbite/plugin')],
}

