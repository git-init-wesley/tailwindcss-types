// noinspection JSUnusedGlobalSymbols

/**
 * @group Layout
 * @category Visibility
 * @css
 * ```css
 * visibility: visible;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/visibility)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/visible.html)
 * @since Tailwind v3.2.7
 */
export type visible = 'visible'

/**
 * @group Layout
 * @category Visibility
 * @css
 * ```css
 * visibility: hidden;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/visibility)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/invisible.html)
 * @since Tailwind v3.2.7
 */
export type invisible = 'invisible'

/**
 * @group Layout
 * @category Visibility
 * @css
 * ```css
 * visibility: collapse;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/visibility)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/collapse.html)
 * @since Tailwind v3.2.7
 */
export type collapse = 'collapse'

/**
 * @group Layout
 * @category Visibility
 * @example
 * ```ts
 * let value: Visibility //Only tailwindcss types
 * let value: string | Visibility //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/visibility)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/Visibility.html)
 * @since Tailwind v3.2.7
 */
export type Visibility =
    visible | invisible
    | collapse
