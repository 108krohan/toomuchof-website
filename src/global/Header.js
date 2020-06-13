import React, {useState} from 'react';
import MuiBox from '@material-ui/core/Box';
import MuiContainer from '@material-ui/core/Container';
import MuiButton from '@material-ui/core/Button';
import MuiAppBar from '@material-ui/core/AppBar';
import MuiToolbar from '@material-ui/core/Toolbar';
import MuiTypography from '@material-ui/core/Typography';
import MuiTooltip from '@material-ui/core/Tooltip';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Fade from '@material-ui/core/Fade';
import Link from "../Link";
import AppBarElevationScroll from "../util/AppBarElevationScroll";
const useStyles = makeStyles((theme) => ({
    root: {
        border: 0,
        padding: '1em 1em',
        margin: theme.spacing(0, 6, 0, 0),
        minWidth: '100vw',
        minHeight: '64px',
    },
    appBar: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        display: 'flex',
        justifyContent: 'space-evenly',
        // boxShadow: 'none', // provides box shadow, like a floating app bar.
    },
    leftSection: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexGrow: 1,
    },
    centerSection: {
        display: 'flex',
        justifyContent: 'center',
        flexGrow: 3,
    },
    rightSection: {
        display: 'flex',
        justifyContent: 'flex-end',
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        align: 'center',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
    buttonColored: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    typography: {
        padding: theme.spacing(2),
    }
}));
export default function Header() {
    const classes = useStyles();
    return (
        <MuiContainer className={classes.root} gutterBottom>
            <AppBarElevationScroll >
                <MuiAppBar className={classes.appBar} color="transparent" >
                    <MuiToolbar >
                        <Left />
                        <Center />
                        <Right />
                    </MuiToolbar>
                </MuiAppBar>
            </AppBarElevationScroll>
        </MuiContainer>
    );
}
export function Left() {
    const classes = useStyles();
    return (
        <MuiBox className={classes.leftSection}>
            {/*<IconButton*/}
            {/*    edge="start"*/}
            {/*    className={classes.menuButton}*/}
            {/*    color="inherit"*/}
            {/*    disabled="true"*/}
            {/*    aria-label="open drawer"*/}
            {/*>*/}
            {/*    <MenuIcon />*/}
            {/*</IconButton>*/}
            <MuiTypography className={classes.title} color="textPrimary" variant="h5" component={Link} href="/" noWrap>
                toomuchof
            </MuiTypography>
        </MuiBox>
    );
}
export function Center() {
    const [disabled, setDisabled] = useState(true);
    const classes = useStyles();
    return (
        <MuiBox className={classes.centerSection}>
            <MuiTooltip title="You don't have permission to do this as of now." TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}>
                <span>
                    <MuiButton
                        variant="outlined"
                        disabled={disabled}
                        href={"/accounts/login"}
                        style={disabled ? { pointerEvents: "none" } : {}}>
                        You
                    </MuiButton>
                </span>
            </MuiTooltip>
            {/*<MuiBox px={'1em'} />*/}
            {/*<MuiButton href="/pages" className={classes.buttonColored}>*/}
            {/*    post*/}
            {/*</MuiButton>*/}
            {/*<MuiBox px={'1em'} />*/}
            {/*<MuiButton href="/apps" className={classes.buttonColored}>*/}
            {/*    app*/}
            {/*</MuiButton>*/}
        </MuiBox>
    )
}
export function Right() {
    const classes = useStyles();
    return (
        <MuiBox className={classes.rightSection}>
            <MuiTooltip title="Raste me hai, ata hoga. (coming soon)" TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}>
                <MuiBox className={classes.search}>
                    <MuiBox className={classes.searchIcon}>
                        <SearchIcon />
                    </MuiBox>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        // onSubmit={}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </MuiBox>
            </MuiTooltip>
            <MuiBox px={'1em'} />
            <MuiButton className={classes.buttonColored} naked color="primary" variant="contained" component={Link} href="/rohan" >
                me
            </MuiButton>
        </MuiBox>
    );
}