import { withTRPC } from '@trpc/next'
import '../styles/globals.css'
import { AppRouter } from './api/trpc/[trpc]'
import superjson from 'superjson'

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

export default withTRPC<AppRouter>({
    config() {
        const url = 'http://localhost:3000/api/trpc'
        return { url, transformer: superjson }
    },
    ssr: false
})(MyApp)
