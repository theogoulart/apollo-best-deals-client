import './index.css'
import { withApollo } from '../lib/apollo'

// This default export is required in a new `pages/_app.js` file.
export default withApollo({ssr: true})(({ Component, pageProps }) => {
    return <Component {...pageProps} />
});