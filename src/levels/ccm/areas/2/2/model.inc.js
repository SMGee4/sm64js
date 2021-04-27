import * as Gbi from "../../../../../include/gbi"
import {
	snow_09008800,
	snow_09005000,
	snow_09008000,
} from "../../../../../textures/snow"

import { ccs_seg7_texture_07004300 } from "../../../../ccs/texture.inc"

const ccs_seg7_lights_0701CED8 = Gbi.gdSPDefLights1(
	    0x15, 0x15, 0x15,
	    0x55, 0x55, 0x55, 0x28, 0x28, 0x28
)

const ccs_seg7_lights_0701CEF0 = Gbi.gdSPDefLights1(
	    0x26, 0x26, 0x26,
	    0x99, 0x99, 0x99, 0x28, 0x28, 0x28
)

const ccs_seg7_lights_0701CF08 = Gbi.gdSPDefLights1(
	    0x33, 0x33, 0x33,
	    0xcc, 0xcc, 0xcc, 0x28, 0x28, 0x28
)

const ccs_seg7_lights_0701CF20 = Gbi.gdSPDefLights1(
	    0x3f, 0x3f, 0x3f,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const ccs_seg7_vertex_0701CF38 = [
	{ pos: [ -5477, -3839, -7679 ], flag: 0, tc: [ -3096, -18938 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -5477, -4812, -6450 ], flag: 0, tc: [ 9166, -9230 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -5477, -3839, -6450 ], flag: 0, tc: [ 9166, -18940 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -6245, -5836, -6450 ], flag: 0, tc: [ 480, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -6245, -5375, -6501 ], flag: 0, tc: [ 990, -3608 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -6245, -5375, -6450 ], flag: 0, tc: [ 480, -3608 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -6245, -5836, -6501 ], flag: 0, tc: [ 990, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -6757, -5375, -6450 ], flag: 0, tc: [ 480, -3608 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -6757, -5375, -6501 ], flag: 0, tc: [ 0, -3608 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -6757, -5836, -6501 ], flag: 0, tc: [ 0, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -6757, -5836, -6450 ], flag: 0, tc: [ 480, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -6245, -5375, -6450 ], flag: 0, tc: [ 1500, 4566 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -6245, -5375, -6501 ], flag: 0, tc: [ 1500, 4566 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -6757, -5375, -6501 ], flag: 0, tc: [ 6610, 4566 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -6757, -5375, -6450 ], flag: 0, tc: [ 6610, 4566 ], color: [ 0, 127, 0, 255 ] },
]

const ccs_seg7_vertex_0701D028 = [
	{ pos: [ -5477, -3839, -7679 ], flag: 0, tc: [ 12232, -10768 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -6706, -3839, -7679 ], flag: 0, tc: [ 0, -10768 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -6706, -4812, -7679 ], flag: 0, tc: [ 0, -1054 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -5477, -3839, -7679 ], flag: 0, tc: [ -3096, -18938 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -5477, -4812, -7679 ], flag: 0, tc: [ -3096, -9230 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -5477, -4812, -6450 ], flag: 0, tc: [ 9166, -9230 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -5477, -3839, -6450 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -6706, -3839, -6450 ], flag: 0, tc: [ 6100, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -6706, -3839, -7679 ], flag: 0, tc: [ 6100, -7186 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -5477, -3839, -7679 ], flag: 0, tc: [ 0, -7186 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -6706, -3839, -6450 ], flag: 0, tc: [ -4630, -10766 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -6706, -5221, -7679 ], flag: 0, tc: [ 7632, 3032 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -6706, -3839, -7679 ], flag: 0, tc: [ 7632, -10768 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -6706, -5221, -6450 ], flag: 0, tc: [ -4628, 3032 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -5477, -4812, -7679 ], flag: 0, tc: [ 12232, -1054 ], color: [ 0, 0, 127, 255 ] },
]

const ccs_seg7_vertex_0701D118 = [
	{ pos: [ -7576, -5426, -6450 ], flag: 0, tc: [ 14786, 5076 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -6706, -5836, -6450 ], flag: 0, tc: [ 6100, 9164 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -7576, -5836, -6450 ], flag: 0, tc: [ 14786, 9164 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -6706, -5221, -6450 ], flag: 0, tc: [ 6100, 3032 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -6245, -5375, -6450 ], flag: 0, tc: [ 1500, 4566 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -6706, -5375, -6450 ], flag: 0, tc: [ 6100, 4566 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -6706, -3839, -6450 ], flag: 0, tc: [ 6100, -10768 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -6524, -4210, -6450 ], flag: 0, tc: [ 4284, -7058 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -6424, -4237, -6450 ], flag: 0, tc: [ 3290, -6790 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -6597, -4137, -6450 ], flag: 0, tc: [ 5012, -7784 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -5682, -5836, -6450 ], flag: 0, tc: [ -4118, 9164 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -6245, -5836, -6450 ], flag: 0, tc: [ 1500, 9164 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -6325, -3865, -6450 ], flag: 0, tc: [ 2296, -10500 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -6424, -3839, -6450 ], flag: 0, tc: [ 3290, -10768 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -5477, -3839, -6450 ], flag: 0, tc: [ -6162, -10768 ], color: [ 0, 0, 129, 255 ] },
]

const ccs_seg7_vertex_0701D208 = [
	{ pos: [ -6706, -3839, -6450 ], flag: 0, tc: [ 6100, -10768 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -6597, -3938, -6450 ], flag: 0, tc: [ 5012, -9772 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -6624, -4038, -6450 ], flag: 0, tc: [ 5278, -8778 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -6597, -4137, -6450 ], flag: 0, tc: [ 5012, -7784 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -6524, -3865, -6450 ], flag: 0, tc: [ 4284, -10500 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -6424, -3839, -6450 ], flag: 0, tc: [ 3290, -10768 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -6424, -4237, -6450 ], flag: 0, tc: [ 3290, -6790 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -6325, -4210, -6450 ], flag: 0, tc: [ 2296, -7058 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -5682, -4812, -6450 ], flag: 0, tc: [ -4118, -1054 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -5682, -5836, -6450 ], flag: 0, tc: [ -4118, 9164 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -6252, -4137, -6450 ], flag: 0, tc: [ 1568, -7784 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -5477, -4812, -6450 ], flag: 0, tc: [ -6162, -1054 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -6225, -4038, -6450 ], flag: 0, tc: [ 1302, -8778 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -5477, -3839, -6450 ], flag: 0, tc: [ -6162, -10768 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -6252, -3938, -6450 ], flag: 0, tc: [ 1568, -9772 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -6325, -3865, -6450 ], flag: 0, tc: [ 2296, -10500 ], color: [ 0, 0, 129, 255 ] },
]

const ccs_seg7_vertex_0701D308 = [
	{ pos: [ -7576, -5836, -6911 ], flag: 0, tc: [ -1564, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -7576, -5703, -6819 ], flag: 0, tc: [ -2482, -338 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -7576, -5703, -6716 ], flag: 0, tc: [ -3504, -338 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -7576, -5580, -6911 ], flag: 0, tc: [ -1562, -1566 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -7576, -5600, -6819 ], flag: 0, tc: [ -2482, -1360 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -7576, -5836, -6450 ], flag: 0, tc: [ -6162, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -7576, -5426, -6450 ], flag: 0, tc: [ -6162, -3098 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -7576, -5580, -7065 ], flag: 0, tc: [ 0, -1566 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -5682, -4812, -7372 ], flag: 0, tc: [ 10188, -1054 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -6706, -5836, -7372 ], flag: 0, tc: [ 0, 9164 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -5682, -5836, -7372 ], flag: 0, tc: [ 10188, 9164 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -7576, -5600, -6716 ], flag: 0, tc: [ -3504, -1360 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -5682, -4812, -7372 ], flag: 0, tc: [ 0, -9230 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -5682, -5836, -7372 ], flag: 0, tc: [ 0, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -5682, -5836, -6450 ], flag: 0, tc: [ 9166, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -5682, -4812, -6450 ], flag: 0, tc: [ 9166, -9230 ], color: [ 129, 0, 0, 255 ] },
]

const ccs_seg7_vertex_0701D408 = [
	{ pos: [ -5682, -4812, -7372 ], flag: 0, tc: [ 10188, -1054 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -6706, -4812, -7372 ], flag: 0, tc: [ 0, -1054 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -6706, -5836, -7372 ], flag: 0, tc: [ 0, 9164 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -7679, -5580, -6911 ], flag: 0, tc: [ -262, 918 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -7576, -5580, -7065 ], flag: 0, tc: [ 1268, 236 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -7576, -5580, -6911 ], flag: 0, tc: [ -262, 236 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -6706, -5221, -7372 ], flag: 0, tc: [ 0, 3032 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -7576, -5426, -7372 ], flag: 0, tc: [ -8716, 5076 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -7576, -5836, -7372 ], flag: 0, tc: [ -8716, 9164 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -7576, -5426, -6450 ], flag: 0, tc: [ -6162, -3098 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -7576, -5580, -7065 ], flag: 0, tc: [ 0, -1566 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -7576, -5426, -7372 ], flag: 0, tc: [ 3034, -3098 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -7576, -5836, -7065 ], flag: 0, tc: [ 0, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -7576, -5836, -7372 ], flag: 0, tc: [ 3034, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -7679, -5580, -7065 ], flag: 0, tc: [ 1268, 918 ], color: [ 0, 129, 0, 255 ] },
]

const ccs_seg7_vertex_0701D4F8 = [
	{ pos: [ -6706, -5836, -6501 ], flag: 0, tc: [ 990, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -6706, -5426, -6143 ], flag: 0, tc: [ -2586, -3098 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -6706, -5836, -6143 ], flag: 0, tc: [ -2586, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -7576, -5836, -7065 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -7679, -5580, -7065 ], flag: 0, tc: [ 0, -1564 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -7679, -5836, -7065 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -7576, -5580, -7065 ], flag: 0, tc: [ 990, -1564 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -7679, -5836, -6911 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -7679, -5580, -6911 ], flag: 0, tc: [ 990, -1564 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -7576, -5580, -6911 ], flag: 0, tc: [ 0, -1564 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -7576, -5836, -6911 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -6296, -5426, -6143 ], flag: 0, tc: [ -3096, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -6706, -5426, -6501 ], flag: 0, tc: [ 990, -1054 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -6296, -5426, -6501 ], flag: 0, tc: [ -3096, -1054 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -6706, -5426, -6143 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 129, 0, 255 ] },
]

const ccs_seg7_vertex_0701D5E8 = [
	{ pos: [ -5119, 7680, -6757 ], flag: 0, tc: [ 0, -9230 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -5119, 7322, -6553 ], flag: 0, tc: [ 2012, -5654 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -5119, 7322, -5733 ], flag: 0, tc: [ 10188, -5654 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -6706, -5836, -6501 ], flag: 0, tc: [ 990, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -6706, -5426, -6501 ], flag: 0, tc: [ 990, -3098 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -6706, -5426, -6143 ], flag: 0, tc: [ -2586, -3098 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -6296, -5836, -6143 ], flag: 0, tc: [ 3544, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -6296, -5426, -6501 ], flag: 0, tc: [ 0, -3098 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -6296, -5836, -6501 ], flag: 0, tc: [ 0, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -6296, -5426, -6143 ], flag: 0, tc: [ 3546, -3098 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -5119, 6656, -6553 ], flag: 0, tc: [ 2012, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -5119, 6656, -6757 ], flag: 0, tc: [ 0, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -5119, 7680, -5529 ], flag: 0, tc: [ 12232, -9230 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -5938, 8038, -6041 ], flag: 0, tc: [ 0, -2588 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -5938, 7680, -6041 ], flag: 0, tc: [ 0, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -5938, 7680, -6245 ], flag: 0, tc: [ 2012, 990 ], color: [ 127, 0, 0, 255 ] },
]

const ccs_seg7_vertex_0701D6E8 = [
	{ pos: [ -5119, 7680, -5529 ], flag: 0, tc: [ 12232, -9230 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -5119, 7322, -5733 ], flag: 0, tc: [ 10188, -5654 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -5119, 6656, -5733 ], flag: 0, tc: [ 10188, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -5119, 6656, -5529 ], flag: 0, tc: [ 12232, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -5938, 7680, -6245 ], flag: 0, tc: [ -4118, -1668 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -6348, 7680, -6757 ], flag: 0, tc: [ 990, 1056 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -5119, 7680, -6757 ], flag: 0, tc: [ 990, -7118 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -5938, 7680, -6041 ], flag: 0, tc: [ -6162, -1668 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -5733, 7680, -6245 ], flag: 0, tc: [ -4118, -3030 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -5119, 7680, -5529 ], flag: 0, tc: [ -11272, -7118 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -5733, 7680, -6041 ], flag: 0, tc: [ -6162, -3030 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -6348, 7680, -5529 ], flag: 0, tc: [ -11272, 1056 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -5938, 8038, -6041 ], flag: 0, tc: [ 2012, -2586 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -5733, 7680, -6041 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -5938, 7680, -6041 ], flag: 0, tc: [ 2012, 990 ], color: [ 0, 0, 129, 255 ] },
]

const ccs_seg7_vertex_0701D7D8 = [
	{ pos: [ -5938, 8038, -6041 ], flag: 0, tc: [ 0, -2588 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -5938, 7680, -6245 ], flag: 0, tc: [ 2012, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -5938, 8038, -6245 ], flag: 0, tc: [ 2012, -2586 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -5733, 8038, -6245 ], flag: 0, tc: [ 0, -2586 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -5733, 7680, -6245 ], flag: 0, tc: [ 0, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -5733, 7680, -6041 ], flag: 0, tc: [ 2012, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -5733, 8038, -6041 ], flag: 0, tc: [ 2012, -2588 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -5938, 7680, -6245 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -5733, 7680, -6245 ], flag: 0, tc: [ 2012, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -5733, 8038, -6245 ], flag: 0, tc: [ 2012, -2586 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -5938, 8038, -6245 ], flag: 0, tc: [ 0, -2586 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -5938, 8038, -6041 ], flag: 0, tc: [ 2012, -2586 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -5733, 8038, -6041 ], flag: 0, tc: [ 0, -2586 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -5733, 7680, -6041 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 129, 255 ] },
]

const ccs_seg7_vertex_0701D8B8 = [
	{ pos: [ -4709, 7322, -5733 ], flag: 0, tc: [ 0, -5652 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -4709, 6656, -5733 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -5119, 6656, -5733 ], flag: 0, tc: [ 4056, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -6348, 7680, -5529 ], flag: 0, tc: [ 0, -9230 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -6348, 6656, -5529 ], flag: 0, tc: [ 0, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -6348, 7680, -6757 ], flag: 0, tc: [ 12232, -9230 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -6348, 6656, -6757 ], flag: 0, tc: [ 12232, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -6348, 6656, -6757 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -5119, 6656, -6757 ], flag: 0, tc: [ 12232, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -5119, 7680, -6757 ], flag: 0, tc: [ 12232, -9230 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -6348, 7680, -6757 ], flag: 0, tc: [ 0, -9230 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -6348, 7680, -5529 ], flag: 0, tc: [ 12232, -9230 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -5119, 6656, -5529 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -6348, 6656, -5529 ], flag: 0, tc: [ 12232, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -5119, 7680, -5529 ], flag: 0, tc: [ 0, -9230 ], color: [ 0, 0, 129, 255 ] },
]

const ccs_seg7_vertex_0701D9A8 = [
	{ pos: [ -4709, 7322, -5733 ], flag: 0, tc: [ -7184, -1736 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -5119, 7322, -5733 ], flag: 0, tc: [ -7184, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -5119, 7322, -6553 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -4709, 7322, -5733 ], flag: 0, tc: [ 0, -5652 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -5119, 6656, -5733 ], flag: 0, tc: [ 4056, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -5119, 7322, -5733 ], flag: 0, tc: [ 4056, -5652 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -5119, 7322, -6553 ], flag: 0, tc: [ 0, -5654 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -5119, 6656, -6553 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -4709, 7322, -6553 ], flag: 0, tc: [ 4056, -5654 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -4709, 6656, -6553 ], flag: 0, tc: [ 4056, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -4709, 7322, -6553 ], flag: 0, tc: [ 990, -1736 ], color: [ 0, 129, 0, 255 ] },
]

const ccs_seg7_vertex_0701DA58 = [
	{ pos: [ -6706, -5426, -6501 ], flag: 0, tc: [ 6100, 5076 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -6706, -5836, -6501 ], flag: 0, tc: [ 6100, 9164 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -6757, -5836, -6501 ], flag: 0, tc: [ 6610, 9164 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -6296, -5426, -6501 ], flag: 0, tc: [ 2012, 5076 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -6757, -5375, -6501 ], flag: 0, tc: [ 6610, 4566 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -6245, -5375, -6501 ], flag: 0, tc: [ 1500, 4566 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -6245, -5836, -6501 ], flag: 0, tc: [ 1500, 9164 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -6296, -5836, -6501 ], flag: 0, tc: [ 2012, 9164 ], color: [ 0, 0, 129, 255 ] },
]

const ccs_seg7_vertex_0701DAD8 = [
	{ pos: [ -7679, -5703, -6716 ], flag: 0, tc: [ 0, 308 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -7576, -5703, -6716 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -7576, -5703, -6819 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -7576, -5703, -6716 ], flag: 0, tc: [ 0, -338 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -7679, -5703, -6716 ], flag: 0, tc: [ 990, -338 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -7679, -5600, -6716 ], flag: 0, tc: [ 990, -1360 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -7576, -5600, -6716 ], flag: 0, tc: [ 0, -1360 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -7679, -5703, -6819 ], flag: 0, tc: [ 0, -338 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -7576, -5703, -6819 ], flag: 0, tc: [ 990, -338 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -7679, -5600, -6819 ], flag: 0, tc: [ 0, -1360 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -7576, -5600, -6819 ], flag: 0, tc: [ 990, -1360 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -7576, -5600, -6819 ], flag: 0, tc: [ -1182, 236 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -7576, -5600, -6716 ], flag: 0, tc: [ -2204, 236 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -7679, -5600, -6716 ], flag: 0, tc: [ -2204, 918 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -7679, -5600, -6819 ], flag: 0, tc: [ -1182, 918 ], color: [ 0, 129, 0, 255 ] },
]

const ccs_seg7_vertex_0701DBC8 = [
	{ pos: [ -7167, -5836, -6143 ], flag: 0, tc: [ -8720, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -6706, -5836, -6143 ], flag: 0, tc: [ -4118, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -6706, -5426, -6143 ], flag: 0, tc: [ -4118, -3098 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -7679, -5703, -6716 ], flag: 0, tc: [ 0, 308 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -7576, -5703, -6819 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -7679, -5703, -6819 ], flag: 0, tc: [ 990, 308 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -6296, -5836, -6143 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -5784, -5836, -6143 ], flag: 0, tc: [ 5078, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -6296, -5426, -6143 ], flag: 0, tc: [ 0, -3098 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -5784, -4197, -6143 ], flag: 0, tc: [ 5078, -15362 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -7167, -4197, -6143 ], flag: 0, tc: [ -8720, -15362 ], color: [ 0, 0, 127, 255 ] },
]

const ccs_seg7_vertex_0701DC78 = [
	{ pos: [ -7576, -5426, -6450 ], flag: 0, tc: [ 5078, 5076 ], color: [ 29, 133, 0, 255 ] },
	{ pos: [ -6706, -5221, -7372 ], flag: 0, tc: [ -3844, -4120 ], color: [ 29, 133, 0, 255 ] },
	{ pos: [ -6706, -5221, -6450 ], flag: 0, tc: [ -3844, 5076 ], color: [ 29, 133, 0, 255 ] },
	{ pos: [ -7576, -5426, -7372 ], flag: 0, tc: [ 5078, -4120 ], color: [ 29, 133, 0, 255 ] },
	{ pos: [ -6348, 6656, -5529 ], flag: 0, tc: [ 6100, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -5119, 6656, -5529 ], flag: 0, tc: [ 6100, -5142 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -5119, 6656, -6757 ], flag: 0, tc: [ 0, -5142 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -6348, 6656, -6757 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -5119, 6656, -6553 ], flag: 0, tc: [ 990, -5142 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -5119, 6656, -5733 ], flag: 0, tc: [ 5078, -5142 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -4709, 6656, -5733 ], flag: 0, tc: [ 5078, -7186 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -4709, 6656, -6553 ], flag: 0, tc: [ 990, -7186 ], color: [ 0, 127, 0, 255 ] },
]

const ccs_seg7_vertex_0701DD38 = [
	{ pos: [ -5477, -4812, -7679 ], flag: 0, tc: [ -2074, 3542 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -6706, -4812, -7679 ], flag: 0, tc: [ 4056, 3542 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -6706, -4812, -7372 ], flag: 0, tc: [ 4056, 2010 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -5692, -5651, -6891 ], flag: 0, tc: [ 0, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -5692, -5744, -6891 ], flag: 0, tc: [ 990, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -5692, -5651, -6829 ], flag: 0, tc: [ 0, -84 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -5692, -5744, -6829 ], flag: 0, tc: [ 990, -84 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -5692, -5580, -6860 ], flag: 0, tc: [ 0, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -5692, -5651, -6921 ], flag: 0, tc: [ 1764, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -5692, -5651, -6798 ], flag: 0, tc: [ 250, -760 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -5682, -4812, -6450 ], flag: 0, tc: [ -1052, -2586 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -5477, -4812, -6450 ], flag: 0, tc: [ -2074, -2586 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -5682, -4812, -7372 ], flag: 0, tc: [ -1052, 2010 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -7576, -5836, -6911 ], flag: 0, tc: [ 5844, -5398 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -7679, -5836, -7065 ], flag: 0, tc: [ 6610, -5908 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -7679, -5836, -6911 ], flag: 0, tc: [ 5844, -5908 ], color: [ 0, 127, 0, 255 ] },
]

const ccs_seg7_vertex_0701DE38 = [
	{ pos: [ -7576, -5836, -6911 ], flag: 0, tc: [ 5844, -5398 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -7576, -5836, -7065 ], flag: 0, tc: [ 6610, -5398 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -7679, -5836, -7065 ], flag: 0, tc: [ 6610, -5908 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -7576, -5836, -6450 ], flag: 0, tc: [ 990, -4376 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -5682, -5836, -7372 ], flag: 0, tc: [ 5588, 5076 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -7576, -5836, -7372 ], flag: 0, tc: [ 5588, -4376 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -5682, -5836, -6450 ], flag: 0, tc: [ 990, 5076 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -6296, -5836, -6450 ], flag: 0, tc: [ 990, 2010 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -6706, -5836, -6450 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -6706, -5836, -6143 ], flag: 0, tc: [ -542, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -6296, -5836, -6143 ], flag: 0, tc: [ -542, 2010 ], color: [ 0, 127, 0, 255 ] },
]

const ccs_seg7_vertex_0701DEE8 = [
	{ pos: [ -8703, -5068, -7628 ], flag: 0, tc: [ 990, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -8703, -5836, -6194 ], flag: 0, tc: [ 0, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -8703, -5836, -7628 ], flag: 0, tc: [ 990, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -8703, -5068, -6194 ], flag: 0, tc: [ 0, 0 ], color: [ 127, 0, 0, 255 ] },
]

const ccs_seg7_vertex_0701DF28 = [
	{ pos: [ -8703, -5836, -7628 ], flag: 0, tc: [ 1050, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -7679, -5836, -6194 ], flag: 0, tc: [ -1052, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -7679, -5836, -7628 ], flag: 0, tc: [ 554, 1882 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -8703, -5836, -6194 ], flag: 0, tc: [ -556, 96 ], color: [ 0, 127, 0, 255 ] },
]

export const ccs_seg7_dl_0701DF68 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, snow_09005000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(ccs_seg7_lights_0701CED8.l[0], 1),
	Gbi.gsSPLight(ccs_seg7_lights_0701CED8.a, 2),
	Gbi.gsSPVertex(ccs_seg7_vertex_0701CF38, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 13, 14, 0x0),
	Gbi.gsSPVertex(ccs_seg7_vertex_0701D028, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  8,  9, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 13, 11, 0x0),
	Gbi.gsSP1Triangle( 0,  2, 14, 0x0),
	Gbi.gsSPLight(ccs_seg7_lights_0701CEF0.l[0], 1),
	Gbi.gsSPLight(ccs_seg7_lights_0701CEF0.a, 2),
	Gbi.gsSPVertex(ccs_seg7_vertex_0701D118, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  8, 0x0),
	...Gbi.gsSP2Triangles( 4,  9,  7, 0x0,  4,  6,  9, 0x0),
	...Gbi.gsSP2Triangles( 8, 10,  4, 0x0, 10, 11,  4, 0x0),
	Gbi.gsSP1Triangle(12, 13, 14, 0x0),
	Gbi.gsSPVertex(ccs_seg7_vertex_0701D208, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  1,  0, 0x0,  0,  5,  4, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0, 11,  8, 10, 0x0),
	...Gbi.gsSP2Triangles(10, 12, 11, 0x0, 11, 12, 13, 0x0),
	...Gbi.gsSP2Triangles(13, 12, 14, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(ccs_seg7_vertex_0701D308, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  1,  3,  4, 0x0),
	...Gbi.gsSP2Triangles( 1,  0,  3, 0x0,  0,  2,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  3,  7, 0x0,  6,  4,  3, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  6, 11,  4, 0x0),
	...Gbi.gsSP2Triangles( 5,  2, 11, 0x0,  5, 11,  6, 0x0),
	...Gbi.gsSP2Triangles(12, 13, 14, 0x0, 12, 14, 15, 0x0),
	Gbi.gsSPVertex(ccs_seg7_vertex_0701D408, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 2,  6,  7, 0x0,  2,  7,  8, 0x0),
	...Gbi.gsSP2Triangles( 9, 10, 11, 0x0, 11, 10, 12, 0x0),
	...Gbi.gsSP2Triangles(11, 12, 13, 0x0,  3, 14,  4, 0x0),
	Gbi.gsSPVertex(ccs_seg7_vertex_0701D4F8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 14, 12, 0x0),
	Gbi.gsSPVertex(ccs_seg7_vertex_0701D5E8, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  9,  7, 0x0),
	...Gbi.gsSP2Triangles(10,  1,  0, 0x0, 10,  0, 11, 0x0),
	...Gbi.gsSP2Triangles( 0,  2, 12, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(ccs_seg7_vertex_0701D6E8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  5,  4,  7, 0x0),
	...Gbi.gsSP2Triangles( 4,  6,  8, 0x0,  9,  8,  6, 0x0),
	...Gbi.gsSP2Triangles( 9, 10,  8, 0x0,  5,  7, 11, 0x0),
	...Gbi.gsSP2Triangles(11,  7, 10, 0x0, 11, 10,  9, 0x0),
	Gbi.gsSP1Triangle(12, 13, 14, 0x0),
	Gbi.gsSPVertex(ccs_seg7_vertex_0701D7D8, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSPVertex(ccs_seg7_vertex_0701D8B8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 4,  6,  5, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 14, 12, 0x0),
	Gbi.gsSPVertex(ccs_seg7_vertex_0701D9A8, 11, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  7,  9,  8, 0x0),
	Gbi.gsSP1Triangle(10,  0,  2, 0x0),
	Gbi.gsSPLight(ccs_seg7_lights_0701CF08.l[0], 1),
	Gbi.gsSPLight(ccs_seg7_lights_0701CF08.a, 2),
	Gbi.gsSPVertex(ccs_seg7_vertex_0701DA58, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  0,  4, 0x0),
	...Gbi.gsSP2Triangles( 0,  2,  4, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  3, 0x0,  6,  3,  5, 0x0),
	Gbi.gsSPLight(ccs_seg7_lights_0701CF20.l[0], 1),
	Gbi.gsSPLight(ccs_seg7_lights_0701CF20.a, 2),
	Gbi.gsSPVertex(ccs_seg7_vertex_0701DAD8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 8, 10,  9, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(14, 11, 13, 0x0),
	Gbi.gsSPVertex(ccs_seg7_vertex_0701DBC8, 11, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  7,  9,  8, 0x0),
	...Gbi.gsSP2Triangles( 2,  9, 10, 0x0,  2,  8,  9, 0x0),
	Gbi.gsSP1Triangle( 0,  2, 10, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ccs_seg7_dl_0701E3F8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, snow_09008000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(ccs_seg7_lights_0701CEF0.l[0], 1),
	Gbi.gsSPLight(ccs_seg7_lights_0701CEF0.a, 2),
	Gbi.gsSPVertex(ccs_seg7_vertex_0701DC78, 12, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 10, 11, 0x0),
	Gbi.gsSPLight(ccs_seg7_lights_0701CF20.l[0], 1),
	Gbi.gsSPLight(ccs_seg7_lights_0701CF20.a, 2),
	Gbi.gsSPVertex(ccs_seg7_vertex_0701DD38, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 4,  6,  5, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 0, 10, 11, 0x0,  0, 12, 10, 0x0),
	...Gbi.gsSP2Triangles( 0,  2, 12, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(ccs_seg7_vertex_0701DE38, 11, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	Gbi.gsSP1Triangle( 7,  9, 10, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ccs_seg7_dl_0701E4E8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, ccs_seg7_texture_07004300),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(ccs_seg7_vertex_0701DEE8, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ccs_seg7_dl_0701E520 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, snow_09008800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(ccs_seg7_vertex_0701DF28, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const ccs_seg7_dl_0701E558 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(ccs_seg7_dl_0701DF68),
	Gbi.gsSPDisplayList(ccs_seg7_dl_0701E3F8),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(ccs_seg7_dl_0701E4E8),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(ccs_seg7_dl_0701E520),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

