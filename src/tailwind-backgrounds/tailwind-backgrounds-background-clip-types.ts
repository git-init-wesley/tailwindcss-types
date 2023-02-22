// noinspection JSUnusedGlobalSymbols

/**
 * @group Backgrounds
 * @category Background Clip
 * @css
 * ```css
 * background-clip: border-box;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/background-clip)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/bg_clip_border.html)
 * @since Tailwind v3.2.7
 */
export type bg_clip_border = 'bg-clip-border'

/**
 * @group Backgrounds
 * @category Background Clip
 * @css
 * ```css
 * background-clip: padding-box;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/background-clip)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/bg_clip_padding.html)
 * @since Tailwind v3.2.7
 */
export type bg_clip_padding = 'bg-clip-padding'

/**
 * @group Backgrounds
 * @category Background Clip
 * @css
 * ```css
 * background-clip: content-box;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/background-clip)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/bg_clip_content.html)
 * @since Tailwind v3.2.7
 */
export type bg_clip_content = 'bg-clip-content'

/**
 * @group Backgrounds
 * @category Background Clip
 * @css
 * ```css
 * background-clip: text;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/background-clip)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/bg_clip_text.html)
 * @since Tailwind v3.2.7
 */
export type bg_clip_text = 'bg-clip-text'

/**
 * @group Backgrounds
 * @category Background Clip
 * @example
 * ```ts
 * let value: BackgroundClip //Only tailwindcss types
 * let value: string | BackgroundClip //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/background-clip)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/BackgroundClip.html)
 * @since Tailwind v3.2.7
 */
export type BackgroundClip =
    bg_clip_border | bg_clip_padding
    | bg_clip_content
    | bg_clip_text
