import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Avatar from '@material-ui/core/Avatar'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DraftsIcon from '@material-ui/icons/Drafts';
import SettingsIcon from '@material-ui/icons/Settings';
import LanguageIcon from '@material-ui/icons/Language';
import HistoryIcon from '@material-ui/icons/History';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppsIcon from '@material-ui/icons/Apps';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import userImageUrl from '../../../assests/images/user.jpg';
import Grid from '@material-ui/core/Grid';
import verifiedIconUrl from '../../../assests/images/verified.png'
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import HelpIcon from '@material-ui/icons/Help';
import GavelIcon from '@material-ui/icons/Gavel';
import { useHistory } from 'react-router';
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    logo: {
        width: '40%'
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
        textAlign: "left",
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },

    toolbar: {
        minHeight: '16px'
    },
    toolbar1: {
        minHeight: '60px'
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    menuButton1: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },

    inputRoot: {
        color: 'inherit',
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    large: {
        margin: "auto",
        backgroundColor: "#fff",
        width: 85,
        height: 85,
        boxShadow: "0px 8px 10px 0px rgba(0,0,0,0.12)",
        marginBottom: '16px'
    },
    verifiedIcon: {
        height: 40,
        width: 40,
        padding: 5
    },
    grid: {
        textAlign: "center",
        lineHeight: 200
    },
    drawertitle: {
        paddingLeft: 8,
        color: "#757575"
    },
}));

function ResponsiveDrawer(props: any) {
    const { container } = props;
    const history = useHistory();
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: any) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    // AppBar Dropdown Menu
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}>
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
        </Menu>
    );

    // MobileDropdown
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}>
            <MenuItem>
                <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 11 new notifications" color="inherit">
                    <Badge badgeContent={11} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    const drawer = (
        <div>
            {/* For Upper Spacing */}
            <div className={classes.toolbar} />
            <Avatar src={userImageUrl} alt="user" className={classes.large} />
            <Grid container justify="center" alignItems="center">
                <Grid item>
                    <Typography variant="body1" color="primary">Aiska Basnet</Typography>
                </Grid>
                <Grid item>
                    <img src={verifiedIconUrl} alt="Verified Account" className={classes.verifiedIcon} />
                </Grid>
            </Grid>
            <Divider />
            <List>
                <ListItem button key={"Home"}>
                    <ListItemIcon><AppsIcon /></ListItemIcon>
                    <ListItemText primary={"Home"} />
                </ListItem>
                <ListItem button key={"Inbox"}>
                    <ListItemIcon><DraftsIcon /></ListItemIcon>
                    <ListItemText primary={"Inbox"} />
                </ListItem>
                <ListItem button key={"History"}>
                    <ListItemIcon><HistoryIcon /></ListItemIcon>
                    <ListItemText primary={"History"} />
                </ListItem>

            </List>
            <Divider />
            <Typography variant="caption" className={classes.drawertitle}>ACCOUNTS</Typography>
            <List>
                <ListItem button key={"Profile"} onClick={()=>history.push("/profile_add")}>
                    <ListItemIcon><AccountBoxIcon /></ListItemIcon>
                    <ListItemText primary={"Profile"} />
                </ListItem>
                <ListItem button key={"Saved Add"}>
                    <ListItemIcon><BookmarkIcon /></ListItemIcon>
                    <ListItemText primary={"Saved Address"} />
                </ListItem>
            </List>
            <Divider />
            <Typography variant="caption" className={classes.drawertitle}>OFFERS</Typography>
            <List>
                <ListItem button key={"Discounts"}>
                    <ListItemIcon><LoyaltyIcon /></ListItemIcon>
                    <ListItemText primary={"Get Discounts"} />
                </ListItem>
                <ListItem button key={"Promo"}>
                    <ListItemIcon><CardGiftcardIcon /></ListItemIcon>
                    <ListItemText primary={"Promotions"} />
                </ListItem>
            </List>
            <Divider />
            <Typography variant="caption" className={classes.drawertitle}>HELP AND LEGAL</Typography>
            <List>
                <ListItem button key={"Help"}>
                    <ListItemIcon><HelpIcon /></ListItemIcon>
                    <ListItemText primary={"Help"} />
                </ListItem>
                <ListItem button key={"Legal"}>
                    <ListItemIcon><GavelIcon /></ListItemIcon>
                    <ListItemText primary={"Legal"} />
                </ListItem>
            </List>
            <Divider />
            <Typography variant="caption" className={classes.drawertitle}>SETTINGS</Typography>
            <List>
                <ListItem button key={"Settings"}>
                    <ListItemIcon><SettingsIcon /></ListItemIcon>
                    <ListItemText primary={"Settings"} />
                </ListItem>
                <ListItem button key={"Change Language"}>
                    <ListItemIcon><LanguageIcon /></ListItemIcon>
                    <ListItemText primary={"Change Language"} />
                </ListItem>
            </List>
        </div>
    );

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        ParkIT
                    </Typography>

                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <IconButton aria-label="show 17 new notifications" color="inherit">
                            <Badge badgeContent={17} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
            <nav className={classes.drawer}>
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar1} />
                {props.children}
            </main>
        </div>
    );
}


export default ResponsiveDrawer;