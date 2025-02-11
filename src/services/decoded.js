import { jwtDecode } from "jwt-decode";

function getRoleId() {
  const token = localStorage.getItem("token");

  if (token) {
    try {
      const decodedToken = jwtDecode(token); // Decode the JWT
      const roleId = decodedToken.RoleId; // Extract the RoleId

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
