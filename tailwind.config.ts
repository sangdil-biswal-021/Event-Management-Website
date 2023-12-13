import type { Config } from 'tailwindcss'
import {nextui} from "@nextui-org/react" ;

//tailwind classes accessible only to these paths
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/providers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      colors:{
        primary: '#000',
      },
    },
  },
  plugins: [nextui()],
}
export default config;
