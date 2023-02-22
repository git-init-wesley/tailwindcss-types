// noinspection JSUnusedGlobalSymbols

/**
 * @group Flexbox-Grid
 * @category Flex Direction
 * @css
 * ```css
 * flex-direction: row;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/flex-direction)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/flex_row.html)
 * @since Tailwind v3.2.7
 */
export type flex_row = 'flex-row'

/**
 * @group Flexbox-Grid
 * @category Flex Direction
 * @css
 * ```css
 * flex-direction: row-reverse;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/flex-direction)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/flex_row_reverse.html)
 * @since Tailwind v3.2.7
 */
export type flex_row_reverse = 'flex-row-reverse'

/**
 * @group Flexbox-Grid
 * @category Flex Direction
 * @css
 * ```css
 * flex-direction: column;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/flex-direction)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/flex_col.html)
 * @since Tailwind v3.2.7
 */
export type flex_col = 'flex-col'

/**
 * @group Flexbox-Grid
 * @category Flex Direction
 * @css
 * ```css
 * flex-direction: column-reverse;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/flex-direction)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/flex_col_reverse.html)
 * @since Tailwind v3.2.7
 */
export type flex_col_reverse = 'flex-col-reverse'

/**
 * @group Flexbox-Grid
 * @category Flex Direction
 * @example
 * ```ts
 * let value: FlexDirection //Only tailwindcss types
 * let value: string | FlexDirection //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/flex-direction)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/FlexDirection.html)
 * @since Tailwind v3.2.7
 */
export type FlexDirection =
    flex_row | flex_row_reverse
    | flex_col
    | flex_col_reverse
