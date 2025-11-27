import { createClient } from '@/lib/supabase-server'
import Link from 'next/link'

export default async function AdminPage() {
  const supabase = await createClient()
  
  const { data: races, error } = await supabase
    .from('races')
    .select('*')
    .order('race_date', { ascending: true })

  if (error) {
    console.error('Error fetching races:', error)
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Races</h2>    
        <Link
          href="/admin/races/new"
          className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
        >
          + Add New Race
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        {!races || races.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            No races yet. Add your first race!
          </div>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Race Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {races.map((race) => (
                <tr key={race.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{race.name}</div>
                    {race.featured && (
                      <span className="text-xs text-orange-600">⭐ Featured</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {new Date(race.race_date).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{race.location_city}</div>
                    <div className="text-xs text-gray-500">{race.location_province}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800">
                      {race.race_type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {race.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link
                      href={`/admin/races/${race.id}/edit`}
                      className="text-orange-600 hover:text-orange-900 mr-4"
                    >
                      Edit
                    </Link>
                    <Link
                      href={`/races/${race.slug}`}
                      target="_blank"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}