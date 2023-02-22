// noinspection JSUnusedGlobalSymbols

/**
 * @group Filters
 * @category Drop Shadow
 * @css
 * ```css
 * filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05));
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/drop-shadow)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/drop_shadow_sm.html)
 * @since Tailwind v3.2.7
 */
export type drop_shadow_sm = 'drop-shadow-sm'

/**
 * @group Filters
 * @category Drop Shadow
 * @css
 * ```css
 * filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/drop-shadow)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/drop_shadow.html)
 * @since Tailwind v3.2.7
 */
export type drop_shadow = 'drop-shadow'

/**
 * @group Filters
 * @category Drop Shadow
 * @css
 * ```css
 * filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/drop-shadow)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/drop_shadow_md.html)
 * @since Tailwind v3.2.7
 */
export type drop_shadow_md = 'drop-shadow-md'

/**
 * @group Filters
 * @category Drop Shadow
 * @css
 * ```css
 * filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/drop-shadow)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/drop_shadow_lg.html)
 * @since Tailwind v3.2.7
 */
export type drop_shadow_lg = 'drop-shadow-lg'

/**
 * @group Filters
 * @category Drop Shadow
 * @css
 * ```css
 * filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/drop-shadow)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/drop_shadow_xl.html)
 * @since Tailwind v3.2.7
 */
export type drop_shadow_xl = 'drop-shadow-xl'

/**
 * @group Filters
 * @category Drop Shadow
 * @css
 * ```css
 * filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/drop-shadow)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/drop_shadow_2xl.html)
 * @since Tailwind v3.2.7
 */
export type drop_shadow_2xl = 'drop-shadow-2xl'

/**
 * @group Filters
 * @category Drop Shadow
 * @css
 * ```css
 * filter: drop-shadow(0 0 #0000);
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/drop-shadow)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/drop_shadow_none.html)
 * @since Tailwind v3.2.7
 */
export type drop_shadow_none = 'drop-shadow-none'

/**
 * @group Filters
 * @category Drop Shadow
 * @example
 * ```ts
 * let value: DropShadow //Only tailwindcss types
 * let value: string | DropShadow //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/drop-shadow)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/DropShadow.html)
 * @since Tailwind v3.2.7
 */
export type DropShadow =
    drop_shadow_sm | drop_shadow
    | drop_shadow_md
    | drop_shadow_lg
    | drop_shadow_xl
    | drop_shadow_2xl
    | drop_shadow_none
