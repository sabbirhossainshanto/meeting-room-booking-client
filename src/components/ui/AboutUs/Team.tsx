import assets from "@/assets";
import { teamData } from "@/static/teamData";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <div className="container py-14">
      <h3 className="text-2xl uppercase mb-4 text-center">
        Meet with our Team
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {teamData?.map((team, i) => (
          <div key={i} className="group">
            <div className="team_img rounded-lg overflow-hidden relative">
              <img
                loading="lazy"
                src={team.image}
                className="w-100 rounded-lg"
                alt="team"
              />
              <div className="flex items-center gap-2 absolute left-1/2 -translate-x-1/2 bottom-0 opacity-0 group-hover:opacity-100 group-hover:bottom-[16px] transition-all duration-300 z-10">
                <Link
                  to=""
                  className="w-6 h-6  t rounded-sm flex justify-center items-center"
                >
                  <img src={assets.facebook} alt="" />
                </Link>
                <Link
                  to=""
                  className="w-6 h-6  rounded-sm flex justify-center items-center"
                >
                  <img src={assets.twitter} alt="" />
                </Link>
                <Link
                  to=""
                  className="w-6 h-6  text-white rounded-sm flex justify-center items-center"
                >
                  <img src={assets.instagram} alt="" />
                </Link>
              </div>
            </div>
            <div className="mt-5 text-center">
              <Link to="">
                <h5 className="mt-5">{team.name}</h5>
              </Link>
              <p className="text_sm">{team.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
