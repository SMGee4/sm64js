import { GeoLayoutInstance as Geo } from "../../../../../engine/GeoLayout"

export const thwomp_geo = [
	{ command: Geo.node_shadow, args: [SHADOW_SQUARE_SCALABLE, 0xB4, 300]},
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, thwomp_seg5_dl_0500B750] },
	{ command: Geo.close_node },
	{ command: Geo.node_end },
]
