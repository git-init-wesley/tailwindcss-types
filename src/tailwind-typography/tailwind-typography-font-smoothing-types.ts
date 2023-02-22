// noinspection JSUnusedGlobalSymbols

/**
 * @group Typography
 * @category Font Smoothing
 * @css
 * ```css
 * -webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/font-smoothing)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/antialiased.html)
 * @since Tailwind v3.2.7
 */
export type antialiased = 'antialiased'

/**
 * @group Typography
 * @category Font Smoothing
 * @css
 * ```css
 * -webkit-font-smoothing: auto;-moz-osx-font-smoothing: auto;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/font-smoothing)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/subpixel_antialiased.html)
 * @since Tailwind v3.2.7
 */
export type subpixel_antialiased = 'subpixel-antialiased'

/**
 * @group Typography
 * @category Font Smoothing
 * @example
 * ```ts
 * let value: FontSmoothing //Only tailwindcss types
 * let value: string | FontSmoothing //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/font-smoothing)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/FontSmoothing.html)
 * @since Tailwind v3.2.7
 */
export type FontSmoothing =
    antialiased | subpixel_antialiased
