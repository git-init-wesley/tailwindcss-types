// noinspection JSUnusedGlobalSymbols

/**
 * @group Interactivity
 * @category Scroll Behavior
 * @css
 * ```css
 * scroll-behavior: auto;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/scroll-behavior)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/scroll_auto.html)
 * @since Tailwind v3.2.7
 */
export type scroll_auto = 'scroll-auto'

/**
 * @group Interactivity
 * @category Scroll Behavior
 * @css
 * ```css
 * scroll-behavior: smooth;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/scroll-behavior)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/scroll_smooth.html)
 * @since Tailwind v3.2.7
 */
export type scroll_smooth = 'scroll-smooth'

/**
 * @group Interactivity
 * @category Scroll Behavior
 * @example
 * ```ts
 * let value: ScrollBehavior //Only tailwindcss types
 * let value: string | ScrollBehavior //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/scroll-behavior)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/ScrollBehavior.html)
 * @since Tailwind v3.2.7
 */
export type ScrollBehavior =
    scroll_auto | scroll_smooth
