export const CheckRoles = (role) => {
  if (!window.localStorage.getItem('roles')) {
    return null;
  } else {
    const roles = JSON.parse(window.localStorage.getItem('roles'));
    const result = roles.filter((item) => item == role);
    return result[0];
  }
};
