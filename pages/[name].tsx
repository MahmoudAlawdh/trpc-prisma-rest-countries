import Head from 'next/head'
import { useRouter } from 'next/router'
import { trpc } from '../helpers/trpc'
import styles from '../styles/Home.module.css'

export default function Country() {
    const router = useRouter()
    const { data: country } = trpc.useQuery(['getCountry', router.query.name as string])

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {country && (
                <div>
                    <h1>{country.name}</h1>
                    <p>Capital: {country.capital}</p>
                    <p>Continent: {country.continent}</p>
                    <p>Region: {country.region}</p>
                    <p>Population: {country.population}</p>
                </div>
            )}
        </div>
    )
}
