// noinspection JSUnusedGlobalSymbols

/**
 * @group Flexbox-Grid
 * @category Grid Auto Flow
 * @css
 * ```css
 * grid-auto-flow: row;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/grid-auto-flow)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/grid_flow_row.html)
 * @since Tailwind v3.2.7
 */
export type grid_flow_row = 'grid-flow-row'

/**
 * @group Flexbox-Grid
 * @category Grid Auto Flow
 * @css
 * ```css
 * grid-auto-flow: column;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/grid-auto-flow)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/grid_flow_col.html)
 * @since Tailwind v3.2.7
 */
export type grid_flow_col = 'grid-flow-col'

/**
 * @group Flexbox-Grid
 * @category Grid Auto Flow
 * @css
 * ```css
 * grid-auto-flow: dense;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/grid-auto-flow)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/grid_flow_dense.html)
 * @since Tailwind v3.2.7
 */
export type grid_flow_dense = 'grid-flow-dense'

/**
 * @group Flexbox-Grid
 * @category Grid Auto Flow
 * @css
 * ```css
 * grid-auto-flow: row dense;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/grid-auto-flow)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/grid_flow_row_dense.html)
 * @since Tailwind v3.2.7
 */
export type grid_flow_row_dense = 'grid-flow-row-dense'

/**
 * @group Flexbox-Grid
 * @category Grid Auto Flow
 * @css
 * ```css
 * grid-auto-flow: column dense;
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/grid-auto-flow)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/grid_flow_col_dense.html)
 * @since Tailwind v3.2.7
 */
export type grid_flow_col_dense = 'grid-flow-col-dense'

/**
 * @group Flexbox-Grid
 * @category Grid Auto Flow
 * @example
 * ```ts
 * let value: GridAutoFlow //Only tailwindcss types
 * let value: string | GridAutoFlow //Your custom tailwindcss with only tailwindcss type
 * ```
 * @description You can refer to the official [tailwind documentation](https://tailwindcss.com/docs/grid-auto-flow)
 * @description You can refer to the [typedoc](https://git-init-wesley.github.io/tailwindcss-types/docs/types/GridAutoFlow.html)
 * @since Tailwind v3.2.7
 */
export type GridAutoFlow =
    grid_flow_row | grid_flow_col
    | grid_flow_dense
    | grid_flow_row_dense
    | grid_flow_col_dense
