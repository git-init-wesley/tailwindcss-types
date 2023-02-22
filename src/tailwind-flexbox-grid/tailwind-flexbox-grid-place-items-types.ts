// noinspection JSUnusedGlobalSymbols

/**
 * @group Flexbox-Grid
 * @category Place Items
 * @css
 * ```css
 * place-items: start;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/place-items)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/place_items_start.html)
 * @since Tailwind v3.2.7
 */
export type place_items_start = 'place-items-start'

/**
 * @group Flexbox-Grid
 * @category Place Items
 * @css
 * ```css
 * place-items: end;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/place-items)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/place_items_end.html)
 * @since Tailwind v3.2.7
 */
export type place_items_end = 'place-items-end'

/**
 * @group Flexbox-Grid
 * @category Place Items
 * @css
 * ```css
 * place-items: center;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/place-items)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/place_items_center.html)
 * @since Tailwind v3.2.7
 */
export type place_items_center = 'place-items-center'

/**
 * @group Flexbox-Grid
 * @category Place Items
 * @css
 * ```css
 * place-items: baseline;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/place-items)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/place_items_baseline.html)
 * @since Tailwind v3.2.7
 */
export type place_items_baseline = 'place-items-baseline'

/**
 * @group Flexbox-Grid
 * @category Place Items
 * @css
 * ```css
 * place-items: stretch;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/place-items)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/place_items_stretch.html)
 * @since Tailwind v3.2.7
 */
export type place_items_stretch = 'place-items-stretch'

/**
 * @group Flexbox-Grid
 * @category Place Items
 * @example
 * ```ts
 * let value: PlaceItems //Only tailwindcss types
 * let value: string | PlaceItems //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/place-items)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/PlaceItems.html)
 * @since Tailwind v3.2.7
 */
export type PlaceItems =
    place_items_start | place_items_end
    | place_items_center
    | place_items_baseline
    | place_items_stretch
