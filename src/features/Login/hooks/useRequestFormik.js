import { useFormik } from "formik";
import generateInputField from "../../../helpers/generateInputField.jsx";
import { useSignInMutation } from "../../../redux/auth/api.js";

const useRequestFormik = () => {
  const [
    signIn,
    {
      isError: signInIsError,
      error: signInError,
      isSuccess: signInIsSuccess,
      data: signInData,
    },
  ] = useSignInMutation();
  const onLoginSubmit = (values) => {
    console.log("actual", values);
    signIn({ ...values });
  };
  const formik = useFormik({
    initialValues: {
      //
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      onLoginSubmit(values);
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
