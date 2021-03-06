import {
    COL_INIT,
    COL_VERTEX_INIT,
    COL_VERTEX,
    COL_TRI_INIT,
    COL_TRI,
    COL_TRI_STOP,
    COL_END,

    SURFACE_DEFAULT

} from "../../../include/surface_terrains"


export const inside_castle_seg7_collision_floor_trap = [
    ...COL_INIT(),
    ...COL_VERTEX_INIT(0x4),
    ...COL_VERTEX(358, 0, -306),
    ...COL_VERTEX(0, 0, -306),
    ...COL_VERTEX(0, 0, 307),
    ...COL_VERTEX(358, 0, 307),
    ...COL_TRI_INIT(SURFACE_DEFAULT, 2),
    ...COL_TRI(0, 1, 2),
    ...COL_TRI(0, 2, 3),
    ...COL_TRI_STOP(),
    ...COL_END(),
]
