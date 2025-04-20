import { Inter } from 'next/font/google'
import { handler } from './api/hello'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="Home">
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Twitter Clone</h1>
        <handler />
      </main>
    </div>
  )
}