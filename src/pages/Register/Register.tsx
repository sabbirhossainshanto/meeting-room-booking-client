import { useSignUpMutation } from "@/redux/features/auth/authApi";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaGreaterThan } from "react-icons/fa";
import { MdOutlineHome } from "react-icons/md";
import { TbFidgetSpinner } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [handleSignUp, { isLoading, isSuccess }] = useSignUpMutation();
  const navigate = useNavigate();
  window.scrollTo(0, 0);
  const { handleSubmit, register } = useForm({
    defaultValues: {
      name: "Hero",
      email: "web@hero.com",
      password: "ph-password",
      confirmPassword: "ph-password",
      phone: "1234567890",
      role: "user",
      address: "123 Main Street, City, Country",
    },
  });

  const handleRegister: SubmitHandler<FieldValues> = async (data) => {
    try {
      const registerCredential = {
        role: "user",
        ...data,
      };
      const res = await handleSignUp(registerCredential).unwrap();
      if (res?.success) {
        toast.success(res?.message);
        navigate("/login");
      }
    } catch (error: any) {
      toast.error(error?.data?.errorMessages?.[0]?.message);
    }
  };
  return (
    <div className="py-10 bg-gray-50">

        <div className="flex items-center gap-2 container">
          <MdOutlineHome
            onClick={() => navigate("/")}
            size={20}
            className="text-primary cursor-pointer"
          />
          <FaGreaterThan className="" />
          <span className="text-lg">Register</span>
        </div>

        <div className="w-full max-w-[500px] mx-auto box_shadow rounded px-[30px] py-[24px] mb-14">
          <h4 className="text-[28px] uppercase font-semibold ">
            Create an account
          </h4>
          <p className="mb-4 text_md">
            Register here if you are a new customer.
          </p>
          <form onSubmit={handleSubmit(handleRegister)}>
            <div>
              <div>
                <label className="block">
                  Full Name <span className="text-primary">*</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  className="w-full border border-[#E9E4E4] rounded focus:ring-0 focus:outline-primary mt-1 py-3 px-2"
                  type="string"
                  placeholder="Jone Doe"
                />
              </div>
              <div>
                <label className="block">
                  Email <span className="text-primary">*</span>
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
              <div className="mt-4">
                <label className="block">
                  Confirm Password <span className="text-primary">*</span>
                </label>
                <input
                  {...register("confirmPassword", { required: true })}
                  className="w-full border border-[#E9E4E4] rounded focus:ring-0 focus:outline-primary mt-1 py-3 px-2"
                  type="password"
                  placeholder="type password"
                />
              </div>
              <div className="mt-4">
                <label className="block">
                  Phone <span className="text-primary">*</span>
                </label>
                <input
                  {...register("phone", { required: true })}
                  className="w-full border border-[#E9E4E4] rounded focus:ring-0 focus:outline-primary mt-1 py-3 px-2"
                  type="number"
                  placeholder="0123456789"
                />
              </div>

              <div className="mt-4">
                <label className="block">
                  Address<span className="text-primary">*</span>
                </label>
                <input
                  {...register("address", { required: true })}
                  className="w-full border border-[#E9E4E4] rounded focus:ring-0 focus:outline-primary mt-1 py-3 px-2"
                  type="text"
                  placeholder="123 Main Street, City, Country"
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
                    I have read and agree to the{" "}
                    <span className="text-primary"> terms & conditions</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="default_btn rounded w-full hover:bg-white hover:border-rose-500 hover:text-primary"
              >
                {!isLoading && !isSuccess ? (
                  <span> Create Account</span>
                ) : (
                  <span className="flex items-center gap-2 justify-center text-base">
                    <span>Please Wait</span>{" "}
                    <TbFidgetSpinner className="animate-spin" />
                  </span>
                )}
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
            Already have an account.?{" "}
            <Link to="/login" className="text-primary">
              Login
            </Link>
          </p>
        </div>
   
    </div>
  );
};

export default Register;
