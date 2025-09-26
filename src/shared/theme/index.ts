import { lightTheme, type GlobalThemeOverrides } from 'naive-ui'

/**
 * Основная тема
 */
export const theme = lightTheme

/**
 * Глобальные переопределения токенов
 */
export const themeOverrides: GlobalThemeOverrides = {
  /**
   * Общие токены (используются во всех компонентах)
   */
  common: {
    fontFamily: '"v-sans", sans-serif', // Базовый шрифт приложения (через vfonts/Lato.css)
    primaryColor: '#2f80ed', // Основной цвет интерфейса (например, кнопки, фокус)
    primaryColorHover: '#4096ff', // Цвет при наведении на элементы с primaryColor
    primaryColorPressed: '#1a73e8', // Цвет при нажатии (active-состояние)
  },

  /**
   * Компонент: n-data-table
   * Настройка внешнего вида таблицы
   */
  DataTable: {
    thColor: '#2f80ed', // Фон заголовков таблицы (thead)
    thColorHover: '#3b8cff', // Фон заголовка при наведении курсора
    thColorSorting: '#3b8cff', // Фон активного (отсортированного) заголовка
    thTextColor: '#ffffff', // Цвет текста заголовков таблицы
    thIconColor: '#ffffff', // Цвет иконки сортировки (в неактивном состоянии)
    thIconColorActive: '#ffffff', // Цвет иконки сортировки (в активном состоянии)
    borderColor: '#d9d9d9', // Цвет границ между ячейками и строками
    rowColorHover: '#e8f1ff', // Цвет фона строки при наведении
    headerFontSize: '14px', // Размер текста в заголовке таблицы
    tdFontSize: '14px', // Размер текста в ячейках таблицы
  },
}
