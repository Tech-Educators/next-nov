export const metadata = {
  title: 'Sam"s website!',
  description: 'Generated by my mind!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <h1>This is a layout header!</h1>
      {children}
      </body>
    </html>
  )
}
