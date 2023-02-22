// noinspection JSUnusedGlobalSymbols

/**
 * @group Transitions-Animation
 * @category Transition Timing Function
 * @css
 * ```css
 * transition-timing-function: linear;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/transition-timing-function)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/ease_linear.html)
 * @since Tailwind v3.2.7
 */
export type ease_linear = 'ease-linear'

/**
 * @group Transitions-Animation
 * @category Transition Timing Function
 * @css
 * ```css
 * transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/transition-timing-function)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/ease_in.html)
 * @since Tailwind v3.2.7
 */
export type ease_in = 'ease-in'

/**
 * @group Transitions-Animation
 * @category Transition Timing Function
 * @css
 * ```css
 * transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/transition-timing-function)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/ease_out.html)
 * @since Tailwind v3.2.7
 */
export type ease_out = 'ease-out'

/**
 * @group Transitions-Animation
 * @category Transition Timing Function
 * @css
 * ```css
 * transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/transition-timing-function)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/ease_in_out.html)
 * @since Tailwind v3.2.7
 */
export type ease_in_out = 'ease-in-out'

/**
 * @group Transitions-Animation
 * @category Transition Timing Function
 * @example
 * ```ts
 * let value: TransitionTimingFunction //Only tailwindcss types
 * let value: string | TransitionTimingFunction //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/transition-timing-function)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/TransitionTimingFunction.html)
 * @since Tailwind v3.2.7
 */
export type TransitionTimingFunction =
    ease_linear | ease_in
    | ease_out
    | ease_in_out
