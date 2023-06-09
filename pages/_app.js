import '@/styles/globals.css'
import Navbar from './Navbar'

export default function App({ Component, pageProps }) {
  return (
    <div>
      <div style={{
        backgroundImage: "linear-gradient(45deg, #BFEAF5, #FEA1BF)",
        backgroundSize: "100%",
        backgroundRepeat: "repeat",
      }}
      >
        <Component {...pageProps} />
      </div>
    </div>
  )
}
