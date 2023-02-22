// noinspection JSUnusedGlobalSymbols

/**
 * @group Transitions-Animation
 * @category Transition Property
 * @css
 * ```css
 * transition-property: none;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/transition-property)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/transition_none.html)
 * @since Tailwind v3.2.7
 */
export type transition_none = 'transition-none'

/**
 * @group Transitions-Animation
 * @category Transition Property
 * @css
 * ```css
 * transition-property: all;transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);transition-duration: 150ms;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/transition-property)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/transition_all.html)
 * @since Tailwind v3.2.7
 */
export type transition_all = 'transition-all'

/**
 * @group Transitions-Animation
 * @category Transition Property
 * @css
 * ```css
 * transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);transition-duration: 150ms;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/transition-property)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/transition.html)
 * @since Tailwind v3.2.7
 */
export type transition = 'transition'

/**
 * @group Transitions-Animation
 * @category Transition Property
 * @css
 * ```css
 * transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);transition-duration: 150ms;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/transition-property)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/transition_colors.html)
 * @since Tailwind v3.2.7
 */
export type transition_colors = 'transition-colors'

/**
 * @group Transitions-Animation
 * @category Transition Property
 * @css
 * ```css
 * transition-property: opacity;transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);transition-duration: 150ms;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/transition-property)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/transition_opacity.html)
 * @since Tailwind v3.2.7
 */
export type transition_opacity = 'transition-opacity'

/**
 * @group Transitions-Animation
 * @category Transition Property
 * @css
 * ```css
 * transition-property: box-shadow;transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);transition-duration: 150ms;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/transition-property)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/transition_shadow.html)
 * @since Tailwind v3.2.7
 */
export type transition_shadow = 'transition-shadow'

/**
 * @group Transitions-Animation
 * @category Transition Property
 * @css
 * ```css
 * transition-property: transform;transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);transition-duration: 150ms;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/transition-property)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/transition_transform.html)
 * @since Tailwind v3.2.7
 */
export type transition_transform = 'transition-transform'

/**
 * @group Transitions-Animation
 * @category Transition Property
 * @example
 * ```ts
 * let value: TransitionProperty //Only tailwindcss types
 * let value: string | TransitionProperty //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/transition-property)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/TransitionProperty.html)
 * @since Tailwind v3.2.7
 */
export type TransitionProperty =
    transition_none | transition_all
    | transition
    | transition_colors
    | transition_opacity
    | transition_shadow
    | transition_transform
