// noinspection JSUnusedGlobalSymbols

/**
 * @group Typography
 * @category Text Decoration
 * @css
 * ```css
 * text-decoration-line: underline;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/text-decoration)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/underline.html)
 * @since Tailwind v3.2.7
 */
export type underline = 'underline'

/**
 * @group Typography
 * @category Text Decoration
 * @css
 * ```css
 * text-decoration-line: overline;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/text-decoration)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/overline.html)
 * @since Tailwind v3.2.7
 */
export type overline = 'overline'

/**
 * @group Typography
 * @category Text Decoration
 * @css
 * ```css
 * text-decoration-line: line-through;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/text-decoration)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/line_through.html)
 * @since Tailwind v3.2.7
 */
export type line_through = 'line-through'

/**
 * @group Typography
 * @category Text Decoration
 * @css
 * ```css
 * text-decoration-line: none;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/text-decoration)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/no_underline.html)
 * @since Tailwind v3.2.7
 */
export type no_underline = 'no-underline'

/**
 * @group Typography
 * @category Text Decoration
 * @example
 * ```ts
 * let value: TextDecoration //Only tailwindcss types
 * let value: string | TextDecoration //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/text-decoration)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/TextDecoration.html)
 * @since Tailwind v3.2.7
 */
export type TextDecoration =
    underline | overline
    | line_through
    | no_underline
