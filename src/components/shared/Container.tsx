import { TChildren } from "../../types";

const Container = ({ children }: TChildren) => {
  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-4 px-2">
      {children}
    </div>
  );
};

export default Container;
