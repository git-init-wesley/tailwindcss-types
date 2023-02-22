// noinspection JSUnusedGlobalSymbols

/**
 * @group Flexbox-Grid
 * @category Flex Shrink
 * @css
 * ```css
 * flex-shrink: 1;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/flex-shrink)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/shrink.html)
 * @since Tailwind v3.2.7
 */
export type shrink = 'shrink'

/**
 * @group Flexbox-Grid
 * @category Flex Shrink
 * @css
 * ```css
 * flex-shrink: 0;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/flex-shrink)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/shrink_0.html)
 * @since Tailwind v3.2.7
 */
export type shrink_0 = 'shrink-0'

/**
 * @group Flexbox-Grid
 * @category Flex Shrink
 * @example
 * ```ts
 * let value: FlexShrink //Only tailwindcss types
 * let value: string | FlexShrink //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/flex-shrink)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/FlexShrink.html)
 * @since Tailwind v3.2.7
 */
export type FlexShrink =
    shrink | shrink_0
