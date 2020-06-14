import React from 'react';
import MuiButton from '@material-ui/core/Button';
import MuiBox from '@material-ui/core/Box';
import MuiContainer from '@material-ui/core/Container';
import MuiPaper from '@material-ui/core/Paper';
import Link from '../src/Link';
import Layout from '../src/global/Layout';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MuiDivider from '@material-ui/core/Divider';
const useStyles = makeStyles((theme) => ({
    base: {
        margin: theme.spacing(6, 0, 6),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        flexGrow: 1,
    },
    intro: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
    paper: {
        padding: theme.spacing(2,2),
        margin: theme.spacing(3, 0),
        width: '38.19%',
        minWidth: '300px',
    },
    title: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    introText: {
        color: '#ffffff',
    },
    button: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    }
}));
export default function Rohan() {
    const classes = useStyles();
    return (
        <Layout>
            <MuiContainer className={classes.base}>
                <MuiPaper className={classes.paper}>
                    <MuiBox className={classes.title}>
                        <Typography className={classes.typography} variant="h4" color="primary">
                            toomuchof |
                        </Typography>
                        <MuiBox marginX=".5ch"></MuiBox>
                        <Typography className={classes.typography} variant="subtitle2">
                             rohan
                        </Typography>
                    </MuiBox>
                    <MuiBox m={2}>
                        <Typography className={classes.typography} variant="body1">
                            wuhu! great having u here, melon. :)
                        </Typography>
                        <Typography className={classes.typography} variant="body1">
                            ha! welcome to the lands of rohan!
                        </Typography>
                        <Typography className={classes.typography} variant="body1">
                            wait, that mean u a rohirrim? ;)
                        </Typography>
                        <Typography className={classes.typography} variant="body1">
                            mera middle earth india hai :)
                        </Typography>
                        <Typography className={classes.typography} variant="body1">
                            i guess bag end hai banaras, then
                        </Typography>
                        <Typography className={classes.typography} variant="body1">
                            then what's that make bits goa, boyz?
                        </Typography>
                        <Typography className={classes.typography} variant="body1">
                            ok, what LOTRy is this..
                        </Typography>
                        <Typography className={classes.typography} variant="body1">
                            it's not like that's all i can think of rn
                        </Typography>
                        <Typography className={classes.typography} variant="body1">
                            kidding, it is
                        </Typography>
                        <Typography className={classes.typography} variant="body1">
                            and
                        </Typography>
                        <Typography className={classes.typography} variant="body1">
                            ...i think you think toomuchof
                        </Typography>
                    </MuiBox>
                    <MuiDivider light="true" variant="middle"/>
                    <MuiBox m={2}>
                        <Typography className={classes.typography} variant="body1" aligncenter="true">
                            AWS Solutions Architect Professional | GSoC '19
                        </Typography>
                    </MuiBox>
                </MuiPaper>
                <MuiButton className={classes.button} variant="contained" color="primary" component={Link} naked href="/">
                    Go to the main page
                </MuiButton>
            </MuiContainer>
        </Layout>
    );
}
