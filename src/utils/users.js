export const getUserRole = userInfo =>
  userInfo && userInfo.roles && userInfo.roles[0] && userInfo.roles[0].name

export const isRole = (rolesArray, searchedRole) => rolesArray && rolesArray.find(role => role.name === searchedRole)
