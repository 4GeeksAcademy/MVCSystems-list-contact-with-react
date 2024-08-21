import React, { useContext } from "react";
import { Context } from "../store/appContext";
import ConfirmationModal from "./ConfirmationModal.jsx";
import { useNavigate } from "react-router-dom";

const ContactCard = ({ name, address, phone, email, id }) => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  const userValues = {
    name: name,
    email: email,
    phone: phone,
    address: address,
    id: id,
  };

  const handleCLick = () => {
    actions.deleteContac(id);
    console.log(id + " eliminado correctamente");
  };

  const handleEditing = () => {
    actions.setCurrentEdit(userValues);
    navigate("/EditContact");
  };

  return (
    <div className="d-flex align-items-center border rounded p-4 mb-0">
      <div className="col-3 text-center">
        <img
          src="https://picsum.photos/id/91/3504/2336.jpg"
          className="img-fluid rounded-circle mx-auto"
          style={{
            width: "130px",
            height: "130px",
            objectFit: "cover",
            border: "3px solid #ddd",
          }}
        />
      </div>
      <div className="col-9 d-flex flex-column justify-content-between">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h2 className="h5 mb-2">{name}</h2>
          </div>
          <div className="d-flex align-items-end gap-3">
            <i className="bi bi-pencil-fill" onClick={handleEditing}></i>
            <ConfirmationModal id={`contact-${id}`} handleCLick={handleCLick} />
          </div>
        </div>
        <div>
          <p className="text-muted mb-2">
            <i className="bi bi-geo-alt-fill me-2"></i>
            {address}
          </p>
          <p className="text-muted mb-2">
            <i className="bi bi-telephone-fill me-2"></i>
            {phone}
          </p>
          <p className="text-muted mb-2">
            <i className="bi bi-envelope-fill me-2"></i>
            {email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
