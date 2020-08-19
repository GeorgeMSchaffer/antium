import React,{useState,MouseEvent,SyntheticEvent} from 'react';
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
      root:{

      },
      drawer: {
        width: width,
        flexShrink: 0,
      },
      drawerPaper: {
        width: width,
      },
      drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -width,
      },
      contentShift: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
    }),
  );
	  const handleDrawerClick = (evt: MouseEvent) => {
      console.debug('--- SETTING OPEN FROM',open,'TO',!open);
      setOpen(!open);
    };
  
    const classes = useStyles();
    const theme = useTheme();  
    return (
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
            <div className={classes.root}>
              <IconButton onClick={handleDrawerClick}>
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
