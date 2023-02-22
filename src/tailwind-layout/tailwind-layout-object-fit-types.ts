// noinspection JSUnusedGlobalSymbols

/**
 * @group Layout
 * @category Object Fit
 * @css
 * ```css
 * object-fit: contain;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/object-fit)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/object_contain.html)
 * @since Tailwind v3.2.7
 */
export type object_contain = 'object-contain'

/**
 * @group Layout
 * @category Object Fit
 * @css
 * ```css
 * object-fit: cover;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/object-fit)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/object_cover.html)
 * @since Tailwind v3.2.7
 */
export type object_cover = 'object-cover'

/**
 * @group Layout
 * @category Object Fit
 * @css
 * ```css
 * object-fit: fill;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/object-fit)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/object_fill.html)
 * @since Tailwind v3.2.7
 */
export type object_fill = 'object-fill'

/**
 * @group Layout
 * @category Object Fit
 * @css
 * ```css
 * object-fit: none;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/object-fit)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/object_none.html)
 * @since Tailwind v3.2.7
 */
export type object_none = 'object-none'

/**
 * @group Layout
 * @category Object Fit
 * @css
 * ```css
 * object-fit: scale-down;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/object-fit)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/object_scale_down.html)
 * @since Tailwind v3.2.7
 */
export type object_scale_down = 'object-scale-down'

/**
 * @group Layout
 * @category Object Fit
 * @example
 * ```ts
 * let value: ObjectFit //Only tailwindcss types
 * let value: string | ObjectFit //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/object-fit)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/ObjectFit.html)
 * @since Tailwind v3.2.7
 */
export type ObjectFit =
    object_contain | object_cover
    | object_fill
    | object_none
    | object_scale_down
