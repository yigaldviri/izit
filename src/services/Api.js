import moment from 'moment';
import axios from 'axios';

//const BASE_URL = "http://192.168.1.21:8080";
const BASE_URL = "./";

let getFixedDate = function(whenH, whenD) {
    let momentTime = moment(whenH);
    let momentDate = moment(whenD);
    return moment({
        year: momentDate.year(),
        month: momentDate.month(),
        day: momentDate.date(),
        hour: momentTime.hours(),
        minute: momentTime.minutes()
    });
};

export const createIzit = inputs => {
    let appointmentMoment = getFixedDate(inputs.whenH, inputs.whenD);
    return axios.post(
        BASE_URL + "/isit", {
            what: inputs.what,
            when: appointmentMoment.valueOf(),
            youtube: inputs.youtube,
            email: inputs.email,
            link: inputs.link
        }
    );
};

export const getIzit = key => {
    let url = BASE_URL + "/isit?token=" + key;
    return axios.get(url);
};

export const getPreview = link => {
    let url = BASE_URL + "/linkData?link=" + link;
    return axios.get(url);
};

export const changeIzitStatus = (urlToken, key, status) => {
    let url = BASE_URL + "/isit?token=" + urlToken + "&key=" + key + "&status=" +status;
    return axios.put(url);
};