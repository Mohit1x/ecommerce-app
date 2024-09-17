import { LOADING_SHIMMER } from "../utils/constants";

const Shimmer = () => {
  return (
    <div>
      <img src={LOADING_SHIMMER} className="mx-auto" />
    </div>
  );
};

export default Shimmer;
