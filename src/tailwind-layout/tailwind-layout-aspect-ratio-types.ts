// noinspection JSUnusedGlobalSymbols

/**
 * @group Layout
 * @category Aspect Ratio
 * @css
 * ```css
 * aspect-ratio: auto;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/aspect-ratio)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/aspect_auto.html)
 * @since Tailwind v3.2.7
 */
export type aspect_auto = 'aspect-auto'

/**
 * @group Layout
 * @category Aspect Ratio
 * @css
 * ```css
 * aspect-ratio: 1 / 1;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/aspect-ratio)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/aspect_square.html)
 * @since Tailwind v3.2.7
 */
export type aspect_square = 'aspect-square'

/**
 * @group Layout
 * @category Aspect Ratio
 * @css
 * ```css
 * aspect-ratio: 16 / 9;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/aspect-ratio)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/aspect_video.html)
 * @since Tailwind v3.2.7
 */
export type aspect_video = 'aspect-video'

/**
 * @group Layout
 * @category Aspect Ratio
 * @example
 * ```ts
 * let value: AspectRatio //Only tailwindcss types
 * let value: string | AspectRatio //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/aspect-ratio)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/AspectRatio.html)
 * @since Tailwind v3.2.7
 */
export type AspectRatio =
    aspect_auto | aspect_square
    | aspect_video
