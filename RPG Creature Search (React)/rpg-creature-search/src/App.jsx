import { useState } from 'react'
import SearchForm from './components/SearchForm'  
import CreatureInfo from './components/CreatureInfo'
import StatsTable from './components/StatsTable'

export default function App() {
  const [input, setInput] = useState('')
  const [creature, setCreature] = useState('')
  const [error, setError] = useState(null)
  
  const handleSearch = async () => {
    if (!input.trim()) return;
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${input.toLowerCase()}`)
            if(!res.ok) {
                throw new Error("Creature not found");
            }
            const data = await res.json();
            setCreature(data);
            setError(null);
        }catch(err) {
                setCreature(null);
                setError(err.message);
            }
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch(input.trim())
        }
    }

  
  return (
    <>
      <header>
        <h1>RPG Creature Search App</h1>
      </header>
      <main>
        <SearchForm
          error={error}
          input={input}
          setInput={setInput}
          handleKeyDown={handleKeyDown}
          handleSearch={handleSearch}
        />
        <CreatureInfo
          creature={creature}
        />
        <StatsTable
          creature={creature}
        />
      </main>
    </>
  )
}