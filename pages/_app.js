import '../styles/tailwind.css'

const prefix =
  process.env.URL_DEPLOY || "";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} >
    <link rel="shortcut icon" href={prefix + '/favicon.ico'} />
  </Component>
}

export default MyApp
