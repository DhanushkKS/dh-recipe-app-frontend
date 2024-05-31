import { useFormik } from "formik";
import generateInputField from "../../../helpers/generateInputField.jsx";
import { useSignInMutation } from "../../../redux/auth/api.js";
import { useEffect } from "react";
import { useLocalStorage } from "../../../hooks/useLocalStorage.js";

const useRequestFormik = () => {
  const { setItem } = useLocalStorage();
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
    signIn({ ...values });
  };
  useEffect(() => {
    if (signInData?.token) {
      setItem("user", signInData);
    }
    if (signInIsError) {
      console.log(signInError);
    }
  }, [setItem, signInData, signInIsError, signInError]);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      onLoginSubmit(values);
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
