import { GeoLayoutInstance as Geo } from "../../engine/GeoLayout"
import { door_seg3_dl_03014A80, door_seg3_dl_03014540, door_seg3_dl_03013E28, door_seg3_dl_03013EA8, door_seg3_dl_03014100, door_seg3_dl_03014128, door_seg3_dl_03014250, door_seg3_dl_03014280, door_seg3_dl_030142B0, door_seg3_dl_030142E0, door_seg3_dl_03014310, door_seg3_dl_03014340, door_seg3_dl_03014528, door_seg3_dl_03014B30, door_seg3_dl_03014BE0, door_seg3_dl_03014C90, door_seg3_dl_03014D40, door_seg3_dl_03014F98, door_seg3_dl_03015008, door_seg3_dl_03015078, door_seg3_dl_030150E8, door_seg3_dl_03015158 } from "./model.inc"


export const castle_door_geo = [
	{ command: Geo.open_node },
	{ command: Geo.node_scale, args: [0x00, 16384]},
	{ command: Geo.open_node },
	{ command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, -300, 0, 0, null]},
	{ command: Geo.open_node },
	{ command: Geo.open_node },
	{ command: Geo.node_render_range, args: [-2048, 3500] },
	{ command: Geo.open_node },
	{ command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, door_seg3_dl_03013E28]},
	{ command: Geo.close_node },
	{ command: Geo.node_render_range, args: [3500, 32767] },
	{ command: Geo.open_node },
	{ command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, door_seg3_dl_03014100]},
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, null]},
	{ command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, null]},
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_end },
]

export const cabin_door_geo = [
	{ command: Geo.open_node },
	{ command: Geo.node_scale, args: [0x00, 16384]},
	{ command: Geo.open_node },
	{ command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, -300, 0, 0, null]},
	{ command: Geo.open_node },
	{ command: Geo.open_node },
	{ command: Geo.node_render_range, args: [-2048, 3500] },
	{ command: Geo.open_node },
	{ command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, door_seg3_dl_03013EA8]},
	{ command: Geo.close_node },
	{ command: Geo.node_render_range, args: [3500, 32767] },
	{ command: Geo.open_node },
	{ command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, door_seg3_dl_03014128]},
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, null]},
	{ command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, null]},
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_end },
]

export const wooden_door_geo = [
	{ command: Geo.open_node },
	{ command: Geo.node_scale, args: [0x00, 16384]},
	{ command: Geo.open_node },
	{ command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, -300, 0, 0, null]},
	{ command: Geo.open_node },
	{ command: Geo.open_node },
	{ command: Geo.node_render_range, args: [-2048, 3500] },
	{ command: Geo.open_node },
	{ command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, door_seg3_dl_03014A80]},
	{ command: Geo.close_node },
	{ command: Geo.node_render_range, args: [3500, 32767] },
	{ command: Geo.open_node },
	{ command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, door_seg3_dl_03014F98]},
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, null]},
	{ command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, null]},
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_end },
]

export const wooden_door2_geo = [
	{ command: Geo.open_node },
	{ command: Geo.node_scale, args: [0x00, 16384]},
	{ command: Geo.open_node },
	{ command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, -300, 0, 0, null]},
	{ command: Geo.open_node },
	{ command: Geo.open_node },
	{ command: Geo.node_render_range, args: [-2048, 3500] },
	{ command: Geo.open_node },
	{ command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, door_seg3_dl_03014B30]},
	{ command: Geo.close_node },
	{ command: Geo.node_render_range, args: [3500, 32767] },
	{ command: Geo.open_node },
	{ command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, door_seg3_dl_03015008]},
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, null]},
	{ command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, null]},
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_end },
]

export const metal_door_geo = [
	{ command: Geo.open_node },
	{ command: Geo.node_scale, args: [0x00, 16384]},
	{ command: Geo.open_node },
	{ command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, -300, 0, 0, null]},
	{ command: Geo.open_node },
	{ command: Geo.open_node },
	{ command: Geo.node_render_range, args: [-2048, 3500] },
	{ command: Geo.open_node },
	{ command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, door_seg3_dl_03014BE0]},
	{ command: Geo.close_node },
	{ command: Geo.node_render_range, args: [3500, 32767] },
	{ command: Geo.open_node },
	{ command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, door_seg3_dl_03015078]},
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, null]},
	{ command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, null]},
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_end },
]

export const hazy_maze_door_geo = [
	{ command: Geo.open_node },
	{ command: Geo.node_scale, args: [0x00, 16384]},
	{ command: Geo.open_node },
	{ command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, -300, 0, 0, null]},
	{ command: Geo.open_node },
	{ command: Geo.open_node },
	{ command: Geo.node_render_range, args: [-2048, 3500] },
	{ command: Geo.open_node },
	{ command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, door_seg3_dl_03014C90]},
	{ command: Geo.close_node },
	{ command: Geo.node_render_range, args: [3500, 32767] },
	{ command: Geo.open_node },
	{ command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, door_seg3_dl_030150E8]},
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, null]},
	{ command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, null]},
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_end },
]

export const haunted_door_geo = [
	{ command: Geo.open_node },
	{ command: Geo.node_scale, args: [0x00, 16384]},
	{ command: Geo.open_node },
	{ command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, -300, 0, 0, null]},
	{ command: Geo.open_node },
	{ command: Geo.open_node },
	{ command: Geo.node_render_range, args: [-2048, 3500] },
	{ command: Geo.open_node },
	{ command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, door_seg3_dl_03014D40]},
	{ command: Geo.close_node },
	{ command: Geo.node_render_range, args: [3500, 32767] },
	{ command: Geo.open_node },
	{ command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, door_seg3_dl_03015158]},
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, null]},
	{ command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, null]},
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_end },
]

export const castle_door_0_star_geo = [
	{ command: Geo.open_node },
	{ command: Geo.node_scale, args: [0x00, 16384]},
	{ command: Geo.open_node },
	{ command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, -300, 0, 0, null]},
	{ command: Geo.open_node },
	{ command: Geo.open_node },
	{ command: Geo.node_render_range, args: [-2048, 1000] },
	{ command: Geo.open_node },
	{ command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, door_seg3_dl_03013E28]},
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, door_seg3_dl_03014250] },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_render_range, args: [1000, 32767] },
	{ command: Geo.open_node },
	{ command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, door_seg3_dl_03013E28]},
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT_DECAL, door_seg3_dl_03014280] },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, null]},
	{ command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, null]},
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_end },
]

export const castle_door_1_star_geo = [
	{ command: Geo.open_node },
	{ command: Geo.node_scale, args: [0x00, 16384]},
	{ command: Geo.open_node },
	{ command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, -300, 0, 0, null]},
	{ command: Geo.open_node },
	{ command: Geo.open_node },
	{ command: Geo.node_render_range, args: [-2048, 1000] },
	{ command: Geo.open_node },
	{ command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, door_seg3_dl_03013E28]},
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, door_seg3_dl_030142B0] },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_render_range, args: [1000, 32767] },
	{ command: Geo.open_node },
	{ command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, door_seg3_dl_03013E28]},
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT_DECAL, door_seg3_dl_030142E0] },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, null]},
	{ command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, null]},
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_end },
]

export const castle_door_3_stars_geo = [
	{ command: Geo.open_node },
	{ command: Geo.node_scale, args: [0x00, 16384]},
	{ command: Geo.open_node },
	{ command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, -300, 0, 0, null]},
	{ command: Geo.open_node },
	{ command: Geo.open_node },
	{ command: Geo.node_render_range, args: [-2048, 1000] },
	{ command: Geo.open_node },
	{ command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, door_seg3_dl_03013E28]},
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, door_seg3_dl_03014310] },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_render_range, args: [1000, 32767] },
	{ command: Geo.open_node },
	{ command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, door_seg3_dl_03013E28]},
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT_DECAL, door_seg3_dl_03014340] },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, null]},
	{ command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, null]},
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_end },
]

export const key_door_geo = [
	{ command: Geo.open_node },
	{ command: Geo.node_scale, args: [0x00, 16384]},
	{ command: Geo.open_node },
	{ command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, -300, 0, 0, null]},
	{ command: Geo.open_node },
	{ command: Geo.open_node },
	{ command: Geo.node_render_range, args: [-2048, 1000] },
	{ command: Geo.open_node },
	{ command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, door_seg3_dl_03013E28]},
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, door_seg3_dl_03014540] },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_render_range, args: [1000, 32767] },
	{ command: Geo.open_node },
	{ command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, door_seg3_dl_03013E28]},
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE_DECAL, door_seg3_dl_03014528] },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, null]},
	{ command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, null]},
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_end },
]
