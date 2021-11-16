import '../styles/globals.css'
import '../demo1/dist/assets/css/style.bundle.css'
import '../demo1/dist/assets/plugins/global/plugins.bundle.css'
import Layout from '../component/Layout'




function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )


}

export default MyApp
