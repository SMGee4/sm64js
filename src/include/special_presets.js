import { MODEL_CASTLE_WOODEN_DOOR_UNUSED, MODEL_WOODEN_DOOR, MODEL_BBH_HAUNTED_DOOR, MODEL_HMC_WOODEN_DOOR, MODEL_UNKNOWN_DOOR_1E, MODEL_HMC_METAL_DOOR, MODEL_CASTLE_DOOR_0_STARS, MODEL_UNKNOWN_DOOR_2A, MODEL_CASTLE_STAR_DOOR_8_STARS, MODEL_CASTLE_STAR_DOOR_70_STARS, MODEL_UNKNOWN_DOOR_21, MODEL_CASTLE_DOOR_1_STAR, MODEL_CASTLE_DOOR_3_STARS, MODEL_CASTLE_KEY_DOOR, MODEL_CASTLE_CASTLE_DOOR, MODEL_CASTLE_CASTLE_DOOR_UNUSED, MODEL_HMC_HAZY_MAZE_DOOR, MODEL_CASTLE_WOODEN_DOOR, MODEL_COURTYARD_WOODEN_DOOR, MODEL_CCM_CABIN_DOOR, MODEL_UNKNOWN_DOOR_28, MODEL_CASTLE_METAL_DOOR, MODEL_UNKNOWN_DOOR_2B, MODEL_CASTLE_STAR_DOOR_30_STARS, MODEL_CASTLE_STAR_DOOR_50_STARS, MODEL_CASTLE_GROUNDS_CASTLE_DOOR, MODEL_CASTLE_GROUNDS_METAL_DOOR, MODEL_CASTLE_BOWSER_TRAP, MODEL_UNKNOWN_AC } from "../include/model_ids"
import { bhvDoor, bhvCastleFloorTrap } from "../game/BehaviorData"
import { ObjectListProcessorInstance as ObjectListProc } from "../game/ObjectListProcessor"
import { spawn_object_abs_with_rot } from "../game/ObjectHelpers"
import { oBehParams, RESPAWN_INFO_DONT_RESPAWN, oUnk1A8, oBehParams2ndByte, RESPAWN_INFO_TYPE_16 } from "../include/object_constants"
import { uint16, int16 } from "../utils"
import { TERRAIN_LOAD_OBJECTS } from "./surface_terrains"
// Apparently I need something like this, but I don't think this needs to be here. Lol i just replaced the word macro with special
export const convert_rotation = (inRotation) => {
    let rotation = uint16(inRotation & 0xFF)
    rotation <<= 8

    if (rotation == 0x3F00) {
        rotation = 0x4000
    }

    if (rotation == 0x7F00) {
        rotation = 0x8000
    }

    if (rotation == 0xBF00) {
        rotation = 0xC000
    }

    if (rotation == 0xFF00) {
        rotation = 0x0000
    }

    return int16(rotation)
}

const spawn_special_object_presets = (model, behavior, params) => {
    if (behavior) {
        const newObj = spawn_object_abs_with_rot(//ObjectListProc.gSpecialObjectDefaultParent,
            model, behavior)
        newObj.rawData[oBehParams] = params << 16
    } else throw "no behavior - no point in this object existing?"
}

export const spawn_special_objects = (areaIndex, specialObjList, dataIndex) => {
    const numOfSpecialObjects = specialObjList[dataIndex++]

    //ObjectListProc.gSpecialObjectDefaultParent = { header: { gfx: { unk18: areaIndex, unk19: areaIndex } } }

    for (let i = 0; i < numOfSpecialObjects; i++) {
        const presetID = specialObjList[dataIndex++]

        const { model, behavior, type, defParam } = SpecialPresetObjects[presetID]

        switch (type) {
            case SPTYPE_NO_YROT_OR_PARAMS:
                spawn_special_object_presets(defParam, model, behavior)
                break
            case SPTYPE_YROT_NO_PARAMS:
                spawn_special_object_presets(defParam, model, behavior)
                break
                case SPTYPE_NO_YROT_OR_PARAMS:
                spawn_special_object_presets(model, behavior)
                break
            case SPTYPE_DEF_PARAM_AND_YROT:
                spawn_special_object_presets(model, behavior)
                break
            default: throw "unkown special object type"
        }

    }

    return dataIndex
}

export const spawn_special_preset_objects = (areaIndex, specialObjList) => {
    //ObjectListProc.gSpecialObjectDefaultParent.header.gfx.unk18 = areaIndex
    //ObjectListProc.gSpecialObjectDefaultParent.header.gfx.unk19 = areaIndex

    specialObjList.forEach(objToSpawn => {
        const presetID = objToSpawn.preset

        const specialObject = {
            obj_y_rot: objToSpawn.yaw * 2 * 0x10 / 45,
            obj_pos: objToSpawn.pos,
            obj_param: objToSpawn.param
        }

        //const preset = SpecialPresetObjects[presetID]

       specialObject.obj_param = (specialObject.obj_param & 0xFF00) + (preset.param & 0x00FF)

        if (((specialObject.obj_param >> 8) & RESPAWN_INFO_DONT_RESPAWN) != RESPAWN_INFO_DONT_RESPAWN) {
            const newObj = spawn_object_abs_with_rot(//ObjectListProc.gMacroObjectDefaultParent, preset.model, preset.behavior,
                specialObject.obj_pos[0], specialObject.obj_pos[1], specialObject.obj_pos[2], 0, convert_rotation(specialObject.obj_y_rot), 0)

            newObj.rawData[oUnk1A8] = specialObject.obj_param
            newObj.rawData[oBehParams] = ((specialObject.obj_param & 0x00FF) << 16) + (specialObject.obj_param & 0xFF00)
            newObj.rawData[oBehParams2ndByte] = specialObject.obj_param & 0x00FF
            newObj.respawnInfoType = RESPAWN_INFO_TYPE_16
            newObj.respawnInfo = specialObject.obj_param
            newObj.parentObj = newObj
            
        }

    })
}

/*
const convert_rotation = (inRotation) => {
    let rotation = uint16(inRotation & 0xFF)
    rotation <<= 8

    if (rotation == 0x3F00) {
        rotation = 0x4000
    }

    if (rotation == 0x7F00) {
        rotation = 0x8000
    }

    if (rotation == 0xBF00) {
        rotation = 0xC000
    }

    if (rotation == 0xFF00) {
        rotation = 0x0000
    }

    return int16(rotation)
}

const spawn_macro_abs_yrot_2params = (model, behavior, x, y, z, ry, params) => {
    if (behavior) {
        const newObj = spawn_object_abs_with_rot(ObjectListProc.gMacroObjectDefaultParent,
            model, behavior, x, y, z, 0, convert_rotation(ry), 0)
        newObj.rawData[oBehParams] = params << 16
    } else throw "no behavior - no point in this object existing?"
}

export const spawn_special_objects = (areaIndex, specialObjList, dataIndex) => {
    const numOfSpecialObjects = specialObjList[dataIndex++]

    ObjectListProc.gMacroObjectDefaultParent = { header: { gfx: { unk18: areaIndex, unk19: areaIndex } } }

    for (let i = 0; i < numOfSpecialObjects; i++) {
        const presetID = specialObjList[dataIndex++]
        const x = specialObjList[dataIndex++]
        const y = specialObjList[dataIndex++]
        const z = specialObjList[dataIndex++]

        const { model, behavior, type, defParam } = SpecialPresetObjects[presetID]

        switch (type) {
            case SPTYPE_NO_YROT_OR_PARAMS:
                spawn_macro_abs_yrot_2params(model, behavior, x, y, z, 0, 0)
                break
            case SPTYPE_YROT_NO_PARAMS:
                const yaw = specialObjList[dataIndex++]
                spawn_macro_abs_yrot_2params(model, behavior, x, y, z, yaw, 0)
                break
            default: throw "unkown special object type"
        }

    }

    return dataIndex
}

export const spawn_macro_objects = (areaIndex, macroObjList) => {
    ObjectListProc.gMacroObjectDefaultParent.header.gfx.unk18 = areaIndex
    ObjectListProc.gMacroObjectDefaultParent.header.gfx.unk19 = areaIndex

    macroObjList.forEach(objToSpawn => {
        const presetID = objToSpawn.preset

        const macroObject = {
            obj_y_rot: objToSpawn.yaw * 2 * 0x10 / 45,
            obj_pos: objToSpawn.pos,
            obj_param: objToSpawn.param
        }

        const preset = MacroObjectPresets[presetID]

        macroObject.obj_param = (macroObject.obj_param & 0xFF00) + (preset.param & 0x00FF)

        if (((macroObject.obj_param >> 8) & RESPAWN_INFO_DONT_RESPAWN) != RESPAWN_INFO_DONT_RESPAWN) {
            const newObj = spawn_object_abs_with_rot(ObjectListProc.gMacroObjectDefaultParent, preset.model, preset.behavior,
                macroObject.obj_pos[0], macroObject.obj_pos[1], macroObject.obj_pos[2], 0, convert_rotation(macroObject.obj_y_rot), 0)

            newObj.rawData[oUnk1A8] = macroObject.obj_param
            newObj.rawData[oBehParams] = ((macroObject.obj_param & 0x00FF) << 16) + (macroObject.obj_param & 0xFF00)
            newObj.rawData[oBehParams2ndByte] = macroObject.obj_param & 0x00FF
            newObj.respawnInfoType = RESPAWN_INFO_TYPE_16
            newObj.respawnInfo = macroObject.obj_param
            newObj.parentObj = newObj
        }

   })
}
*/


export const SPECIAL_OBJECT_WITH_YAW_AND_PARAM = (preset, posX, posY, posZ, yaw, param) => {
    return [preset, posX, posY, posZ, yaw, param]
}
export const COL_SPECIAL_INIT = (num) => { return [TERRAIN_LOAD_OBJECTS, num] }
export const SPECIAL_OBJECT_WITH_YAW = (preset, posX, posY, posZ, yaw) => {
    return [preset, posX, posY, posZ, yaw]
}

// Not even sure if this is required or needs to be here...

export const special_wooden_door_unused = 69
export const special_0stars_door = 75
export const special_1star_door = 76
export const special_castle_door = 79
export const special_unknown_door_1E = 71
export const special_metal_door = 72
export const special_3star_door = 77
export const special_hmc_door = 73
export const special_key_door = 78
export const special_unknown_door = 74
export const special_unknown_5 = 73
export const special_wooden_door_warp = 60
export const special_metal_door_warp = 61
export const special_haunted_door = 62
export const special_castle_door_warp = 63
export const special_wooden_door = 64

// haunted door was wooden door but I guess it doesn't have to be that way anymore

export const SPTYPE_YROT_NO_PARAMS = 4
export const SPTYPE_DEF_PARAM_AND_YROT = 7
export const SPTYPE_NO_YROT_OR_PARAMS = 9
export const SPTYPE_PARAMS_AND_YROT = 10

//They're all pretty much made up random values...


const SpecialPresetObjects = {}

SpecialPresetObjects[special_castle_door] = { type: SPTYPE_YROT_NO_PARAMS, defParam: 0, model: MODEL_CASTLE_CASTLE_DOOR, behavior: bhvDoor },
//SPECIAL_OBJECT_WITH_YAW_AND_PARAM[special_wooden_door_unused] = { type: SPTYPE_YROT_NO_PARAMS, defParam: 0, defParam: 0, model: MODEL_CASTLE_WOODEN_DOOR_UNUSED, bhvDoor },
//SPECIAL_OBJECT_WITH_YAW_AND_PARAM[special_unknown_door_1E] = { type: SPTYPE_YROT_NO_PARAMS, defParam: 0, model: MODEL_UNKNOWN_DOOR_1E, bhvDoor },
SpecialPresetObjects[special_metal_door] = { type: SPTYPE_YROT_NO_PARAMS, defParam: 0, model: MODEL_HMC_METAL_DOOR, behavior: bhvDoor },
SpecialPresetObjects[special_hmc_door] = { type: SPTYPE_YROT_NO_PARAMS, defParam: 0, model: MODEL_HMC_HAZY_MAZE_DOOR, behavior: bhvDoor },
SpecialPresetObjects[special_unknown_door] = { type: SPTYPE_YROT_NO_PARAMS, defParam: 0, model: MODEL_UNKNOWN_DOOR_21, behavior: bhvDoor },
SpecialPresetObjects[special_haunted_door] = { type: SPTYPE_YROT_NO_PARAMS, defParam: 0, model: MODEL_BBH_HAUNTED_DOOR, behavior: bhvDoor },
SpecialPresetObjects[special_wooden_door] = { type: SPTYPE_YROT_NO_PARAMS, defParam: 0, model: MODEL_CASTLE_WOODEN_DOOR, behavior: bhvDoor },
SpecialPresetObjects[special_0stars_door] = { type: SPTYPE_DEF_PARAM_AND_YROT, model: MODEL_CASTLE_DOOR_0_STARS, behavior: bhvDoor },
SpecialPresetObjects[special_1star_door] = { type: SPTYPE_DEF_PARAM_AND_YROT, model: MODEL_CASTLE_DOOR_1_STAR, behavior: bhvDoor },
SpecialPresetObjects[special_3star_door] = { type: SPTYPE_DEF_PARAM_AND_YROT, model: MODEL_CASTLE_DOOR_3_STARS, behavior: bhvDoor },
SpecialPresetObjects[special_key_door] = { type: SPTYPE_DEF_PARAM_AND_YROT, model: MODEL_CASTLE_KEY_DOOR, behavior: bhvDoor },
SpecialPresetObjects[special_unknown_5] = { type: SPTYPE_NO_YROT_OR_PARAMS, defParam: 0, model: MODEL_UNKNOWN_AC, behavior: bhvCastleFloorTrap },
SpecialPresetObjects[special_wooden_door_warp] = { type: SPTYPE_PARAMS_AND_YROT, model: MODEL_CASTLE_WOODEN_DOOR }, // bhvDoorWarp },
SpecialPresetObjects[special_castle_door_warp] = { type: SPTYPE_PARAMS_AND_YROT, model: MODEL_CASTLE_CASTLE_DOOR }, // bhvDoorWarp },
//SpecialPresets[special = { type: SPTYPE_PARAMS_AND_YROT, MODEL_UNKNOWN_DOOR_28, bhvDoorWarp },
SpecialPresetObjects[special_metal_door_warp] = { type: SPTYPE_PARAMS_AND_YROT, model: MODEL_CASTLE_METAL_DOOR } // bhvDoorWarp },
//SpecialPresets[special = { type: SPTYPE_PARAMS_AND_YROT, MODEL_UNKNOWN_DOOR_2A, bhvDoorWarp },
//SpecialPresets[special = { type: SPTYPE_PARAMS_AND_YROT, MODEL_UNKNOWN_DOOR_2B, bhvDoorWarp }

// Should probably not add the unused models.