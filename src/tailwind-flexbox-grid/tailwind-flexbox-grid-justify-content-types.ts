// noinspection JSUnusedGlobalSymbols

/**
 * @group Flexbox-Grid
 * @category Justify Content
 * @css
 * ```css
 * justify-content: flex-start;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/justify-content)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/justify_start.html)
 * @since Tailwind v3.2.7
 */
export type justify_start = 'justify-start'

/**
 * @group Flexbox-Grid
 * @category Justify Content
 * @css
 * ```css
 * justify-content: flex-end;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/justify-content)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/justify_end.html)
 * @since Tailwind v3.2.7
 */
export type justify_end = 'justify-end'

/**
 * @group Flexbox-Grid
 * @category Justify Content
 * @css
 * ```css
 * justify-content: center;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/justify-content)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/justify_center.html)
 * @since Tailwind v3.2.7
 */
export type justify_center = 'justify-center'

/**
 * @group Flexbox-Grid
 * @category Justify Content
 * @css
 * ```css
 * justify-content: space-between;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/justify-content)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/justify_between.html)
 * @since Tailwind v3.2.7
 */
export type justify_between = 'justify-between'

/**
 * @group Flexbox-Grid
 * @category Justify Content
 * @css
 * ```css
 * justify-content: space-around;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/justify-content)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/justify_around.html)
 * @since Tailwind v3.2.7
 */
export type justify_around = 'justify-around'

/**
 * @group Flexbox-Grid
 * @category Justify Content
 * @css
 * ```css
 * justify-content: space-evenly;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/justify-content)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/justify_evenly.html)
 * @since Tailwind v3.2.7
 */
export type justify_evenly = 'justify-evenly'

/**
 * @group Flexbox-Grid
 * @category Justify Content
 * @example
 * ```ts
 * let value: JustifyContent //Only tailwindcss types
 * let value: string | JustifyContent //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/justify-content)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/JustifyContent.html)
 * @since Tailwind v3.2.7
 */
export type JustifyContent =
    justify_start | justify_end
    | justify_center
    | justify_between
    | justify_around
    | justify_evenly
