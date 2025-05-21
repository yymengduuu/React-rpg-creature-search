export default function SearchForm({ input, setInput, handleKeyDown, handleSearch, error }) {
  return (
    <>
    <section className="search-page">
      <p>Search for Creature Name or ID:</p>
      <div className="input-group">
        <input
          value={input}
          placeholder="Enter creature name or ID"
          type="text"
          className="search-input"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown= {handleKeyDown}
        />
        <button
          className="search-button"
          onClick={handleSearch}
        >search</button>
      </div>
      {error && <h2>Creature not found, try a smaller number!</h2>}
    </section>
    </>
  )
}