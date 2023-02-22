// noinspection JSUnusedGlobalSymbols

/**
 * @group Layout
 * @category Position
 * @css
 * ```css
 * position: static;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/position)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/_static.html)
 * @since Tailwind v3.2.7
 */
export type _static = 'static'

/**
 * @group Layout
 * @category Position
 * @css
 * ```css
 * position: fixed;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/position)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/fixed.html)
 * @since Tailwind v3.2.7
 */
export type fixed = 'fixed'

/**
 * @group Layout
 * @category Position
 * @css
 * ```css
 * position: absolute;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/position)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/absolute.html)
 * @since Tailwind v3.2.7
 */
export type absolute = 'absolute'

/**
 * @group Layout
 * @category Position
 * @css
 * ```css
 * position: relative;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/position)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/relative.html)
 * @since Tailwind v3.2.7
 */
export type relative = 'relative'

/**
 * @group Layout
 * @category Position
 * @css
 * ```css
 * position: sticky;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/position)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/sticky.html)
 * @since Tailwind v3.2.7
 */
export type sticky = 'sticky'

/**
 * @group Layout
 * @category Position
 * @example
 * ```ts
 * let value: Position //Only tailwindcss types
 * let value: string | Position //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/position)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/Position.html)
 * @since Tailwind v3.2.7
 */
export type Position =
    _static | fixed
    | absolute
    | relative
    | sticky
