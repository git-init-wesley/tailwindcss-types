// noinspection JSUnusedGlobalSymbols

/**
 * @group Interactivity
 * @category Scroll Snap Align
 * @css
 * ```css
 * scroll-snap-align: start;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/scroll-snap-align)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/snap_start.html)
 * @since Tailwind v3.2.7
 */
export type snap_start = 'snap-start'

/**
 * @group Interactivity
 * @category Scroll Snap Align
 * @css
 * ```css
 * scroll-snap-align: end;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/scroll-snap-align)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/snap_end.html)
 * @since Tailwind v3.2.7
 */
export type snap_end = 'snap-end'

/**
 * @group Interactivity
 * @category Scroll Snap Align
 * @css
 * ```css
 * scroll-snap-align: center;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/scroll-snap-align)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/snap_center.html)
 * @since Tailwind v3.2.7
 */
export type snap_center = 'snap-center'

/**
 * @group Interactivity
 * @category Scroll Snap Align
 * @css
 * ```css
 * scroll-snap-align: none;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/scroll-snap-align)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/snap_align_none.html)
 * @since Tailwind v3.2.7
 */
export type snap_align_none = 'snap-align-none'

/**
 * @group Interactivity
 * @category Scroll Snap Align
 * @example
 * ```ts
 * let value: ScrollSnapAlign //Only tailwindcss types
 * let value: string | ScrollSnapAlign //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/scroll-snap-align)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/ScrollSnapAlign.html)
 * @since Tailwind v3.2.7
 */
export type ScrollSnapAlign =
    snap_start | snap_end
    | snap_center
    | snap_align_none
