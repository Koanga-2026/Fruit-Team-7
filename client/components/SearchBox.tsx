interface Props {
  value: string
  onChange: (value: string) => void
  currentSeason: string
  setCurrentSeason: (season: string) => void
  sortPrice: string
  setSortPrice: (order: string) => void
}
//create a dropdown for the searchbar (season filter and sort price - similar to Dave MyBlog dropdown)
function SearchBox({
  value,
  onChange,
  currentSeason,
  setCurrentSeason,
  sortPrice,
  setSortPrice,
}: Props) {
  return (
    <div>
      <input
        type="text"
        placeholder="search fruits..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      <select
        value={currentSeason}
        onChange={(e) => setCurrentSeason(e.target.value)}
      >
        <option value="All">All Seasons</option>
        <option value="Summer">Summer</option>
        <option value="Autumn">Autumn</option>
        <option value="Winter">Winter</option>
        <option value="Spring">Spring</option>
      </select>

      <div>
        <button onClick={() => setSortPrice('low-high')}>
          Price: Low to High
        </button>
        <button onClick={() => setSortPrice('high-low')}>
          Price: High to Low
        </button>
        <button onClick={() => setSortPrice('default')}>Reset Order</button>
      </div>
    </div>
  )
}

export default SearchBox
