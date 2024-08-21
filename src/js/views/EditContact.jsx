import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const EditContact = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const [values, setValues] = useState({
    name: store.currentContact.name,
    email: store.currentContact.email,
    phone: store.currentContact.phone,
    address: store.currentContact.address,
  });
  const handleInput = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };

  const handleChange = () => {
    actions.updateContac(store.currentContact.id, values);
    setValues({
      name: "",
      email: "",
      phone: 0,
      address: "",
    });
    navigate("/");
  };

  return (
    <form
      className="w-75 mx-auto mt-lg-5 mt-3 p-4 border rounded shadow-sm bg-light"
      onSubmit={(event) => event.preventDefault()}
    >
      <h2 className="text-center mb-4">Edit Contact</h2>
      <div className="mb-3">
        <label htmlFor="name" className="form-label fw-bolder">
          Full Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          aria-describedby="nameHelp"
          name="name"
          value={values.name}
          placeholder={store.currentContact.name}
          onInput={handleInput}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label fw-bolder">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={values.email}
          placeholder={store.currentContact.email}
          aria-describedby="emailHelp"
          onInput={handleInput}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label fw-bolder">
          Phone
        </label>
        <input
          type="number"
          className="form-control"
          id="phone"
          name="phone"
          value={values.phone}
          placeholder={store.currentContact.phone}
          aria-describedby="phoneHelp"
          onInput={handleInput}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="address" className="form-label fw-bolder">
          Address
        </label>
        <input
          type="text"
          className="form-control"
          id="address"
          name="address"
          value={values.address}
          placeholder={store.currentContact.address}
          aria-describedby="addressHelp"
          onInput={handleInput}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary form-control mb-3"
        onClick={handleChange}
      >
        Save
      </button>
      <div className="text-center">
        <Link to="/" className="btn btn-link">
          or get back to contacts
        </Link>
      </div>
    </form>
  );
};

export default EditContact;
