import { useState } from "react";

const useForm = (initialValues) => {
  const [formData, setFormData] = useState(initialValues);

  // 🟢 input change වෙද්දි call වෙන function
  const handleChange = (event) => {
    const { name, value } = event.target;

    // 📝 state update කරනවා
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData(initialValues);
  };

  return {
        formData,
        handleChange,
        resetForm,
  }
};

export default useForm;
