'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase-browser'

interface RaceFormProps {
  race?: any
  mode: 'create' | 'edit'
}

interface Distance {
  distance: string
  slots: number
  entry_fee: number
}

export default function RaceForm({ race, mode }: RaceFormProps) {
  const router = useRouter()
  const supabase = createClient()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Helper to generate slug from name
  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
  }

  // Parse existing distances or start with empty array
  const initialDistances: Distance[] = race?.distances || []

  const [formData, setFormData] = useState({
    name: race?.name || '',
    slug: race?.slug || '',
    description: race?.description || '',
    race_date: race?.race_date || '',
    entry_opens_date: race?.entry_opens_date || '',
    entry_closes_date: race?.entry_closes_date || '',
    location_city: race?.location_city || '',
    location_province: race?.location_province || '',
    location_venue: race?.location_venue || '',
    race_type: race?.race_type || 'trail',
    terrain: race?.terrain || '',
    elevation_gain: race?.elevation_gain || '',
    difficulty: race?.difficulty || '',
    website_url: race?.website_url || '',
    entry_url: race?.entry_url || '',
    organizer_name: race?.organizer_name || '',
    organizer_email: race?.organizer_email || '',
    organizer_phone: race?.organizer_phone || '',
    image_url: race?.image_url || '',
    featured: race?.featured || false,
    status: race?.status || 'active',
  })

  const [distances, setDistances] = useState<Distance[]>(initialDistances)

  const addDistance = () => {
    setDistances([...distances, { distance: '', slots: 0, entry_fee: 0 }])
  }

  const removeDistance = (index: number) => {
    setDistances(distances.filter((_, i) => i !== index))
  }

  const updateDistance = (index: number, field: keyof Distance, value: string | number) => {
    const updated = [...distances]
    updated[index] = { ...updated[index], [field]: value }
    setDistances(updated)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      // Prepare data for submission
      const submitData: any = {
        name: formData.name,
        slug: formData.slug || generateSlug(formData.name),
        description: formData.description,
        race_date: formData.race_date,
        entry_opens_date: formData.entry_opens_date || null,
        entry_closes_date: formData.entry_closes_date || null,
        location_city: formData.location_city,
        location_province: formData.location_province,
        location_venue: formData.location_venue || null,
        race_type: formData.race_type,
        distances: distances,
        terrain: formData.terrain || null,
        elevation_gain: formData.elevation_gain ? parseInt(formData.elevation_gain as string) : null,
        difficulty: formData.difficulty || null,
        website_url: formData.website_url || null,
        entry_url: formData.entry_url || null,
        organizer_name: formData.organizer_name || null,
        organizer_email: formData.organizer_email || null,
        organizer_phone: formData.organizer_phone || null,
        image_url: formData.image_url || null,
        featured: formData.featured,
        status: formData.status,
      }

      if (mode === 'create') {
        const { error } = await supabase
          .from('races')
          .insert([submitData])

        if (error) throw error
      } else {
        const { error } = await supabase
          .from('races')
          .update(submitData)
          .eq('id', race.id)

        if (error) throw error
      }

      router.push('/admin')
      router.refresh()
    } catch (err: any) {
      setError(err.message || 'Failed to save race')
      setLoading(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData((prev) => ({ ...prev, [name]: checked }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
      
      // Auto-generate slug when name changes
      if (name === 'name' && mode === 'create') {
        setFormData((prev) => ({ ...prev, slug: generateSlug(value) }))
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg">
          {error}
        </div>
      )}

      {/* Basic Info */}
      <div className="bg-stone-50 p-6 rounded-lg border border-gray-300">
        <h3 className="font-semibold text-lg mb-4 text-gray-900">Basic Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-2 text-gray-900">Race Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white text-gray-900"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-2 text-gray-900">Slug *</label>
            <input
              type="text"
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white text-gray-900"
              required
            />
            <p className="text-xs text-gray-700 mt-1">URL-friendly version (auto-generated from name)</p>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-2 text-gray-900">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white text-gray-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-900">Race Type *</label>
            <select
              name="race_type"
              value={formData.race_type}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white text-gray-900"
              required
            >
              <option value="trail">Trail</option>
              <option value="road">Road</option>
              <option value="ultra">Ultra</option>
              <option value="cycling">Cycling</option>
              <option value="mtb">MTB</option>
              <option value="triathlon">Triathlon</option>
              <option value="swimming">Swimming</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-900">Status *</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white text-gray-900"
              required
            >
              <option value="active">Active</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="featured"
                checked={formData.featured}
                onChange={handleChange}
                className="rounded"
              />
              <span className="text-sm font-medium text-gray-900">Featured Race</span>
            </label>
          </div>
        </div>
      </div>

      {/* Dates */}
      <div className="bg-stone-50 p-6 rounded-lg border border-gray-300">
        <h3 className="font-semibold text-lg mb-4 text-gray-900">Dates</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-900">Race Date *</label>
            <input
              type="date"
              name="race_date"
              value={formData.race_date}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white text-gray-900"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-900">Entry Opens</label>
            <input
              type="date"
              name="entry_opens_date"
              value={formData.entry_opens_date}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white text-gray-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-900">Entry Closes</label>
            <input
              type="date"
              name="entry_closes_date"
              value={formData.entry_closes_date}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white text-gray-900"
            />
          </div>
        </div>
      </div>

      {/* Location */}
      <div className="bg-stone-50 p-6 rounded-lg border border-gray-300">
        <h3 className="font-semibold text-lg mb-4 text-gray-900">Location</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-900">City *</label>
            <input
              type="text"
              name="location_city"
              value={formData.location_city}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white text-gray-900"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-900">Province *</label>
            <select
              name="location_province"
              value={formData.location_province}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white text-gray-900"
              required
            >
              <option value="">Select Province</option>
              <option value="Western Cape">Western Cape</option>
              <option value="Gauteng">Gauteng</option>
              <option value="KwaZulu-Natal">KwaZulu-Natal</option>
              <option value="Eastern Cape">Eastern Cape</option>
              <option value="Free State">Free State</option>
              <option value="Limpopo">Limpopo</option>
              <option value="Mpumalanga">Mpumalanga</option>
              <option value="Northern Cape">Northern Cape</option>
              <option value="North West">North West</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-2 text-gray-900">Venue</label>
            <input
              type="text"
              name="location_venue"
              value={formData.location_venue}
              onChange={handleChange}
              placeholder="e.g., Jonkershoek Nature Reserve"
              className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white text-gray-900"
            />
          </div>
        </div>
      </div>

      {/* Distances */}
      <div className="bg-stone-50 p-6 rounded-lg border border-gray-300">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-lg text-gray-900">Race Distances & Pricing</h3>
          <button
            type="button"
            onClick={addDistance}
            className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-sm"
          >
            + Add Distance
          </button>
        </div>
        
        {distances.length === 0 ? (
          <p className="text-gray-700 text-sm">No distances added yet. Click "Add Distance" to create one.</p>
        ) : (
          <div className="space-y-4">
            {distances.map((dist, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border border-gray-400">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-900">Distance</label>
                    <input
                      type="text"
                      value={dist.distance}
                      onChange={(e) => updateDistance(index, 'distance', e.target.value)}
                      placeholder="e.g., 42.2km"
                      className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-900">Slots</label>
                    <input
                      type="number"
                      value={dist.slots}
                      onChange={(e) => updateDistance(index, 'slots', parseInt(e.target.value) || 0)}
                      placeholder="e.g., 3000"
                      className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-900">Entry Fee (R)</label>
                    <input
                      type="number"
                      value={dist.entry_fee}
                      onChange={(e) => updateDistance(index, 'entry_fee', parseInt(e.target.value) || 0)}
                      placeholder="e.g., 380"
                      className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900"
                    />
                  </div>
                  <div className="flex items-end">
                    <button
                      type="button"
                      onClick={() => removeDistance(index)}
                      className="w-full px-3 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Race Details */}
      <div className="bg-stone-50 p-6 rounded-lg border border-gray-300">
        <h3 className="font-semibold text-lg mb-4 text-gray-900">Race Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-900">Terrain</label>
            <select
              name="terrain"
              value={formData.terrain}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white text-gray-900"
            >
              <option value="">Select Terrain</option>
              <option value="road">Road</option>
              <option value="trail">Trail</option>
              <option value="mountain">Mountain</option>
              <option value="mixed">Mixed</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-900">Difficulty</label>
            <select
              name="difficulty"
              value={formData.difficulty}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white text-gray-900"
            >
              <option value="">Select Difficulty</option>
              <option value="easy">Easy</option>
              <option value="moderate">Moderate</option>
              <option value="hard">Hard</option>
              <option value="extreme">Extreme</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-900">Elevation Gain (m)</label>
            <input
              type="number"
              name="elevation_gain"
              value={formData.elevation_gain}
              onChange={handleChange}
              placeholder="1200"
              className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white text-gray-900"
            />
          </div>
        </div>
      </div>

      {/* Organizer */}
      <div className="bg-stone-50 p-6 rounded-lg border border-gray-300">
        <h3 className="font-semibold text-lg mb-4 text-gray-900">Organizer</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-900">Organizer Name</label>
            <input
              type="text"
              name="organizer_name"
              value={formData.organizer_name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white text-gray-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-900">Organizer Email</label>
            <input
              type="email"
              name="organizer_email"
              value={formData.organizer_email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white text-gray-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-900">Organizer Phone</label>
            <input
              type="tel"
              name="organizer_phone"
              value={formData.organizer_phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white text-gray-900"
            />
          </div>
        </div>
      </div>

      {/* URLs */}
      <div className="bg-stone-50 p-6 rounded-lg border border-gray-300">
        <h3 className="font-semibold text-lg mb-4 text-gray-900">Links & Media</h3>
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-900">Website URL</label>
            <input
              type="url"
              name="website_url"
              value={formData.website_url}
              onChange={handleChange}
              placeholder="https://"
              className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white text-gray-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-900">Entry/Registration URL</label>
            <input
              type="url"
              name="entry_url"
              value={formData.entry_url}
              onChange={handleChange}
              placeholder="https://"
              className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white text-gray-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-900">Image URL</label>
            <input
              type="url"
              name="image_url"
              value={formData.image_url}
              onChange={handleChange}
              placeholder="https://"
              className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white text-gray-900"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-4 pt-4">
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 disabled:opacity-50 transition"
        >
          {loading ? 'Saving...' : mode === 'create' ? 'Create Race' : 'Update Race'}
        </button>
        <button
          type="button"
          onClick={() => router.push('/admin')}
          className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}