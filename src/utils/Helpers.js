export const validate = values => {
    const errors = {};
    const requiredFields = [];//['what', 'email', 'whenH', 'whenD'];
    requiredFields.forEach(field => {
        if (!values[ field ]) {
            errors[ field ] = 'error.field_required';
        }
    });
    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'error.invalid_email';
    }
    if (values.what && /([<>\/\\])/i.test(values.what)) {
        errors.what = 'error.what_contains_xss';
    }
    return errors
};