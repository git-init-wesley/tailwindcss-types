// noinspection JSUnusedGlobalSymbols

/**
 * @group Typography
 * @category Text Overflow
 * @css
 * ```css
 * overflow: hidden;text-overflow: ellipsis;white-space: nowrap;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/text-overflow)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/truncate.html)
 * @since Tailwind v3.2.7
 */
export type truncate = 'truncate'

/**
 * @group Typography
 * @category Text Overflow
 * @css
 * ```css
 * text-overflow: ellipsis;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/text-overflow)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/text_ellipsis.html)
 * @since Tailwind v3.2.7
 */
export type text_ellipsis = 'text-ellipsis'

/**
 * @group Typography
 * @category Text Overflow
 * @css
 * ```css
 * text-overflow: clip;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/text-overflow)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/text_clip.html)
 * @since Tailwind v3.2.7
 */
export type text_clip = 'text-clip'

/**
 * @group Typography
 * @category Text Overflow
 * @example
 * ```ts
 * let value: TextOverflow //Only tailwindcss types
 * let value: string | TextOverflow //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/text-overflow)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/TextOverflow.html)
 * @since Tailwind v3.2.7
 */
export type TextOverflow =
    truncate | text_ellipsis
    | text_clip
