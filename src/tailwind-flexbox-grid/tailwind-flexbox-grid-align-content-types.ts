// noinspection JSUnusedGlobalSymbols

/**
 * @group Flexbox-Grid
 * @category Align Content
 * @css
 * ```css
 * align-content: center;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/align-content)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/content_center.html)
 * @since Tailwind v3.2.7
 */
export type content_center = 'content-center'

/**
 * @group Flexbox-Grid
 * @category Align Content
 * @css
 * ```css
 * align-content: flex-start;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/align-content)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/content_start.html)
 * @since Tailwind v3.2.7
 */
export type content_start = 'content-start'

/**
 * @group Flexbox-Grid
 * @category Align Content
 * @css
 * ```css
 * align-content: flex-end;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/align-content)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/content_end.html)
 * @since Tailwind v3.2.7
 */
export type content_end = 'content-end'

/**
 * @group Flexbox-Grid
 * @category Align Content
 * @css
 * ```css
 * align-content: space-between;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/align-content)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/content_between.html)
 * @since Tailwind v3.2.7
 */
export type content_between = 'content-between'

/**
 * @group Flexbox-Grid
 * @category Align Content
 * @css
 * ```css
 * align-content: space-around;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/align-content)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/content_around.html)
 * @since Tailwind v3.2.7
 */
export type content_around = 'content-around'

/**
 * @group Flexbox-Grid
 * @category Align Content
 * @css
 * ```css
 * align-content: space-evenly;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/align-content)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/content_evenly.html)
 * @since Tailwind v3.2.7
 */
export type content_evenly = 'content-evenly'

/**
 * @group Flexbox-Grid
 * @category Align Content
 * @css
 * ```css
 * align-content: baseline;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/align-content)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/content_baseline.html)
 * @since Tailwind v3.2.7
 */
export type content_baseline = 'content-baseline'

/**
 * @group Flexbox-Grid
 * @category Align Content
 * @example
 * ```ts
 * let value: AlignContent //Only tailwindcss types
 * let value: string | AlignContent //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/align-content)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/AlignContent.html)
 * @since Tailwind v3.2.7
 */
export type AlignContent =
    content_center | content_start
    | content_end
    | content_between
    | content_around
    | content_evenly
    | content_baseline
