import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'QueryCost — Predict SQL Query Costs Before You Run Them',
  description: 'Analyze SQL queries and predict execution costs on cloud databases. Get optimization suggestions before running expensive operations.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="25f18dfb-29df-47d2-a1ba-a8d55bf5ffce"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
