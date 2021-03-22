import Head from 'next/head'
import { useContext } from 'react'
import Link from 'next/link'
import AuthContext from '../context/AuthContext'

export default function Account() {

    const { user, logoutUser} = useContext(AuthContext)

    if(!user) {
        return (
            <div>
                <p>Please login or register</p>
                <Link href="/"><a>Go back</a></Link>
            </div>
        )
    }

    return (
        <div>
            <Head>
                <title>Account Page</title>
                <meta name="description" content="account page" />
            </Head>

            <div className="flex h-screen w-full items-center align-middle justify-center">
                <h2 className="text-md">Account Page, you logged in as a {user.email}</h2>
            </div>
                

            <Link href="/"><a onClick={logoutUser}>Logout</a></Link>

        </div>
    )
}