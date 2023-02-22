// noinspection JSUnusedGlobalSymbols

/**
 * @group Layout
 * @category Clear
 * @css
 * ```css
 * clear: left;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/clear)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/clear_left.html)
 * @since Tailwind v3.2.7
 */
export type clear_left = 'clear-left'

/**
 * @group Layout
 * @category Clear
 * @css
 * ```css
 * clear: right;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/clear)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/clear_right.html)
 * @since Tailwind v3.2.7
 */
export type clear_right = 'clear-right'

/**
 * @group Layout
 * @category Clear
 * @css
 * ```css
 * clear: both;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/clear)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/clear_both.html)
 * @since Tailwind v3.2.7
 */
export type clear_both = 'clear-both'

/**
 * @group Layout
 * @category Clear
 * @css
 * ```css
 * clear: none;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/clear)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/clear_none.html)
 * @since Tailwind v3.2.7
 */
export type clear_none = 'clear-none'

/**
 * @group Layout
 * @category Clear
 * @example
 * ```ts
 * let value: Clear //Only tailwindcss types
 * let value: string | Clear //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/clear)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/Clear.html)
 * @since Tailwind v3.2.7
 */
export type Clear =
    clear_left | clear_right
    | clear_both
    | clear_none
