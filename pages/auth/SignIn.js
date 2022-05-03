import React from 'react'
import User from '../../components/User'
import { useSession, signIn, signOut } from "next-auth/react"
const SignIn = () => {

    const { data: session } = useSession()
    if (session) {
        return (
            <div>
                <h1>
                    Signed in as {session.user.email}
                </h1>
                <User />
                <button onClick={() => signOut()}>Sign Out</button>
            </div>
        )
    }
    return (<div>
        <h1>Not signed in <br /></h1>
        <button onClick={() => signIn()}>Sign in</button>
    </div>)
}

export default SignIn