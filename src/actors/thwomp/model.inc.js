import * as Gbi from "../../../../../include/gbi"
const thwomp_seg5_lights_050098E8 = Gbi.gdSPDefLights1(
	    0x4c, 0x4c, 0x4c,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const thwomp_seg5_texture_05009900 = [
#include "actors/thwomp/thwomp_face.rgba16.inc.c
]
const thwomp_seg5_texture_0500A900 = [
#include "actors/thwomp/thwomp_surface.rgba16.inc.c
]
const thwomp_seg5_vertex_0500B100 = [
	{ pos: [ -97, 52, -141 ], flag: 0, tc: [ 3308, 418 ], color: [ 206, 203, 153, 255 ] },
	{ pos: [ -141, 52, -72 ], flag: 0, tc: [ 2910, 418 ], color: [ 147, 202, 223, 255 ] },
	{ pos: [ -156, 252, -78 ], flag: 0, tc: [ 2904, 1584 ], color: [ 137, 26, 222, 255 ] },
	{ pos: [ -105, 252, -156 ], flag: 0, tc: [ 3316, 1584 ], color: [ 208, 70, 163, 255 ] },
	{ pos: [ 106, 252, -156 ], flag: 0, tc: [ 4286, 1584 ], color: [ 41, 57, 151, 255 ] },
	{ pos: [ 98, 52, -141 ], flag: 0, tc: [ 4292, 418 ], color: [ 69, 208, 162, 255 ] },
	{ pos: [ 157, 252, -78 ], flag: 0, tc: [ 4698, 1584 ], color: [ 115, 34, 215, 255 ] },
	{ pos: [ 142, 52, -72 ], flag: 0, tc: [ 4692, 418 ], color: [ 112, 201, 234, 255 ] },
	{ pos: [ 0, 302, -101 ], flag: 0, tc: [ 460, -56 ], color: [ 0, 112, 198, 255 ] },
	{ pos: [ 93, 330, 0 ], flag: 0, tc: [ 1000, 540 ], color: [ 44, 118, 0, 255 ] },
	{ pos: [ 106, 252, -156 ], flag: 0, tc: [ 1080, -374 ], color: [ 41, 57, 151, 255 ] },
	{ pos: [ -92, 330, 0 ], flag: 0, tc: [ -80, 540 ], color: [ 212, 118, 0, 255 ] },
	{ pos: [ 0, 302, 102 ], flag: 0, tc: [ 460, 1134 ], color: [ 0, 112, 58, 255 ] },
	{ pos: [ 106, 252, 157 ], flag: 0, tc: [ 1080, 1452 ], color: [ 48, 70, 93, 255 ] },
	{ pos: [ -105, 252, -156 ], flag: 0, tc: [ -160, -374 ], color: [ 208, 70, 163, 255 ] },
]

const thwomp_seg5_vertex_0500B1F0 = [
	{ pos: [ -156, 252, 79 ], flag: 0, tc: [ -452, 1000 ], color: [ 141, 34, 41, 255 ] },
	{ pos: [ -105, 252, 157 ], flag: 0, tc: [ -160, 1452 ], color: [ 215, 57, 105, 255 ] },
	{ pos: [ -92, 330, 0 ], flag: 0, tc: [ -80, 540 ], color: [ 212, 118, 0, 255 ] },
	{ pos: [ -156, 252, -78 ], flag: 0, tc: [ -452, 78 ], color: [ 137, 26, 222, 255 ] },
	{ pos: [ -105, 252, -156 ], flag: 0, tc: [ -160, -374 ], color: [ 208, 70, 163, 255 ] },
	{ pos: [ 0, 302, 102 ], flag: 0, tc: [ 460, 1134 ], color: [ 0, 112, 58, 255 ] },
	{ pos: [ 106, 252, 157 ], flag: 0, tc: [ 1080, 1452 ], color: [ 48, 70, 93, 255 ] },
	{ pos: [ -97, 52, -141 ], flag: 0, tc: [ -188, 1444 ], color: [ 206, 203, 153, 255 ] },
	{ pos: [ 83, 0, -82 ], flag: 0, tc: [ 1042, 1040 ], color: [ 30, 140, 215, 255 ] },
	{ pos: [ -82, 0, -82 ], flag: 0, tc: [ -82, 1040 ], color: [ 201, 146, 226, 255 ] },
	{ pos: [ 98, 52, -141 ], flag: 0, tc: [ 1148, 1444 ], color: [ 69, 208, 162, 255 ] },
	{ pos: [ 83, 0, 83 ], flag: 0, tc: [ 1042, -84 ], color: [ 55, 146, 30, 255 ] },
	{ pos: [ -82, 0, 83 ], flag: 0, tc: [ -82, -84 ], color: [ 226, 140, 41, 255 ] },
	{ pos: [ 142, 52, -72 ], flag: 0, tc: [ 1446, 976 ], color: [ 112, 201, 234, 255 ] },
	{ pos: [ 98, 52, 142 ], flag: 0, tc: [ 1148, -488 ], color: [ 50, 203, 103, 255 ] },
	{ pos: [ -97, 52, 142 ], flag: 0, tc: [ -188, -488 ], color: [ 187, 208, 94, 255 ] },
]

const thwomp_seg5_vertex_0500B2F0 = [
	{ pos: [ -82, 0, -82 ], flag: 0, tc: [ -82, 1040 ], color: [ 201, 146, 226, 255 ] },
	{ pos: [ -82, 0, 83 ], flag: 0, tc: [ -82, -84 ], color: [ 226, 140, 41, 255 ] },
	{ pos: [ -141, 52, 73 ], flag: 0, tc: [ -486, -18 ], color: [ 144, 201, 22, 255 ] },
	{ pos: [ -97, 52, 142 ], flag: 0, tc: [ -188, -488 ], color: [ 187, 208, 94, 255 ] },
	{ pos: [ -97, 52, -141 ], flag: 0, tc: [ -188, 1444 ], color: [ 206, 203, 153, 255 ] },
	{ pos: [ -141, 52, -72 ], flag: 0, tc: [ -486, 976 ], color: [ 147, 202, 223, 255 ] },
	{ pos: [ 83, 0, 83 ], flag: 0, tc: [ 1042, -84 ], color: [ 55, 146, 30, 255 ] },
	{ pos: [ 142, 52, -72 ], flag: 0, tc: [ 1446, 976 ], color: [ 112, 201, 234, 255 ] },
	{ pos: [ 142, 52, 73 ], flag: 0, tc: [ 1446, -18 ], color: [ 109, 202, 33, 255 ] },
	{ pos: [ 98, 52, 142 ], flag: 0, tc: [ 1148, -488 ], color: [ 50, 203, 103, 255 ] },
	{ pos: [ 142, 52, -72 ], flag: 0, tc: [ 4692, 418 ], color: [ 112, 201, 234, 255 ] },
	{ pos: [ 157, 252, -78 ], flag: 0, tc: [ 4698, 1584 ], color: [ 115, 34, 215, 255 ] },
	{ pos: [ 157, 252, 79 ], flag: 0, tc: [ 5458, 1584 ], color: [ 119, 26, 34, 255 ] },
	{ pos: [ 142, 52, 73 ], flag: 0, tc: [ 5464, 418 ], color: [ 109, 202, 33, 255 ] },
]

const thwomp_seg5_vertex_0500B3D0 = [
	{ pos: [ 106, 252, 157 ], flag: 0, tc: [ 760, 1584 ], color: [ 48, 70, 93, 255 ] },
	{ pos: [ 98, 52, 142 ], flag: 0, tc: [ 754, 418 ], color: [ 50, 203, 103, 255 ] },
	{ pos: [ 157, 252, 79 ], flag: 0, tc: [ 348, 1584 ], color: [ 119, 26, 34, 255 ] },
	{ pos: [ -97, 52, 142 ], flag: 0, tc: [ 1738, 418 ], color: [ 187, 208, 94, 255 ] },
	{ pos: [ -156, 252, 79 ], flag: 0, tc: [ 2142, 1584 ], color: [ 141, 34, 41, 255 ] },
	{ pos: [ -141, 52, 73 ], flag: 0, tc: [ 2136, 418 ], color: [ 144, 201, 22, 255 ] },
	{ pos: [ -156, 252, -78 ], flag: 0, tc: [ 2904, 1584 ], color: [ 137, 26, 222, 255 ] },
	{ pos: [ -141, 52, -72 ], flag: 0, tc: [ 2910, 418 ], color: [ 147, 202, 223, 255 ] },
	{ pos: [ -105, 252, 157 ], flag: 0, tc: [ 1730, 1584 ], color: [ 215, 57, 105, 255 ] },
	{ pos: [ 106, 252, -156 ], flag: 0, tc: [ -24, 628 ], color: [ 41, 57, 151, 255 ] },
	{ pos: [ -105, 252, -156 ], flag: 0, tc: [ 984, 628 ], color: [ 208, 70, 163, 255 ] },
	{ pos: [ 0, 302, -101 ], flag: 0, tc: [ 480, 370 ], color: [ 0, 112, 198, 255 ] },
	{ pos: [ 157, 252, 79 ], flag: 0, tc: [ 1374, 1000 ], color: [ 119, 26, 34, 255 ] },
	{ pos: [ 93, 330, 0 ], flag: 0, tc: [ 1000, 540 ], color: [ 44, 118, 0, 255 ] },
	{ pos: [ 106, 252, 157 ], flag: 0, tc: [ 1080, 1452 ], color: [ 48, 70, 93, 255 ] },
	{ pos: [ 157, 252, -78 ], flag: 0, tc: [ 1374, 78 ], color: [ 115, 34, 215, 255 ] },
]

const thwomp_seg5_vertex_0500B4D0 = [
	{ pos: [ 98, 52, 142 ], flag: 0, tc: [ 754, 418 ], color: [ 50, 203, 103, 255 ] },
	{ pos: [ 142, 52, 73 ], flag: 0, tc: [ 354, 418 ], color: [ 109, 202, 33, 255 ] },
	{ pos: [ 157, 252, 79 ], flag: 0, tc: [ 348, 1584 ], color: [ 119, 26, 34, 255 ] },
	{ pos: [ 106, 252, -156 ], flag: 0, tc: [ 1414, 324 ], color: [ 41, 57, 151, 255 ] },
	{ pos: [ 93, 330, 0 ], flag: 0, tc: [ 472, -20 ], color: [ 44, 118, 0, 255 ] },
	{ pos: [ 157, 252, -78 ], flag: 0, tc: [ 946, 494 ], color: [ 115, 34, 215, 255 ] },
]

const thwomp_seg5_vertex_0500B530 = [
	{ pos: [ 98, 52, 142 ], flag: 0, tc: [ 968, 1976 ], color: [ 50, 203, 103, 255 ] },
	{ pos: [ 106, 252, 157 ], flag: 0, tc: [ 1010, 0 ], color: [ 48, 70, 93, 255 ] },
	{ pos: [ -105, 252, 157 ], flag: 0, tc: [ -54, -12 ], color: [ 215, 57, 105, 255 ] },
	{ pos: [ -97, 52, 142 ], flag: 0, tc: [ -16, 1964 ], color: [ 187, 208, 94, 255 ] },
]

export const thwomp_seg5_dl_0500B570 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, thwomp_seg5_texture_0500A900),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(thwomp_seg5_lights_050098E8.l[0], 1),
	Gbi.gsSPLight(thwomp_seg5_lights_050098E8.a, 2),
	Gbi.gsSPVertex(thwomp_seg5_vertex_0500B100, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  0,  2, 0x0),
	...Gbi.gsSP2Triangles( 0,  3,  4, 0x0,  0,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 5,  4,  6, 0x0,  5,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 11,  9, 0x0),
	...Gbi.gsSP2Triangles(12, 13,  9, 0x0,  9, 11, 12, 0x0),
	Gbi.gsSP1Triangle( 8, 14, 11, 0x0),
	Gbi.gsSPVertex(thwomp_seg5_vertex_0500B1F0, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  2,  4, 0x0),
	...Gbi.gsSP2Triangles( 0,  2,  3, 0x0,  2,  1,  5, 0x0),
	...Gbi.gsSP2Triangles( 1,  6,  5, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0,  8, 11, 12, 0x0),
	...Gbi.gsSP2Triangles( 8, 12,  9, 0x0, 11,  8, 13, 0x0),
	...Gbi.gsSP2Triangles(13,  8, 10, 0x0, 14, 12, 11, 0x0),
	Gbi.gsSP1Triangle(14, 15, 12, 0x0),
	Gbi.gsSPVertex(thwomp_seg5_vertex_0500B2F0, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  2,  1,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  0,  5, 0x0,  0,  2,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  9,  6,  8, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 12, 13, 0x0),
	Gbi.gsSPVertex(thwomp_seg5_vertex_0500B3D0, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 5,  4,  6, 0x0,  5,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 3,  8,  4, 0x0,  9, 10, 11, 0x0),
	...Gbi.gsSP2Triangles(12, 13, 14, 0x0, 15, 13, 12, 0x0),
	Gbi.gsSPVertex(thwomp_seg5_vertex_0500B4D0, 6, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const thwomp_seg5_dl_0500B718 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, thwomp_seg5_texture_05009900),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPVertex(thwomp_seg5_vertex_0500B530, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const thwomp_seg5_dl_0500B750 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(thwomp_seg5_dl_0500B570),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(thwomp_seg5_dl_0500B718),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPEndDisplayList(),
]

