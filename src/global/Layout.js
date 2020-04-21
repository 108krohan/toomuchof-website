import React from 'react';
import MuiBox from '@material-ui/core/Box';
import MuiContainer from '@material-ui/core/Container';
import Header from './Header';
import Footer from './Footer';
import {makeStyles} from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    main: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        minHeight: '100vh',
        margin: theme.spacing(0, 0),
        backgroundImage: 'url(./img-bg-about-rohan.JPG)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    content: {
        display: 'flex',
        flexGrow: 1,
        alignItems: 'flex-start',
        padding: 0,
        height: '100%',
        width: '100%',
    },
}));
export default function Layout(props) {
    const classes = useStyles();
    return (
        <MuiBox m={0}>
            <MuiBox className={classes.main}>
                <Header />
                <MuiContainer className={classes.content}>
                    {props.children}
                </MuiContainer>
            </MuiBox>
            <Footer/>
        </MuiBox>
    );
}
