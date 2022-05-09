import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 20,
  },
  gutterTopAndBottom: {
    margin: 20,
  },
  card: {
    maxWidth: 350,
    padding: 20,
  },
  media: {
    height: 400,
    maxWidth: 350,
  },
}));

function BooksCard({ Name, Type, Date, Description, Image, Mode }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid cotainer direction="row" align="center" justify="center">
        <Grid item xs={10}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={Image}
                title="React"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h1">
                  {Name}
                </Typography>
                <Typography
                  paragraph
                  variant="body3"
                  component="p"
                  align="right"
                >
                  {Mode}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {Type}
                </Typography>
                <Typography gutterBottom variant="h3" component="h2" />
                {Date}
              </CardContent>
            </CardActionArea>
            <CardContent>
              <Typography paragraph variant="body2" component="h6">
                {Description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
export default BooksCard;
