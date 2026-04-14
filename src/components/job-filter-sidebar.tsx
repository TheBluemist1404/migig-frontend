import {
  EXPERIENCE_LEVELS,
  JOB_CATEGORIES,
  PRICE_RANGES,
} from '@/data/constants'

interface JobFilterSidebarProps {
  selectedCategory: string
  selectedExperience: string
  selectedPriceRange: string
  onCategoryChange: (category: string) => void
  onExperienceChange: (experience: string) => void
  onPriceChange: (priceRange: string) => void
  mobileOpen?: boolean
}

export default function JobFilterSidebar({
  selectedCategory,
  selectedExperience,
  selectedPriceRange,
  onCategoryChange,
  onExperienceChange,
  onPriceChange,
  mobileOpen = false,
}: JobFilterSidebarProps) {
  const categories = [{ id: 'all', label: 'Tất cả' }, ...JOB_CATEGORIES]

  return (
    <aside
      className={`w-60 shrink-0 space-y-6 ${mobileOpen ? 'block' : 'hidden'} lg:block`}
    >
      {/* Category */}
      <div className="bg-card border border-border rounded-2xl p-5">
        <h3 className="text-sm font-semibold text-foreground mb-3">Danh mục</h3>
        <div className="flex flex-col gap-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`text-left text-sm px-3 py-2 rounded-lg transition-colors ${
                (selectedCategory || 'all') === cat.id
                  ? 'bg-primary/10 text-primary font-medium'
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price range */}
      <div className="bg-card border border-border rounded-2xl p-5">
        <h3 className="text-sm font-semibold text-foreground mb-3">Mức giá</h3>
        <div className="flex flex-col gap-2.5">
          {PRICE_RANGES.filter((r) => r.id !== 'all').map((range) => (
            <label
              key={range.id}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="priceRange"
                checked={(selectedPriceRange || 'all') === range.id}
                onChange={() => onPriceChange(range.id)}
                className="w-4 h-4 accent-[hsl(var(--primary))]"
              />
              <span className="text-sm text-muted-foreground">
                {range.label}
              </span>
            </label>
          ))}
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="priceRange"
              checked={!selectedPriceRange || selectedPriceRange === 'all'}
              onChange={() => onPriceChange('all')}
              className="w-4 h-4 accent-[hsl(var(--primary))]"
            />
            <span className="text-sm text-muted-foreground">Tất cả giá</span>
          </label>
        </div>
      </div>

      {/* Experience */}
      <div className="bg-card border border-border rounded-2xl p-5">
        <h3 className="text-sm font-semibold text-foreground mb-3">
          Kinh nghiệm
        </h3>
        <div className="flex flex-col gap-2.5">
          {EXPERIENCE_LEVELS.map((level) => (
            <label
              key={level.value}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="experience"
                checked={(selectedExperience || 'all') === level.value}
                onChange={() => onExperienceChange(level.value)}
                className="w-4 h-4 accent-[hsl(var(--primary))]"
              />
              <span className="text-sm text-muted-foreground">
                {level.label}
              </span>
            </label>
          ))}
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="experience"
              checked={!selectedExperience || selectedExperience === 'all'}
              onChange={() => onExperienceChange('all')}
              className="w-4 h-4 accent-[hsl(var(--primary))]"
            />
            <span className="text-sm text-muted-foreground">Tất cả</span>
          </label>
        </div>
      </div>
    </aside>
  )
}
