interface Props {
  value: string
  onChange: (value: string) => void
}

function SearchBox({ value, onChange }: Props) {
  return (
    <input
      type="text"
      placeholder="search fruits..."
      value={value}
      onChange={(search) => onChange(search.target.value)}
    />
  )
}

export default SearchBox
