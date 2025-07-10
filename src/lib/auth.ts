import { PrismaAdapter } from '@auth/prisma-adapter'
import { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { prisma } from '@/lib/prisma'

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: 'jwt',
    },
    providers: [
        CredentialsProvider({
        name: 'Credentials',
        credentials: {
            email: { label: 'Email', type: 'text' },
        },
        async authorize(credentials) {
            // 🔒 Basic allow-all placeholder
            if (!credentials?.email) return null

            const user = await prisma.user.findUnique({
            where: { email: credentials.email },
            })

            return user
        },
        }),
    ],
}