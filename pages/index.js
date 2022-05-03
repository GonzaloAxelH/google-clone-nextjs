
import React from "react"
import { useSession, signIn, signOut } from "next-auth/react"
import User from "../components/User"

export default function Home() {

  const { data: session } = useSession()
  console.log(session)
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
