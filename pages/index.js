import React from 'react';
import MuiTypography from '@material-ui/core/Typography';
import MuiContainer from '@material-ui/core/Container';
import MuiBox from '@material-ui/core/Box';
import MuiGrid from '@material-ui/core/Grid';
import MuiCard from '@material-ui/core/Card';
import MuiCardContent from '@material-ui/core/CardContent';
import MuiCardActions from '@material-ui/core/CardActions';
import MuiFab from '@material-ui/core/Fab';
import MuiTextField from '@material-ui/core/TextField';
import MuiLink from '@material-ui/core/Link';
import Layout from '../src/global/Layout';
import MuiIconButton from '@material-ui/core/IconButton';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    gridContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        marginY: '20px',
        // marginX: '10px',
        flexGrow: 1,
        height: '100%',
        padding: '1em',
    },
    primaryCard: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
    typography: {
    },
    title: {
        display: 'flex',
        flexGrow: 1,
        alignItems: 'center',
    },
    titleInput: {
        display: 'flex',
    },
    subtitle: {
        display: 'flex',
        flexGrow: 1,
        alignItems: 'center',
        paddingX: 2,
    },
    left: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        alignItems: 'stretch',
        padding: 0,
    },
    right: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        flexGrow: 1,
        padding: 0,
    },
    ringerActions: {
        display: 'flex',
        flexGrow: 1,
        alignItems: 'space-between',
    },
    stretcher: {
        display: 'flex',
        flexGrow: 1,
        alignItems: 'stretch',
    },
}));
export default function Index() {
    const classes = useStyles();
    return (
        <Layout>
            <MuiGrid container spacing={1} className={classes.gridContainer}>
                <MuiGrid item sm={8} xs={12} >
                    <Hi/>
                </MuiGrid>
                <MuiGrid item sm={4} xs={12}>
                    <MuiGrid container spacing={1} direction="column">
                        <MuiGrid item xs={12}>
                            <Ringer/>
                        </MuiGrid>
                        <MuiGrid item xs={12}>
                            <Feedback/>
                        </MuiGrid>
                    </MuiGrid>
                </MuiGrid>
            </MuiGrid>
        </Layout>
    );
}
export function Hi() {
    const classes = useStyles();
    return (
        <MuiContainer className={classes.left}>
            <MuiCard variant="outlined">
                <MuiCardContent >
                        <MuiTypography variant="h2" className={classes.title} gutterBottom>
                            hello,
                            <form noValidate autoComplete="off">
                                <MuiBox px={3} className={classes.titleInput}>
                                    <MuiTextField
                                        id="input-name"
                                        label="&nbsp;君の名は。| &nbsp;&nbsp;your name"
                                        variant="outlined"
                                        align="center"
                                    />
                                </MuiBox>
                            </form>
                        </MuiTypography>
                            <form noValidate autoComplete="off">
                                <MuiBox className={classes.subtitle} >
                                    <MuiTextField
                                        id="input-name"
                                        label="how are you doing? how is everything? kaise? :D"
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                    />
                                </MuiBox>
                            </form>
                    <MuiTypography className={classes.typography} paragraph variant="subtitle">
                        <p>
                            <strong>kyun toomuchof?</strong> to learn by doing, kind of. doing what? travel and tech.
                        </p>
                        <strong>plan kya hai?</strong> plan is to have some of the following in action real soon:
                        <ul>
                            <li>
                                <strong>you</strong>, an invite only living-room for exclusive content.
                                with you in the middle.
                            </li>
                            <li>
                                <strong>website</strong> authentication, markdown-blog, search (I'm thinking AWS Kendra, idk), etc.
                            </li>
                            <li>
                                <strong>simple apps</strong> for online meetings, weather info, to-do list, etc. as of now.
                            </li>
                            <li>
                                <strong>software notes</strong> on design, DSA, and AWS | Expect deep dives and explain-like-i'm-fives!
                            </li>
                            <li>
                                <strong>solo travel logs </strong> to ∞ and beyond, for example: trek to lauterbrunnen from interlaken..
                                <p align="center">"knowing all of this <br />
                                    just don't make a difference,<br />
                                    i'm just talking shit <br />
                                    to the ones who'll listen."</p>
                                <p>~ <MuiLink href="https://www.youtube.com/watch?v=tQjsAJhsSw8">Posty</MuiLink></p>
                            </li>
                        </ul>
                        <strong>sales peach</strong> i've nothing to sell, nothing to convince you to do.
                        i don't even want the 'just share interesting stuff' bs.
                        (definitely not the sharing kind, this one.)
                        and definitely not a regular go-to front end guy with a lot of web XP.
                        <br/>
                        so this is just me running, tripping, falling w/ a bit of figuring things out on the fly. :)
                        <br/>
                    </MuiTypography>
                </MuiCardContent>
            </MuiCard>
        </MuiContainer>
    );
}
export function Ringer() {
    const classes = useStyles();
    return (
        <MuiContainer className={classes.right}>
            <MuiCard variant="outlined">
                <MuiCardContent>
                    <MuiTypography className={classes.typography} variant="h2" gutterBottom>
                        ringer
                    </MuiTypography>
                    <MuiTypography className={classes.typography} variant="subtitle" gutterBottom>
                        simple pray bell, let's see how many decades before this guy can hit 10k
                        <br/> if ever :P
                        <br/>
                        bajate raho! :P
                        <br/>
                    </MuiTypography>
                </MuiCardContent>
                <MuiCardActions disableSpacing className={classes.ringerActions}>
                    <MuiFab color="secondary" aria-label="fabPlusOne">
                        <NotificationsActiveIcon />
                    </MuiFab>
                    <MuiBox mx={2}>
                        <MuiTypography subtitle alignRight>
                            1.5k+ pings and counting
                        </MuiTypography>
                    </MuiBox>
                </MuiCardActions>
            </MuiCard>
        </MuiContainer>
    );
}
export function Feedback() {
    const classes = useStyles();
    return (
        <MuiContainer className={classes.right}>
            <MuiCard variant="outlined">
                <MuiCardContent>
                    <MuiTypography className={classes.typography} variant="h2" gutterBottom>
                        feedback
                    </MuiTypography>
                    <MuiTypography className={classes.typography} variant="subtitle" gutterBottom>
                        frank and open critique is the best! go crazy :P
                    </MuiTypography>
                </MuiCardContent>
                <MuiCardActions disableSpacing>
                    <MuiIconButton aria-label="+1">
                        <NotificationsActiveIcon />
                    </MuiIconButton>
                </MuiCardActions>
            </MuiCard>
        </MuiContainer>
    );
}
