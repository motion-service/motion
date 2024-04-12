import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

//TODO https://medium.com/@wb-ts/how-to-build-a-simple-chat-app-using-next-js-typescript-socket-io-34c45e56d679
export const authOptions = {
    providers: [
        Google({
                clientId: process.env.GOOGLE_CLIENT_ID as string,
                clientSecret: process.env.GOOGLE_CLIENT_PASSWORD as string
            },
        )
    ],
    callbacks: {
        async signIn({user, profile, email}: any) {
            await fetch('http://localhost:8090/auth/register', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(user),
            });
            return true;
        },
    },

    events: {
        signOut: ({session}: any) => {
            fetch('http://localhost:8090/api/auth/account/', {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({keyword: 'menaiala'}),
            }).then(value => {
                value.json().then(value1 => {
                    console.log("signOut Delete value1", value1)
                })
            })
        }
    },
}

const handlers = NextAuth(authOptions)
export {handlers as GET, handlers as POST}