// noinspection JSUnusedGlobalSymbols

/**
 * @group Layout
 * @category Break Inside
 * @css
 * ```css
 * break-inside: auto;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/break-inside)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/break_inside_auto.html)
 * @since Tailwind v3.2.7
 */
export type break_inside_auto = 'break-inside-auto'

/**
 * @group Layout
 * @category Break Inside
 * @css
 * ```css
 * break-inside: avoid;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/break-inside)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/break_inside_avoid.html)
 * @since Tailwind v3.2.7
 */
export type break_inside_avoid = 'break-inside-avoid'

/**
 * @group Layout
 * @category Break Inside
 * @css
 * ```css
 * break-inside: avoid-page;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/break-inside)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/break_inside_avoid_page.html)
 * @since Tailwind v3.2.7
 */
export type break_inside_avoid_page = 'break-inside-avoid-page'

/**
 * @group Layout
 * @category Break Inside
 * @css
 * ```css
 * break-inside: avoid-column;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/break-inside)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/break_inside_avoid_column.html)
 * @since Tailwind v3.2.7
 */
export type break_inside_avoid_column = 'break-inside-avoid-column'

/**
 * @group Layout
 * @category Break Inside
 * @example
 * ```ts
 * let value: BreakInside //Only tailwindcss types
 * let value: string | BreakInside //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/break-inside)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/BreakInside.html)
 * @since Tailwind v3.2.7
 */
export type BreakInside =
    break_inside_auto | break_inside_avoid
    | break_inside_avoid_page
    | break_inside_avoid_column
