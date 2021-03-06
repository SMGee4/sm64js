import { GeoLayoutInstance as Geo } from "../../engine/GeoLayout"
import { SHADOW_CIRCLE_4_VERTS } from "../../game/Shadow"

import { blue_fish_seg3_dl_0301BFB8, blue_fish_seg3_dl_0301C150 } from "./model.inc"

// 0x16000BEC
export const fish_shadow_geo = [
   ['GEO_SHADOW', SHADOW_CIRCLE_4_VERTS, 0x9B, 50],
   ['GEO_OPEN_NODE'],
      ['GEO_SCALE', 0x00, 16384],
      ['GEO_OPEN_NODE'],
         ['GEO_ANIMATED_PART', Geo.LAYER_OPAQUE, -16, 0, 0, null],
         ['GEO_OPEN_NODE'],
            ['GEO_ANIMATED_PART', Geo.LAYER_OPAQUE, 0, 0, 0, blue_fish_seg3_dl_0301BFB8],
            ['GEO_OPEN_NODE'],
               ['GEO_ANIMATED_PART', Geo.LAYER_OPAQUE, 97, 0, 0, blue_fish_seg3_dl_0301C150],
            ['GEO_CLOSE_NODE'],
         ['GEO_CLOSE_NODE'],
      ['GEO_CLOSE_NODE'],
   ['GEO_CLOSE_NODE'],
   ['GEO_END'],
]

// 0x16000C44
export const fish_geo = [
   ['GEO_SCALE', 0x00, 16384],
   ['GEO_OPEN_NODE'],
      ['GEO_ANIMATED_PART', Geo.LAYER_OPAQUE, -16, 0, 0, null],
      ['GEO_OPEN_NODE'],
         ['GEO_ANIMATED_PART', Geo.LAYER_OPAQUE, 0, 0, 0, blue_fish_seg3_dl_0301BFB8],
         ['GEO_OPEN_NODE'],
            ['GEO_ANIMATED_PART', Geo.LAYER_OPAQUE, 97, 0, 0, blue_fish_seg3_dl_0301C150],
         ['GEO_CLOSE_NODE'],
      ['GEO_CLOSE_NODE'],
   ['GEO_CLOSE_NODE'],
   ['GEO_END'],
]
