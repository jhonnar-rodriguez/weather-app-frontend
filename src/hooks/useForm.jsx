import { useState } from 'react';

const useForm = (initialState = {}) => {

  const [formState, setFormState] = useState(initialState);

  const handleInputChange = (event) => {
    const { target } = event;

    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return [
    formState,
    handleInputChange,
  ];
};

export default useForm;
