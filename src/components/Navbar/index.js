import React from 'react';
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
import logo from '../../images/scissor.svg';

const Navbar = ({ classes }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar color="transparent" position="static">
        <Toolbar className={classes.styledToolbar}>
          <div className={classes.styledLogo}>
            <img src={logo} alt="Logo"></img>
            <Typography className={classes.styledLogoTypography} variant="h6">
              hairdresser
            </Typography>
          </div>
          <Typography className={classes.styledMenu}>
            <Link href="#" color="inherit">
              home
            </Link>
            <Link href="#" color="inherit">
              our services
            </Link>
            <Link href="#" color="inherit">
              meet the team
            </Link>
            <Link href="#" color="inherit">
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
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Our services</MenuItem>
                <MenuItem onClick={handleClose}>Meet the team</MenuItem>
                <MenuItem onClick={handleClose}>Reviews</MenuItem>
              </Menu>
            </>
          ) : (
            <div>
              <Button className={classes.styledButton} variant="outlined" color="secondary">
                BOOK NOW
              </Button>
              <IconButton
                aria-label="account of current user"
                aria-controls="profile-menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                disableFocusRipple
                size="small"
              >
                <AccountCircle />
                <Typography className={classes.styledAccountButton} variant="button">
                  Log In
                </Typography>
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
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
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
