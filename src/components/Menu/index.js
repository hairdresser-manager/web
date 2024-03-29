import React from 'react';
import PropTypes from 'prop-types';
import { CheckRoles } from 'helpers/CheckRoles';
import { Divider, List, ListItem, ListItemText, withStyles, Link } from '@material-ui/core';
import { Avatar, Typography } from '@material-ui/core';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import LockIcon from '@material-ui/icons/Lock';
import DateRangeIcon from '@material-ui/icons/DateRange';
import EditIcon from '@material-ui/icons/Edit';
import styles from './styles';
import { useHistory } from 'react-router';
import SubjectIcon from '@material-ui/icons/Subject';

const Menu = ({ classes }) => {
  const userName = localStorage.getItem('firstName');
  const isUser = CheckRoles('User');
  const isAdmin = CheckRoles('Admin');
  const isEmployee = CheckRoles('Employee');
  const history = useHistory();

  const onLogOut = () => {
    localStorage.clear();
    history.push('/');
    window.location.reload();
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.user}>
          <Avatar
            className={`${classes.avatar} ${isAdmin ? classes.avatarAdmin : classes.avatarUser}`}
          >
            {userName.substring(0, 1)}
          </Avatar>
          <Typography>{userName}</Typography>
        </div>
        <List>
          <Divider />
          {history.location.pathname.includes('admin') ? (
            <>
              <Link underline="none" color="inherit" href="/admin/manage-employee">
                <ListItem button>
                  <SupervisedUserCircleIcon />
                  <ListItemText>Manage Employees</ListItemText>
                </ListItem>
              </Link>
              <Divider />
              <Link underline="none" color="inherit" href="/admin/manage-services">
                <ListItem button>
                  <SubjectIcon />
                  <ListItemText>Manage Services</ListItemText>
                </ListItem>
              </Link>
              <Divider />
            </>
          ) : (
            <>
              <Link underline="none" color="inherit" href="/profile">
                <ListItem button>
                  <AccountBoxIcon />
                  <ListItemText>Profile</ListItemText>
                </ListItem>
              </Link>
              <Divider />
              {isUser && (
                <>
                  <Link underline="none" color="inherit" href="/profile/my-reservations">
                    <ListItem button>
                      <DateRangeIcon />
                      <ListItemText>My Reservations</ListItemText>
                    </ListItem>
                  </Link>
                  <Divider />
                </>
              )}
              {isEmployee && (
                <>
                  <Link underline="none" color="inherit" href="/profile/my-schedule">
                    <ListItem button>
                      <DateRangeIcon />
                      <ListItemText>My Schedule</ListItemText>
                    </ListItem>
                  </Link>
                  <Divider />
                </>
              )}
              <Link underline="none" color="inherit" href="/profile/change-password">
                <ListItem button>
                  <LockIcon />
                  <ListItemText>Change Password</ListItemText>
                </ListItem>
              </Link>
              <Divider />
              <Link underline="none" color="inherit" href="/profile/change-account-informations">
                <ListItem button>
                  <EditIcon />
                  <ListItemText>Change Account Information</ListItemText>
                </ListItem>
              </Link>
              <Divider />
              <ListItem button>
                <ExitToAppIcon />
                <ListItemText onClick={onLogOut}>Logout</ListItemText>
              </ListItem>
            </>
          )}
        </List>
      </div>
    </>
  );
};

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Menu);
