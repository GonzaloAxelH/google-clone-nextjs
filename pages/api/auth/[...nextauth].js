import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"


const config = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clienteSecret: process.env.GITHUB_SECRET
        })
    ]
}

export default NextAuth(config)