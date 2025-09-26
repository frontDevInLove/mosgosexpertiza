export interface SteRow {
  id: number
  steName: string
  isActual: boolean
  priceEndDate: number | null // timestamp (ms)
  priceNotNds: number | null
  nds: number | null
  price: number | null // рассчитывается
  fillEndDate: number | null // readonly
}
