// noinspection JSUnusedGlobalSymbols

/**
 * @group Layout
 * @category Floats
 * @css
 * ```css
 * float: right;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/float)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/float_right.html)
 * @since Tailwind v3.2.7
 */
export type float_right = 'float-right'

/**
 * @group Layout
 * @category Floats
 * @css
 * ```css
 * float: left;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/float)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/float_left.html)
 * @since Tailwind v3.2.7
 */
export type float_left = 'float-left'

/**
 * @group Layout
 * @category Floats
 * @css
 * ```css
 * float: none;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/float)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/float_none.html)
 * @since Tailwind v3.2.7
 */
export type float_none = 'float-none'

/**
 * @group Layout
 * @category Floats
 * @example
 * ```ts
 * let value: Floats //Only tailwindcss types
 * let value: string | Floats //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/float)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/Floats.html)
 * @since Tailwind v3.2.7
 */
export type Floats =
    float_right | float_left
    | float_none
