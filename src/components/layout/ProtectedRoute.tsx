import { ReactNode } from "react";
import { useAppSelector } from "../../redux/hooks";
import { userToken } from "../../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";
import { verifyToken } from "../../utils/verifyToken";
import { TUser } from "@/types";

type TProtectedRouteProps = {
  children: ReactNode;
  role: "admin" | "user" | null;
};

const ProtectedRoute = ({ children, role }: TProtectedRouteProps) => {
  const token = useAppSelector(userToken);
  let user;
  if (token) {
    user = verifyToken(token);
  }

  if (role && user && role !== (user as TUser)?.role) {
    return;
  }
  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
