import { ObjectListProcessorInstance as ObjectListProc } from "../ObjectListProcessor"
import { cur_obj_has_model, cur_obj_change_action, cur_obj_clear_interact_status_flag } from "../ObjectHelpers"
import { oAction, oTimer, oPosX, oPosZ, oDoorUnkF8, oMoveAngleYaw, oDoorUnkFC, oDoorUnk100, oDoorUnk88 } from "../../include/object_constants"
import { sins, coss } from "../../utils"

/*export const door_animation_and_reset(s32 sp18) {
    cur_obj_init_animation_with_sound(sp18)
    if (cur_obj_check_if_near_animation_end())
        //o.rawData[oAction = 0
}

export const set_door_camera_event {
    if (segmented_to_virtual(bhvDoor) == o.rawData[behavior)
        //gPlayerCameraState.rawData[cameraEvent = CAM_EVENT_DOOR
    else
        //gPlayerCameraState.rawData[cameraEvent = CAM_EVENT_DOOR_WARP
    gPlayerCameraState.rawData[usedObj = o
}

export const play_door_open_noise {
    s32 sp1C = cur_obj_has_model(MODEL_HMC_METAL_DOOR)
    if (o.rawData[oTimer == 0) {
        //cur_obj_play_sound_2(D_8032F328[sp1C])
        //gTimeStopState |= TIME_STOP_MARIO_OPENED_DOOR
    }
    if (o.rawData[oTimer == 70) {
        //cur_obj_play_sound_2(D_8032F330[sp1C])
  /}
}

export const play_warp_door_open_noise {
    s32 sp1C = cur_obj_has_model(MODEL_HMC_METAL_DOOR)
    if (o.rawData[oTimer == 30)
        cur_obj_play_sound_2(D_8032F330[sp1C])
}
*/

export const bhv_door_loop = () => {
 
    const o = ObjectListProc.gCurrentObject

    sp1C = 0

    while (D_8032F300[sp1C].flag != ~0) {
        if (cur_obj_clear_interact_status_flag(D_8032F300[sp1C].flag)) {
            set_door_camera_event()
            cur_obj_change_action(D_8032F300[sp1C].action)
        }
        sp1C++
    }

    switch (o.rawData[oAction]) {
        case 0:
            //cur_obj_init_animation_with_sound(0)
            break
        case 1:
            door_animation_and_reset(1)
            //play_door_open_noise()
            break
        case 2:
            door_animation_and_reset(2)
            //play_door_open_noise()
            break
        case 3:
            door_animation_and_reset(3)
            //play_warp_door_open_noise()
            break
        case 4:
            door_animation_and_reset(4)
            //play_warp_door_open_noise()
            break
    }
    if (o.rawData[oAction] == 0)
        load_object_collision_model()
    bhv_star_door_loop_2()
} 
//~hope cam event isn't important... 


 export const bhv_door_init = () => {
    
    const o = ObjectListProc.gCurrentObject

    x = o.rawData[oPosX]
    z = o.rawData[oPosZ]
    SurfaceCollision.find_floor( o.rawData[oPosY])
    if (floor != NULL) {
        (o.rawData[oDoorUnkF8] = floor (o.rawData[room]))
    }

    x = o.rawData[oPosX] + sins(o.rawData[oMoveAngleYaw]) * -200.0
    z = o.rawData[oPosZ] + coss(o.rawData[oMoveAngleYaw]) * -200.0
    SurfaceCollision.find_floor(o.rawData[oPosY])
    if (floor != NULL) {
        o.rawData[oDoorUnk100] = floor.rawData[room]
    }

    if (o.rawData[oDoorUnkF8] > 0 && o.rawData[oDoorUnkF8] < 60) {
        g[DoorAdjacentRooms][o.rawData[oDoorUnkF8][0]] = o.rawData[oDoorUnkFC]
        g[DoorAdjacentRooms][o.rawData[oDoorUnkF8][1]] = o.rawData[oDoorUnk100]
    }
}

export const bhv_star_door_loop_2 = () => {
     
     const o = ObjectListProc.gCurrentObject

    sp4 = 0
  if (ObjectListProc.gMarioCurrentRoom != 0) {
        if (o.rawData[oDoorUnkF8] == ObjectListProc.gMarioCurrentRoom)
            sp4 = 1
        else if (ObjectListProc.gMarioCurrentRoom == o.rawData[oDoorUnkFC])
            sp4 = 1
        else if (ObjectListProc.gMarioCurrentRoom == o.rawData[oDoorUnk100])
            sp4 = 1
        else if (gDoorAdjacentRooms[ObjectListProc.gMarioCurrentRoom][0] == o.rawData[oDoorUnkFC])
            sp4 = 1
        else if (gDoorAdjacentRooms[ObjectListProc.gMarioCurrentRoom][0] == o.rawData[oDoorUnk100])
            sp4 = 1
        else if (gDoorAdjacentRooms[ObjectListProc.gMarioCurrentRoom][1] == o.rawData[oDoorUnkFC])
            sp4 = 1
        else if (gDoorAdjacentRooms[ObjectListProc.gMarioCurrentRoom][1] == o.rawData[oDoorUnk100])
            sp4 = 1
    } else
        sp4 = 1
    if (sp4 == 1) {
        (o.header.gfx.node.flags |= GRAPH_RENDER_ACTIVE)
        D_8035FEE4++
    }
    if (sp4 == 0) {
        (o.header.gfx.node.flags &= ~GRAPH_RENDER_ACTIVE)
    }
    (o.rawData[oDoorUnk88] = sp4)
}