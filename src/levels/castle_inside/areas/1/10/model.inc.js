import * as Gbi from "../../../../../include/gbi"
import {
	inside_09003000,
	inside_09004000,
	inside_09005000
} from "../../../../../textures/inside"

const inside_castle_seg7_lights_0702FDD8 = Gbi.gdSPDefLights1(
	    0x5f, 0x5f, 0x5f,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)


const inside_castle_seg7_vertex_0702FDF0 = [
	{ pos: [1422, 614, -2869], flag: 0, tc: [1774, 990], color: [0, 127, 0, 255] },
	{ pos: [1169, 614, -2616], flag: 0, tc: [3040, -274], color: [0, 127, 0, 255] },
	{ pos: [1169, 614, -2254], flag: 0, tc: [3040, -2082], color: [0, 127, 0, 255] },
	{ pos: [2038, 614, -2254], flag: 0, tc: [-1294, -2082], color: [0, 127, 0, 255] },
	{ pos: [2038, 614, -2616], flag: 0, tc: [-1294, -274], color: [0, 127, 0, 255] },
	{ pos: [1784, 614, -2001], flag: 0, tc: [0, -3346], color: [0, 127, 0, 255] },
	{ pos: [1422, 614, -2001], flag: 0, tc: [1774, -3346], color: [0, 127, 0, 255] },
	{ pos: [1784, 614, -2869], flag: 0, tc: [0, 990], color: [0, 127, 0, 255] },
]

const inside_castle_seg7_vertex_0702FE70 = [
	{ pos: [590, 614, -1530], flag: 0, tc: [-286, 224], color: [0, 127, 0, 255] },
	{ pos: [734, 614, -1457], flag: 0, tc: [0, 990], color: [0, 127, 0, 255] },
	{ pos: [626, 614, -1566], flag: 0, tc: [0, 224], color: [0, 127, 0, 255] },
	{ pos: [1857, 768, -2073], flag: 0, tc: [6834, 2794], color: [0, 127, 0, 255] },
	{ pos: [2110, 768, -2037], flag: 0, tc: [9362, 3156], color: [0, 127, 0, 255] },
	{ pos: [1965, 768, -2182], flag: 0, tc: [7918, 1710], color: [0, 127, 0, 255] },
	{ pos: [2002, 768, -1928], flag: 0, tc: [8278, 4240], color: [0, 127, 0, 255] },
	{ pos: [1350, 768, -2797], flag: 0, tc: [1774, -4430], color: [0, 127, 0, 255] },
	{ pos: [1096, 768, -2833], flag: 0, tc: [-752, -4792], color: [0, 127, 0, 255] },
	{ pos: [1241, 768, -2688], flag: 0, tc: [690, -3346], color: [0, 127, 0, 255] },
	{ pos: [1205, 768, -2942], flag: 0, tc: [330, -5876], color: [0, 127, 0, 255] },
	{ pos: [553, 614, -1638], flag: 0, tc: [0, -288], color: [0, 127, 0, 255] },
	{ pos: [1422, 614, -2001], flag: 0, tc: [4312, 1498], color: [0, 127, 0, 255] },
	{ pos: [1169, 614, -2254], flag: 0, tc: [4312, -288], color: [0, 127, 0, 255] },
	{ pos: [807, 614, -1385], flag: 0, tc: [0, 1498], color: [0, 127, 0, 255] },
]

const inside_castle_seg7_vertex_0702FF70 = [
	{ pos: [1965, 768, -2688], flag: 0, tc: [7918, -3346], color: [0, 127, 0, 255] },
	{ pos: [2001, 768, -2942], flag: 0, tc: [8278, -5876], color: [0, 127, 0, 255] },
	{ pos: [1857, 768, -2797], flag: 0, tc: [6834, -4430], color: [0, 127, 0, 255] },
	{ pos: [590, 614, -1530], flag: 0, tc: [-286, 224], color: [0, 127, 0, 255] },
	{ pos: [698, 614, -1421], flag: 0, tc: [-286, 990], color: [0, 127, 0, 255] },
	{ pos: [734, 614, -1457], flag: 0, tc: [0, 990], color: [0, 127, 0, 255] },
	{ pos: [2110, 768, -2833], flag: 0, tc: [9362, -4792], color: [0, 127, 0, 255] },
]

const inside_castle_seg7_vertex_0702FFF0 = [
	{ pos: [1446, 1126, -2169], flag: 0, tc: [10018, 0], color: [0, 129, 0, 255] },
	{ pos: [626, 1126, -1566], flag: 0, tc: [0, 990], color: [0, 129, 0, 255] },
	{ pos: [1338, 1126, -2278], flag: 0, tc: [10018, 990], color: [0, 129, 0, 255] },
	{ pos: [1338, 1126, -2278], flag: 0, tc: [10018, -4120], color: [80, 199, 80, 255] },
	{ pos: [553, 922, -1638], flag: 0, tc: [0, -2076], color: [80, 199, 80, 255] },
	{ pos: [1169, 922, -2254], flag: 0, tc: [8654, -2076], color: [80, 199, 80, 255] },
	{ pos: [1169, 922, -2254], flag: 0, tc: [8654, -2076], color: [89, 0, 89, 255] },
	{ pos: [553, 922, -1638], flag: 0, tc: [0, -2076], color: [89, 0, 89, 255] },
	{ pos: [553, 614, -1638], flag: 0, tc: [0, 990], color: [89, 0, 89, 255] },
	{ pos: [1169, 614, -2254], flag: 0, tc: [8654, 990], color: [89, 0, 89, 255] },
	{ pos: [626, 1126, -1566], flag: 0, tc: [0, -4120], color: [80, 199, 80, 255] },
	{ pos: [1422, 614, -2001], flag: 0, tc: [8654, 990], color: [167, 0, 167, 255] },
	{ pos: [807, 614, -1385], flag: 0, tc: [0, 990], color: [167, 0, 167, 255] },
	{ pos: [807, 922, -1385], flag: 0, tc: [0, -2076], color: [167, 0, 167, 255] },
	{ pos: [1422, 922, -2001], flag: 0, tc: [8654, -2076], color: [167, 0, 167, 255] },
]

const inside_castle_seg7_vertex_070300E0 = [
	{ pos: [1422, 922, -2001], flag: 0, tc: [8654, -2076], color: [176, 199, 176, 255] },
	{ pos: [807, 922, -1385], flag: 0, tc: [0, -2076], color: [176, 199, 176, 255] },
	{ pos: [734, 1126, -1457], flag: 0, tc: [0, -4120], color: [176, 199, 176, 255] },
	{ pos: [1422, 922, -2001], flag: 0, tc: [8654, -2076], color: [176, 200, 176, 255] },
	{ pos: [734, 1126, -1457], flag: 0, tc: [0, -4120], color: [176, 200, 176, 255] },
	{ pos: [1446, 1126, -2169], flag: 0, tc: [10018, -4120], color: [176, 200, 176, 255] },
	{ pos: [1965, 768, -2182], flag: 0, tc: [-540, -544], color: [167, 0, 167, 255] },
	{ pos: [2038, 614, -2254], flag: 0, tc: [-1562, 990], color: [167, 0, 167, 255] },
	{ pos: [1784, 614, -2001], flag: 0, tc: [2012, 990], color: [167, 0, 167, 255] },
	{ pos: [1446, 1126, -2169], flag: 0, tc: [10018, 0], color: [0, 129, 0, 255] },
	{ pos: [734, 1126, -1457], flag: 0, tc: [0, 0], color: [0, 129, 0, 255] },
	{ pos: [626, 1126, -1566], flag: 0, tc: [0, 990], color: [0, 129, 0, 255] },
	{ pos: [1422, 922, -2001], flag: 0, tc: [-1052, -1054], color: [74, 186, 182, 255] },
	{ pos: [1446, 1126, -2169], flag: 0, tc: [0, -3098], color: [74, 186, 182, 255] },
	{ pos: [1507, 1229, -2205], flag: 0, tc: [-206, -4120], color: [74, 186, 182, 255] },
]

const inside_castle_seg7_vertex_070301D0 = [
	{ pos: [1446, 1126, -2169], flag: 0, tc: [0, -3098], color: [75, 186, 182, 255] },
	{ pos: [1338, 1126, -2278], flag: 0, tc: [1502, -3098], color: [75, 186, 182, 255] },
	{ pos: [1507, 1229, -2205], flag: 0, tc: [-206, -4120], color: [75, 186, 182, 255] },
	{ pos: [1374, 1229, -2339], flag: 0, tc: [1676, -4120], color: [75, 186, 182, 255] },
	{ pos: [1338, 1126, -2278], flag: 0, tc: [1502, -3098], color: [74, 186, 181, 255] },
	{ pos: [1169, 922, -2254], flag: 0, tc: [2524, -1054], color: [74, 186, 181, 255] },
	{ pos: [1374, 1229, -2339], flag: 0, tc: [1676, -4120], color: [74, 186, 181, 255] },
	{ pos: [1784, 614, -2001], flag: 0, tc: [2012, 990], color: [166, 0, 167, 255] },
	{ pos: [1857, 768, -2073], flag: 0, tc: [990, -544], color: [166, 0, 167, 255] },
	{ pos: [1965, 768, -2182], flag: 0, tc: [-540, -544], color: [166, 0, 167, 255] },
	{ pos: [1965, 768, -2182], flag: 0, tc: [-540, -544], color: [167, 0, 166, 255] },
	{ pos: [1965, 922, -2182], flag: 0, tc: [-540, -2076], color: [167, 0, 166, 255] },
	{ pos: [2038, 922, -2254], flag: 0, tc: [-1562, -2076], color: [167, 0, 166, 255] },
	{ pos: [2038, 614, -2254], flag: 0, tc: [-1562, 990], color: [167, 0, 166, 255] },
]

const inside_castle_seg7_vertex_070302B0 = [
	{ pos: [1965, 768, -2182], flag: 0, tc: [0, 990], color: [167, 0, 89, 255] },
	{ pos: [2110, 922, -2037], flag: 0, tc: [2012, -542], color: [167, 0, 89, 255] },
	{ pos: [1965, 922, -2182], flag: 0, tc: [0, -542], color: [167, 0, 89, 255] },
	{ pos: [1784, 614, -2001], flag: 0, tc: [2012, 990], color: [167, 0, 166, 255] },
	{ pos: [1784, 922, -2001], flag: 0, tc: [2012, -2076], color: [167, 0, 166, 255] },
	{ pos: [1857, 922, -2073], flag: 0, tc: [990, -2076], color: [167, 0, 166, 255] },
	{ pos: [1857, 768, -2073], flag: 0, tc: [990, -544], color: [167, 0, 166, 255] },
	{ pos: [2038, 922, -2254], flag: 0, tc: [-1562, -2076], color: [182, 186, 182, 255] },
	{ pos: [1881, 1024, -2194], flag: 0, tc: [0, -3098], color: [182, 186, 182, 255] },
	{ pos: [1833, 1229, -2339], flag: 0, tc: [-716, -5142], color: [182, 186, 182, 255] },
	{ pos: [2038, 922, -2254], flag: 0, tc: [-1562, -2076], color: [182, 186, 181, 255] },
	{ pos: [1965, 922, -2182], flag: 0, tc: [-540, -2076], color: [182, 186, 181, 255] },
	{ pos: [1881, 1024, -2194], flag: 0, tc: [0, -3098], color: [182, 186, 181, 255] },
	{ pos: [1845, 1024, -2157], flag: 0, tc: [478, -3098], color: [182, 186, 181, 255] },
	{ pos: [1857, 922, -2073], flag: 0, tc: [990, -2076], color: [182, 186, 181, 255] },
	{ pos: [1784, 922, -2001], flag: 0, tc: [2012, -2076], color: [182, 186, 181, 255] },
]

const inside_castle_seg7_vertex_070303B0 = [
	{ pos: [1965, 768, -2182], flag: 0, tc: [0, 990], color: [167, 0, 89, 255] },
	{ pos: [2110, 768, -2037], flag: 0, tc: [2012, 990], color: [167, 0, 89, 255] },
	{ pos: [2110, 922, -2037], flag: 0, tc: [2012, -542], color: [167, 0, 89, 255] },
	{ pos: [1965, 922, -2182], flag: 0, tc: [5588, -544], color: [176, 200, 80, 255] },
	{ pos: [2110, 922, -2037], flag: 0, tc: [7632, -544], color: [176, 200, 80, 255] },
	{ pos: [2074, 1024, -2001], flag: 0, tc: [7632, -1566], color: [176, 200, 80, 255] },
	{ pos: [1857, 922, -2073], flag: 0, tc: [0, -544], color: [89, 0, 167, 255] },
	{ pos: [2002, 768, -1928], flag: 0, tc: [2012, 990], color: [89, 0, 167, 255] },
	{ pos: [1857, 768, -2073], flag: 0, tc: [0, 990], color: [89, 0, 167, 255] },
	{ pos: [2002, 922, -1928], flag: 0, tc: [2012, -542], color: [89, 0, 167, 255] },
	{ pos: [1845, 1024, -2157], flag: 0, tc: [4908, -1566], color: [80, 200, 176, 255] },
	{ pos: [2038, 1024, -1964], flag: 0, tc: [7632, -1566], color: [80, 200, 176, 255] },
	{ pos: [2002, 922, -1928], flag: 0, tc: [7632, -544], color: [80, 200, 176, 255] },
	{ pos: [1857, 922, -2073], flag: 0, tc: [5588, -544], color: [80, 200, 176, 255] },
]

const inside_castle_seg7_vertex_07030490 = [
	{ pos: [1881, 1024, -2194], flag: 0, tc: [7292, 480], color: [0, 129, 0, 255] },
	{ pos: [2074, 1024, -2001], flag: 0, tc: [10018, 480], color: [0, 129, 0, 255] },
	{ pos: [2038, 1024, -1964], flag: 0, tc: [10018, 0], color: [0, 129, 0, 255] },
	{ pos: [1845, 1024, -2157], flag: 0, tc: [7292, 0], color: [0, 129, 0, 255] },
	{ pos: [1507, 1229, -2665], flag: 0, tc: [-716, -5142], color: [75, 186, 74, 255] },
	{ pos: [1374, 1229, -2531], flag: 0, tc: [1166, -5142], color: [75, 186, 74, 255] },
	{ pos: [1326, 1024, -2676], flag: 0, tc: [478, -3098], color: [75, 186, 74, 255] },
	{ pos: [1965, 922, -2182], flag: 0, tc: [5588, -544], color: [176, 200, 80, 255] },
	{ pos: [2074, 1024, -2001], flag: 0, tc: [7632, -1566], color: [176, 200, 80, 255] },
	{ pos: [1881, 1024, -2194], flag: 0, tc: [4908, -1566], color: [176, 200, 80, 255] },
	{ pos: [1881, 1024, -2194], flag: 0, tc: [0, -3098], color: [181, 186, 183, 255] },
	{ pos: [1845, 1024, -2157], flag: 0, tc: [478, -3098], color: [181, 186, 183, 255] },
	{ pos: [1699, 1229, -2205], flag: 0, tc: [1166, -5142], color: [181, 186, 183, 255] },
	{ pos: [1881, 1024, -2194], flag: 0, tc: [0, -3098], color: [182, 186, 182, 255] },
	{ pos: [1699, 1229, -2205], flag: 0, tc: [1166, -5142], color: [182, 186, 182, 255] },
	{ pos: [1833, 1229, -2339], flag: 0, tc: [-716, -5142], color: [182, 186, 182, 255] },
]

const inside_castle_seg7_vertex_07030590 = [
	{ pos: [1845, 1024, -2157], flag: 0, tc: [478, -3098], color: [182, 186, 181, 255] },
	{ pos: [1784, 922, -2001], flag: 0, tc: [2012, -2076], color: [182, 186, 181, 255] },
	{ pos: [1699, 1229, -2205], flag: 0, tc: [1166, -5142], color: [182, 186, 181, 255] },
	{ pos: [1507, 1229, -2665], flag: 0, tc: [-716, -5142], color: [74, 186, 74, 255] },
	{ pos: [1362, 1024, -2713], flag: 0, tc: [0, -3098], color: [74, 186, 74, 255] },
	{ pos: [1422, 922, -2869], flag: 0, tc: [-1564, -2076], color: [74, 186, 74, 255] },
	{ pos: [1507, 1229, -2665], flag: 0, tc: [-716, -5142], color: [75, 186, 73, 255] },
	{ pos: [1326, 1024, -2676], flag: 0, tc: [478, -3098], color: [75, 186, 73, 255] },
	{ pos: [1362, 1024, -2713], flag: 0, tc: [0, -3098], color: [75, 186, 73, 255] },
	{ pos: [1422, 614, -2869], flag: 0, tc: [-1564, 990], color: [89, 0, 89, 255] },
	{ pos: [1350, 768, -2797], flag: 0, tc: [-542, -542], color: [89, 0, 89, 255] },
	{ pos: [1241, 768, -2688], flag: 0, tc: [990, -542], color: [89, 0, 89, 255] },
	{ pos: [1350, 922, -2797], flag: 0, tc: [-542, -2076], color: [74, 186, 74, 255] },
	{ pos: [1422, 922, -2869], flag: 0, tc: [-1564, -2076], color: [89, 0, 89, 255] },
	{ pos: [1350, 922, -2797], flag: 0, tc: [-542, -2076], color: [89, 0, 89, 255] },
]

const inside_castle_seg7_vertex_07030670 = [
	{ pos: [1169, 922, -2616], flag: 0, tc: [2012, -2076], color: [74, 186, 74, 255] },
	{ pos: [1241, 922, -2688], flag: 0, tc: [990, -2076], color: [74, 186, 74, 255] },
	{ pos: [1326, 1024, -2676], flag: 0, tc: [478, -3098], color: [74, 186, 74, 255] },
	{ pos: [1374, 1229, -2531], flag: 0, tc: [1166, -5142], color: [74, 186, 74, 255] },
	{ pos: [1241, 768, -2688], flag: 0, tc: [990, -542], color: [89, 0, 89, 255] },
	{ pos: [1241, 922, -2688], flag: 0, tc: [990, -2076], color: [89, 0, 89, 255] },
	{ pos: [1169, 922, -2616], flag: 0, tc: [2012, -2076], color: [89, 0, 89, 255] },
	{ pos: [1362, 1024, -2713], flag: 0, tc: [-2414, -1566], color: [176, 200, 80, 255] },
	{ pos: [1169, 1024, -2906], flag: 0, tc: [-5140, -1566], color: [176, 200, 80, 255] },
	{ pos: [1205, 922, -2942], flag: 0, tc: [-5140, -544], color: [176, 200, 80, 255] },
	{ pos: [1350, 922, -2797], flag: 0, tc: [-3096, -544], color: [176, 200, 80, 255] },
	{ pos: [1241, 922, -2688], flag: 0, tc: [-3096, -542], color: [80, 199, 176, 255] },
	{ pos: [1133, 1024, -2869], flag: 0, tc: [-5140, -1564], color: [80, 199, 176, 255] },
	{ pos: [1326, 1024, -2676], flag: 0, tc: [-2414, -1566], color: [80, 199, 176, 255] },
]

const inside_castle_seg7_vertex_07030760 = [
	{ pos: [1350, 922, -2797], flag: 0, tc: [-3096, -544], color: [167, 0, 89, 255] },
	{ pos: [1205, 922, -2942], flag: 0, tc: [-5140, -544], color: [167, 0, 89, 255] },
	{ pos: [1205, 768, -2942], flag: 0, tc: [-5140, 990], color: [167, 0, 89, 255] },
	{ pos: [1350, 768, -2797], flag: 0, tc: [-3096, 990], color: [167, 0, 89, 255] },
	{ pos: [1326, 1024, -2676], flag: 0, tc: [0, 0], color: [0, 129, 0, 255] },
	{ pos: [1133, 1024, -2869], flag: 0, tc: [-2756, 0], color: [0, 129, 0, 255] },
	{ pos: [1169, 1024, -2906], flag: 0, tc: [-2756, 478], color: [0, 129, 0, 255] },
	{ pos: [1362, 1024, -2713], flag: 0, tc: [0, 478], color: [0, 129, 0, 255] },
	{ pos: [1241, 768, -2688], flag: 0, tc: [-3096, 990], color: [89, 0, 167, 255] },
	{ pos: [1096, 922, -2833], flag: 0, tc: [-5140, -542], color: [89, 0, 167, 255] },
	{ pos: [1241, 922, -2688], flag: 0, tc: [-3096, -542], color: [89, 0, 167, 255] },
	{ pos: [1241, 922, -2688], flag: 0, tc: [-3096, -542], color: [80, 199, 176, 255] },
	{ pos: [1096, 922, -2833], flag: 0, tc: [-5140, -542], color: [80, 199, 176, 255] },
	{ pos: [1133, 1024, -2869], flag: 0, tc: [-5140, -1564], color: [80, 199, 176, 255] },
]

const inside_castle_seg7_vertex_07030860 = [
	{ pos: [2038, 922, -2616], flag: 0, tc: [2560, -1054], color: [129, 0, 0, 255] },
	{ pos: [2038, 614, -2616], flag: 0, tc: [2560, 2010], color: [129, 0, 0, 255] },
	{ pos: [2038, 614, -2254], flag: 0, tc: [-1052, 2010], color: [129, 0, 0, 255] },
	{ pos: [1241, 768, -2688], flag: 0, tc: [-3096, 990], color: [89, 0, 167, 255] },
	{ pos: [1096, 768, -2833], flag: 0, tc: [-5140, 990], color: [89, 0, 167, 255] },
	{ pos: [1096, 922, -2833], flag: 0, tc: [-5140, -542], color: [89, 0, 167, 255] },
	{ pos: [1241, 768, -2688], flag: 0, tc: [990, -542], color: [89, 0, 89, 255] },
	{ pos: [1169, 614, -2616], flag: 0, tc: [2012, 990], color: [89, 0, 89, 255] },
	{ pos: [1422, 614, -2869], flag: 0, tc: [-1564, 990], color: [89, 0, 89, 255] },
	{ pos: [1169, 922, -2616], flag: 0, tc: [2012, -2076], color: [89, 0, 89, 255] },
	{ pos: [1784, 922, -2001], flag: 0, tc: [-1052, -1054], color: [0, 0, 129, 255] },
	{ pos: [1784, 614, -2001], flag: 0, tc: [-1052, 2010], color: [0, 0, 129, 255] },
	{ pos: [1422, 614, -2001], flag: 0, tc: [2560, 2010], color: [0, 0, 129, 255] },
	{ pos: [1422, 922, -2001], flag: 0, tc: [2560, -1054], color: [0, 0, 129, 255] },
	{ pos: [2038, 922, -2254], flag: 0, tc: [-1052, -1054], color: [129, 0, 0, 255] },
]

const inside_castle_seg7_vertex_07030940 = [
	{ pos: [1169, 922, -2254], flag: 0, tc: [-1052, -1054], color: [127, 0, 0, 255] },
	{ pos: [1169, 614, -2616], flag: 0, tc: [2560, 2010], color: [127, 0, 0, 255] },
	{ pos: [1169, 922, -2616], flag: 0, tc: [2560, -1054], color: [127, 0, 0, 255] },
	{ pos: [1169, 614, -2254], flag: 0, tc: [-1052, 2010], color: [127, 0, 0, 255] },
	{ pos: [807, 922, -1385], flag: 0, tc: [-1052, -1054], color: [90, 254, 167, 255] },
	{ pos: [734, 870, -1457], flag: 0, tc: [0, -544], color: [90, 254, 167, 255] },
	{ pos: [626, 870, -1566], flag: 0, tc: [1502, -544], color: [90, 254, 167, 255] },
	{ pos: [626, 870, -1566], flag: 0, tc: [1502, -544], color: [89, 0, 166, 255] },
	{ pos: [626, 614, -1566], flag: 0, tc: [1502, 2010], color: [89, 0, 166, 255] },
	{ pos: [553, 922, -1638], flag: 0, tc: [2524, -1054], color: [89, 0, 166, 255] },
	{ pos: [626, 870, -1566], flag: 0, tc: [1502, -544], color: [89, 1, 167, 255] },
	{ pos: [553, 922, -1638], flag: 0, tc: [2524, -1054], color: [89, 1, 167, 255] },
	{ pos: [807, 922, -1385], flag: 0, tc: [-1052, -1054], color: [89, 1, 167, 255] },
	{ pos: [553, 614, -1638], flag: 0, tc: [2524, 2010], color: [89, 0, 166, 255] },
]

const inside_castle_seg7_vertex_07030A40 = [
	{ pos: [553, 922, -1638], flag: 0, tc: [2524, -1054], color: [90, 0, 167, 255] },
	{ pos: [626, 1126, -1566], flag: 0, tc: [1500, -3098], color: [90, 0, 167, 255] },
	{ pos: [734, 1126, -1457], flag: 0, tc: [0, -3098], color: [90, 0, 167, 255] },
	{ pos: [553, 922, -1638], flag: 0, tc: [2524, -1054], color: [89, 0, 167, 255] },
	{ pos: [734, 1126, -1457], flag: 0, tc: [0, -3098], color: [89, 0, 167, 255] },
	{ pos: [807, 922, -1385], flag: 0, tc: [-1052, -1054], color: [89, 0, 167, 255] },
	{ pos: [807, 922, -1385], flag: 0, tc: [-1052, -1054], color: [89, 0, 166, 255] },
	{ pos: [734, 614, -1457], flag: 0, tc: [0, 2010], color: [89, 0, 166, 255] },
	{ pos: [734, 870, -1457], flag: 0, tc: [0, -544], color: [89, 0, 166, 255] },
	{ pos: [807, 614, -1385], flag: 0, tc: [-1052, 2010], color: [89, 0, 166, 255] },
	{ pos: [1422, 922, -2001], flag: 0, tc: [2560, -1054], color: [0, 186, 151, 255] },
	{ pos: [1507, 1229, -2205], flag: 0, tc: [1712, -4120], color: [0, 186, 151, 255] },
	{ pos: [1699, 1229, -2205], flag: 0, tc: [-206, -4120], color: [0, 186, 151, 255] },
	{ pos: [1422, 922, -2869], flag: 0, tc: [2560, -1054], color: [0, 0, 127, 255] },
	{ pos: [1784, 614, -2869], flag: 0, tc: [-1052, 2010], color: [0, 0, 127, 255] },
	{ pos: [1784, 922, -2869], flag: 0, tc: [-1052, -1054], color: [0, 0, 127, 255] },
]

const inside_castle_seg7_vertex_07030B30 = [
	{ pos: [1784, 922, -2869], flag: 0, tc: [-1052, -1054], color: [0, 186, 105, 255] },
	{ pos: [1507, 1229, -2665], flag: 0, tc: [1712, -4120], color: [0, 186, 105, 255] },
	{ pos: [1422, 922, -2869], flag: 0, tc: [2560, -1054], color: [0, 186, 105, 255] },
	{ pos: [1422, 922, -2869], flag: 0, tc: [2560, -1054], color: [0, 0, 127, 255] },
	{ pos: [1422, 614, -2869], flag: 0, tc: [2560, 2010], color: [0, 0, 127, 255] },
	{ pos: [1784, 614, -2869], flag: 0, tc: [-1052, 2010], color: [0, 0, 127, 255] },
	{ pos: [1784, 922, -2869], flag: 0, tc: [-4118, -2076], color: [0, 186, 105, 255] },
	{ pos: [1699, 1229, -2665], flag: 0, tc: [-2074, -5142], color: [0, 186, 105, 255] },
	{ pos: [1507, 1229, -2665], flag: 0, tc: [-716, -5142], color: [0, 186, 105, 255] },
	{ pos: [2038, 922, -2254], flag: 0, tc: [-1052, -1054], color: [151, 186, 0, 255] },
	{ pos: [1833, 1229, -2339], flag: 0, tc: [-206, -4120], color: [151, 186, 0, 255] },
	{ pos: [2038, 922, -2616], flag: 0, tc: [2560, -1054], color: [151, 186, 0, 255] },
	{ pos: [1833, 1229, -2531], flag: 0, tc: [1712, -4120], color: [151, 186, 0, 255] },
	{ pos: [734, 614, -1457], flag: 0, tc: [0, 2010], color: [167, 0, 167, 255] },
	{ pos: [698, 870, -1421], flag: 0, tc: [-542, -544], color: [167, 0, 167, 255] },
	{ pos: [734, 870, -1457], flag: 0, tc: [0, -544], color: [167, 0, 167, 255] },
]

const inside_castle_seg7_vertex_07030C20 = [
	{ pos: [1422, 922, -2001], flag: 0, tc: [2560, -1054], color: [0, 186, 151, 255] },
	{ pos: [1699, 1229, -2205], flag: 0, tc: [-206, -4120], color: [0, 186, 151, 255] },
	{ pos: [1784, 922, -2001], flag: 0, tc: [-1052, -1054], color: [0, 186, 151, 255] },
	{ pos: [1169, 922, -2616], flag: 0, tc: [2560, -1054], color: [105, 186, 0, 255] },
	{ pos: [1374, 1229, -2531], flag: 0, tc: [1712, -4120], color: [105, 186, 0, 255] },
	{ pos: [1169, 922, -2254], flag: 0, tc: [-1052, -1054], color: [105, 186, 0, 255] },
	{ pos: [1374, 1229, -2339], flag: 0, tc: [-206, -4120], color: [105, 186, 0, 255] },
	{ pos: [698, 870, -1421], flag: 0, tc: [0, 0], color: [0, 129, 0, 255] },
	{ pos: [626, 870, -1566], flag: 0, tc: [990, 990], color: [0, 129, 0, 255] },
	{ pos: [734, 870, -1457], flag: 0, tc: [990, 0], color: [0, 129, 0, 255] },
	{ pos: [590, 870, -1530], flag: 0, tc: [0, 990], color: [0, 129, 0, 255] },
	{ pos: [734, 614, -1457], flag: 0, tc: [0, 2010], color: [167, 0, 167, 255] },
	{ pos: [698, 614, -1421], flag: 0, tc: [-542, 2010], color: [167, 0, 167, 255] },
	{ pos: [698, 870, -1421], flag: 0, tc: [-542, -544], color: [167, 0, 167, 255] },
]

const inside_castle_seg7_vertex_07030D20 = [
	{ pos: [590, 614, -1530], flag: 0, tc: [-542, 2010], color: [89, 0, 89, 255] },
	{ pos: [626, 614, -1566], flag: 0, tc: [0, 2010], color: [89, 0, 89, 255] },
	{ pos: [626, 870, -1566], flag: 0, tc: [0, -542], color: [89, 0, 89, 255] },
	{ pos: [590, 870, -1530], flag: 0, tc: [-542, -544], color: [89, 0, 89, 255] },
	{ pos: [1965, 922, -2688], flag: 0, tc: [0, -1054], color: [182, 186, 75, 255] },
	{ pos: [2038, 922, -2616], flag: 0, tc: [-1052, -1054], color: [182, 186, 75, 255] },
	{ pos: [1881, 1024, -2676], flag: 0, tc: [480, -2076], color: [182, 186, 75, 255] },
	{ pos: [1881, 1024, -2676], flag: 0, tc: [480, -2076], color: [182, 186, 74, 255] },
	{ pos: [2038, 922, -2616], flag: 0, tc: [-1052, -1054], color: [182, 186, 74, 255] },
	{ pos: [1833, 1229, -2531], flag: 0, tc: [-206, -4120], color: [182, 186, 74, 255] },
	{ pos: [1881, 1024, -2676], flag: 0, tc: [480, -2076], color: [181, 186, 73, 255] },
	{ pos: [1699, 1229, -2665], flag: 0, tc: [1676, -4120], color: [181, 186, 73, 255] },
	{ pos: [1845, 1024, -2713], flag: 0, tc: [990, -2076], color: [181, 186, 73, 255] },
	{ pos: [1699, 1229, -2665], flag: 0, tc: [1676, -4120], color: [182, 186, 74, 255] },
]

const inside_castle_seg7_vertex_07030E20 = [
	{ pos: [1784, 922, -2869], flag: 0, tc: [2524, -1054], color: [182, 186, 75, 255] },
	{ pos: [1845, 1024, -2713], flag: 0, tc: [990, -2076], color: [182, 186, 75, 255] },
	{ pos: [1699, 1229, -2665], flag: 0, tc: [1676, -4120], color: [182, 186, 75, 255] },
	{ pos: [1857, 922, -2797], flag: 0, tc: [1502, -1054], color: [182, 186, 75, 255] },
	{ pos: [2038, 614, -2616], flag: 0, tc: [-1052, 2010], color: [166, 0, 89, 255] },
	{ pos: [1965, 768, -2688], flag: 0, tc: [0, 480], color: [166, 0, 89, 255] },
	{ pos: [1857, 768, -2797], flag: 0, tc: [1502, 480], color: [166, 0, 89, 255] },
	{ pos: [1857, 768, -2797], flag: 0, tc: [1502, 480], color: [167, 0, 90, 255] },
	{ pos: [1857, 922, -2797], flag: 0, tc: [1502, -1054], color: [167, 0, 90, 255] },
	{ pos: [1784, 922, -2869], flag: 0, tc: [2524, -1054], color: [167, 0, 90, 255] },
	{ pos: [1784, 614, -2869], flag: 0, tc: [2524, 2010], color: [167, 0, 90, 255] },
	{ pos: [1857, 768, -2797], flag: 0, tc: [1502, 480], color: [167, 0, 89, 255] },
	{ pos: [1784, 614, -2869], flag: 0, tc: [2524, 2010], color: [167, 0, 89, 255] },
	{ pos: [2038, 614, -2616], flag: 0, tc: [-1052, 2010], color: [167, 0, 89, 255] },
]

const inside_castle_seg7_vertex_07030F10 = [
	{ pos: [2038, 614, -2616], flag: 0, tc: [-1052, 2010], color: [167, 0, 90, 255] },
	{ pos: [2038, 922, -2616], flag: 0, tc: [-1052, -1054], color: [167, 0, 90, 255] },
	{ pos: [1965, 922, -2688], flag: 0, tc: [0, -1054], color: [167, 0, 90, 255] },
	{ pos: [1965, 768, -2688], flag: 0, tc: [0, 480], color: [167, 0, 90, 255] },
	{ pos: [1857, 768, -2797], flag: 0, tc: [-1052, 990], color: [90, 0, 89, 255] },
	{ pos: [2001, 922, -2942], flag: 0, tc: [990, -544], color: [90, 0, 89, 255] },
	{ pos: [1857, 922, -2797], flag: 0, tc: [-1052, -544], color: [90, 0, 89, 255] },
	{ pos: [1857, 922, -2797], flag: 0, tc: [-1052, -544], color: [80, 200, 80, 255] },
	{ pos: [2001, 922, -2942], flag: 0, tc: [990, -544], color: [80, 200, 80, 255] },
	{ pos: [1845, 1024, -2713], flag: 0, tc: [-1734, -1566], color: [80, 200, 80, 255] },
	{ pos: [2001, 922, -2942], flag: 0, tc: [990, -544], color: [80, 199, 80, 255] },
	{ pos: [2038, 1024, -2906], flag: 0, tc: [990, -1566], color: [80, 199, 80, 255] },
	{ pos: [1845, 1024, -2713], flag: 0, tc: [-1734, -1566], color: [80, 199, 80, 255] },
	{ pos: [2001, 768, -2942], flag: 0, tc: [990, 990], color: [90, 0, 89, 255] },
]

const inside_castle_seg7_vertex_07030FF0 = [
	{ pos: [2038, 1024, -2906], flag: 0, tc: [3204, 990], color: [0, 129, 0, 255] },
	{ pos: [2074, 1024, -2869], flag: 0, tc: [3204, 480], color: [0, 129, 0, 255] },
	{ pos: [1881, 1024, -2676], flag: 0, tc: [480, 478], color: [0, 129, 0, 255] },
	{ pos: [1845, 1024, -2713], flag: 0, tc: [480, 990], color: [0, 129, 0, 255] },
	{ pos: [1881, 1024, -2676], flag: 0, tc: [-1734, -1566], color: [176, 200, 176, 255] },
	{ pos: [2074, 1024, -2869], flag: 0, tc: [990, -1566], color: [176, 200, 176, 255] },
	{ pos: [1965, 922, -2688], flag: 0, tc: [-1052, -544], color: [176, 200, 176, 255] },
	{ pos: [2110, 922, -2833], flag: 0, tc: [990, -544], color: [176, 200, 176, 255] },
	{ pos: [1965, 922, -2688], flag: 0, tc: [-1052, -544], color: [167, 0, 167, 255] },
	{ pos: [2110, 768, -2833], flag: 0, tc: [990, 990], color: [167, 0, 167, 255] },
	{ pos: [1965, 768, -2688], flag: 0, tc: [-1052, 990], color: [167, 0, 167, 255] },
	{ pos: [2110, 922, -2833], flag: 0, tc: [990, -544], color: [167, 0, 167, 255] },
	{ pos: [1833, 1229, -2665], flag: 0, tc: [-2074, -1302], color: [0, 129, 0, 255] },
	{ pos: [1833, 1229, -2205], flag: 0, tc: [-2074, 990], color: [0, 129, 0, 255] },
	{ pos: [1374, 1229, -2205], flag: 0, tc: [2508, 990], color: [0, 129, 0, 255] },
	{ pos: [1374, 1229, -2665], flag: 0, tc: [2508, -1302], color: [0, 129, 0, 255] },
]

export const inside_castle_seg7_dl_07031070 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, inside_09004000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(inside_castle_seg7_lights_0702FDD8.l[0], 1),
	Gbi.gsSPLight(inside_castle_seg7_lights_0702FDD8.a, 2),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_0702FDF0, 8, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 0, 3, 4, 0x0),
	...Gbi.gsSP2Triangles(0, 5, 3, 0x0, 0, 2, 6, 0x0),
	...Gbi.gsSP2Triangles(0, 4, 7, 0x0, 0, 6, 5, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_070310D8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, inside_09005000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_0702FE70, 15, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(3, 6, 4, 0x0, 7, 8, 9, 0x0),
	...Gbi.gsSP2Triangles(7, 10, 8, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 14, 12, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_0702FF70, 7, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	Gbi.gsSP1Triangle(0, 6, 1, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_07031168 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, inside_09003000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_0702FFF0, 15, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(6, 7, 8, 0x0, 6, 8, 9, 0x0),
	...Gbi.gsSP2Triangles(3, 10, 4, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 13, 14, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_070300E0, 15, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(6, 7, 8, 0x0, 9, 10, 11, 0x0),
	Gbi.gsSP1Triangle(12, 13, 14, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_070301D0, 14, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 1, 3, 2, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 6, 0x0, 7, 8, 9, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 12, 13, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_070302B0, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(3, 5, 6, 0x0, 7, 8, 9, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_070303B0, 14, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(6, 7, 8, 0x0, 6, 9, 7, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 12, 13, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07030490, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 0, 2, 3, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 6, 0x0, 7, 8, 9, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07030590, 15, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(6, 7, 8, 0x0, 9, 10, 11, 0x0),
	...Gbi.gsSP2Triangles(4, 12, 5, 0x0, 9, 13, 14, 0x0),
	Gbi.gsSP1Triangle(9, 14, 10, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07030670, 14, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 0, 2, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 6, 0x0, 7, 8, 9, 0x0),
	...Gbi.gsSP2Triangles(7, 9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07030760, 14, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 0, 2, 3, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 6, 0x0, 4, 6, 7, 0x0),
	...Gbi.gsSP2Triangles(8, 9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07030860, 15, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(6, 7, 8, 0x0, 6, 9, 7, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 12, 13, 0x0),
	Gbi.gsSP1Triangle(0, 2, 14, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07030940, 14, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 0, 3, 1, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 6, 0x0, 7, 8, 9, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 8, 13, 9, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07030A40, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(6, 7, 8, 0x0, 6, 9, 7, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07030B30, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(6, 7, 8, 0x0, 9, 10, 11, 0x0),
	...Gbi.gsSP2Triangles(10, 12, 11, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07030C20, 14, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 3, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(4, 6, 5, 0x0, 7, 8, 9, 0x0),
	...Gbi.gsSP2Triangles(7, 10, 8, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07030D20, 14, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 0, 2, 3, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 6, 0x0, 7, 8, 9, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 7, 9, 13, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07030E20, 14, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 0, 3, 1, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 6, 0x0, 7, 8, 9, 0x0),
	...Gbi.gsSP2Triangles(7, 9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07030F10, 14, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 0, 2, 3, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 6, 0x0, 7, 8, 9, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 4, 13, 5, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07030FF0, 16, 0),
	...Gbi.gsSP2Triangles(0, 1, 2, 0x0, 0, 2, 3, 0x0),
	...Gbi.gsSP2Triangles(4, 5, 6, 0x0, 5, 7, 6, 0x0),
	...Gbi.gsSP2Triangles(8, 9, 10, 0x0, 8, 11, 9, 0x0),
	...Gbi.gsSP2Triangles(12, 13, 14, 0x0, 12, 14, 15, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_07031588 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_07031070),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_070310D8),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_07031168),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

