import { useFormik } from "formik";
import generateInputField from "../../../helpers/generateInputField.jsx";
import { useRegisterMutation } from "../../../redux/auth/api.js";
import { useLocalStorage } from "../../../hooks/useLocalStorage.js";
import { useEffect } from "react";

const useRequestFormik = () => {
  //
  const { setItem } = useLocalStorage("user");
  const [register, { error, data, isLoading, isSuccess, isError }] =
    useRegisterMutation();
  const registerOnSubmit = async (values) => {
    await register({
      user: { telephone: values.phoneNumber, ...values },
    }).unwrap();
  };
  useEffect(() => {
    if (data?.token) {
      // console.log("response", data);
      // window.localStorage.setItem("user", JSON.stringify(data));
      setItem("user", data);
    }
    if (isError) {
      console.log(error);
    }
  }, [setItem, data, error, isError]);

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
    onSubmit: async (values) => {
      const password = values["password"];
      const { confirmPassword, ...rest } = values;
      if (password !== confirmPassword) {
        console.error("Passwords don't match");
        return;
      }
      try {
        console.log("onSubmit", rest);
        await registerOnSubmit(rest);
      } catch (error) {
        console.log("Failed to register user", error);
      }
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
