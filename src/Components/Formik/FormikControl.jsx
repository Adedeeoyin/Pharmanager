import React from 'react'
import FormikInput, { FormikChecked } from './FormikInput'
import FormikSelect from './FormikSelect';
import FormikTextArea from './FormikTextArea';

const FormikControl = ({control, ...rest}) => {
    switch(control){
        case'input':return <FormikInput {...rest} />;
        case 'textarea':return <FormikTextArea {...rest}/>;
        case 'select':return <FormikSelect {...rest} />;
        case 'checkbox':return <FormikChecked {...rest} />;
        default: return null;
    }
  
}

export default FormikControl