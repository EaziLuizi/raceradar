import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            RaceRadar
          </Link>
          <div className="flex gap-6">
            <Link href="/races" className="text-gray-600 hover:text-gray-900">
              Races
            </Link>
            <Link href="/profile" className="text-gray-600 hover:text-gray-900">
              Profile
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
