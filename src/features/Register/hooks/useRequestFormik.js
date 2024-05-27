import { useFormik } from "formik";
import generateInputField from "../../../helpers/generateInputField.jsx";

const useRequestFormik = () => {
  //
  const formik = useFormik({
    initialValues: {
      //
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      console.log("onSubmit", values);
    },
  });
  const renderFields = (field) => {
    return generateInputField(field, formik);
  };

  const { handleSubmit, handleChange } = formik;
  return {
    renderFields,
    handleSubmit,
    handleChange,
  };
};
export default useRequestFormik;
