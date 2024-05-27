import { useState } from "react";
import Form from "./components/Form.jsx";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setError(!error);
    console.log("Form submitted!");
  };

  return (
    <>
      <Form columns={6} title="Register" width={"50%"} />
    </>
  );
};
export default Register;
