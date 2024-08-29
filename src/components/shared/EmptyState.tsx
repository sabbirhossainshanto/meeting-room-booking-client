import { useNavigate } from "react-router-dom";

type TEmptyProps = {
  link?: string;
  title: string;
  buttonTitle?: string;
};

const EmptyState = ({ link, title, buttonTitle }: TEmptyProps) => {
  const navigate = useNavigate();
  return (
    <div className="w-full py-20 flex flex-col justify-center items-center">
      <h1 className="text-2xl">{title} !</h1>
      {buttonTitle && link && (
        <button
          onClick={() => navigate(link)}
          className="default_btn rounded hover:bg-white hover:border-rose-500 hover:text-primary mt-4"
        >
          {buttonTitle}
        </button>
      )}
    </div>
  );
};

export default EmptyState;
