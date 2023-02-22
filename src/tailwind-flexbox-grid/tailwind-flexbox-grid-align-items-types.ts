// noinspection JSUnusedGlobalSymbols

/**
 * @group Flexbox-Grid
 * @category Align Items
 * @css
 * ```css
 * align-items: flex-start;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/align-items)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/items_start.html)
 * @since Tailwind v3.2.7
 */
export type items_start = 'items-start'

/**
 * @group Flexbox-Grid
 * @category Align Items
 * @css
 * ```css
 * align-items: flex-end;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/align-items)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/items_end.html)
 * @since Tailwind v3.2.7
 */
export type items_end = 'items-end'

/**
 * @group Flexbox-Grid
 * @category Align Items
 * @css
 * ```css
 * align-items: center;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/align-items)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/items_center.html)
 * @since Tailwind v3.2.7
 */
export type items_center = 'items-center'

/**
 * @group Flexbox-Grid
 * @category Align Items
 * @css
 * ```css
 * align-items: baseline;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/align-items)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/items_baseline.html)
 * @since Tailwind v3.2.7
 */
export type items_baseline = 'items-baseline'

/**
 * @group Flexbox-Grid
 * @category Align Items
 * @css
 * ```css
 * align-items: stretch;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/align-items)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/items_stretch.html)
 * @since Tailwind v3.2.7
 */
export type items_stretch = 'items-stretch'

/**
 * @group Flexbox-Grid
 * @category Align Items
 * @example
 * ```ts
 * let value: AlignItems //Only tailwindcss types
 * let value: string | AlignItems //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/align-items)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/AlignItems.html)
 * @since Tailwind v3.2.7
 */
export type AlignItems =
    items_start | items_end
    | items_center
    | items_baseline
    | items_stretch
