import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const FormRegister = () => {
  const navigate = useNavigate();
  const { actions } = useContext(Context);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: 0,
    address: "",
  });

  const handleInput = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    actions.makeContact(userInfo);
    setUserInfo({
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
      <h2 className="text-center mb-4">New contact</h2>
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
          value={userInfo.name}
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
          value={userInfo.email}
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
          value={userInfo.phone}
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
          value={userInfo.address}
          aria-describedby="addressHelp"
          onInput={handleInput}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary form-control mb-3"
        onClick={handleClick}
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

export default FormRegister;
