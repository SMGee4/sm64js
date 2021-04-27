import { GeoLayoutInstance as Geo } from "../../../../../engine/GeoLayout"

export const exclamation_box_geo = [
	{ command: Geo.node_culling_radius, args: [300] },
	{ command: Geo.open_node },
	{ command: Geo.node_shadow, args: [SHADOW_SQUARE_PERMANENT, 0xB4, 70]},
	{ command: Geo.open_node },
	{ command: Geo.node_switch_case, args: [4, geo_switch_anim_state]},
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, exclamation_box_seg8_dl_08019318] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, exclamation_box_seg8_dl_08019378] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, exclamation_box_seg8_dl_080193D8] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, exclamation_box_seg8_dl_08019438] },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_end },
]
