export const CHECK_EATING = 'CHECK_EATING';
export const CHECK_CODING = 'CHECK_CODING';
export const CHECK_SLEEP = 'CHECK_SLEEP';

export const checkEating =() => {
    return {
        type : CHECK_EATING,
        payload : 'Eating has checked'
    }
};

export const checkCoding =() => {
    return {
        type : CHECK_CODING,
        payload : 'Coding has checked'
    }
};

export const checkSleeping =() => {
    return {
        type : CHECK_SLEEP,
        payload : 'Sleeping has checked'
    }
};