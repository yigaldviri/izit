
const asyncValidate = (values/*, dispatch */) => {
    return new Promise(resolve => {
        if ([ 'foo@foo.com', 'bar@bar.com' ].includes(values.email)) {
            throw { email: 'Email already Exists' }
        }
        resolve();
    });
};

export default asyncValidate;