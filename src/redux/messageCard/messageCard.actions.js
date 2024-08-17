import { GOOD_AFTERNOON, GOOD_EVENING, GOOD_MORNING } from "./messageCard.actionTypes";


export let sayGoodMorning = () => {
    return {
        type : GOOD_MORNING,
        payload : 'Good Morning'
    }
};

export let sayGoodAfternoon = () => {
    return {
        type : GOOD_AFTERNOON,
        payload : 'Good Afternoon'
    }
};

export let sayGoodEvening = () => {
    return {
        type : GOOD_EVENING,
        payload : 'Good Evening'
    }
};