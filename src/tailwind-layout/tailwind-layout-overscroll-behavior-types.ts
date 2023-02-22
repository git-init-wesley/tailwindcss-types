// noinspection JSUnusedGlobalSymbols

/**
 * @group Layout
 * @category Overscroll Behavior
 * @css
 * ```css
 * overscroll-behavior: auto;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/overscroll-behavior)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/overscroll_auto.html)
 * @since Tailwind v3.2.7
 */
export type overscroll_auto = 'overscroll-auto'

/**
 * @group Layout
 * @category Overscroll Behavior
 * @css
 * ```css
 * overscroll-behavior: contain;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/overscroll-behavior)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/overscroll_contain.html)
 * @since Tailwind v3.2.7
 */
export type overscroll_contain = 'overscroll-contain'

/**
 * @group Layout
 * @category Overscroll Behavior
 * @css
 * ```css
 * overscroll-behavior: none;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/overscroll-behavior)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/overscroll_none.html)
 * @since Tailwind v3.2.7
 */
export type overscroll_none = 'overscroll-none'

/**
 * @group Layout
 * @category Overscroll Behavior
 * @css
 * ```css
 * overscroll-behavior-y: auto;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/overscroll-behavior)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/overscroll_y_auto.html)
 * @since Tailwind v3.2.7
 */
export type overscroll_y_auto = 'overscroll-y-auto'

/**
 * @group Layout
 * @category Overscroll Behavior
 * @css
 * ```css
 * overscroll-behavior-y: contain;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/overscroll-behavior)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/overscroll_y_contain.html)
 * @since Tailwind v3.2.7
 */
export type overscroll_y_contain = 'overscroll-y-contain'

/**
 * @group Layout
 * @category Overscroll Behavior
 * @css
 * ```css
 * overscroll-behavior-y: none;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/overscroll-behavior)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/overscroll_y_none.html)
 * @since Tailwind v3.2.7
 */
export type overscroll_y_none = 'overscroll-y-none'

/**
 * @group Layout
 * @category Overscroll Behavior
 * @css
 * ```css
 * overscroll-behavior-x: auto;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/overscroll-behavior)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/overscroll_x_auto.html)
 * @since Tailwind v3.2.7
 */
export type overscroll_x_auto = 'overscroll-x-auto'

/**
 * @group Layout
 * @category Overscroll Behavior
 * @css
 * ```css
 * overscroll-behavior-x: contain;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/overscroll-behavior)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/overscroll_x_contain.html)
 * @since Tailwind v3.2.7
 */
export type overscroll_x_contain = 'overscroll-x-contain'

/**
 * @group Layout
 * @category Overscroll Behavior
 * @css
 * ```css
 * overscroll-behavior-x: none;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/overscroll-behavior)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/overscroll_x_none.html)
 * @since Tailwind v3.2.7
 */
export type overscroll_x_none = 'overscroll-x-none'

/**
 * @group Layout
 * @category Overscroll Behavior
 * @example
 * ```ts
 * let value: OverscrollBehavior //Only tailwindcss types
 * let value: string | OverscrollBehavior //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/overscroll-behavior)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/OverscrollBehavior.html)
 * @since Tailwind v3.2.7
 */
export type OverscrollBehavior =
    overscroll_auto | overscroll_contain
    | overscroll_none
    | overscroll_y_auto
    | overscroll_y_contain
    | overscroll_y_none
    | overscroll_x_auto
    | overscroll_x_contain
    | overscroll_x_none
