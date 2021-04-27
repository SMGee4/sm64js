import * as Gbi from "../../../../../include/gbi"
const exclamation_box_seg8_lights_08012E10 = Gbi.gdSPDefLights1(
	    0x3f, 0x3f, 0x3f,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const exclamation_box_seg8_texture_08012E28 = [
#include "actors/exclamation_box/vanish_cap_box_front.rgba16.inc.c
]
const exclamation_box_seg8_texture_08013628 = [
#include "actors/exclamation_box/vanish_cap_box_side.rgba16.inc.c
]
const exclamation_box_seg8_texture_08014628 = [
#include "actors/exclamation_box/metal_cap_box_front.rgba16.inc.c
]
const exclamation_box_seg8_texture_08014E28 = [
#include "actors/exclamation_box/metal_cap_box_side.rgba16.inc.c
]
const exclamation_box_seg8_texture_08015E28 = [
#include "actors/exclamation_box/wing_cap_box_front.rgba16.inc.c
]
const exclamation_box_seg8_texture_08016628 = [
#include "actors/exclamation_box/wing_cap_box_side.rgba16.inc.c
]
const exclamation_box_seg8_texture_08017628 = [
#include "actors/exclamation_box/exclamation_box_front.rgba16.inc.c
]
const exclamation_box_seg8_texture_08017E28 = [
#include "actors/exclamation_box/exclamation_box_side.rgba16.inc.c
]
const exclamation_box_seg8_vertex_08018E28 = [
	{ pos: [ -25, 1, -25 ], flag: 0, tc: [ 992, 992 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -25, 52, -25 ], flag: 0, tc: [ 992, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 26, 52, -25 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -25, 1, 26 ], flag: 0, tc: [ 0, 992 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 26, 1, 26 ], flag: 0, tc: [ 992, 992 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 26, 52, 26 ], flag: 0, tc: [ 992, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -25, 52, 26 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 26, 52, -25 ], flag: 0, tc: [ 992, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 26, 1, 26 ], flag: 0, tc: [ 0, 992 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 26, 1, -25 ], flag: 0, tc: [ 992, 992 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 26, 52, 26 ], flag: 0, tc: [ 0, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -25, 1, -25 ], flag: 0, tc: [ 0, 992 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -25, 1, 26 ], flag: 0, tc: [ 992, 992 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -25, 52, 26 ], flag: 0, tc: [ 992, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -25, 52, -25 ], flag: 0, tc: [ 0, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 26, 1, -25 ], flag: 0, tc: [ 0, 992 ], color: [ 0, 0, 129, 255 ] },
]

const exclamation_box_seg8_vertex_08018F28 = [
	{ pos: [ 26, 1, -25 ], flag: 0, tc: [ 992, 2014 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 26, 1, 26 ], flag: 0, tc: [ 992, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -25, 1, 26 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -25, 1, -25 ], flag: 0, tc: [ 0, 2014 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -25, 52, -25 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -25, 52, 26 ], flag: 0, tc: [ 0, 2014 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 26, 52, 26 ], flag: 0, tc: [ 992, 2014 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 26, 52, -25 ], flag: 0, tc: [ 992, 0 ], color: [ 0, 127, 0, 255 ] },
]

export const exclamation_box_seg8_dl_08018FA8 = [
	Gbi.gsSPLight(exclamation_box_seg8_lights_08012E10.l[0], 1),
	Gbi.gsSPLight(exclamation_box_seg8_lights_08012E10.a, 2),
	Gbi.gsSPVertex(exclamation_box_seg8_vertex_08018E28, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
	...Gbi.gsSP2Triangles(11, 13, 14, 0x0,  0,  2, 15, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const exclamation_box_seg8_dl_08019008 = [
	Gbi.gsSPVertex(exclamation_box_seg8_vertex_08018F28, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

export const exclamation_box_seg8_dl_08019058 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPEndDisplayList(),
]

const exclamation_box_seg8_vertex_080190A0 = [
	{ pos: [ -25, 1, 26 ], flag: 0, tc: [ 992, 992 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -25, 52, 26 ], flag: 0, tc: [ 992, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -25, 52, -25 ], flag: 0, tc: [ 0, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 26, 1, 26 ], flag: 0, tc: [ 992, 992 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 26, 52, 26 ], flag: 0, tc: [ 992, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -25, 52, 26 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -25, 1, 26 ], flag: 0, tc: [ 0, 992 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 26, 1, -25 ], flag: 0, tc: [ 992, 992 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 26, 52, -25 ], flag: 0, tc: [ 992, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 26, 52, 26 ], flag: 0, tc: [ 0, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 26, 1, 26 ], flag: 0, tc: [ 0, 992 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -25, 1, -25 ], flag: 0, tc: [ 992, 992 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 26, 52, -25 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 26, 1, -25 ], flag: 0, tc: [ 0, 992 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -25, 52, -25 ], flag: 0, tc: [ 992, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -25, 1, -25 ], flag: 0, tc: [ 0, 992 ], color: [ 129, 0, 0, 255 ] },
]

const exclamation_box_seg8_vertex_080191A0 = [
	{ pos: [ -25, 52, 26 ], flag: 0, tc: [ 0, 992 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 26, 52, 26 ], flag: 0, tc: [ 2014, 992 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 26, 52, -25 ], flag: 0, tc: [ 2014, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -25, 52, -25 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -25, 1, 26 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -25, 1, -25 ], flag: 0, tc: [ 0, 992 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 26, 1, -25 ], flag: 0, tc: [ 2014, 992 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 26, 1, 26 ], flag: 0, tc: [ 2014, 0 ], color: [ 0, 129, 0, 255 ] },
]

export const exclamation_box_seg8_dl_08019220 = [
	Gbi.gsSPLight(exclamation_box_seg8_lights_08012E10.l[0], 1),
	Gbi.gsSPLight(exclamation_box_seg8_lights_08012E10.a, 2),
	Gbi.gsSPVertex(exclamation_box_seg8_vertex_080190A0, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	...Gbi.gsSP2Triangles(11, 14, 12, 0x0,  0,  2, 15, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const exclamation_box_seg8_dl_08019280 = [
	Gbi.gsSPVertex(exclamation_box_seg8_vertex_080191A0, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

export const exclamation_box_seg8_dl_080192D0 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPEndDisplayList(),
]

export const exclamation_box_seg8_dl_08019318 = [
	Gbi.gsSPDisplayList(exclamation_box_seg8_dl_08019058),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, exclamation_box_seg8_texture_08015E28),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPDisplayList(exclamation_box_seg8_dl_08018FA8),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, exclamation_box_seg8_texture_08016628),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPBranchList(exclamation_box_seg8_dl_08019008),
]

export const exclamation_box_seg8_dl_08019378 = [
	Gbi.gsSPDisplayList(exclamation_box_seg8_dl_080192D0),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, exclamation_box_seg8_texture_08014628),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPDisplayList(exclamation_box_seg8_dl_08019220),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 16, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 6, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, exclamation_box_seg8_texture_08014E28),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 64 * 32 - 1),
	Gbi.gsSPBranchList(exclamation_box_seg8_dl_08019280),
]

export const exclamation_box_seg8_dl_080193D8 = [
	Gbi.gsSPDisplayList(exclamation_box_seg8_dl_08019058),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, exclamation_box_seg8_texture_08012E28),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPDisplayList(exclamation_box_seg8_dl_08018FA8),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, exclamation_box_seg8_texture_08013628),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPBranchList(exclamation_box_seg8_dl_08019008),
]

export const exclamation_box_seg8_dl_08019438 = [
	Gbi.gsSPDisplayList(exclamation_box_seg8_dl_080192D0),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, exclamation_box_seg8_texture_08017628),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPDisplayList(exclamation_box_seg8_dl_08019220),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 16, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 6, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, exclamation_box_seg8_texture_08017E28),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 64 * 32 - 1),
	Gbi.gsSPBranchList(exclamation_box_seg8_dl_08019280),
]

