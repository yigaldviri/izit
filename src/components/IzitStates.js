
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
            DONE: "DONE",
            NOT_DONE: "NOT_DONE"
        }
    );


const getTimeLeft = (endTime) => {
    return endTime - Date.parse(new Date());
};

const toDate = time => {
    let seconds = Math.floor(Math.abs((time / 1000) % 60));
    let minutes = Math.floor(Math.abs((time / 1000 / 60) % 60));
    let hours = Math.floor(Math.abs((time / (1000 * 60 * 60)) % 24));
    let days = Math.floor(Math.abs(time / (1000 * 60 * 60 * 24)));
    return {
        total: time,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
};

export const getInterval = (from, to) => {
    return toDate(to - from);
};

export const getTimeRemaining = endTime => {
    return toDate(getTimeLeft(endTime));
};

const checkIfOverTime = (endTime) => {
    return getTimeLeft(endTime) < 0;
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
