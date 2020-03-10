import './index.css'
import withData from '../lib/apollo'

// This default export is required in a new `pages/_app.js` file.
export default withData(({ Component, pageProps }) => {
    return <Component {...pageProps} />
});