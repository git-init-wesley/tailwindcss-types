// noinspection JSUnusedGlobalSymbols

/**
 * @group Layout
 * @category Container
 * @css
 * ```css
 * None
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/container)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/container.html)
 * @since Tailwind v3.2.7
 */
export type container = 'container'

/**
 * @group Layout
 * @category Container
 * @css
 * ```css
 * max-width: 640px;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/container)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/sm.html)
 * @since Tailwind v3.2.7
 */
export type sm = 'sm'

/**
 * @group Layout
 * @category Container
 * @css
 * ```css
 * max-width: 768px;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/container)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/md.html)
 * @since Tailwind v3.2.7
 */
export type md = 'md'

/**
 * @group Layout
 * @category Container
 * @css
 * ```css
 * max-width: 1024px;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/container)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/lg.html)
 * @since Tailwind v3.2.7
 */
export type lg = 'lg'

/**
 * @group Layout
 * @category Container
 * @css
 * ```css
 * max-width: 1280px;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/container)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/xl.html)
 * @since Tailwind v3.2.7
 */
export type xl = 'xl'

/**
 * @group Layout
 * @category Container
 * @css
 * ```css
 * max-width: 1536px;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/container)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/_2xl.html)
 * @since Tailwind v3.2.7
 */
export type _2xl = '2xl'

/**
 * @group Layout
 * @category Container
 * @example
 * ```ts
 * let value: Container //Only tailwindcss types
 * let value: string | Container //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/container)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/Container.html)
 * @since Tailwind v3.2.7
 */
export type Container =
    container | sm
    | md
    | lg
    | xl
    | _2xl
