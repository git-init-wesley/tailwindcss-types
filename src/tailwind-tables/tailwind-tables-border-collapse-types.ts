// noinspection JSUnusedGlobalSymbols

/**
 * @group Tables
 * @category Border Collapse
 * @css
 * ```css
 * border-collapse: collapse;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/border-collapse)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/border_collapse.html)
 * @since Tailwind v3.2.7
 */
export type border_collapse = 'border-collapse'

/**
 * @group Tables
 * @category Border Collapse
 * @css
 * ```css
 * border-collapse: separate;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/border-collapse)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/border_separate.html)
 * @since Tailwind v3.2.7
 */
export type border_separate = 'border-separate'

/**
 * @group Tables
 * @category Border Collapse
 * @example
 * ```ts
 * let value: BorderCollapse //Only tailwindcss types
 * let value: string | BorderCollapse //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/border-collapse)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/BorderCollapse.html)
 * @since Tailwind v3.2.7
 */
export type BorderCollapse =
    border_collapse | border_separate
