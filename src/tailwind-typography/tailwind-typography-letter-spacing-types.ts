// noinspection JSUnusedGlobalSymbols

/**
 * @group Typography
 * @category Letter Spacing
 * @css
 * ```css
 * letter-spacing: -0.05em;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/letter-spacing)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/tracking_tighter.html)
 * @since Tailwind v3.2.7
 */
export type tracking_tighter = 'tracking-tighter'

/**
 * @group Typography
 * @category Letter Spacing
 * @css
 * ```css
 * letter-spacing: -0.025em;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/letter-spacing)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/tracking_tight.html)
 * @since Tailwind v3.2.7
 */
export type tracking_tight = 'tracking-tight'

/**
 * @group Typography
 * @category Letter Spacing
 * @css
 * ```css
 * letter-spacing: 0em;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/letter-spacing)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/tracking_normal.html)
 * @since Tailwind v3.2.7
 */
export type tracking_normal = 'tracking-normal'

/**
 * @group Typography
 * @category Letter Spacing
 * @css
 * ```css
 * letter-spacing: 0.025em;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/letter-spacing)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/tracking_wide.html)
 * @since Tailwind v3.2.7
 */
export type tracking_wide = 'tracking-wide'

/**
 * @group Typography
 * @category Letter Spacing
 * @css
 * ```css
 * letter-spacing: 0.05em;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/letter-spacing)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/tracking_wider.html)
 * @since Tailwind v3.2.7
 */
export type tracking_wider = 'tracking-wider'

/**
 * @group Typography
 * @category Letter Spacing
 * @css
 * ```css
 * letter-spacing: 0.1em;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/letter-spacing)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/tracking_widest.html)
 * @since Tailwind v3.2.7
 */
export type tracking_widest = 'tracking-widest'

/**
 * @group Typography
 * @category Letter Spacing
 * @example
 * ```ts
 * let value: LetterSpacing //Only tailwindcss types
 * let value: string | LetterSpacing //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/letter-spacing)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/LetterSpacing.html)
 * @since Tailwind v3.2.7
 */
export type LetterSpacing =
    tracking_tighter | tracking_tight
    | tracking_normal
    | tracking_wide
    | tracking_wider
    | tracking_widest
