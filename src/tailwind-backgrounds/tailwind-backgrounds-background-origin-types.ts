// noinspection JSUnusedGlobalSymbols

/**
 * @group Backgrounds
 * @category Background Origin
 * @css
 * ```css
 * background-origin: border-box;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/background-origin)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/bg_origin_border.html)
 * @since Tailwind v3.2.7
 */
export type bg_origin_border = 'bg-origin-border'

/**
 * @group Backgrounds
 * @category Background Origin
 * @css
 * ```css
 * background-origin: padding-box;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/background-origin)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/bg_origin_padding.html)
 * @since Tailwind v3.2.7
 */
export type bg_origin_padding = 'bg-origin-padding'

/**
 * @group Backgrounds
 * @category Background Origin
 * @css
 * ```css
 * background-origin: content-box;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/background-origin)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/bg_origin_content.html)
 * @since Tailwind v3.2.7
 */
export type bg_origin_content = 'bg-origin-content'

/**
 * @group Backgrounds
 * @category Background Origin
 * @example
 * ```ts
 * let value: BackgroundOrigin //Only tailwindcss types
 * let value: string | BackgroundOrigin //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/background-origin)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/BackgroundOrigin.html)
 * @since Tailwind v3.2.7
 */
export type BackgroundOrigin =
    bg_origin_border | bg_origin_padding
    | bg_origin_content
