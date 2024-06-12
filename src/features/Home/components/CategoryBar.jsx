import { colors, Grid, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useCategoryBar } from "./hooks/useCategoryBar.js";
import PropTypes from "prop-types";

export const CategoryBar = ({ categories, category, handleCategory }) => {
  const { activeButtonStyles } = useCategoryBar();
  return (
    <>
      <Grid container my={1}>
        <ToggleButtonGroup
          sx={{ justifyContent: "flex-start" }}
          value={category}
          exclusive
          onChange={handleCategory}
          aria-label="categories"
        >
          {/*#fe5e7f*/}
          {categories &&
            categories.map((category, index) => (
              <Grid item pr={3} key={index}>
                <ToggleButton
                  style={{
                    border: "solid 1px #fe5e7f",
                    borderRadius: "10px",
                  }}
                  value={category}
                  aria-label={category}
                  sx={{
                    width: "80px",
                    color: "primary.main",
                    bgcolor: "primary.50",
                    "&:hover": {
                      color: colors.pink[50],
                      backgroundColor: "primary.main",
                    },
                    "&.Mui-selected": activeButtonStyles,
                  }}
                >
                  {category}
                </ToggleButton>
              </Grid>
            ))}
        </ToggleButtonGroup>
      </Grid>
    </>
  );
};

CategoryBar.propTypes = {
  categories: PropTypes.array,
  category: PropTypes.string,
  handleCategory: PropTypes.func,
};
