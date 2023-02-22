// noinspection JSUnusedGlobalSymbols

/**
 * @group Layout
 * @category Box Sizing
 * @css
 * ```css
 * box-sizing: border-box;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/box-sizing)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/box_border.html)
 * @since Tailwind v3.2.7
 */
export type box_border = 'box-border'

/**
 * @group Layout
 * @category Box Sizing
 * @css
 * ```css
 * box-sizing: content-box;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/box-sizing)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/box_content.html)
 * @since Tailwind v3.2.7
 */
export type box_content = 'box-content'

/**
 * @group Layout
 * @category Box Sizing
 * @example
 * ```ts
 * let value: BoxSizing //Only tailwindcss types
 * let value: string | BoxSizing //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/box-sizing)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/BoxSizing.html)
 * @since Tailwind v3.2.7
 */
export type BoxSizing =
    box_border | box_content
