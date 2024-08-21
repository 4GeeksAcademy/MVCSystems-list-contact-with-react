import React from "react";

const ConfirmationModal = ({ id, handleCLick }) => {
  const modalId = `modal-${id}`;
  return (
    <>
      <i
        className="bi bi-trash-fill"
        data-bs-toggle="modal"
        data-bs-target={`#${modalId}`}
        style={{ cursor: "pointer" }}
      />

      <div
        className="modal fade"
        id={modalId}
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-warning text-dark">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                <i className="bi bi-exclamation-triangle-fill me-2"></i>
                ¿Estás seguro de borrar este contacto?
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              El registro se borrará de forma permanente.
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                No
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleCLick}
                data-bs-dismiss="modal"
              >
                Sí
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmationModal;
