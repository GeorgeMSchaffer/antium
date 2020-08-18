import React,{useState} from 'react';
import { MuiThemeProvider, createMuiTheme,makeStyles,useTheme ,createStyles} from '@material-ui/core/styles';
import { IconButton,Theme, Container,Button ,AppBar, Menu, MenuItem,Drawer, Toolbar,Snackbar,Typography,Divider,List,ListItemIcon,ListItemText,CssBaseline,Paper } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import clsx from 'clsx';

interface IProps {
	width: number,
	open: boolean
}
const Sidebar = (props: any) => {
		console.debug('\r\n ---- SIDEBAR PROPS ---- \r\n',props);
    let {width} = props;
    const [open, setOpen] = useState<boolean | undefined>(props.open);
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
            display: 'flex',
            },
            appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            },
            appBarShift: {
            marginLeft: width,
            width: `calc(100% - ${width}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            },
            menuButton: {
            marginRight: 36,
            },
            hide: {
            display: 'none',
						},
						drawerClose:{

						},
						drawerOpen:{

						},
						toolbar:{

						}
        })
    );
	  const handleDrawerOpen = <T>(evt: T): T => {
    
    };
  
    const handleDrawerClose = <T>(evt: T): T => {
      
    };

    const classes = useStyles();
    const theme = useTheme();  
    return (
        <Drawer
            variant="permanent"
            classes={{
              paper: clsx({
                //[classes.drawerOpen]: open,
                //[classes.drawerClose]: !open,
              }),
            }}
          >
            <div className={classes.toolbar}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton>
            </div>
            <Divider />
            <List>
              {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                  <ListItemText primary={text}>{text}</ListItemText>
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Drawer>
    )
}

export default Sidebar
