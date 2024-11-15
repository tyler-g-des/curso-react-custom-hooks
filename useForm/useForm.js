import { useState } from "react";


export const useForm = (initialForm) => {

    const [formState, setFormState] = useState(initialForm);
    
     //const {username, email, password} = formState;
    
      const onInputChanges = ({target}) => {       
       const {name, value} = target;
    
       setFormState({
         ...formState,
         [ name ]: value
       });
     }

    const onResetForm = (valueReset) => {
       setFormState(initialForm)
    } 


  return {
    ...formState,
    onInputChanges,
    onResetForm
  }
}
