// noinspection JSUnusedGlobalSymbols

/**
 * @group Typography
 * @category Font Family
 * @css
 * ```css
 * font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/font-family)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/font_sans.html)
 * @since Tailwind v3.2.7
 */
export type font_sans = 'font-sans'

/**
 * @group Typography
 * @category Font Family
 * @css
 * ```css
 * font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/font-family)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/font_serif.html)
 * @since Tailwind v3.2.7
 */
export type font_serif = 'font-serif'

/**
 * @group Typography
 * @category Font Family
 * @css
 * ```css
 * font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/font-family)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/font_mono.html)
 * @since Tailwind v3.2.7
 */
export type font_mono = 'font-mono'

/**
 * @group Typography
 * @category Font Family
 * @example
 * ```ts
 * let value: FontFamily //Only tailwindcss types
 * let value: string | FontFamily //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/font-family)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/FontFamily.html)
 * @since Tailwind v3.2.7
 */
export type FontFamily =
    font_sans | font_serif
    | font_mono
