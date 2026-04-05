import { Search } from 'lucide-react'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export default function SearchBar({
  value,
  onChange,
  placeholder = 'Tìm job, kỹ năng...',
}: SearchBarProps) {
  return (
    <div className="relative flex-1 min-w-60">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
      <input
        type="text"
        placeholder={placeholder}
        className="w-full pl-9 pr-4 h-11 rounded-lg border border-border bg-card text-foreground text-sm outline-none focus:ring-2 focus:ring-ring transition-colors"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
