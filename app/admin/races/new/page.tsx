import RaceForm from '../RaceForm'

export default function NewRacePage() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Add New Race</h2>
      <div className="bg-white rounded-lg shadow p-8">
        <RaceForm mode="create" />
      </div>
    </div>
  )
}