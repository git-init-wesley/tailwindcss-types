// noinspection JSUnusedGlobalSymbols

/**
 * @group Tables
 * @category Table Layout
 * @css
 * ```css
 * table-layout: auto;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/table-layout)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/table_auto.html)
 * @since Tailwind v3.2.7
 */
export type table_auto = 'table-auto'

/**
 * @group Tables
 * @category Table Layout
 * @css
 * ```css
 * table-layout: fixed;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/table-layout)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/table_fixed.html)
 * @since Tailwind v3.2.7
 */
export type table_fixed = 'table-fixed'

/**
 * @group Tables
 * @category Table Layout
 * @example
 * ```ts
 * let value: TableLayout //Only tailwindcss types
 * let value: string | TableLayout //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/table-layout)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/TableLayout.html)
 * @since Tailwind v3.2.7
 */
export type TableLayout =
    table_auto | table_fixed
