// noinspection JSUnusedGlobalSymbols

/**
 * @group Flexbox-Grid
 * @category Grid Auto Rows
 * @css
 * ```css
 * grid-auto-rows: auto;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/grid-auto-rows)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/auto_rows_auto.html)
 * @since Tailwind v3.2.7
 */
export type auto_rows_auto = 'auto-rows-auto'

/**
 * @group Flexbox-Grid
 * @category Grid Auto Rows
 * @css
 * ```css
 * grid-auto-rows: min-content;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/grid-auto-rows)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/auto_rows_min.html)
 * @since Tailwind v3.2.7
 */
export type auto_rows_min = 'auto-rows-min'

/**
 * @group Flexbox-Grid
 * @category Grid Auto Rows
 * @css
 * ```css
 * grid-auto-rows: max-content;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/grid-auto-rows)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/auto_rows_max.html)
 * @since Tailwind v3.2.7
 */
export type auto_rows_max = 'auto-rows-max'

/**
 * @group Flexbox-Grid
 * @category Grid Auto Rows
 * @css
 * ```css
 * grid-auto-rows: minmax(0, 1fr);
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/grid-auto-rows)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/auto_rows_fr.html)
 * @since Tailwind v3.2.7
 */
export type auto_rows_fr = 'auto-rows-fr'

/**
 * @group Flexbox-Grid
 * @category Grid Auto Rows
 * @example
 * ```ts
 * let value: GridAutoRows //Only tailwindcss types
 * let value: string | GridAutoRows //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/grid-auto-rows)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/GridAutoRows.html)
 * @since Tailwind v3.2.7
 */
export type GridAutoRows =
    auto_rows_auto | auto_rows_min
    | auto_rows_max
    | auto_rows_fr
