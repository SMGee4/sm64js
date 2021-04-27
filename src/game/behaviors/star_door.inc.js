import { ObjectListProcessorInstance as ObjectListProc } from "../ObjectListProcessor"
import { cur_obj_become_intangible, cur_obj_become_tangible, cur_obj_nearest_object_with_behavior } from "../ObjectHelpers"
import { oVelX, oVelZ, oPosX, oPosZ, oUnkBC, oMoveAngleYaw, oAction, oInteractStatus, oTimer } from "../../include/object_constants"
import { sins, coss } from "../../utils"

export const star_door_update_pos = () => {
    
    const o = ObjectListProc.gCurrentObject

    (o.rawData[oVelX] =  (o.rawData[oUnkBC])) * coss(o.rawData[oMoveAngleYaw])
    (o.rawData[oVelZ] =  (o.rawData[oUnkBC])) -sins(o.rawData[oMoveAngleYaw])
    (o.rawData[oPosX] += (o.rawData[oVelX]))
    (o.rawData[oPosZ] += (o.rawData[oVelZ]))
}

export const bhv_star_door_loop = () => {
 
  const o = ObjectListProc.gCurrentObject
    
    sp18 = cur_obj_nearest_object_with_behavior()
    switch ((o.rawData[oAction])) {
        case 0:
            cur_obj_become_tangible()
            if (0x30000 & (o.rawData[oInteractStatus])
                (o.rawData[oAction] = 1))
            if (sp18 != NULL && sp18(o.rawData[oAction] != 0)
                (o.rawData[oAction] = 1))
            break
        case 1:
            if ((o.rawData[oTimer] == 0 && ((o.rawData[oMoveAngleYaw]))) >= 0) {
                //cur_obj_play_sound_2
                //(SOUND_GENERAL_STAR_DOOR_OPEN)
                //queue_rumble_data(35, 30)
            }
            cur_obj_become_intangible()
            (o.rawData[oUnkBC] = -8.0)
            if ((o.rawData[oTimer] >= 16)
                (o.rawData[oAction]++))
            break
        case 2:
            if ((o.rawData[oTimer] >= 31)
                (o.rawData[oAction]++))
            break
        case 3:
            if ((o.rawData[oTimer] == 0 && ((o.rawData[oMoveAngleYaw]))) >= 0) {
                //cur_obj_play_sound_2//(SOUND_GENERAL_STAR_DOOR_CLOSE)
                //queue_rumble_data(35, 30)
            }
            (o.rawData[oUnkBC] = 8.0)
            if ((o.rawData[oTimer] >= 16)
                (o.rawData[oAction]++))
            break
        case 4:
            (o.rawData[oInteractStatus] = 0)
            (o.rawData[oAction] = 0)
            break
    }
}