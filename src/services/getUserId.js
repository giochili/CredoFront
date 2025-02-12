import { jwtDecode } from "jwt-decode";

function getUserId() {
  const token = localStorage.getItem("token");

  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      const UserId = decodedToken.UserId;

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
