// noinspection JSUnusedGlobalSymbols

/**
 * @group Layout
 * @category Box Decoration Break
 * @css
 * ```css
 * box-decoration-break: clone;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/box-decoration-break)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/box_decoration_clone.html)
 * @since Tailwind v3.2.7
 */
export type box_decoration_clone = 'box-decoration-clone'

/**
 * @group Layout
 * @category Box Decoration Break
 * @css
 * ```css
 * box-decoration-break: slice;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/box-decoration-break)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/box_decoration_slice.html)
 * @since Tailwind v3.2.7
 */
export type box_decoration_slice = 'box-decoration-slice'

/**
 * @group Layout
 * @category Box Decoration Break
 * @example
 * ```ts
 * let value: BoxDecorationBreak //Only tailwindcss types
 * let value: string | BoxDecorationBreak //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/box-decoration-break)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/BoxDecorationBreak.html)
 * @since Tailwind v3.2.7
 */
export type BoxDecorationBreak =
    box_decoration_clone | box_decoration_slice
