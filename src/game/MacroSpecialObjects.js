import { ObjectListProcessorInstance as ObjectListProc } from "./ObjectListProcessor"
import {
    /*
    special_0stars_door,
    special_3star_door,
    special_1star_door,
    special_castle_door,
    special_castle_door_warp,
    special_haunted_door,
    special_hmc_door,
    special_key_door,
    special_metal_door,
    special_metal_door_warp,
    special_unknown_5,
    special_unknown_door,
    special_unknown_door_1E,
    special_wooden_door,
    special_wooden_door_unused,
    special_wooden_door_warp,
    */
    //special_haunted_door,
    special_bubble_tree,
    special_snow_tree,
    special_level_geo_03,
    special_level_geo_04,
    special_level_geo_05,
    special_level_geo_06,
    special_level_geo_07,
    special_level_geo_08,
    special_level_geo_09,
    special_level_geo_0A,
    special_level_geo_0B,
    special_level_geo_0C,
    special_level_geo_0D,
    special_level_geo_0E,
    special_level_geo_0F,
    special_level_geo_10,
    special_level_geo_11,
    special_level_geo_12,
    special_level_geo_13,
    special_level_geo_14,
    special_level_geo_15,
    special_level_geo_16,
} from "../include/surface_terrains"

import {
    //MODEL_BBH_HAUNTED_DOOR,
    MODEL_BOB_BUBBLY_TREE,
    MODEL_CCM_SNOW_TREE,
    MODEL_LEVEL_GEOMETRY_03,
    MODEL_LEVEL_GEOMETRY_04,
    MODEL_LEVEL_GEOMETRY_05,
    MODEL_LEVEL_GEOMETRY_06,
    MODEL_LEVEL_GEOMETRY_07,
    MODEL_LEVEL_GEOMETRY_08,
    MODEL_LEVEL_GEOMETRY_09,
    MODEL_LEVEL_GEOMETRY_0A,
    MODEL_LEVEL_GEOMETRY_0B,
    MODEL_LEVEL_GEOMETRY_0C,
    MODEL_LEVEL_GEOMETRY_0D,
    MODEL_LEVEL_GEOMETRY_0E,
    MODEL_LEVEL_GEOMETRY_0F,
    MODEL_LEVEL_GEOMETRY_10,
    MODEL_LEVEL_GEOMETRY_11,
    MODEL_LEVEL_GEOMETRY_12,
    MODEL_LEVEL_GEOMETRY_13,
    MODEL_LEVEL_GEOMETRY_14,
    MODEL_LEVEL_GEOMETRY_15,
    MODEL_LEVEL_GEOMETRY_16,
} from "../include/model_ids"

//import { MODEL_CASTLE_WOODEN_DOOR_UNUSED, MODEL_WOODEN_DOOR, MODEL_BBH_HAUNTED_DOOR, MODEL_HMC_WOODEN_DOOR, MODEL_UNKNOWN_DOOR_1E, MODEL_HMC_METAL_DOOR, MODEL_CASTLE_DOOR_0_STARS, MODEL_UNKNOWN_DOOR_2A, MODEL_CASTLE_STAR_DOOR_8_STARS, MODEL_CASTLE_STAR_DOOR_70_STARS, MODEL_UNKNOWN_DOOR_21, MODEL_CASTLE_DOOR_1_STAR, MODEL_CASTLE_DOOR_3_STARS, MODEL_CASTLE_KEY_DOOR, MODEL_CASTLE_CASTLE_DOOR, MODEL_CASTLE_CASTLE_DOOR_UNUSED, MODEL_HMC_HAZY_MAZE_DOOR, MODEL_CASTLE_WOODEN_DOOR, MODEL_COURTYARD_WOODEN_DOOR, MODEL_CCM_CABIN_DOOR, MODEL_UNKNOWN_DOOR_28, MODEL_CASTLE_METAL_DOOR, MODEL_UNKNOWN_DOOR_2B, MODEL_CASTLE_STAR_DOOR_30_STARS, MODEL_CASTLE_STAR_DOOR_50_STARS, MODEL_CASTLE_GROUNDS_CASTLE_DOOR, MODEL_CASTLE_GROUNDS_METAL_DOOR, MODEL_CASTLE_BOWSER_TRAP, MODEL_UNKNOWN_AC } from "../include/model_ids"

import { bhvTree, bhvStaticObject } from "./BehaviorData"
import { spawn_object_abs_with_rot } from "./ObjectHelpers"
import { oBehParams, RESPAWN_INFO_DONT_RESPAWN, oUnk1A8, oBehParams2ndByte, RESPAWN_INFO_TYPE_16 } from "../include/object_constants"
import { MacroObjectPresets } from "../include/macro_presets"
import { uint16, int16 } from "../utils"

const SPTYPE_NO_YROT_OR_PARAMS  = 0 // object is 8-bytes long, no y-rotation or any behavior params
const SPTYPE_YROT_NO_PARAMS     = 1 // object is 10-bytes long, has y-rotation but no params
const SPTYPE_PARAMS_AND_YROT    = 2 // object is 12-bytes long, has y-rotation and params
const SPTYPE_UNKNOWN            = 3 // object is 14-bytes long, has 3 extra shorts that get converted to floats.
const SPTYPE_DEF_PARAM_AND_YROT = 4 // object is 10-bytes long, has y-rotation and uses the default param

const SpecialObjectPresets = {}

//SpecialObjectPresets[special_haunted_door] = { type: SPTYPE_YROT_NO_PARAMS, defParam: 0, model: MODEL_BBH_HAUNTED_DOOR, behavior: bhvDoor },
/*
SpecialObjectPresets[special_castle_door] = { type: SPTYPE_YROT_NO_PARAMS, defParam: 0, model: MODEL_CASTLE_CASTLE_DOOR, behavior: bhvDoor },
//SPECIAL_OBJECT_WITH_YAW_AND_PARAM[special_wooden_door_unused] = { type: SPTYPE_YROT_NO_PARAMS, defParam: 0, defParam: 0, model: MODEL_CASTLE_WOODEN_DOOR_UNUSED, bhvDoor },
//SPECIAL_OBJECT_WITH_YAW_AND_PARAM[special_unknown_door_1E] = { type: SPTYPE_YROT_NO_PARAMS, defParam: 0, model: MODEL_UNKNOWN_DOOR_1E, bhvDoor },
SpecialObjectPresets[special_metal_door] = { type: SPTYPE_YROT_NO_PARAMS, defParam: 0, model: MODEL_HMC_METAL_DOOR, behavior: bhvDoor },
SpecialObjectPresets[special_hmc_door] = { type: SPTYPE_YROT_NO_PARAMS, defParam: 0, model: MODEL_HMC_HAZY_MAZE_DOOR, behavior: bhvDoor },
SpecialObjectPresets[special_unknown_door] = { type: SPTYPE_YROT_NO_PARAMS, defParam: 0, model: MODEL_UNKNOWN_DOOR_21, behavior: bhvDoor },
SpecialObjectPresets[special_haunted_door] = { type: SPTYPE_YROT_NO_PARAMS, defParam: 0, model: MODEL_BBH_HAUNTED_DOOR, behavior: bhvDoor },
SpecialObjectPresets[special_wooden_door] = { type: SPTYPE_YROT_NO_PARAMS, defParam: 0, model: MODEL_CASTLE_WOODEN_DOOR, behavior: bhvDoor },
SpecialObjectPresets[special_0stars_door] = { type: SPTYPE_DEF_PARAM_AND_YROT, model: MODEL_CASTLE_DOOR_0_STARS, behavior: bhvDoor },
SpecialObjectPresets[special_1star_door] = { type: SPTYPE_DEF_PARAM_AND_YROT, model: MODEL_CASTLE_DOOR_1_STAR, behavior: bhvDoor },
SpecialObjectPresets[special_3star_door] = { type: SPTYPE_DEF_PARAM_AND_YROT, model: MODEL_CASTLE_DOOR_3_STARS, behavior: bhvDoor },
SpecialObjectPresets[special_key_door] = { type: SPTYPE_DEF_PARAM_AND_YROT, model: MODEL_CASTLE_KEY_DOOR, behavior: bhvDoor },
SpecialObjectPresets[special_unknown_5] = { type: SPTYPE_NO_YROT_OR_PARAMS, defParam: 0, model: MODEL_UNKNOWN_AC, behavior: bhvCastleFloorTrap },
SpecialObjectPresets[special_wooden_door_warp] = { type: SPTYPE_PARAMS_AND_YROT, model: MODEL_CASTLE_WOODEN_DOOR }, // bhvDoorWarp },
SpecialObjectPresets[special_castle_door_warp] = { type: SPTYPE_PARAMS_AND_YROT, model: MODEL_CASTLE_CASTLE_DOOR }, // bhvDoorWarp },
//SpecialPresets[special = { type: SPTYPE_PARAMS_AND_YROT, MODEL_UNKNOWN_DOOR_28, bhvDoorWarp },
SpecialObjectPresets[special_metal_door_warp] = { type: SPTYPE_PARAMS_AND_YROT, model: MODEL_CASTLE_METAL_DOOR } // bhvDoorWarp },
//SpecialPresets[special = { type: SPTYPE_PARAMS_AND_YROT, MODEL_UNKNOWN_DOOR_2A, bhvDoorWarp },
//SpecialPresets[special = { type: SPTYPE_PARAMS_AND_YROT, MODEL_UNKNOWN_DOOR_2B, bhvDoorWarp }

// Should probably not add the unused models. 
*/

SpecialObjectPresets[special_bubble_tree] = { type: SPTYPE_NO_YROT_OR_PARAMS, defParam: 0, model: MODEL_BOB_BUBBLY_TREE, behavior: bhvTree }
SpecialObjectPresets[special_snow_tree] = { type: SPTYPE_NO_YROT_OR_PARAMS, defParam: 0, model: MODEL_CCM_SNOW_TREE, behavior: bhvTree }
SpecialObjectPresets[special_level_geo_03] = { type: SPTYPE_YROT_NO_PARAMS, defParam: 0, model: MODEL_LEVEL_GEOMETRY_03, behavior: bhvStaticObject }
SpecialObjectPresets[special_level_geo_04] = { type: SPTYPE_YROT_NO_PARAMS, defParam: 0, model: MODEL_LEVEL_GEOMETRY_04, behavior: bhvStaticObject }
SpecialObjectPresets[special_level_geo_05] = { type: SPTYPE_YROT_NO_PARAMS, defParam: 0, model: MODEL_LEVEL_GEOMETRY_05, behavior: bhvStaticObject }
SpecialObjectPresets[special_level_geo_06] = { type: SPTYPE_YROT_NO_PARAMS, defParam: 0, model: MODEL_LEVEL_GEOMETRY_06, behavior: bhvStaticObject }
SpecialObjectPresets[special_level_geo_07] = { type: SPTYPE_YROT_NO_PARAMS, defParam: 0, model: MODEL_LEVEL_GEOMETRY_07, behavior: bhvStaticObject }
SpecialObjectPresets[special_level_geo_08] = { type: SPTYPE_YROT_NO_PARAMS, defParam: 0, model: MODEL_LEVEL_GEOMETRY_08, behavior: bhvStaticObject }
SpecialObjectPresets[special_level_geo_09] = { type: SPTYPE_YROT_NO_PARAMS, defParam: 0, model: MODEL_LEVEL_GEOMETRY_09, behavior: bhvStaticObject }
SpecialObjectPresets[special_level_geo_0A] = { type: SPTYPE_YROT_NO_PARAMS, defParam: 0, model: MODEL_LEVEL_GEOMETRY_0A, behavior: bhvStaticObject }
SpecialObjectPresets[special_level_geo_0B] = { type: SPTYPE_YROT_NO_PARAMS, defParam: 0, model: MODEL_LEVEL_GEOMETRY_0B, behavior: bhvStaticObject }
SpecialObjectPresets[special_level_geo_0C] = { type: SPTYPE_YROT_NO_PARAMS, defParam: 0, model: MODEL_LEVEL_GEOMETRY_0C, behavior: bhvStaticObject }
SpecialObjectPresets[special_level_geo_0D] = { type: SPTYPE_YROT_NO_PARAMS, defParam: 0, model: MODEL_LEVEL_GEOMETRY_0D, behavior: bhvStaticObject }
SpecialObjectPresets[special_level_geo_0E] = { type: SPTYPE_YROT_NO_PARAMS, defParam: 0, model: MODEL_LEVEL_GEOMETRY_0E, behavior: bhvStaticObject }
SpecialObjectPresets[special_level_geo_0F] = { type: SPTYPE_YROT_NO_PARAMS, defParam: 0, model: MODEL_LEVEL_GEOMETRY_0F, behavior: bhvStaticObject }
SpecialObjectPresets[special_level_geo_10] = { type: SPTYPE_YROT_NO_PARAMS, defParam: 0, model: MODEL_LEVEL_GEOMETRY_10, behavior: bhvStaticObject }
SpecialObjectPresets[special_level_geo_11] = { type: SPTYPE_YROT_NO_PARAMS, defParam: 0, model: MODEL_LEVEL_GEOMETRY_11, behavior: bhvStaticObject }
SpecialObjectPresets[special_level_geo_12] = { type: SPTYPE_YROT_NO_PARAMS, defParam: 0, model: MODEL_LEVEL_GEOMETRY_12, behavior: bhvStaticObject }
SpecialObjectPresets[special_level_geo_13] = { type: SPTYPE_YROT_NO_PARAMS, defParam: 0, model: MODEL_LEVEL_GEOMETRY_13, behavior: bhvStaticObject }
SpecialObjectPresets[special_level_geo_14] = { type: SPTYPE_YROT_NO_PARAMS, defParam: 0, model: MODEL_LEVEL_GEOMETRY_14, behavior: bhvStaticObject }
SpecialObjectPresets[special_level_geo_15] = { type: SPTYPE_YROT_NO_PARAMS, defParam: 0, model: MODEL_LEVEL_GEOMETRY_15, behavior: bhvStaticObject }
SpecialObjectPresets[special_level_geo_16] = { type: SPTYPE_YROT_NO_PARAMS, defParam: 0, model: MODEL_LEVEL_GEOMETRY_16, behavior: bhvStaticObject }


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

export const spawn_macro_abs_special = (model, behavior, x, y, z) => {

spawn_object_abs_with_rot(ObjectListProc.gMacroObjectDefaultParent, 0, model, behavior, x, y, z, 0, 0, 0)
}

export const spawn_macro_abs_yrot_param1 = (model, behavior, x, y, z, param) => {
    if (behavior) {
        const newObj = spawn_object_abs_with_rot(ObjectListProc.gMacroObjectDefaultParent, 0, model, behavior, x, y, z, 0, convert_rotation)
        newObj.rawData[oBehParams] = param << 24
    }
}


export const spawn_special_objects = (areaIndex, specialObjList, dataIndex) => {
    const numOfSpecialObjects = specialObjList[dataIndex++]

    ObjectListProc.gMacroObjectDefaultParent = { header: { gfx: { unk18: areaIndex, unk19: areaIndex } } }

    for (let i = 0; i < numOfSpecialObjects; i++) {
        const presetID = specialObjList[dataIndex++]
        const x = specialObjList[dataIndex++]
        const y = specialObjList[dataIndex++]
        const z = specialObjList[dataIndex++]

        const { model, behavior, type, defParam } = SpecialObjectPresets[presetID]

        switch (type) {
            case SPTYPE_NO_YROT_OR_PARAMS:
                spawn_macro_abs_yrot_2params(model, behavior, x, y, z, 0, 0)
                break
            case SPTYPE_YROT_NO_PARAMS:
                const yaw = specialObjList[dataIndex++]
                spawn_macro_abs_yrot_2params(model, behavior, x, y, z, yaw, 0)
                break
            /*case SPTYPE_PARAMS_AND_YROT:
                spawn_macro_abs_yrot_2params(model, behavior, x, y, z )
                break
            case SPTYPE_DEF_PARAM_AND_YROT:
                spawn_macro_abs_yrot_param1(model, behavior, x, y, z )
                break
                */
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
