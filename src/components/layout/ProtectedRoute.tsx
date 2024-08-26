import { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logOut, userToken } from "../../redux/features/auth/authSlice";
import { Navigate, useNavigate } from "react-router-dom";
import { verifyToken } from "../../utils/verifyToken";
import { TUser } from "@/types";

type TProtectedRouteProps = {
  children: ReactNode;
  role: "admin" | "user" | null;
};

const ProtectedRoute = ({ children, role }: TProtectedRouteProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const token = useAppSelector(userToken);
  let user;
  if (token) {
    user = verifyToken(token);
  }

  if (role && user && role !== (user as TUser)?.role) {
    dispatch(logOut());
    navigate("/login");
  }
  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
