// noinspection JSUnusedGlobalSymbols

/**
 * @group Flexbox-Grid
 * @category Align Self
 * @css
 * ```css
 * align-self: auto;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/align-self)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/self_auto.html)
 * @since Tailwind v3.2.7
 */
export type self_auto = 'self-auto'

/**
 * @group Flexbox-Grid
 * @category Align Self
 * @css
 * ```css
 * align-self: flex-start;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/align-self)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/self_start.html)
 * @since Tailwind v3.2.7
 */
export type self_start = 'self-start'

/**
 * @group Flexbox-Grid
 * @category Align Self
 * @css
 * ```css
 * align-self: flex-end;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/align-self)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/self_end.html)
 * @since Tailwind v3.2.7
 */
export type self_end = 'self-end'

/**
 * @group Flexbox-Grid
 * @category Align Self
 * @css
 * ```css
 * align-self: center;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/align-self)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/self_center.html)
 * @since Tailwind v3.2.7
 */
export type self_center = 'self-center'

/**
 * @group Flexbox-Grid
 * @category Align Self
 * @css
 * ```css
 * align-self: stretch;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/align-self)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/self_stretch.html)
 * @since Tailwind v3.2.7
 */
export type self_stretch = 'self-stretch'

/**
 * @group Flexbox-Grid
 * @category Align Self
 * @css
 * ```css
 * align-self: baseline;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/align-self)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/self_baseline.html)
 * @since Tailwind v3.2.7
 */
export type self_baseline = 'self-baseline'

/**
 * @group Flexbox-Grid
 * @category Align Self
 * @example
 * ```ts
 * let value: AlignSelf //Only tailwindcss types
 * let value: string | AlignSelf //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/align-self)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/AlignSelf.html)
 * @since Tailwind v3.2.7
 */
export type AlignSelf =
    self_auto | self_start
    | self_end
    | self_center
    | self_stretch
    | self_baseline
