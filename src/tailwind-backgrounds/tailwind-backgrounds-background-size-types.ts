// noinspection JSUnusedGlobalSymbols

/**
 * @group Backgrounds
 * @category Background Size
 * @css
 * ```css
 * background-size: auto;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/background-size)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/bg_auto.html)
 * @since Tailwind v3.2.7
 */
export type bg_auto = 'bg-auto'

/**
 * @group Backgrounds
 * @category Background Size
 * @css
 * ```css
 * background-size: cover;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/background-size)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/bg_cover.html)
 * @since Tailwind v3.2.7
 */
export type bg_cover = 'bg-cover'

/**
 * @group Backgrounds
 * @category Background Size
 * @css
 * ```css
 * background-size: contain;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/background-size)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/bg_contain.html)
 * @since Tailwind v3.2.7
 */
export type bg_contain = 'bg-contain'

/**
 * @group Backgrounds
 * @category Background Size
 * @example
 * ```ts
 * let value: BackgroundSize //Only tailwindcss types
 * let value: string | BackgroundSize //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/background-size)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/BackgroundSize.html)
 * @since Tailwind v3.2.7
 */
export type BackgroundSize =
    bg_auto | bg_cover
    | bg_contain
