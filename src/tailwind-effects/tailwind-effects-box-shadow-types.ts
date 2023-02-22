// noinspection JSUnusedGlobalSymbols

/**
 * @group Effects
 * @category Box Shadow
 * @css
 * ```css
 * box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/box-shadow)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/shadow_sm.html)
 * @since Tailwind v3.2.7
 */
export type shadow_sm = 'shadow-sm'

/**
 * @group Effects
 * @category Box Shadow
 * @css
 * ```css
 * box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/box-shadow)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/shadow.html)
 * @since Tailwind v3.2.7
 */
export type shadow = 'shadow'

/**
 * @group Effects
 * @category Box Shadow
 * @css
 * ```css
 * box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/box-shadow)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/shadow_md.html)
 * @since Tailwind v3.2.7
 */
export type shadow_md = 'shadow-md'

/**
 * @group Effects
 * @category Box Shadow
 * @css
 * ```css
 * box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/box-shadow)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/shadow_lg.html)
 * @since Tailwind v3.2.7
 */
export type shadow_lg = 'shadow-lg'

/**
 * @group Effects
 * @category Box Shadow
 * @css
 * ```css
 * box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/box-shadow)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/shadow_xl.html)
 * @since Tailwind v3.2.7
 */
export type shadow_xl = 'shadow-xl'

/**
 * @group Effects
 * @category Box Shadow
 * @css
 * ```css
 * box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/box-shadow)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/shadow_2xl.html)
 * @since Tailwind v3.2.7
 */
export type shadow_2xl = 'shadow-2xl'

/**
 * @group Effects
 * @category Box Shadow
 * @css
 * ```css
 * box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/box-shadow)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/shadow_inner.html)
 * @since Tailwind v3.2.7
 */
export type shadow_inner = 'shadow-inner'

/**
 * @group Effects
 * @category Box Shadow
 * @css
 * ```css
 * box-shadow: 0 0 #0000;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/box-shadow)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/shadow_none.html)
 * @since Tailwind v3.2.7
 */
export type shadow_none = 'shadow-none'

/**
 * @group Effects
 * @category Box Shadow
 * @example
 * ```ts
 * let value: BoxShadow //Only tailwindcss types
 * let value: string | BoxShadow //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/box-shadow)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/BoxShadow.html)
 * @since Tailwind v3.2.7
 */
export type BoxShadow =
    shadow_sm | shadow
    | shadow_md
    | shadow_lg
    | shadow_xl
    | shadow_2xl
    | shadow_inner
    | shadow_none
