import { useEffect, useState } from 'react'

interface ApiStatus {
  status: 'loading' | 'ok' | 'error'
}

function App() {
  const [api, setApi] = useState<ApiStatus>({ status: 'loading' })

  useEffect(() => {
    fetch('http://localhost:8000/api')
      .then((res) => {
        if (res.ok) setApi({ status: 'ok' })
        else setApi({ status: 'error' })
      })
      .catch(() => setApi({ status: 'error' }))
  }, [])

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-900">fullstack-lab</h1>
      <p className="text-gray-500">Symfony + React — plateforme pédagogique</p>

      <div className="mt-4 px-4 py-2 rounded-full text-sm font-medium">
        {api.status === 'loading' && (
          <span className="text-gray-400">Connexion à l'API...</span>
        )}
        {api.status === 'ok' && (
          <span className="text-green-600 bg-green-50 px-3 py-1 rounded-full">
            ✓ API Symfony opérationnelle
          </span>
        )}
        {api.status === 'error' && (
          <span className="text-red-600 bg-red-50 px-3 py-1 rounded-full">
            ✗ API inaccessible
          </span>
        )}
      </div>
    </main>
  )
}

export default App
