import { THeading } from "@/types";
import { FaGreaterThan } from "react-icons/fa";
import { MdOutlineHome } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Heading = ({ to, title, color, padding }: THeading) => {
  const navigate = useNavigate();
  return (
    <div className={`flex items-center gap-2 pt-${padding}`}>
      <MdOutlineHome
        onClick={() => navigate(to)}
        size={20}
        className="text-primary cursor-pointer"
      />
      <FaGreaterThan className={color} />
      <span className={`text-lg ${color}`}>{title}</span>
    </div>
  );
};

export default Heading;
