import { PrimaryDetailsContainer } from "../../../components/Forms/PrimaryDetailsContainer.jsx";
import { Grid } from "@mui/material";
import { loginFormDetails } from "../common/formDetails.js";
import useRequestFormik from "../hooks/useRequestFormik.js";
import PropTypes from "prop-types";

const Form = ({ columns, isLogin, title, width, fullWidth }) => {
  const { renderFields, handleSubmit, isLoading } = useRequestFormik();
  return (
    <>
      <PrimaryDetailsContainer
        title={title}
        width={width}
        isLogin={isLogin}
        columns={columns}
        onSubmit={handleSubmit}
        fullWidth={fullWidth}
        isLoading={isLoading}
      >
        <Grid container spacing={2}>
          {loginFormDetails.map(({ xs, sm, md, ...item }) => (
            <Grid item key={item.key} xs={xs} sm={sm} md={md}>
              {/*    renderFields(item)*/}
              {renderFields(item)}
            </Grid>
          ))}
        </Grid>
      </PrimaryDetailsContainer>
    </>
  );
};
export default Form;
Form.propTypes = {
  width: PropTypes.any,
  title: PropTypes.string,
  columns: PropTypes.number,
  isLogin: PropTypes.bool,
  fullWidth: PropTypes.bool,
};
