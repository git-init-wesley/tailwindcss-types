// noinspection JSUnusedGlobalSymbols

/**
 * @group Flexbox-Grid
 * @category Justify Items
 * @css
 * ```css
 * justify-items: start;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/justify-items)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/justify_items_start.html)
 * @since Tailwind v3.2.7
 */
export type justify_items_start = 'justify-items-start'

/**
 * @group Flexbox-Grid
 * @category Justify Items
 * @css
 * ```css
 * justify-items: end;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/justify-items)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/justify_items_end.html)
 * @since Tailwind v3.2.7
 */
export type justify_items_end = 'justify-items-end'

/**
 * @group Flexbox-Grid
 * @category Justify Items
 * @css
 * ```css
 * justify-items: center;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/justify-items)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/justify_items_center.html)
 * @since Tailwind v3.2.7
 */
export type justify_items_center = 'justify-items-center'

/**
 * @group Flexbox-Grid
 * @category Justify Items
 * @css
 * ```css
 * justify-items: stretch;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/justify-items)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/justify_items_stretch.html)
 * @since Tailwind v3.2.7
 */
export type justify_items_stretch = 'justify-items-stretch'

/**
 * @group Flexbox-Grid
 * @category Justify Items
 * @example
 * ```ts
 * let value: JustifyItems //Only tailwindcss types
 * let value: string | JustifyItems //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/justify-items)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/JustifyItems.html)
 * @since Tailwind v3.2.7
 */
export type JustifyItems =
    justify_items_start | justify_items_end
    | justify_items_center
    | justify_items_stretch
