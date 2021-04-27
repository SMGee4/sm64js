import * as Gbi from "../../../../../include/gbi"
const exclamation_box_outline_seg8_lights_08024CB8 = Gbi.gdSPDefLights1(
	    0x7f, 0x00, 0x00,
	    0xff, 0x00, 0x00, 0x28, 0x28, 0x28
)

const exclamation_box_outline_seg8_lights_08024CD0 = Gbi.gdSPDefLights1(
	    0x00, 0x7f, 0x00,
	    0x00, 0xff, 0x00, 0x28, 0x28, 0x28
)

const exclamation_box_outline_seg8_lights_08024CE8 = Gbi.gdSPDefLights1(
	    0x00, 0x00, 0x7f,
	    0x00, 0x00, 0xff, 0x28, 0x28, 0x28
)

const exclamation_box_outline_seg8_lights_08024D00 = Gbi.gdSPDefLights1(
	    0x7f, 0x6a, 0x00,
	    0xff, 0xd4, 0x00, 0x28, 0x28, 0x28
)

const exclamation_box_outline_seg8_vertex_08024D18 = [
	{ pos: [ 26, 1, -25 ], flag: 0, tc: [ 0, 0 ], color: [ 127, 0, 0, 80 ] },
	{ pos: [ 26, 52, 26 ], flag: 0, tc: [ 0, 0 ], color: [ 127, 0, 0, 80 ] },
	{ pos: [ 26, 1, 26 ], flag: 0, tc: [ 0, 0 ], color: [ 127, 0, 0, 80 ] },
	{ pos: [ 26, 1, 26 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 129, 0, 80 ] },
	{ pos: [ -25, 1, 26 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 129, 0, 80 ] },
	{ pos: [ -25, 1, -25 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 129, 0, 80 ] },
	{ pos: [ 26, 1, -25 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 129, 0, 80 ] },
	{ pos: [ 26, 1, 26 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 127, 80 ] },
	{ pos: [ 26, 52, 26 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 127, 80 ] },
	{ pos: [ -25, 52, 26 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 127, 80 ] },
	{ pos: [ -25, 1, 26 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 127, 80 ] },
	{ pos: [ -25, 1, 26 ], flag: 0, tc: [ 0, 0 ], color: [ 129, 0, 0, 80 ] },
	{ pos: [ -25, 52, 26 ], flag: 0, tc: [ 0, 0 ], color: [ 129, 0, 0, 80 ] },
	{ pos: [ -25, 52, -25 ], flag: 0, tc: [ 0, 0 ], color: [ 129, 0, 0, 80 ] },
	{ pos: [ -25, 1, -25 ], flag: 0, tc: [ 0, 0 ], color: [ 129, 0, 0, 80 ] },
]

const exclamation_box_outline_seg8_vertex_08024E08 = [
	{ pos: [ -25, 1, -25 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 80 ] },
	{ pos: [ -25, 52, -25 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 80 ] },
	{ pos: [ 26, 52, -25 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 80 ] },
	{ pos: [ 26, 1, -25 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 80 ] },
	{ pos: [ 26, 1, -25 ], flag: 0, tc: [ 0, 0 ], color: [ 127, 0, 0, 80 ] },
	{ pos: [ 26, 52, -25 ], flag: 0, tc: [ 0, 0 ], color: [ 127, 0, 0, 80 ] },
	{ pos: [ 26, 52, 26 ], flag: 0, tc: [ 0, 0 ], color: [ 127, 0, 0, 80 ] },
	{ pos: [ -25, 52, 26 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 80 ] },
	{ pos: [ 26, 52, 26 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 80 ] },
	{ pos: [ 26, 52, -25 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 80 ] },
	{ pos: [ -25, 52, -25 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 80 ] },
]

export const exclamation_box_outline_seg8_dl_08024EB8 = [
	Gbi.gsSPVertex(exclamation_box_outline_seg8_vertex_08024D18, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 13, 14, 0x0),
	Gbi.gsSPVertex(exclamation_box_outline_seg8_vertex_08024E08, 11, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  7,  8,  9, 0x0),
	Gbi.gsSP1Triangle( 7,  9, 10, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const exclamation_box_outline_seg8_dl_08024F30 = [
	Gbi.gsDPSetEnvColor(255, 255, 255, 80),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADEFADEA),
	Gbi.gsSPEndDisplayList(),
]

export const exclamation_box_outline_seg8_dl_08024F58 = [
	Gbi.gsSPDisplayList(exclamation_box_outline_seg8_dl_08024EB8),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetEnvColor(255, 255, 255, 255),
	Gbi.gsSPEndDisplayList(),
]

export const exclamation_box_outline_seg8_dl_08024F88 = [
	Gbi.gsSPDisplayList(exclamation_box_outline_seg8_dl_08024F30),
	Gbi.gsSPLight(exclamation_box_outline_seg8_lights_08024CB8.l[0], 1),
	Gbi.gsSPLight(exclamation_box_outline_seg8_lights_08024CB8.a, 2),
	Gbi.gsSPBranchList(exclamation_box_outline_seg8_dl_08024F58),
]

export const exclamation_box_outline_seg8_dl_08024FA8 = [
	Gbi.gsSPDisplayList(exclamation_box_outline_seg8_dl_08024F30),
	Gbi.gsSPLight(exclamation_box_outline_seg8_lights_08024CD0.l[0], 1),
	Gbi.gsSPLight(exclamation_box_outline_seg8_lights_08024CD0.a, 2),
	Gbi.gsSPBranchList(exclamation_box_outline_seg8_dl_08024F58),
]

export const exclamation_box_outline_seg8_dl_08024FC8 = [
	Gbi.gsSPDisplayList(exclamation_box_outline_seg8_dl_08024F30),
	Gbi.gsSPLight(exclamation_box_outline_seg8_lights_08024CE8.l[0], 1),
	Gbi.gsSPLight(exclamation_box_outline_seg8_lights_08024CE8.a, 2),
	Gbi.gsSPBranchList(exclamation_box_outline_seg8_dl_08024F58),
]

export const exclamation_box_outline_seg8_dl_08024FE8 = [
	Gbi.gsSPDisplayList(exclamation_box_outline_seg8_dl_08024F30),
	Gbi.gsSPLight(exclamation_box_outline_seg8_lights_08024D00.l[0], 1),
	Gbi.gsSPLight(exclamation_box_outline_seg8_lights_08024D00.a, 2),
	Gbi.gsSPBranchList(exclamation_box_outline_seg8_dl_08024F58),
]

const exclamation_box_outline_seg8_vertex_08025008 = [
	{ pos: [ -25, 52, 26 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 26, 52, 26 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 26, 52, -25 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -25, 52, -25 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 26, 1, 26 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -25, 52, 26 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -25, 1, 26 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 26, 1, -25 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 26, 52, -25 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 26, 52, 26 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 26, 1, 26 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -25, 1, -25 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 26, 1, -25 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -25, 52, -25 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 255, 255, 255 ] },
]

const exclamation_box_outline_seg8_vertex_080250E8 = [
	{ pos: [ -25, 1, 26 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -25, 52, 26 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -25, 52, -25 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -25, 1, -25 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -25, 1, 26 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -25, 1, -25 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 26, 1, -25 ], flag: 0, tc: [ 996, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 26, 1, 26 ], flag: 0, tc: [ -26, 0 ], color: [ 255, 255, 255, 255 ] },
]

const exclamation_box_outline_seg8_texture_08025168 = [
#include "actors/exclamation_box_outline/exclamation_box_outline.rgba16.inc.c
]
export const exclamation_box_outline_seg8_dl_08025968 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, exclamation_box_outline_seg8_texture_08025168),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(exclamation_box_outline_seg8_vertex_08025008, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  1,  5, 0x0,  4,  5,  6, 0x0),
	...Gbi.gsSP2Triangles( 7,  8,  9, 0x0,  7,  9, 10, 0x0),
	...Gbi.gsSP2Triangles(11,  8, 12, 0x0, 11, 13,  8, 0x0),
	Gbi.gsSPVertex(exclamation_box_outline_seg8_vertex_080250E8, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const exclamation_box_outline_seg8_dl_080259F8 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_DECALRGBA),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(exclamation_box_outline_seg8_dl_08025968),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsSPEndDisplayList(),
]

const exclamation_box_outline_seg8_lights_08025A68 = Gbi.gdSPDefLights1(
	    0x7f, 0x7f, 0x7f,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const exclamation_box_outline_seg8_texture_08025A80 = [
#include "actors/exclamation_box_outline/exclamation_point.rgba16.inc.c
]
const exclamation_box_outline_seg8_vertex_08025E80 = [
	{ pos: [ -22, 49, 0 ], flag: 0, tc: [ -157, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -22, 4, 0 ], flag: 0, tc: [ -157, 1048 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 23, 4, 0 ], flag: 0, tc: [ 605, 1048 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 23, 49, 0 ], flag: 0, tc: [ 605, 0 ], color: [ 0, 0, 127, 255 ] },
]

export const exclamation_box_outline_seg8_dl_08025EC0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, exclamation_box_outline_seg8_texture_08025A80),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 16 * 32 - 1),
	Gbi.gsSPLight(exclamation_box_outline_seg8_lights_08025A68.l[0], 1),
	Gbi.gsSPLight(exclamation_box_outline_seg8_lights_08025A68.a, 2),
	Gbi.gsSPVertex(exclamation_box_outline_seg8_vertex_08025E80, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const exclamation_box_outline_seg8_dl_08025F08 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGBA),
	Gbi.gsSPClearGeometryMode(Gbi.G_CULL_BACK | Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 4, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 4, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (16 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(exclamation_box_outline_seg8_dl_08025EC0),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_CULL_BACK | Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

