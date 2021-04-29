import React from 'react';
import PropTypes from 'prop-types';
import { Divider, List, ListItem, ListItemText, withStyles, Link } from '@material-ui/core';
import { Avatar, Typography } from '@material-ui/core';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LockIcon from '@material-ui/icons/Lock';
import DateRangeIcon from '@material-ui/icons/DateRange';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import styles from './styles';
import { useHistory } from 'react-router';

const ProfileMenu = ({ classes }) => {
  const userName = localStorage.getItem('firstName');
  const history = useHistory();
  const onLogOut = () => {
    localStorage.removeItem('accessToken');
    history.push('/');
    window.location.reload();
  };
  return (
    <>
      <div className={classes.container}>
        <div className={classes.user}>
          <Avatar className={classes.avatar}>{userName.substring(0, 1)}</Avatar>
          <Typography>{userName}</Typography>
        </div>
        <List>
          <Divider />
          <Link underline="none" color="inherit" href="/profile">
            <ListItem button>
              <AccountBoxIcon />
              <ListItemText>Profile</ListItemText>
            </ListItem>
          </Link>
          <Divider />
          <Link underline="none" color="inherit" href="/profile/my-reservations">
            <ListItem button>
              <DateRangeIcon />
              <ListItemText>My Reservations</ListItemText>
            </ListItem>
          </Link>
          <Divider />
          <Link underline="none" color="inherit" href="/profile/change-password">
            <ListItem button>
              <LockIcon />
              <ListItemText>Change Password</ListItemText>
            </ListItem>
          </Link>
          <Divider />
          <Link underline="none" color="inherit" href="/profile/change-numberphone">
            <ListItem button>
              <PhoneAndroidIcon />
              <ListItemText>Change Number Phone</ListItemText>
            </ListItem>
          </Link>
          <Divider />
          <ListItem button>
            <ExitToAppIcon />
            <ListItemText onClick={onLogOut}>Logout</ListItemText>
          </ListItem>
        </List>
      </div>
    </>
  );
};

ProfileMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileMenu);