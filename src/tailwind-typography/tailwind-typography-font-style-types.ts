// noinspection JSUnusedGlobalSymbols

/**
 * @group Typography
 * @category Font Style
 * @css
 * ```css
 * font-style: italic;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/font-style)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/italic.html)
 * @since Tailwind v3.2.7
 */
export type italic = 'italic'

/**
 * @group Typography
 * @category Font Style
 * @css
 * ```css
 * font-style: normal;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/font-style)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/not_italic.html)
 * @since Tailwind v3.2.7
 */
export type not_italic = 'not-italic'

/**
 * @group Typography
 * @category Font Style
 * @example
 * ```ts
 * let value: FontStyle //Only tailwindcss types
 * let value: string | FontStyle //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/font-style)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/FontStyle.html)
 * @since Tailwind v3.2.7
 */
export type FontStyle =
    italic | not_italic
