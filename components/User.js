import { useSession } from 'next-auth/react'
import React from 'react'

const User = () => {
    const { data: session } = useSession()
    return (
        <div>
            <img src={session.user.image} />
        </div>
    )
}

export default User