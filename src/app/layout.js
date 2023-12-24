import './globals.css'


export const metadata = {
  title: 'Restary',
  description: 'This is a fake website for my portfolio.',
  favicon: '/favicon.ico',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
