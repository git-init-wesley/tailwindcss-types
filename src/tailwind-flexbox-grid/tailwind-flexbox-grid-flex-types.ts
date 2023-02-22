// noinspection JSUnusedGlobalSymbols

/**
 * @group Flexbox-Grid
 * @category Flex
 * @css
 * ```css
 * flex: 1 1 0%;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/flex)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/flex_1.html)
 * @since Tailwind v3.2.7
 */
export type flex_1 = 'flex-1'

/**
 * @group Flexbox-Grid
 * @category Flex
 * @css
 * ```css
 * flex: 1 1 auto;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/flex)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/flex_auto.html)
 * @since Tailwind v3.2.7
 */
export type flex_auto = 'flex-auto'

/**
 * @group Flexbox-Grid
 * @category Flex
 * @css
 * ```css
 * flex: 0 1 auto;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/flex)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/flex_initial.html)
 * @since Tailwind v3.2.7
 */
export type flex_initial = 'flex-initial'

/**
 * @group Flexbox-Grid
 * @category Flex
 * @css
 * ```css
 * flex: none;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/flex)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/flex_none.html)
 * @since Tailwind v3.2.7
 */
export type flex_none = 'flex-none'

/**
 * @group Flexbox-Grid
 * @category Flex
 * @example
 * ```ts
 * let value: Flex //Only tailwindcss types
 * let value: string | Flex //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/flex)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/Flex.html)
 * @since Tailwind v3.2.7
 */
export type Flex =
    flex_1 | flex_auto
    | flex_initial
    | flex_none
