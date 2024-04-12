"use client"
import {SessionProvider, useSession} from "next-auth/react";

import * as React from "react"
import {ThemeProvider as NextThemesProvider} from "next-themes"
import {type ThemeProviderProps} from "next-themes/dist/types"
import {QueryClient, QueryClientProvider} from "react-query";

export function QueryClientProviderOverride({children}: { children: React.ReactNode }) {
    const queryClient = new QueryClient()

    return (<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>)
}

export function NextAuthProvider({children}: { children: React.ReactNode }) {
    return (<SessionProvider> {children} </SessionProvider>)
}

export function ThemeProvider({children, ...props}: ThemeProviderProps) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}