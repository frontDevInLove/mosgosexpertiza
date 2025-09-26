import { ref, reactive, onMounted, h } from 'vue'
import type { DataTableColumns } from 'naive-ui'
import type { SteRow } from '@/shared/types/ste'
import { round2, toNum } from '@/shared/utils/number'
import { formatDate } from '@/shared/utils/date'
import SteCellSwitch from '@/components/ste-table/components/SteCellSwitch.vue'
import SteCellDate from '@/components/ste-table/components/SteCellDate.vue'
import SteCellNumber from '@/components/ste-table/components/SteCellNumber.vue'

/** Имитация сетевого GET с задержкой */
function pretendGet<T>(payload: T, ms = 600): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(structuredClone(payload)), ms))
}

/** Мок-данные — «как будто с сервера» */
const mock: SteRow[] = [
  {
    id: 1,
    steName: 'АЗОТ газообразный сорт 1, баллон 50 л',
    isActual: true,
    priceEndDate: null,
    priceNotNds: 1200,
    nds: 20,
    price: null,
    fillEndDate: Date.parse('2023-03-21'),
  },
  {
    id: 2,
    steName: 'OZONE MICRONE H-67 набор фильтров',
    isActual: true,
    priceEndDate: null,
    priceNotNds: 850,
    nds: 20,
    price: null,
    fillEndDate: Date.parse('2023-03-21'),
  },
  {
    id: 3,
    steName: 'Электролит технический 1 л',
    isActual: false,
    priceEndDate: null,
    priceNotNds: 300,
    nds: 10,
    price: null,
    fillEndDate: Date.parse('2023-03-21'),
  },
]

/** Пересчёт: price = base + base * nds / 100 */
function computePrice(row: SteRow): void {
  const base = toNum(row.priceNotNds)
  const tax = toNum(row.nds)
  row.price = round2(base + (base * tax) / 100)
}

/** Консольный лог состояния строки */
function logRow(row: SteRow): void {
  console.log({
    id: row.id,
    isActual: row.isActual,
    price: row.price,
    priceNotNds: row.priceNotNds,
    nds: row.nds,
    priceEndDate: row.priceEndDate,
  })
}

/** Загрузка списка: имитируем сервер и считаем price */
async function getSteList(): Promise<SteRow[]> {
  const data = await pretendGet(mock, 800)
  data.forEach(computePrice)
  return data
}

/**
 * Фабрика колонок таблицы.
 */
function getColumns(): DataTableColumns<SteRow> {
  return [
    {
      key: 'steName',
      title: 'Наименование СТЕ',
      sorter: (a, b) => a.steName.localeCompare(b.steName),
      ellipsis: { tooltip: true },
    },
    {
      key: 'isActual',
      title: 'В наличии',
      align: 'center',
      render: (row) =>
        h(SteCellSwitch, {
          modelValue: row.isActual,
          'onUpdate:modelValue': (v: boolean) => {
            row.isActual = v
            logRow(row)
          },
        }),
    },
    {
      key: 'priceEndDate',
      title: 'Срок действия предоставленных сведений',
      render: (row) =>
        h(SteCellDate, {
          modelValue: row.priceEndDate,
          'onUpdate:modelValue': (v: number | null) => {
            row.priceEndDate = v
            logRow(row)
          },
        }),
    },
    {
      key: 'priceNotNds',
      title: 'Цена, руб. без НДС',
      render: (row) =>
        h(SteCellNumber, {
          modelValue: row.priceNotNds,
          precision: 2,
          min: 0,
          placeholder: 'Введите значение',
          'onUpdate:modelValue': (v: number | null) => {
            row.priceNotNds = v
            computePrice(row)
            logRow(row)
          },
        }),
    },
    {
      key: 'nds',
      title: 'НДС, %',
      render: (row) =>
        h(SteCellNumber, {
          modelValue: row.nds,
          min: 0,
          max: 100,
          precision: 2,
          placeholder: 'Введите значение',
          'onUpdate:modelValue': (v: number | null) => {
            row.nds = v
            computePrice(row)
            logRow(row)
          },
        }),
    },
    {
      key: 'price',
      title: 'Цена, руб. с НДС',
    },
    {
      key: 'fillEndDate',
      title: 'Срок заполнения',
      render: (row) => formatDate(row.fillEndDate),
    },
  ]
}

/**
 * useSteTable — локальный composable для экрана таблицы.
 * Возвращает состояние (loading, rows), API загрузки и конфиг колонок.
 */
export function useSteTable() {
  const loading = ref(true)
  const rows = reactive<SteRow[]>([])
  const columns = getColumns()
  const rowKey = (row: SteRow) => row.id

  const load = async () => {
    loading.value = true
    try {
      const data = await getSteList()
      rows.splice(0, rows.length, ...data)
    } finally {
      loading.value = false
    }
  }

  onMounted(load)
  return { loading, rows, columns, rowKey, load }
}
