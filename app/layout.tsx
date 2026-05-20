import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Incident Runbook Automator — Convert Incident Docs into Executable Runbooks',
  description: 'Transform incident response documentation into interactive, trackable runbooks with progress tracking, timers, and team collaboration. Built for DevOps teams and SREs.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9900b7f9-cb50-40c6-9470-1fc7e0db68a6"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
