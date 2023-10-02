import JustValidate from 'just-validate';
import JustValidatePluginDate from 'just-validate-plugin-date';
import dict from './dictionary.js';


function createFormValidation(form, createCourse) {
    const options = {
        tooltip: {
            position: 'left',
        }
    }
    const validator = new JustValidate(form, options, dict);

    validator.addField('[name="course-name"]', [
        {
            rule: 'required',
            errorMessage: 'Is required',
        },
        {
            rule: 'minLength',
            value: 2,
            errorMessage: "The field must contain a minimum of 2 characters"
        },
        {
            rule: 'maxLength',
            value: 20,
        },
        {
            rule: 'customRegexp',
            value: /[a-z]/gi,
        },
    ]).addField('[name="duration"]', [
        {
            rule: 'required',
        },
        {
            rule: 'number',
        },
    ]).addField('[name="start-date"]', [
        {
            rule: 'required',
            errorMessage: 'Is required',
        },
        {
            plugin: JustValidatePluginDate(() => ({
                format: 'yyyy-MM-dd',
                //isBefore: 2023-09-12,
            })),
            errorMessage: 'Date should be in yyyy-MM-dd  format',
        },
    ]).addField('[name="speakers"]', [
        {
            rule: 'required',
            errorMessage: 'is required',

        }
    ]);

    validator.setCurrentLocale('uk');

    validator.onSuccess((event) => {
        if (typeof createCourse !== 'function') return;
        createCourse(new FormData(event.target))
    })
}

export default createFormValidation;


