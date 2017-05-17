
export const getTimeRemaining = endTime => {
    let t = getTimeLeft(endTime);
    let seconds = Math.abs(Math.floor((t / 1000) % 60));
    let minutes = Math.abs(Math.floor((t / 1000 / 60) % 60));
    let hours = Math.abs(Math.floor((t / (1000 * 60 * 60)) % 24));
    let days = Math.abs(Math.floor(t / (1000 * 60 * 60 * 24)));
    return {
        total: t,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
};

export const getTimerState = (endTime, status) => {
    let isOverTime = checkIfOverTime(endTime);

    if (IzitStatus.DONE === status) {
        return isOverTime ? IzitState.DONE_OVER_TIME : IzitState.DONE_IN_TIME
    }
    else { //null status (default) is not done but in time.
        return isOverTime ? IzitState.NOT_DONE_OVER_TIME : IzitState.NOT_DONE_IN_TIME;
    }
};

export const IzitState =
    Object.freeze({
        DONE_IN_TIME: 0,
        DONE_OVER_TIME: 1,
        NOT_DONE_IN_TIME: 2,
        NOT_DONE_OVER_TIME: 3
    }
);

export const IzitStatus =
    Object.freeze({
            DONE: 0,
            NOT_DONE: 1
    }
);

const checkIfOverTime = (endTime) => {
    return getTimeLeft(endTime) < 0;
};

const getTimeLeft = (endTime) => {
    return endTime - Date.parse(new Date());
};