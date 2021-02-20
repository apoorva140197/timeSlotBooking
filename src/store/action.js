import CONSTANTS from "./constant";

export const timeSlotAction = payload => {
    return{
    type: CONSTANTS.TIME_SLOT,
    payload
    }
};

