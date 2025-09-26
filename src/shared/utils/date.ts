/**
 * Преобразует timestamp (в миллисекундах) в строку формата `DD.MM.YYYY`.
 *
 * Если передано `null` или `0`, вернёт пустую строку.
 *
 * @param {number | null} ts - Временная метка в миллисекундах (timestamp)
 * @returns {string} Строка формата "дд.мм.гггг" или пустая строка
 *
 * @example
 * formatDate(1672531200000) // "01.01.2023"
 * formatDate(null)          // ""
 */
export const formatDate = (ts: number | null): string => {
  if (!ts) return ''
  const d = new Date(ts)
  const dd = String(d.getDate()).padStart(2, '0')
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  const yyyy = d.getFullYear()
  return `${dd}.${mm}.${yyyy}`
}
