/**
 * Округляет число до двух знаков после запятой.
 *
 * @param {number} v - Число для округления
 * @returns {number} Число, округлённое до двух десятичных знаков
 *
 * @example
 * round2(12.3456) // 12.35
 * round2(9.1) // 9.1
 */
export const round2 = (v: number): number => {
  return Math.round(v * 100) / 100
}

/**
 * Преобразует значение в число. Если значение не приводится к числу — возвращает значение по умолчанию.
 *
 * @param {unknown} v - Значение для преобразования
 * @param {number} [def=0] - Значение по умолчанию, возвращается если `v` не является конечным числом
 * @returns {number} Преобразованное число или значение по умолчанию
 *
 * @example
 * toNum('123.45') // 123.45
 * toNum('abc', 10) // 10
 * toNum(null) // 0
 */
export const toNum = (v: unknown, def = 0): number => {
  const n = Number(v)
  return Number.isFinite(n) ? n : def
}
