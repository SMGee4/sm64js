import { GeoLayoutInstance as Geo } from "../../../../../engine/GeoLayout"
import { ccm_seg7_dl_07010660 } from "./1.inc"
import { ccm_seg7_dl_070109D0 } from "./2.inc"
import { ccm_seg7_dl_07010B50 } from "./3.inc"

export const ccm_geo_0004E4 = [
    { command: Geo.node_culling_radius, args: [3500] },
    { command: Geo.open_node },
        { command: Geo.node_render_range, args: [-3000, 6000] },
        { command: Geo.open_node },
            { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, ccm_seg7_dl_07010660] },
            { command: Geo.display_list, args: [Geo.LAYER_ALPHA, ccm_seg7_dl_070109D0] },
            { command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, ccm_seg7_dl_07010B50] },
        { command: Geo.close_node },
    { command: Geo.close_node },
    { command: Geo.node_end }
]
