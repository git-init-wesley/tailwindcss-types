// noinspection JSUnusedGlobalSymbols

export * from './tailwind-filters-blur-types'
export * from './tailwind-filters-brightness-types'
export * from './tailwind-filters-contrast-types'

/**
 * @group Filters
 * @description [tailwindcss doc's](https://tailwindcss.com/docs/drop-shadow)
 * @since Tailwind v3.2.7
 */
export type DropShadow =
    'drop-shadow-sm'
    | 'drop-shadow'
    | 'drop-shadow-md'
    | 'drop-shadow-lg'
    | 'drop-shadow-xl'
    | 'drop-shadow-2xl'
    | 'drop-shadow-none'

/**
 * @group Filters
 * @description [tailwindcss doc's](https://tailwindcss.com/docs/grayscale)
 * @since Tailwind v3.2.7
 */
export type Grayscale = 'grayscale-0' | 'grayscale'

/**
 * @group Filters
 * @description [tailwindcss doc's](https://tailwindcss.com/docs/hue-rotate)
 * @since Tailwind v3.2.7
 */
export type HueRotate =
    'hue-rotate-0'
    | 'hue-rotate-15'
    | 'hue-rotate-30'
    | 'hue-rotate-60'
    | 'hue-rotate-90'
    | 'hue-rotate-180'

/**
 * @group Filters
 * @description [tailwindcss doc's](https://tailwindcss.com/docs/invert)
 * @since Tailwind v3.2.7
 */
export type Invert =
    'invert-0'
    | 'invert'

/**
 * @group Filters
 * @description [tailwindcss doc's](https://tailwindcss.com/docs/saturate)
 * @since Tailwind v3.2.7
 */
export type Saturate =
    'saturate-0'
    | 'saturate-50'
    | 'saturate-100'
    | 'saturate-150'
    | 'saturate-200'

/**
 * @group Filters
 * @description [tailwindcss doc's](https://tailwindcss.com/docs/sepia)
 * @since Tailwind v3.2.7
 */
export type Sepia =
    'sepia-0'
    | 'sepia'

/**
 * @group Filters
 * @description [tailwindcss doc's](https://tailwindcss.com/docs/backdrop-blur)
 * @since Tailwind v3.2.7
 */
export type BackdropBlur =
    'backdrop-blur-none'
    | 'backdrop-blur-sm'
    | 'backdrop-blur'
    | 'backdrop-blur-md'
    | 'backdrop-blur-lg'
    | 'backdrop-blur-xl'
    | 'backdrop-blur-2xl'
    | 'backdrop-blur-3xl'

/**
 * @group Filters
 * @description [tailwindcss doc's](https://tailwindcss.com/docs/backdrop-brightness)
 * @since Tailwind v3.2.7
 */
export type BackdropBrightness =
    'backdrop-brightness-0'
    | 'backdrop-brightness-50'
    | 'backdrop-brightness-75'
    | 'backdrop-brightness-90'
    | 'backdrop-brightness-95'
    | 'backdrop-brightness-100'
    | 'backdrop-brightness-105'
    | 'backdrop-brightness-110'
    | 'backdrop-brightness-125'
    | 'backdrop-brightness-150'
    | 'backdrop-brightness-200'

/**
 * @group Filters
 * @description [tailwindcss doc's](https://tailwindcss.com/docs/backdrop-contrast)
 * @since Tailwind v3.2.7
 */
export type BackdropContrast =
    'backdrop-contrast-0'
    | 'backdrop-contrast-50'
    | 'backdrop-contrast-75'
    | 'backdrop-contrast-100'
    | 'backdrop-contrast-125'
    | 'backdrop-contrast-150'
    | 'backdrop-contrast-200'

/**
 * @group Filters
 * @description [tailwindcss doc's](https://tailwindcss.com/docs/backdrop-grayscale)
 * @since Tailwind v3.2.7
 */
export type BackdropGrayscale =
    'backdrop-grayscale-0'
    | 'backdrop-grayscale'

/**
 * @group Filters
 * @description [tailwindcss doc's](https://tailwindcss.com/docs/backdrop-hue-rotate)
 * @since Tailwind v3.2.7
 */
export type BackdropHueRotate =
    'backdrop-hue-rotate-0'
    | 'backdrop-hue-rotate-15'
    | 'backdrop-hue-rotate-30'
    | 'backdrop-hue-rotate-60'
    | 'backdrop-hue-rotate-90'
    | 'backdrop-hue-rotate-180'

/**
 * @group Filters
 * @description [tailwindcss doc's](https://tailwindcss.com/docs/backdrop-invert)
 * @since Tailwind v3.2.7
 */
export type BackdropInvert =
    'backdrop-invert-0'
    | 'backdrop-invert'

/**
 * @group Filters
 * @description [tailwindcss doc's](https://tailwindcss.com/docs/backdrop-opacity)
 * @since Tailwind v3.2.7
 */
export type BackdropOpacity =
    'backdrop-opacity-0'
    | 'backdrop-opacity-5'
    | 'backdrop-opacity-10'
    | 'backdrop-opacity-20'
    | 'backdrop-opacity-25'
    | 'backdrop-opacity-30'
    | 'backdrop-opacity-40'
    | 'backdrop-opacity-50'
    | 'backdrop-opacity-60'
    | 'backdrop-opacity-70'
    | 'backdrop-opacity-75'
    | 'backdrop-opacity-80'
    | 'backdrop-opacity-90'
    | 'backdrop-opacity-95'
    | 'backdrop-opacity-100'

/**
 * @group Filters
 * @description [tailwindcss doc's](https://tailwindcss.com/docs/backdrop-saturate)
 * @since Tailwind v3.2.7
 */
export type BackdropSaturate =
    'backdrop-saturate-0'
    | 'backdrop-saturate-50'
    | 'backdrop-saturate-100'
    | 'backdrop-saturate-150'
    | 'backdrop-saturate-200'

/**
 * @example
 * ```ts
 * let value: BackdropSepia //Only tailwindcss types
 * let value: string | BackdropSepia //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/backdrop-sepia)
 * @since Tailwind v3.2.7
 * @group Filters
 */
export type BackdropSepia =
    'backdrop-sepia-0'
    | 'backdrop-sepia'
