// noinspection JSUnusedGlobalSymbols

/**
 * @group Interactivity
 * @category Resize
 * @css
 * ```css
 * resize: none;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/resize)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/resize_none.html)
 * @since Tailwind v3.2.7
 */
export type resize_none = 'resize-none'

/**
 * @group Interactivity
 * @category Resize
 * @css
 * ```css
 * resize: vertical;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/resize)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/resize_y.html)
 * @since Tailwind v3.2.7
 */
export type resize_y = 'resize-y'

/**
 * @group Interactivity
 * @category Resize
 * @css
 * ```css
 * resize: horizontal;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/resize)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/resize_x.html)
 * @since Tailwind v3.2.7
 */
export type resize_x = 'resize-x'

/**
 * @group Interactivity
 * @category Resize
 * @css
 * ```css
 * resize: both;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/resize)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/resize.html)
 * @since Tailwind v3.2.7
 */
export type resize = 'resize'

/**
 * @group Interactivity
 * @category Resize
 * @example
 * ```ts
 * let value: Resize //Only tailwindcss types
 * let value: string | Resize //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/resize)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/Resize.html)
 * @since Tailwind v3.2.7
 */
export type Resize =
    resize_none | resize_y
    | resize_x
    | resize
