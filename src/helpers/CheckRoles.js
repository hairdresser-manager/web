export const checkRole = (role) => {
  const roles = JSON.parse(window.localStorage.getItem('roles'));
  const result = roles.filter((item) => item == role);
  return result[0];
};
