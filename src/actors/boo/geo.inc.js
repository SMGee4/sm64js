import { GeoLayoutInstance as Geo } from "../../../../../engine/GeoLayout"

export const boo_geo = [
	{ command: Geo.node_shadow, args: [SHADOW_CIRCLE_4_VERTS, 0x96, 70]},
	{ command: Geo.open_node },
	{ command: Geo.node_scale, args: [0x00, 26214]},
	{ command: Geo.open_node },
	{ command: Geo.node_generated, args: [0, geo_update_layer_transparency]},
	{ command: Geo.node_switch_case, args: [2, geo_switch_anim_state]},
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, boo_seg5_dl_0500C1B0] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, boo_seg5_dl_0500C1B0] },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_end },
]
