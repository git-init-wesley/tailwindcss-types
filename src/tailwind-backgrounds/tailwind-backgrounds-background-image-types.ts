// noinspection JSUnusedGlobalSymbols

/**
 * @group Backgrounds
 * @category Background Image
 * @css
 * ```css
 * background-image: none;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/background-image)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/bg_none.html)
 * @since Tailwind v3.2.7
 */
export type bg_none = 'bg-none'

/**
 * @group Backgrounds
 * @category Background Image
 * @css
 * ```css
 * background-image: linear-gradient(to top, var(--tw-gradient-stops));
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/background-image)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/bg_gradient_to_t.html)
 * @since Tailwind v3.2.7
 */
export type bg_gradient_to_t = 'bg-gradient-to-t'

/**
 * @group Backgrounds
 * @category Background Image
 * @css
 * ```css
 * background-image: linear-gradient(to top right, var(--tw-gradient-stops));
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/background-image)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/bg_gradient_to_tr.html)
 * @since Tailwind v3.2.7
 */
export type bg_gradient_to_tr = 'bg-gradient-to-tr'

/**
 * @group Backgrounds
 * @category Background Image
 * @css
 * ```css
 * background-image: linear-gradient(to right, var(--tw-gradient-stops));
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/background-image)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/bg_gradient_to_r.html)
 * @since Tailwind v3.2.7
 */
export type bg_gradient_to_r = 'bg-gradient-to-r'

/**
 * @group Backgrounds
 * @category Background Image
 * @css
 * ```css
 * background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/background-image)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/bg_gradient_to_br.html)
 * @since Tailwind v3.2.7
 */
export type bg_gradient_to_br = 'bg-gradient-to-br'

/**
 * @group Backgrounds
 * @category Background Image
 * @css
 * ```css
 * background-image: linear-gradient(to bottom, var(--tw-gradient-stops));
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/background-image)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/bg_gradient_to_b.html)
 * @since Tailwind v3.2.7
 */
export type bg_gradient_to_b = 'bg-gradient-to-b'

/**
 * @group Backgrounds
 * @category Background Image
 * @css
 * ```css
 * background-image: linear-gradient(to bottom left, var(--tw-gradient-stops));
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/background-image)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/bg_gradient_to_bl.html)
 * @since Tailwind v3.2.7
 */
export type bg_gradient_to_bl = 'bg-gradient-to-bl'

/**
 * @group Backgrounds
 * @category Background Image
 * @css
 * ```css
 * background-image: linear-gradient(to left, var(--tw-gradient-stops));
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/background-image)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/bg_gradient_to_l.html)
 * @since Tailwind v3.2.7
 */
export type bg_gradient_to_l = 'bg-gradient-to-l'

/**
 * @group Backgrounds
 * @category Background Image
 * @css
 * ```css
 * background-image: linear-gradient(to top left, var(--tw-gradient-stops));
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/background-image)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/bg_gradient_to_tl.html)
 * @since Tailwind v3.2.7
 */
export type bg_gradient_to_tl = 'bg-gradient-to-tl'

/**
 * @group Backgrounds
 * @category Background Image
 * @example
 * ```ts
 * let value: BackgroundImage //Only tailwindcss types
 * let value: string | BackgroundImage //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/background-image)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/BackgroundImage.html)
 * @since Tailwind v3.2.7
 */
export type BackgroundImage =
    bg_none | bg_gradient_to_t
    | bg_gradient_to_tr
    | bg_gradient_to_r
    | bg_gradient_to_br
    | bg_gradient_to_b
    | bg_gradient_to_bl
    | bg_gradient_to_l
    | bg_gradient_to_tl
