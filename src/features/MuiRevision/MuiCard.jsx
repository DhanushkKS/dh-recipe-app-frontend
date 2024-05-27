import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import CardActions from "@mui/material/CardActions";

export const MuiCard = () => {
  return (
    <>
      <Box width="300px">
        <Card>
          <CardMedia
            component={"img"}
            height="140px"
            image={"https://source.unsplash.com/random"}
            alt={"unsplash image"}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              React
            </Typography>
            <Typography variant="body2" color="text.secondary">
              lorem ipsum dolor sit amet, consetetur, lorem ipsum dolor sit
              amet, consetetur, lorem ipsum dolor sit amet, consetetur
            </Typography>
          </CardContent>
          <CardActions>
            <Button>Share</Button>
            <Button>Learn More</Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
};
