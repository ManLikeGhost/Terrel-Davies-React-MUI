import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import MarbleBackground from "../img/MarbleBackground.png";

import FooterLogo from "../img/Footer-Logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    // minHeight: "100vh",
    height: "70%",
  },
  main: {
    marginTop: "auto",
  },
  footer: {
    borderTop: `1px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
    marginTop: `calc(5% + 150px)`,
    bottom: 0,
    // height: "100vh",
    backgroundImage: `url(${MarbleBackground})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  logoContainer:{
    width: "150px",
    height: "150px",
    // margin: "0 auto",
  },
  footerLogo: {
    // width: "80%",
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain"
  },
  title: {
    // padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.secondary.main,
    fontWeight: "bold",
    fontSize: 25,
    // lineHeight: 55,
  },
  footerContactDetails:{
    margin: "0 auto",
    color: theme.palette.primary.main,
    marginTop: 50,
    marginLeft: 70,
  }
}));

const footers = [
  {
    title: "Properties",
    description: [
      "Property for Sale ",
      "Property for Rent",
      "Development Estate Agents",
    ],
  },
  {
    title: "Terrel Davies Enterprise",
    description: ["About Us", "Contact Us", "Add Listings", "Terms & Privacy"],
  },
];

const Footer = () => {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline/>
      <Container maxWidth="lg" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="center" alignItem="center">
          <Grid item xs={4}>
              <div className={classes.logoContainer}>
              <img src={FooterLogo} alt="" className={classes.footerLogo} />
              </div>
          
          </Grid>
          {footers.map((footer) => (
            <Grid item xs={8} sm={3} key={footer.title}>
              <Typography
                variant="h6"
                color="textPrimary"
                gutterBottom
                className={classes.title}
              >
                {footer.title}
              </Typography>
              <List
                component="nav"
                dense="true"
                aria-label="footer menu"
                key={footer.title}
                className={classes.text}
              >
                {footer.description.map((item) => (
                  <ListItem button>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
            </Grid>
          ))}
        </Grid>
        <Grid container className={classes.footerContactDetails}  justify="space-between" alignItem="center">
          <Grid item xs={4}>
            Office 3, First Floor, <br />
            Office Suite, 4 Sandpit Road, <br />
            Dartford, Kent DA1 5BU
          </Grid>
          <Grid item xs={4}>
            +01322 628780, <br />
            +013226 86765, <br />
            +2348121412045
          </Grid>
          <Grid item xs={4}>
            info@terrelldavies.co.uk
          </Grid>
        </Grid>
        <Box mt={5} textAlign="center">
          <Copyright />
        </Box>
      </Container>
      {/* End footer */}
    </div>
  );
};

const Copyright = () => {
  return (
   
        <Typography variant="body2" color="textSecondary">
          {new Date().getFullYear()} {"Copyright © "}
          <Link color="inherit" href="https://pbgdigital.co.uk">
            Terrell Davies Enterprise. All rights reserved.
          </Link>{" "}
        </Typography>
      
  );
};

export default Footer;
