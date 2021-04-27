import { GeoLayoutInstance as Geo } from "../../../../../engine/GeoLayout"

export const koopa_shell_geo = [
	{ command: Geo.node_shadow, args: [SHADOW_CIRCLE_4_VERTS, 0xC8, 70]},
	{ command: Geo.open_node },
	{ command: Geo.node_scale, args: [0x00, 65536]},
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, koopa_shell_seg8_dl_08028B78] },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_end },
]

export const koopa_shell2_geo = [
	{ command: Geo.node_shadow, args: [SHADOW_CIRCLE_4_VERTS, 0xC8, 70]},
	{ command: Geo.open_node },
	{ command: Geo.node_scale, args: [0x00, 16384]},
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, koopa_shell_seg8_dl_08027420] },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_end },
]

export const koopa_shell3_geo = [
	{ command: Geo.node_shadow, args: [SHADOW_CIRCLE_4_VERTS, 0xC8, 70]},
	{ command: Geo.open_node },
	{ command: Geo.node_scale, args: [0x00, 16384]},
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, koopa_shell_seg8_dl_080273C8] },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_end },
]
