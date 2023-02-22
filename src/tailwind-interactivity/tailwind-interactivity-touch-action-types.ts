// noinspection JSUnusedGlobalSymbols

/**
 * @group Interactivity
 * @category Touch Action
 * @css
 * ```css
 * touch-action: auto;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/touch-action)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/touch_auto.html)
 * @since Tailwind v3.2.7
 */
export type touch_auto = 'touch-auto'

/**
 * @group Interactivity
 * @category Touch Action
 * @css
 * ```css
 * touch-action: none;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/touch-action)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/touch_none.html)
 * @since Tailwind v3.2.7
 */
export type touch_none = 'touch-none'

/**
 * @group Interactivity
 * @category Touch Action
 * @css
 * ```css
 * touch-action: pan-x;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/touch-action)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/touch_pan_x.html)
 * @since Tailwind v3.2.7
 */
export type touch_pan_x = 'touch-pan-x'

/**
 * @group Interactivity
 * @category Touch Action
 * @css
 * ```css
 * touch-action: pan-left;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/touch-action)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/touch_pan_left.html)
 * @since Tailwind v3.2.7
 */
export type touch_pan_left = 'touch-pan-left'

/**
 * @group Interactivity
 * @category Touch Action
 * @css
 * ```css
 * touch-action: pan-right;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/touch-action)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/touch_pan_right.html)
 * @since Tailwind v3.2.7
 */
export type touch_pan_right = 'touch-pan-right'

/**
 * @group Interactivity
 * @category Touch Action
 * @css
 * ```css
 * touch-action: pan-y;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/touch-action)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/touch_pan_y.html)
 * @since Tailwind v3.2.7
 */
export type touch_pan_y = 'touch-pan-y'

/**
 * @group Interactivity
 * @category Touch Action
 * @css
 * ```css
 * touch-action: pan-up;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/touch-action)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/touch_pan_up.html)
 * @since Tailwind v3.2.7
 */
export type touch_pan_up = 'touch-pan-up'

/**
 * @group Interactivity
 * @category Touch Action
 * @css
 * ```css
 * touch-action: pan-down;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/touch-action)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/touch_pan_down.html)
 * @since Tailwind v3.2.7
 */
export type touch_pan_down = 'touch-pan-down'

/**
 * @group Interactivity
 * @category Touch Action
 * @css
 * ```css
 * touch-action: pinch-zoom;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/touch-action)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/touch_pinch_zoom.html)
 * @since Tailwind v3.2.7
 */
export type touch_pinch_zoom = 'touch-pinch-zoom'

/**
 * @group Interactivity
 * @category Touch Action
 * @css
 * ```css
 * touch-action: manipulation;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/touch-action)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/touch_manipulation.html)
 * @since Tailwind v3.2.7
 */
export type touch_manipulation = 'touch-manipulation'

/**
 * @group Interactivity
 * @category Touch Action
 * @example
 * ```ts
 * let value: TouchAction //Only tailwindcss types
 * let value: string | TouchAction //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/touch-action)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/TouchAction.html)
 * @since Tailwind v3.2.7
 */
export type TouchAction =
    touch_auto | touch_none
    | touch_pan_x
    | touch_pan_left
    | touch_pan_right
    | touch_pan_y
    | touch_pan_up
    | touch_pan_down
    | touch_pinch_zoom
    | touch_manipulation
