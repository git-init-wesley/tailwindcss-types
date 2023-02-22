// noinspection JSUnusedGlobalSymbols

/**
 * @group Interactivity
 * @category Pointer Events
 * @css
 * ```css
 * pointer-events: none;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/pointer-events)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/pointer_events_none.html)
 * @since Tailwind v3.2.7
 */
export type pointer_events_none = 'pointer-events-none'

/**
 * @group Interactivity
 * @category Pointer Events
 * @css
 * ```css
 * pointer-events: auto;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/pointer-events)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/pointer_events_auto.html)
 * @since Tailwind v3.2.7
 */
export type pointer_events_auto = 'pointer-events-auto'

/**
 * @group Interactivity
 * @category Pointer Events
 * @example
 * ```ts
 * let value: PointerEvents //Only tailwindcss types
 * let value: string | PointerEvents //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/pointer-events)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/PointerEvents.html)
 * @since Tailwind v3.2.7
 */
export type PointerEvents =
    pointer_events_none | pointer_events_auto
