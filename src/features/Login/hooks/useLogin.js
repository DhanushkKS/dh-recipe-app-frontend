import useRequestFormik from "./useRequestFormik.js";

const useLogin = () => {
  const { formik } = useRequestFormik(initialState);
  const initialState = {
    email: "",
    password: "",
  };
  return { initialState };
};
export default useLogin;
