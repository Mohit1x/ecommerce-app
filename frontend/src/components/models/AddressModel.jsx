import { Edit } from "../address-form/Edit";
import { AddAddress } from "../address-form/AddAddress";

const AddressModel = ({ data, onClose, variant }) => {
  console.log(variant);
  const addressForms = {
    edit: Edit,
    create: AddAddress,
  };

  const SelectedVarient = addressForms[variant];
  return (
    <div>
      <SelectedVarient data={data} onClose={(e) => onClose(e)} />
    </div>
  );
};

export default AddressModel;
