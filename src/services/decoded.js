import { jwtDecode } from "jwt-decode";

function getRoleId() {
  const token = localStorage.getItem("token");

  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      const roleId = decodedToken.RoleId;

      if (roleId) {
        return roleId;
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  } else {
    return null;
  }
}

export default getRoleId;
