import React from "react";
//Router

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import history from "./history";
import AuthRoute from "./util/AuthRoute";
import { ACCESS_TOKEN_NAME } from "./constants/apiConstants";

import HomePage from "./pages/HomePage.jsx";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import UpgradeSubscriptionPage from "./pages/UpgradeSubscriptionPage";
import NewUpgradePage from "./pages/NewUpgrade";
import PaymentPage from "./pages/PaymentPage";
import PostPropertyRequestPage from "./pages/PostPropertyRequestPage";
import AddListingPage from "./pages/AddListingPage";

import ProfileSettings from "./pages/ProfileSettings";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import AboutPage from "./pages/AboutPage";
import FlatsPropertyDisplay from "./pages/FlatsPropertyDisplay";
import CommercialProjectsDisplay from "./pages/CommercialProjectsDisplay";
import HousesPropertyDisplay from "./pages/HousesPropertyDisplay";
import LandPropertyDisplay from "./pages/LandPropertyDisplay";
import BlogPage from "./pages/BlogPage";
import BlogPageArticle from "./pages/BlogPageArticle";
import ContactUsPage from "./pages/ContactUsPage";

import Page404 from "./pages/Page404";
import ProfileImage from "./pages/ProfileImage";
import SubscriptionPlans from "./pages/SubscriptionPlans";

const useStyles = makeStyles((theme) => ({
    "@global": {
        body: {
            backgroundColor: theme.palette.common.white,
            maxWidth: "1980px",
        },
    },
    // paperContainer: {
    //   height: "100vh",
    //   backgroundImage: `url(${MarbleBackground})`,
    // },
}));

let authenticated;
let currentUser = localStorage.getItem(ACCESS_TOKEN_NAME);
currentUser ? (authenticated = true) : (authenticated = false);

function App() {
    const classes = useStyles();
    return ( < div className = { classes.paperContainer } >
            <
            CssBaseline / >
            <
            Router history = { history } >
            <
            Switch >
            <
            Route exact path = "/contact-us" >
            <
            ContactUsPage / >
            <
            /Route> <
            Route exact path = "/blog-page" >
            <
            BlogPage / >
            <
            /Route> <
            Route exact path = "/blog-page-article" >
            <
            BlogPageArticle / >
            <
            /Route> <
            Route exact path = "/flats-property-display" >
            <
            FlatsPropertyDisplay / >
            <
            /Route> <
            Route exact path = "/houses-property-display" >
            <
            HousesPropertyDisplay / >
            <
            /Route> <
            Route exact path = "/land-property-display" >
            <
            LandPropertyDisplay / >
            <
            /Route> <
            Route exact path = "/commercial-projects-display" >
            <
            CommercialProjectsDisplay / >
            <
            /Route> <
            Route exact path = "/about" >
            <
            AboutPage / >
            <
            /Route> <
            AuthRoute exact path = "/signin"
            component = { SignInPage }
            authenticated = { authenticated }
            /> <
            AuthRoute exact path = "/signup"
            component = { SignUpPage }
            authenticated = { authenticated }
            /> {
            /* <Route exact path="/signup">
                                    <SignUpPage />
                                  </Route> */
        } <
        Route path = "/profile-settings" >
        <
        ProfileSettings / >
        <
        /Route> <
    Route path = "/profile-image" >
        <
        ProfileImage / >
        <
        /Route> <
    Route path = "/subscription-plans" >
        <
        SubscriptionPlans / >
        <
        /Route> <
    Route path = "/upgrade-subscription" >
        <
        UpgradeSubscriptionPage / >
        <
        /Route> <
    Route path = "/new-upgrade" >
        <
        NewUpgradePage / >
        <
        /Route> <
    Route path = "/payment" >
        <
        PaymentPage / >
        <
        /Route> <
    Route path = "/post-property-request" >
        <
        PostPropertyRequestPage / >
        <
        /Route> <
    Route path = "/add-listing" >
        <
        AddListingPage / >
        <
        /Route> <
    Route exact path = "/" >
        <
        HomePage / >
        <
        /Route> <
    Route component = { Page404 }
    /> < /
    Switch > <
        /Router> < /
    div >
);
}

export default App;