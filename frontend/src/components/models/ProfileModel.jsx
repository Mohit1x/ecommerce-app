import AddressModel from "./AddressModel";
import InfoModel from "./InfoModel";

const ProfileModel = ({ onClose, model, data, variant }) => {
  const allModels = {
    info: InfoModel,
    address: AddressModel,
  };

  const SelectedModel = allModels[model];

  return (
    <div
      className="fixed inset-0 bg-gray-900/60 flex items-center justify-center z-50 transition-all duration-300"
      onClick={(e) => onClose(e)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[50%] bg-white rounded p-4 shadow-lg"
      >
        <SelectedModel data={data} onClose={onClose} variant={variant} />
      </div>
    </div>
  );
};

export default ProfileModel;
