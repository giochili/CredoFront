import { jwtDecode } from "jwt-decode";

function getUserId() {
  const token = localStorage.getItem("token");

  if (token) {
    try {
      const decodedToken = jwtDecode(token); // Decode the JWT
      const UserId = decodedToken.UserId; // Extract the RoleId

      if (UserId) {
        return UserId;
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

export default getUserId;
