// noinspection JSUnusedGlobalSymbols

/**
 * @group Typography
 * @category Text Align
 * @css
 * ```css
 * text-align: left;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/text-align)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/text_left.html)
 * @since Tailwind v3.2.7
 */
export type text_left = 'text-left'

/**
 * @group Typography
 * @category Text Align
 * @css
 * ```css
 * text-align: center;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/text-align)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/text_center.html)
 * @since Tailwind v3.2.7
 */
export type text_center = 'text-center'

/**
 * @group Typography
 * @category Text Align
 * @css
 * ```css
 * text-align: right;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/text-align)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/text_right.html)
 * @since Tailwind v3.2.7
 */
export type text_right = 'text-right'

/**
 * @group Typography
 * @category Text Align
 * @css
 * ```css
 * text-align: justify;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/text-align)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/text_justify.html)
 * @since Tailwind v3.2.7
 */
export type text_justify = 'text-justify'

/**
 * @group Typography
 * @category Text Align
 * @css
 * ```css
 * text-align: start;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/text-align)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/text_start.html)
 * @since Tailwind v3.2.7
 */
export type text_start = 'text-start'

/**
 * @group Typography
 * @category Text Align
 * @css
 * ```css
 * text-align: end;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/text-align)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/text_end.html)
 * @since Tailwind v3.2.7
 */
export type text_end = 'text-end'

/**
 * @group Typography
 * @category Text Align
 * @example
 * ```ts
 * let value: TextAlign //Only tailwindcss types
 * let value: string | TextAlign //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/text-align)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/TextAlign.html)
 * @since Tailwind v3.2.7
 */
export type TextAlign =
    text_left | text_center
    | text_right
    | text_justify
    | text_start
    | text_end
