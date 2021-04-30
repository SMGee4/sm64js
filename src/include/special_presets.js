import { MODEL_CASTLE_WOODEN_DOOR_UNUSED, MODEL_WOODEN_DOOR, MODEL_BBH_HAUNTED_DOOR, MODEL_HMC_WOODEN_DOOR, MODEL_UNKNOWN_DOOR_1E, MODEL_HMC_METAL_DOOR, MODEL_CASTLE_DOOR_0_STARS, MODEL_UNKNOWN_DOOR_2A, MODEL_CASTLE_STAR_DOOR_8_STARS, MODEL_CASTLE_STAR_DOOR_70_STARS, MODEL_UNKNOWN_DOOR_21, MODEL_CASTLE_DOOR_1_STAR, MODEL_CASTLE_DOOR_3_STARS, MODEL_CASTLE_KEY_DOOR, MODEL_CASTLE_CASTLE_DOOR, MODEL_CASTLE_CASTLE_DOOR_UNUSED, MODEL_HMC_HAZY_MAZE_DOOR, MODEL_CASTLE_WOODEN_DOOR, MODEL_COURTYARD_WOODEN_DOOR, MODEL_CCM_CABIN_DOOR, MODEL_UNKNOWN_DOOR_28, MODEL_CASTLE_METAL_DOOR, MODEL_UNKNOWN_DOOR_2B, MODEL_CASTLE_STAR_DOOR_30_STARS, MODEL_CASTLE_STAR_DOOR_50_STARS, MODEL_CASTLE_GROUNDS_CASTLE_DOOR, MODEL_CASTLE_GROUNDS_METAL_DOOR, MODEL_CASTLE_BOWSER_TRAP, MODEL_UNKNOWN_AC } from "../include/model_ids"
import { bhvDoor, bhvCastleFloorTrap } from "../game/BehaviorData"

export const SPECIAL_OBJECT_WITH_YAW_AND_PARAM = (preset, posX, posY, posZ, yaw, param) => {
    return [preset, posX, posY, posZ, yaw, param]
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


export const SpecialObjectPresets = new Array(680)

SpecialObjectPresets[special_castle_door] = { type: SPTYPE_YROT_NO_PARAMS, defParam: 0, model: MODEL_CASTLE_CASTLE_DOOR,  defParam: 0, behavior: bhvDoor },
//SPECIAL_OBJECT_WITH_YAW_AND_PARAM[special_wooden_door_unused] = { type: SPTYPE_YROT_NO_PARAMS, defParam: 0, defParam: 0, model: MODEL_CASTLE_WOODEN_DOOR_UNUSED, bhvDoor },
//SPECIAL_OBJECT_WITH_YAW_AND_PARAM[special_unknown_door_1E] = { type: SPTYPE_YROT_NO_PARAMS, defParam: 0, model: MODEL_UNKNOWN_DOOR_1E, bhvDoor },
SpecialObjectPresets[special_metal_door] = { type: SPTYPE_YROT_NO_PARAMS, defParam: 0, model: MODEL_HMC_METAL_DOOR, behavior: bhvDoor },
SpecialObjectPresets[special_hmc_door] = { type: SPTYPE_YROT_NO_PARAMS, model: MODEL_HMC_HAZY_MAZE_DOOR, behavior: bhvDoor },
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