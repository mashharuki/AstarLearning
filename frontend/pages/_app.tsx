import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes';

/**
 * MyApp Component
 * @param param0 
 * @returns 
 */
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">  
      <Component {...pageProps} />
    </ThemeProvider>  
  ) 
}

export default MyApp
