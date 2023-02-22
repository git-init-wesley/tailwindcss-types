// noinspection JSUnusedGlobalSymbols

/**
 * @group Flexbox-Grid
 * @category Place Self
 * @css
 * ```css
 * place-self: auto;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/place-self)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/place_self_auto.html)
 * @since Tailwind v3.2.7
 */
export type place_self_auto = 'place-self-auto'

/**
 * @group Flexbox-Grid
 * @category Place Self
 * @css
 * ```css
 * place-self: start;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/place-self)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/place_self_start.html)
 * @since Tailwind v3.2.7
 */
export type place_self_start = 'place-self-start'

/**
 * @group Flexbox-Grid
 * @category Place Self
 * @css
 * ```css
 * place-self: end;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/place-self)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/place_self_end.html)
 * @since Tailwind v3.2.7
 */
export type place_self_end = 'place-self-end'

/**
 * @group Flexbox-Grid
 * @category Place Self
 * @css
 * ```css
 * place-self: center;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/place-self)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/place_self_center.html)
 * @since Tailwind v3.2.7
 */
export type place_self_center = 'place-self-center'

/**
 * @group Flexbox-Grid
 * @category Place Self
 * @css
 * ```css
 * place-self: stretch;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/place-self)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/place_self_stretch.html)
 * @since Tailwind v3.2.7
 */
export type place_self_stretch = 'place-self-stretch'

/**
 * @group Flexbox-Grid
 * @category Place Self
 * @example
 * ```ts
 * let value: PlaceSelf //Only tailwindcss types
 * let value: string | PlaceSelf //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/place-self)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/PlaceSelf.html)
 * @since Tailwind v3.2.7
 */
export type PlaceSelf =
    place_self_auto | place_self_start
    | place_self_end
    | place_self_center
    | place_self_stretch
