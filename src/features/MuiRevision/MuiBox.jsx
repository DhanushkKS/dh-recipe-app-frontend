import { Box, Divider, Grid, Paper, Stack } from "@mui/material";

export const MuiBox = () => {
  return (
    <Paper sx={{ padding: "32px" }} elevation={8}>
      <Stack
        sx={{ border: "1px solid red" }}
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
          sx={{
            backgroundColor: "primary.main",
            width: "200px",
            height: "100px",
            padding: "10px",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        >
          Container
        </Box>
        <Box width={"100px"} height={"100px"} bgcolor="info.main" m={1}>
          xx
        </Box>
      </Stack>
      <Grid container my={4}>
        <Grid item xs={3}>
          <Box bgcolor={"primary.light"} p={2}>
            Item{" "}
          </Box>
        </Grid>
        <Grid item xs={9}>
          <Box bgcolor={"primary.light"} p={2}>
            Item{" "}
          </Box>
        </Grid>
        <Grid item xs={9}>
          <Box bgcolor={"primary.light"} p={2}>
            Item{" "}
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box bgcolor={"primary.light"} p={2}>
            Item{" "}
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};
