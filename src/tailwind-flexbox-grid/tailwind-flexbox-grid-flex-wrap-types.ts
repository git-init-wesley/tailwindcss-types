// noinspection JSUnusedGlobalSymbols

/**
 * @group Flexbox-Grid
 * @category Flex Wrap
 * @css
 * ```css
 * flex-wrap: wrap;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/flex-wrap)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/flex_wrap.html)
 * @since Tailwind v3.2.7
 */
export type flex_wrap = 'flex-wrap'

/**
 * @group Flexbox-Grid
 * @category Flex Wrap
 * @css
 * ```css
 * flex-wrap: wrap-reverse;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/flex-wrap)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/flex_wrap_reverse.html)
 * @since Tailwind v3.2.7
 */
export type flex_wrap_reverse = 'flex-wrap-reverse'

/**
 * @group Flexbox-Grid
 * @category Flex Wrap
 * @css
 * ```css
 * flex-wrap: nowrap;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/flex-wrap)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/flex_nowrap.html)
 * @since Tailwind v3.2.7
 */
export type flex_nowrap = 'flex-nowrap'

/**
 * @group Flexbox-Grid
 * @category Flex Wrap
 * @example
 * ```ts
 * let value: FlexWrap //Only tailwindcss types
 * let value: string | FlexWrap //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/flex-wrap)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/FlexWrap.html)
 * @since Tailwind v3.2.7
 */
export type FlexWrap =
    flex_wrap | flex_wrap_reverse
    | flex_nowrap
