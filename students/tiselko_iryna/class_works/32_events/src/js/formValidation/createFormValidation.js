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
    console.log(form);
    validator.addField('[name="course-name"]', [
        {
            rule: 'required',
        },
        {
            rule: 'minLength',
            value: 3,
        },
        {
            rule: 'maxLength',
            value: 15,
        },
        {
            rule: 'customRegexp',
            value: /[a-z]/gi,
            errorMessage: 'Is required',
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
            errorMessage: 'Date should be in dd MMM yyyy format',
        }
    ]);
    validator.setCurrentLocale('uk');

    validator.onSuccess((event) => {
        createCourse(new FormData(event.target))
    })
}

export default createFormValidation;


