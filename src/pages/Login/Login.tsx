import Container from "@/components/shared/Container";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { TUser } from "@/types/auth.type";
import { verifyToken } from "@/utils/verifyToken";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaGreaterThan } from "react-icons/fa";
import { MdOutlineHome } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useAppDispatch();
  const [handleLogin] = useLoginMutation();
  const navigate = useNavigate();
  window.scrollTo(0, 0);
  const { handleSubmit, register } = useForm({
    defaultValues: {
      email: "web@hero.com",
      password: "ph-password",
    },
  });

  const handleSignIn: SubmitHandler<FieldValues> = async (data) => {
    try {
    
      const res = await handleLogin(data).unwrap();
      if (res?.success) {
        const user = verifyToken(res.token) as TUser;
        dispatch(setUser({ user, token: res.token }));
        toast.success(res?.message);
        navigate("/");
      }
    } catch (error: any) {
      toast.error(error?.data?.errorMessages?.[0]?.message);
    }
  };
  return (
    <div className="py-10 bg-gray-50">
      <Container>
        <div className="flex items-center gap-2">
          <MdOutlineHome
            onClick={() => navigate("/")}
            size={20}
            className="text-primary cursor-pointer"
          />
          <FaGreaterThan className="" />
          <span className="text-lg">Login</span>
        </div>

        <div className="w-full max-w-[500px] mx-auto box_shadow rounded px-[30px] py-[24px] mb-14">
          <h4 className="text-[28px] uppercase font-semibold">
            Login
          </h4>
          <p className="mb-4 text_md">Login if you a a returing customer</p>
          <form onSubmit={handleSubmit(handleSignIn)}>
            <div>
              <div>
                <label className="block">
                  Email Address <span className="text-primary">*</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  className="w-full border border-[#E9E4E4] rounded focus:ring-0 focus:outline-primary mt-1 py-3 px-2"
                  type="email"
                  placeholder="example@mail.com"
                />
              </div>
              <div className="mt-4">
                <label className="block">
                  Password <span className="text-primary">*</span>
                </label>
                <input
                  {...register("password", { required: true })}
                  className="w-full border border-[#E9E4E4] rounded focus:ring-0 focus:outline-primary mt-1 py-3 px-2"
                  type="password"
                  placeholder="type password"
                />
              </div>

              <div className="flex justify-between items-center mt-6">
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    className="focus:ring-0 text-primary border border-primary focus:bg-primary focus:outline-none"
                    id="save-default"
                  />
                  <label
                    htmlFor="save-default"
                    className="text-sm sm:text-base"
                  >
                    Remember Me
                  </label>
                </div>
                <div>
                  <a
             
                    className="text-primary text-sm sm:text-base"
                  >
                    Forgot Password?
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="default_btn rounded w-full hover:bg-white hover:border-rose-500 hover:text-primary"
              >
                Login
              </button>
            </div>
          </form>

          <div className="flex justify-center mt-4 relative after:absolute after:w-full after:h-[1px] after:bg-gray-300 after:top-3">
            <p className="px-2 bg-white z-10">Or login in with</p>
          </div>

          <div className="flex gap-5 mt-4">
            <button className="default_btn w-full rounded bg-facebook hover:bg-white hover:border-[#3B5999] hover:text-[#3B5999]">
              <i className="fab fa-facebook-f me-2"></i> Facebook
            </button>
            <button className="default_btn w-full bg-google hover:bg-white hover:border-[#D85040] hover:text-[#D85040]">
              <i className="fab fa-google me-2"></i> Google
            </button>
          </div>

          <p className="text-center mt-3 mb-0">
            Don't have an account.?{" "}
            <Link to="/register" className="text-primary">
              Register Now
            </Link>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Login;
