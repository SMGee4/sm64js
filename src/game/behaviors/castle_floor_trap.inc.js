import { ObjectListProcessorInstance as ObjectListProc } from "../ObjectListProcessor"
import { oFaceAngleRoll, oInteractStatus, oMoveAngleYaw, oAngleVelRoll, oAction, oDistanceToMario } from "../../include/object_constants"
import { INT_STATUS_TRAP_TURN } from "../Interaction"
import { MODEL_CASTLE_BOWSER_TRAP } from "../../include/model_ids"

 export const bhv_floor_trap_in_castle_loop = () => {
   const o = ObjectListProc.gCurrentObject

   if (ObjectListProc.gMarioObject.platform == o)
        ((o.parentObj.rawData[oInteractStatus] |= INT_STATUS_TRAP_TURN))
    ((o.rawData[oFaceAngleRoll] = o.parentObj.rawData[oFaceAngleRoll]))
 
}

 export const bhv_castle_floor_trap_init = () => {
   const o = ObjectListProc.gCurrentObject

    sp2C = spawn_object_relative(0, -358, 0, 0, o, MODEL_CASTLE_BOWSER_TRAP, bhvFloorTrapInCastle)
    sp2C = spawn_object_relative(0, 358, 0, 0, o, MODEL_CASTLE_BOWSER_TRAP, bhvFloorTrapInCastle)
    sp2C(o.rawData[oMoveAngleYaw] += 0x8000)
 
}


 export const bhv_castle_floor_trap_open_detect = () => {
   const o = ObjectListProc.gCurrentObject

if ((this.gMarioState.action// == ACT_SPECIAL_EXIT_AIRBORNE       ~Proabably don't need these yet
        || this.gMarioState.action))// == ACT_SPECIAL_DEATH_EXIT)
        ((o.rawData[oAction] = 4)) // rotates trapdoor so it looks always open
    else
        ((o.rawData[oAngleVelRoll] = 0x400))
        if ((o.rawData[oInteractStatus] & INT_STATUS_TRAP_TURN))
            ((o.rawData[oAction] = 1)) // detects interact then opens the trapdoor
 
}




 export const bhv_castle_floor_trap_open = () => {
   const o = ObjectListProc.gCurrentObject
   //if ((o.rawData[oTimer] == 0)
        //cur_obj_play_sound_2(SOUND_GENERAL_CASTLE_TRAP_OPEN)
    ((o.rawData[oAngleVelRoll] -= 0x100))
    ((o.rawData[oFaceAngleRoll]) += (o.rawData[oAngleVelRoll]))
    if ((o.rawData[oFaceAngleRoll] < -0x4000)) {
        ((o.rawData[oFaceAngleRoll] = -0x4000))
        ((o.rawData[oAction] = 2)) // after opening is done, enable close detection
            }
}
 
 export const bhv_castle_floor_trap_close_detect = () => {
   const o = ObjectListProc.gCurrentObject
   if ((o.rawData[oDistanceToMario] > 1000.0))
        ((o.rawData[oAction] = 3)) // close trapdoor
 
}

 export const bhv_castle_floor_trap_close = () => {
   const o = ObjectListProc.gCurrentObject
   
   ((o.rawData[oFaceAngleRoll] += 0x400))
    if ((o.rawData[oFaceAngleRoll] > 0)) {
        ((o.rawData[oFaceAngleRoll] = 0))
        ((o.rawData[oAction] = 0)) // after closing, reloads open detection
        ((o.rawData[oInteractStatus] &= ~INT_STATUS_TRAP_TURN))
            }
}

 export const bhv_castle_floor_trap_rotate = () => {
   const o = ObjectListProc.gCurrentObject
   
   ((o.rawData[oFaceAngleRoll] = -0x3C00))
 
}

export const bhv_castle_floor_trap_loop = () => {
  const o = ObjectListProc.gCurrentObject
    switch (o.rawData[oAction]) {
        case 0:
            bhv_castle_floor_trap_open_detect()
        case 1:
            bhv_castle_floor_trap_open()
        case 2:
            bhv_castle_floor_trap_close_detect()
        case 3:
            bhv_castle_floor_trap_close()
        case 4:
            bhv_castle_floor_trap_rotate()
    }
  }