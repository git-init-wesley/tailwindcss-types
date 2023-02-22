// noinspection JSUnusedGlobalSymbols

/**
 * @group Interactivity
 * @category Will Change
 * @css
 * ```css
 * will-change: auto;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/will-change)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/will_change_auto.html)
 * @since Tailwind v3.2.7
 */
export type will_change_auto = 'will-change-auto'

/**
 * @group Interactivity
 * @category Will Change
 * @css
 * ```css
 * will-change: scroll-position;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/will-change)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/will_change_scroll.html)
 * @since Tailwind v3.2.7
 */
export type will_change_scroll = 'will-change-scroll'

/**
 * @group Interactivity
 * @category Will Change
 * @css
 * ```css
 * will-change: contents;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/will-change)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/will_change_contents.html)
 * @since Tailwind v3.2.7
 */
export type will_change_contents = 'will-change-contents'

/**
 * @group Interactivity
 * @category Will Change
 * @css
 * ```css
 * will-change: transform;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/will-change)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/will_change_transform.html)
 * @since Tailwind v3.2.7
 */
export type will_change_transform = 'will-change-transform'

/**
 * @group Interactivity
 * @category Will Change
 * @example
 * ```ts
 * let value: WillChange //Only tailwindcss types
 * let value: string | WillChange //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/will-change)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/WillChange.html)
 * @since Tailwind v3.2.7
 */
export type WillChange =
    will_change_auto | will_change_scroll
    | will_change_contents
    | will_change_transform
