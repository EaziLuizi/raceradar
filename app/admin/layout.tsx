import { createClient } from '@/lib/supabase-server'
import { redirect } from 'next/navigation'
import LogoutButton from './LogoutButton'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    redirect('/auth/login')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-orange-600">RaceRadar Admin</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">{session.user.email}</span>
            <LogoutButton />
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-8 py-8">
        {children}
      </main>
    </div>
  )
}