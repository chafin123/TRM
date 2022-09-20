import '../styles/globals.css'
import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('preline')
  },
 [])
  return <Component {...pageProps} />
}

export default MyApp
