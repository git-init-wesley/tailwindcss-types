// noinspection JSUnusedGlobalSymbols

/**
 * @group Interactivity
 * @category Scroll Snap Stop
 * @css
 * ```css
 * scroll-snap-stop: normal;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/scroll-snap-stop)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/snap_normal.html)
 * @since Tailwind v3.2.7
 */
export type snap_normal = 'snap-normal'

/**
 * @group Interactivity
 * @category Scroll Snap Stop
 * @css
 * ```css
 * scroll-snap-stop: always;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/scroll-snap-stop)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/snap_always.html)
 * @since Tailwind v3.2.7
 */
export type snap_always = 'snap-always'

/**
 * @group Interactivity
 * @category Scroll Snap Stop
 * @example
 * ```ts
 * let value: ScrollSnapStop //Only tailwindcss types
 * let value: string | ScrollSnapStop //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/scroll-snap-stop)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/ScrollSnapStop.html)
 * @since Tailwind v3.2.7
 */
export type ScrollSnapStop =
    snap_normal | snap_always
