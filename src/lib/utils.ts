/** Format số tiền sang VND */
export function formatVND(amount: number): string {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(amount)
}

/** Format ngày sang locale Việt Nam */
export function formatDateVN(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return new Intl.DateTimeFormat('vi-VN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(d)
}

/** Format thời gian tương đối bằng tiếng Việt ("2 giờ trước") */
export function formatTimeAgo(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date
  const now = new Date()
  const seconds = Math.floor((now.getTime() - d.getTime()) / 1000)

  const intervals: Array<[string, number]> = [
    ['năm', 31536000],
    ['tháng', 2592000],
    ['tuần', 604800],
    ['ngày', 86400],
    ['giờ', 3600],
    ['phút', 60],
  ]

  for (const [name, secondsInUnit] of intervals) {
    const interval = Math.floor(seconds / secondsInUnit)
    if (interval >= 1) {
      return `${interval} ${name} trước`
    }
  }

  return 'vừa xong'
}

/** Truncate text với ellipsis */
export function truncate(text: string, length: number): string {
  return text.length > length ? text.substring(0, length) + '...' : text
}

/** Lấy initials từ tên (VD: "Nguyễn Hà" → "NH") */
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}
