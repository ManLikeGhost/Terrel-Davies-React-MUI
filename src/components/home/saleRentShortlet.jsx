import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import MarbleBackground from "../../img/MarbleBackground.png";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: " 0 200px",
    height: "100vh",
    backgroundImage: `url(${MarbleBackground})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  title: {
    textAlign: "left",
    color: theme.palette.secondary.main,
    fontWeight: "bold",
    fontSize: 25,
  },
  unorderedList: {
    textAlign: "left",

    color: theme.palette.primary.main,
  },
}));

const SaleRentShortlet = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* For rent */}
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={4}>
          <Typography className={classes.title}>For Sale by Town</Typography>
          <div className={classes.unorderedList}>
            <List
              component="nav"
              dense="true"
              aria-label="secondary mailbox folders"
            >
              <ListItem button>
                <ListItemText primary="Lekki (1250)" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Ajah (580)" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Ikoyi (404)" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Ikeja (685)" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Victoria Island (900)" />
              </ListItem>
            </List>
          </div>
        </Grid>
        <Grid item xs={4}>
          <Typography className={classes.title}>For Rent by Town</Typography>
          <div className={classes.unorderedList}>
            <List
              component="nav"
              dense="true"
              aria-label="for rent sale shortlet"
            >
              <ListItem button>
                <ListItemText primary="Lekki (1250)" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Ajah (580)" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Ikoyi (404)" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Ikeja (685)" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Victoria Island (900)" />
              </ListItem>
            </List>
          </div>
        </Grid>
        <Grid item xs={4}>
          <Typography className={classes.title}>Shortlet by Town</Typography>
          <div className={classes.unorderedList}>
            <List
              component="nav"
              dense="true"
              aria-label="for rent sale shortlet"
            >
              <ListItem button>
                <ListItemText primary="Lekki (1250)" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Ajah (580)" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Ikoyi (404)" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Ikeja (685)" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Victoria Island (900)" />
              </ListItem>
            </List>
          </div>
        </Grid>
      </Grid>
      {/* For Sale */}
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={4}>
          <Typography className={classes.title}>For Sale by Surburb</Typography>
          <div className={classes.unorderedList}>
            <List
              component="nav"
              dense="true"
              aria-label="for rent sale shortlet"
            >
              <ListItem button>
                <ListItemText primary="Lekki (1250)" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Ajah (580)" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Ikoyi (404)" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Ikeja (685)" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Victoria Island (900)" />
              </ListItem>
            </List>
          </div>
        </Grid>
        <Grid item xs={4}>
          <Typography className={classes.title}>For Rent by Surburb</Typography>
          <div className={classes.unorderedList}>
            <List
              component="nav"
              dense="true"
              aria-label="for rent sale shortlet"
            >
              <ListItem button>
                <ListItemText primary="Lekki (1250)" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Ajah (580)" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Ikoyi (404)" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Ikeja (685)" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Victoria Island (900)" />
              </ListItem>
            </List>
          </div>
        </Grid>
        <Grid item xs={4}>
          <Typography className={classes.title}>Shortlet by Surburb</Typography>
          <div className={classes.unorderedList}>
            <List
              component="nav"
              dense="true"
              aria-label="secondary mailbox folders"
            >
              <ListItem button>
                <ListItemText primary="Lekki (1250)" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Ajah (580)" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Ikoyi (404)" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Ikeja (685)" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Victoria Island (900)" />
              </ListItem>
            </List>
          </div>
        </Grid>
      </Grid>
      {/* By Catergory*/}
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={4}>
          <Typography className={classes.title}>
            For Sale by Category
          </Typography>
          <div className={classes.unorderedList}>
            <List
              component="nav"
              dense="true"
              aria-label="secondary mailbox folders"
            >
              <ListItem button>
                <ListItemText primary="Lekki (1250)" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Ajah (580)" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Ikoyi (404)" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Ikeja (685)" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Victoria Island (900)" />
              </ListItem>
            </List>
          </div>
        </Grid>
        <Grid item xs={4}>
          <Typography className={classes.title}>
            For Rent by Category
          </Typography>
          <div className={classes.unorderedList}>
            <List
              component="nav"
              dense="true"
              aria-label="secondary mailbox folders"
            >
              <ListItem button>
                <ListItemText primary="Lekki (1250)" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Ajah (580)" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Ikoyi (404)" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Ikeja (685)" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Victoria Island (900)" />
              </ListItem>
            </List>
          </div>
        </Grid>
        <Grid item xs={4}>
          <Typography className={classes.title}>
            Shortlet by Category
          </Typography>
          <div className={classes.unorderedList}>
            <List
              component="nav"
              dense="true"
              aria-label="secondary mailbox folders"
            >
              <ListItem button>
                <ListItemText primary="Lekki (1250)" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Ajah (580)" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Ikoyi (404)" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Ikeja (685)" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Victoria Island (900)" />
              </ListItem>
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default SaleRentShortlet;
