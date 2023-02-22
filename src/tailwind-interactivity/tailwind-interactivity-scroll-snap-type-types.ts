// noinspection JSUnusedGlobalSymbols

/**
 * @group Interactivity
 * @category Scroll Snap Type
 * @css
 * ```css
 * scroll-snap-type: none;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/scroll-snap-type)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/snap_none.html)
 * @since Tailwind v3.2.7
 */
export type snap_none = 'snap-none'

/**
 * @group Interactivity
 * @category Scroll Snap Type
 * @css
 * ```css
 * scroll-snap-type: x var(--tw-scroll-snap-strictness);
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/scroll-snap-type)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/snap_x.html)
 * @since Tailwind v3.2.7
 */
export type snap_x = 'snap-x'

/**
 * @group Interactivity
 * @category Scroll Snap Type
 * @css
 * ```css
 * scroll-snap-type: y var(--tw-scroll-snap-strictness);
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/scroll-snap-type)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/snap_y.html)
 * @since Tailwind v3.2.7
 */
export type snap_y = 'snap-y'

/**
 * @group Interactivity
 * @category Scroll Snap Type
 * @css
 * ```css
 * scroll-snap-type: both var(--tw-scroll-snap-strictness);
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/scroll-snap-type)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/snap_both.html)
 * @since Tailwind v3.2.7
 */
export type snap_both = 'snap-both'

/**
 * @group Interactivity
 * @category Scroll Snap Type
 * @css
 * ```css
 * --tw-scroll-snap-strictness: mandatory;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/scroll-snap-type)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/snap_mandatory.html)
 * @since Tailwind v3.2.7
 */
export type snap_mandatory = 'snap-mandatory'

/**
 * @group Interactivity
 * @category Scroll Snap Type
 * @css
 * ```css
 * --tw-scroll-snap-strictness: proximity;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/scroll-snap-type)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/snap_proximity.html)
 * @since Tailwind v3.2.7
 */
export type snap_proximity = 'snap-proximity'

/**
 * @group Interactivity
 * @category Scroll Snap Type
 * @example
 * ```ts
 * let value: ScrollSnapType //Only tailwindcss types
 * let value: string | ScrollSnapType //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/scroll-snap-type)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/ScrollSnapType.html)
 * @since Tailwind v3.2.7
 */
export type ScrollSnapType =
    snap_none | snap_x
    | snap_y
    | snap_both
    | snap_mandatory
    | snap_proximity
