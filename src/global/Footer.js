import React from 'react';
import MuiLink from '@material-ui/core/Link';
import MuiBox from '@material-ui/core/Box';
import MuiTypography from '@material-ui/core/Typography';
import MuiContainer from '@material-ui/core/Container';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    footer: {
        margin: theme.spacing(0, 0, 3),
        alignItems: 'center',
        justifyContent: 'space-evenly',
        display: 'flex',
        flexDirection: 'column',
        // backgroundColor: '#2d3436',
        // backgroundImage: 'linear-gradient(315deg, #2d3436 0%, #000000 74%)', monochrome black
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        minHeight: '15em',
        marginBottom: '0',
    },
    brand: {
        color: '#ffffff',
    },
    icons: {
        display: 'flex',
        justifyContent: 'center',
        color: 'primary',
    },
    copyright: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'right',
        color: '#ffffff',
    }
}));
export default function Footer() {
    const classes = useStyles();
    return (
        <MuiContainer className={classes.footer} maxWidth="xl">
            <MuiTypography className={classes.brand} variant="h2">
                the teAmo project
            </MuiTypography>
            <MuiContainer className={classes.icons} align="center">
                <MuiLink href="https://instagram.com/kaiserohan" >
                    <InstagramIcon />
                </MuiLink>
                <MuiBox px={"1em"}></MuiBox>
                <MuiLink href="https://twitter.com/108krohan">
                    <TwitterIcon />
                </MuiLink>
                <MuiBox px={"1em"}></MuiBox>
                <MuiLink href="https://www.linkedin.com/in/rohan-kumarr/">
                    <LinkedInIcon />
                </MuiLink>
                <MuiBox px={"1em"}></MuiBox>
                <MuiLink href="https://github.com/108krohan/">
                    <GitHubIcon />
                </MuiLink>
                <MuiBox px={"1em"}></MuiBox>
            </MuiContainer>
            <Copyright/>
        </MuiContainer>
    );
}
export function Copyright() {
    const classes = useStyles();
    return (
        <MuiContainer className={classes.copyright}>
            <MuiTypography >
                {'copyright © '}
                <MuiLink color="inherit" href="https://www.toomuchof.me/rohan">
                    rohan
                </MuiLink>{' '}
                {new Date().getFullYear()}
            </MuiTypography>
            <MuiTypography className={classes.copyright}>
                baaten zarori: my words are my own, and in no way reflect the views of my employer.
            </MuiTypography>
        </MuiContainer>
    );
}
