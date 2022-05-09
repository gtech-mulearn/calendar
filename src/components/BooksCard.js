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
  },
  media: {
    height: 0,
    paddingTop: "100%", // 1:1
  },
  outfit: {
    fontFamily: "Outfit",
    backgroundColor: "#F68128",
    color: "#FFFFFF",
    padding: 8,
    fontSize: "1.55rem",
    borderRadius: 3,
  },
  description: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "0.9rem",
  },
  date: {
    backgroundColor: "#23C4ED",
    color: "#FFFFFF",
    padding: 3,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 3,
  },
  mode: {
	  marginTop: 25
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
                title="card image"
              />
              <CardContent className={classes.cardcontent}>
                <Typography className={classes.outfit} gutterBottom>
                  {Name}
                </Typography>

                <Typography gutterBottom className={classes.date}>
                  Happening On :{Date}
                </Typography>
                
                <Typography
                  paragraph
                  variant="body3"
                  component="p"
                  align="center"
                  className={classes.mode}
                >
                  It's Happening {Mode}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                  And It's a {Type}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardContent >
              <Typography paragraph className={classes.description}>
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
