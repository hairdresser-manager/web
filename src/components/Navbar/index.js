import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { isOpenAuthModal } from 'slices/ModalsSlice';
import { CheckRoles } from 'helpers/CheckRoles';
import PropTypes from 'prop-types';
import styles from './styles';
import {
  Button,
  useMediaQuery,
  useTheme,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu,
  Link,
  withStyles,
} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import logo from 'images/scissor.svg';

const Navbar = ({ classes }) => {
  const dispatch = useDispatch();
  const isLoggedIn = localStorage.getItem('accessToken');
  const userName = localStorage.getItem('firstName');
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const history = useHistory();
  const userRole = CheckRoles('Admin');

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleOpenModal = () => {
    dispatch(isOpenAuthModal());
  };

  const onLogOut = () => {
    localStorage.clear();
    history.push('/');
    window.location.reload();
  };

  return (
    <div className={classes.root}>
      <AppBar color="default" position="fixed">
        <Toolbar className={classes.styledToolbar}>
          <div className={classes.styledLogo}>
            <img src={logo} alt="Logo" />
            <Typography className={classes.styledLogoTypography} variant="h6">
              hairdresser
            </Typography>
          </div>
          <Typography className={classes.styledMenu}>
            <Link className={classes.styledLink} href="/" color="inherit" underline="none">
              home
            </Link>
            <Link className={classes.styledLink} href="/#services" color="inherit" underline="none">
              our services
            </Link>
            <Link className={classes.styledLink} href="/#team" color="inherit" underline="none">
              meet the team
            </Link>
            <Link className={classes.styledLink} href="/#reviews" color="inherit" underline="none">
              reviews
            </Link>
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                edge="start"
                className={classes.menuButton}
                color="inherit"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={openMenu}
                onClose={handleCloseMenu}
              >
                <MenuItem onClick={handleCloseMenu}>Our services</MenuItem>
                <MenuItem onClick={handleCloseMenu}>Meet the team</MenuItem>
                <MenuItem onClick={handleCloseMenu}>Reviews</MenuItem>
              </Menu>
            </>
          ) : (
            <div>
              {userRole ? (
                <Link underline="none" color="inherit" href="/admin">
                  <Button className={classes.styledButton} variant="outlined" color="primary">
                    ADMIN PANEL
                  </Button>
                </Link>
              ) : (
                <Link href="/#services" color="inherit" underline="none">
                  <Button className={classes.styledButton} variant="outlined" color="secondary">
                    BOOK NOW
                  </Button>
                </Link>
              )}

              {isLoggedIn ? (
                <>
                  <IconButton
                    className={classes.test}
                    aria-label="account of current user"
                    aria-controls="profile-menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                    disableFocusRipple
                    size="small"
                  >
                    <AccountCircle />
                    <Typography variant="button">{userName}</Typography>
                  </IconButton>
                  <Menu
                    id="profile-menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={openMenu}
                    onClose={handleCloseMenu}
                  >
                    <Link underline="none" color="inherit" href="/profile">
                      <MenuItem href="/profile">Profile</MenuItem>
                    </Link>
                    <Link
                      underline="none"
                      color="inherit"
                      href="profile/change-account-informations"
                    >
                      <MenuItem onClick={handleCloseMenu}>Edit Account</MenuItem>
                    </Link>
                    {userRole && (
                      <Link underline="none" color="inherit" href="admin">
                        <MenuItem className={classes.menuItemAdmin} onClick={handleCloseMenu}>
                          Admin Panel
                        </MenuItem>
                      </Link>
                    )}
                    <MenuItem onClick={onLogOut}>Logout</MenuItem>
                  </Menu>
                </>
              ) : (
                <IconButton
                  className={classes.iconButton}
                  aria-label="account of current user"
                  aria-controls="profile-menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                  disableFocusRipple
                  size="small"
                  onClick={handleOpenModal}
                >
                  <AccountCircle />
                  <Typography variant="button">Log In</Typography>
                </IconButton>
              )}
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Navbar);
