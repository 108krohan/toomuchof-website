import React, { useState, useEffect } from 'react';
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
import SendIcon from '@material-ui/icons/Send';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import MuiButton from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Alert, AlertTitle } from '@material-ui/lab';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Rating from '@material-ui/lab/Rating';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
const StyledRating = withStyles({
    iconFilled: {
        color: '#ff6d75',
    },
    iconHover: {
        color: '#ff3d47',
    },
})(Rating);
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
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
        padding: theme.spacing(2),
        flexGrow:4,
    },
    inputName: {
        width: '50%',
    },
    subtitle: {
        display: 'flex',
        flexGrow: 1,
        alignItems: 'center',
        paddingX: 2,
    },
    submitTile: {
        display: 'grid',
        gridAutoFlow: 'column',
        gridTemplateColumns: '20% 45% 15%',
        gridColumnGap: '10%',
        alignItems: 'end',
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
        justifyContent: 'space-between',
    },
    stretcher: {
        display: 'flex',
        flexGrow: 1,
        alignItems: 'stretch',
    },
}));
export default function Index({counterValue}) {
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
                            <Ringer counterValue={counterValue}/>
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
    const [name, setName] = useState("");
    const [hiMessage, setHiMessage] = useState("");
    const [contact, setContact] = useState("");
    const [selectedDate, setSelectedDate] = React.useState(new Date('1997-12-04'));
    const [alertMessage, setAlertMessage] = useState("");
    const [showDialog, setShowDialog] = useState(false);
    const classes = useStyles();
    const handleSubmit = (event) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'text/event-stream' },
            body: JSON.stringify({
                'name': name,
                'dob':selectedDate,
                'message': hiMessage,
                'contact': contact,
            })
        };
        fetch('https://p0upowqk32.execute-api.ap-south-1.amazonaws.com/prod/customer',
            requestOptions);
        event.preventDefault();
        // If you see this list and do not see your name,  :P
        let asliGochiz = ["salil", "kapil", "deeksha", "ankit", "rathi", "ravi", "abhinav", "bhaia", "pragya", "pogo", "bhushan", "bhagya", "bhagyashree"];
        let pariwar = ["ronit", "ashu", "yadvendra", "kanishk", "meethi", "taurooshya", "ajeet", "pushpa", "rajendra", "akhilesh", "shruti", "shivesh"];
        let collegeFriends = ["mundada", "akshat", "vishal", "indrajeet", "himanshu", "siddharth", "aditya", "harsh", "bauji", "shashank", "tapan", "chetan", "yog", "ashutosh", "aashima", "dev", "mehul", "suhaib", "rishabh", "gyanesh", "gyani", "rathi", "shubham rathi", "kushal", "baba", "vatsal", "chcha"];
        let schoolFriends = ["rohit", "kajol", "savi", "asad", "aman", "kushagra", "saurabh", "shubham", "aastha", "janvi", "harshita", "apoorva", "anushka", "prakritee", "nikita", "jyotsana", "avishi", "apurva", "utkarsh", "vartika", "ashish", "priya", "tanya", "namrata", "isha", "anmol"];
        let officeFolk = ["arun", "vaibhav", "vikash", "raj", "vandita", "rishu", "divya", "anurag", "krishna", "sriharsha", "harsha"];
        let searchStrings = name.split(" ");
        let newAlertMessage = "";
        searchStrings.forEach((onestr) => {
            // search value in all above guys, and present prepare alert message.
            let str = onestr.toLowerCase();
            if(newAlertMessage === "" || newAlertMessage === "Thank you for checking in!") {
                if(asliGochiz.includes(str)) {
                    newAlertMessage = "Thank you! And Wuhuuuuuuuuu " + name + "! Keep being awesome asli gochiz!";
                }
                else if(pariwar.includes(str)) {
                    newAlertMessage = "Hello and welcome " + name + "! Now, a digital home to call our own.";
                }
                else if(str === "kamna") {
                    newAlertMessage = "Look at the stars, look how they shine for you! :-) All the best for JAM preparation, and always here for you any samay! ^__^";
                }
                else if(collegeFriends.includes(str)) {
                    newAlertMessage = "Hiiiiiiii dost! Here I'm thinking when " + name + " would show up! How's it going? Let's ketchup sometime real soon!";
                }
                else if(schoolFriends.includes(str)) {
                    newAlertMessage = "Hello " + name + " a.k.a. old friend. :-) I'll be sure to not forget your birthday this time for sure :P :-)";
                }
                else if(officeFolk.includes(str)) {
                    newAlertMessage = "Hi " + " ! Glad hearing from you! Your feedback has always been super helpful in office, and now here too. Thanks for chipping in!";
                }
                else {
                    newAlertMessage = "Thank you for checking in!";
                }
            }
        });
        setAlertMessage(newAlertMessage);
        setShowDialog(true);
    };
    const handleClose = () => {
        setShowDialog(false);
    };
    return (
        <MuiContainer className={classes.left}>
            <MuiCard variant="outlined">
                <MuiCardContent >
                    <form onSubmit={handleSubmit}>
                        <MuiTypography variant="h2" className={classes.title} gutterBottom>
                            hello,
                            <MuiBox px={3} className={classes.titleInput}>
                                <MuiTextField
                                    className={classes.inputName}
                                    id="input-name"
                                    required
                                    label="&nbsp;君の名は。| &nbsp;&nbsp;your name"
                                    variant="outlined"
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                />
                            </MuiBox>
                        </MuiTypography>
                        <MuiBox className={classes.subtitle} >
                            <MuiTextField
                                id="input-hi"
                                label="how are you doing? got a word for me? leave a message when you go :D"
                                variant="outlined"
                                size="small"
                                multiline
                                rowsMax={3}
                                fullWidth
                                value={hiMessage}
                                onChange={(event) => setHiMessage(event.target.value)}
                            />
                        </MuiBox>
                        <MuiTypography className={classes.typography} paragraph variant="body1">
                            <p>
                                <strong>NOTE for phone users</strong> Request to please make use of "Desktop site" chrome setting for now. The coder is a novice nord lord in a mobile first world.
                            </p>
                            <p>
                                <strong>kyun toomuchof?</strong> kyunki someone says "nearly everything's interesting if you go into it deeply enough."
                            </p>
                            <strong>kya hai plan?</strong> plan is to have some of the following in action real soon:
                            <ul>
                                <li>
                                    <strong>you</strong>, an invite only living-room for exclusive content.
                                    with you in the middle.
                                </li>
                                <li>
                                    <strong>website</strong> authentication, markdown-blog, search (I'm thinking AWS Kendra, idk), etc.
                                </li>
                                <li>
                                    <strong>simple apps</strong> for chat bots, weather info, to-do list, AWS hands on, etc. as of now.
                                </li>
                                <li>
                                    <strong>software excellence</strong> on design, DSA, and AWS | Expect deep dives and explain-like-i'm-fives!
                                </li>
                                <li>
                                    <strong>solo travel logs </strong> to ∞ and beyond, for example: trek to lauterbrunnen from interlaken..
                                    <div align="center">"knowing all of this <br />
                                        just don't make a difference,<br />
                                        i'm just talking shit <br />
                                        to the ones who'll listen."</div>
                                    <div>~ <MuiLink href="https://www.youtube.com/watch?v=tQjsAJhsSw8">Posty</MuiLink></div>
                                </li>
                            </ul>
                            <BeachAccessIcon fontSize="small"/><strong>sales peach</strong>  Any day can spell an end. <MuiLink href="https://www.youtube.com/watch?v=zNOHyGP7thk">God only knows</MuiLink> what's to come. Be the next to know what's up. :)
                        </MuiTypography>
                        <MuiBox className={classes.submitTile} >
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <DatePicker
                                    disableToolbar
                                    required
                                    variant="inline"
                                    id="input-date"
                                    label="Birthday"
                                    value={selectedDate}
                                    onChange={(date) => setSelectedDate(date)}
                                />
                            </MuiPickersUtilsProvider>
                            <MuiTextField
                                id="input-contact"
                                label="(Optional) e-mail/whatsapp/insta"
                                variant="outlined"
                                size="small"
                                value={contact}
                                onChange={(event) => setContact(event.target.value)}
                            />
                            <MuiButton
                                variant="contained"
                                color="primary"
                                type="submit"
                                endIcon={<SendIcon />}
                            >
                                Send
                            </MuiButton>
                        </MuiBox>
                    </form>
                </MuiCardContent>
                <Dialog
                    open={showDialog}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">{"Save success!"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            <Alert severity="success">
                                <AlertTitle>Success</AlertTitle>
                                {alertMessage}
                            </Alert>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <MuiButton onClick={handleClose} color="primary">
                            Close
                        </MuiButton>
                    </DialogActions>
                </Dialog>
            </MuiCard>
        </MuiContainer>
    );
}
export function Ringer(props) {
    const [counter, setCounter] = useState(props.counterValue);
    const [increment, setIncrement] = useState(0);
    const classes = useStyles();
    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };
        fetch("https://wu9tlfqaf8.execute-api.ap-south-1.amazonaws.com/prod/counter/1-frontpage-ringer", requestOptions)
            .then(result => result.json())
            .then(result => setCounter(result));
    }, []); // runs once because 0 dependencies mentioned explicitly.
    useEffect(() => {
        if(increment % 3 === 0) {
            const requestOptions = {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({'increment': increment})
            };
            fetch('https://wu9tlfqaf8.execute-api.ap-south-1.amazonaws.com/prod/counter/1-frontpage-ringer',
                requestOptions)
                .then(setCounter(counter + increment))
                .then(setIncrement(0));
        }
    }, [increment]);
    return (
        <MuiContainer className={classes.right}>
            <MuiCard variant="outlined">
                <MuiCardContent>
                    <MuiTypography className={classes.typography} variant="h2" gutterBottom>
                        ringer
                    </MuiTypography>
                    <MuiTypography className={classes.typography} variant="body1" gutterBottom>
                        simple pray bell, let's see how many decades before this guy turns 10k
                        <br/> if ever :P
                        <br/>
                        bajate raho! :P
                        <br/>
                    </MuiTypography>
                </MuiCardContent>
                <MuiCardActions disableSpacing className={classes.ringerActions}>
                    <MuiFab color="secondary" aria-label="fabPlusOne" onClick={() => setIncrement(increment + 1)}>
                        <NotificationsActiveIcon />
                    </MuiFab>
                    <MuiBox mx={3}>
                        <MuiTypography variant="subtitle1" alignright="true">
                            {counter + increment} pings and counting!
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
                    <MuiBox component="fieldset" mb={3} borderColor="transparent">
                        <StyledRating
                            name="customized-color"
                            defaultValue={2}
                            getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                            precision={1}
                            icon={<FavoriteIcon fontSize="inherit" />}
                        />
                    </MuiBox>
                    <MuiTypography>
                        <strong>Coming soon!</strong> Transparent stats on the cardinality of 1, 2, 3, 4, and 5 hearts overtime. Dummy placeholder for now.
                    </MuiTypography>
                </MuiCardContent>
                <MuiCardActions disableSpacing>
                </MuiCardActions>
            </MuiCard>
        </MuiContainer>
    );
}
export async function getServerSideProps(context) {
    const res = await fetch('https://wu9tlfqaf8.execute-api.ap-south-1.amazonaws.com/prod/counter/1-frontpage-ringer');
    const counterValue = await res.json();
    return {
        props: {counterValue},
    }
}
