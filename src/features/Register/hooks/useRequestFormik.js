import { useFormik } from "formik";
import generateInputField from "../../../helpers/generateInputField.jsx";
import { useRegisterMutation } from "../../../redux/auth/api.js";

const useRequestFormik = () => {
  //
  const [register, { error }] = useRegisterMutation();
  const registerOnSubmit = (values) => {
    register({ user: { telephone: values.phoneNumber, ...values } });
  };
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
      const password = values["password"];
      const { confirmPassword, ...rest } = values;
      if (password !== confirmPassword) {
        console.log("Passwords don't match");
      }
      console.log("onSubmit", rest);
      //const telephone = phoneNumber;
      registerOnSubmit(rest);
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
