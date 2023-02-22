// noinspection JSUnusedGlobalSymbols

/**
 * @group Flexbox-Grid
 * @category Grid Auto Columns
 * @css
 * ```css
 * grid-auto-columns: auto;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/grid-auto-columns)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/auto_cols_auto.html)
 * @since Tailwind v3.2.7
 */
export type auto_cols_auto = 'auto-cols-auto'

/**
 * @group Flexbox-Grid
 * @category Grid Auto Columns
 * @css
 * ```css
 * grid-auto-columns: min-content;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/grid-auto-columns)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/auto_cols_min.html)
 * @since Tailwind v3.2.7
 */
export type auto_cols_min = 'auto-cols-min'

/**
 * @group Flexbox-Grid
 * @category Grid Auto Columns
 * @css
 * ```css
 * grid-auto-columns: max-content;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/grid-auto-columns)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/auto_cols_max.html)
 * @since Tailwind v3.2.7
 */
export type auto_cols_max = 'auto-cols-max'

/**
 * @group Flexbox-Grid
 * @category Grid Auto Columns
 * @css
 * ```css
 * grid-auto-columns: minmax(0, 1fr);
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/grid-auto-columns)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/auto_cols_fr.html)
 * @since Tailwind v3.2.7
 */
export type auto_cols_fr = 'auto-cols-fr'

/**
 * @group Flexbox-Grid
 * @category Grid Auto Columns
 * @example
 * ```ts
 * let value: GridAutoColumns //Only tailwindcss types
 * let value: string | GridAutoColumns //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/grid-auto-columns)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/GridAutoColumns.html)
 * @since Tailwind v3.2.7
 */
export type GridAutoColumns =
    auto_cols_auto | auto_cols_min
    | auto_cols_max
    | auto_cols_fr
