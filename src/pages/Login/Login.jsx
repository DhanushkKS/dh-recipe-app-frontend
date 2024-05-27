import LoginFeature from "../../features/Login/index.jsx";
import { MainFormContainer } from "../../components/Forms/MainFormContainer.jsx";

export const LoginPage = () => {
  return (
    <>
      <MainFormContainer>
        <LoginFeature />
      </MainFormContainer>
    </>
  );
};
