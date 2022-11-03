import { useState } from "react";

import "./index.scss";

const CreateContact = ({ addUser }) => {
  const initialState = {
    userFirstName: "",
    userLastName: "",
    userPhone: "",
  };

  const [contactInfo, setContactInfo] = useState(initialState);

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setContactInfo({ ...contactInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contactInfo.userFirstName || !contactInfo.userLastName || !contactInfo.userPhone) return;
    addUser(contactInfo);
    setContactInfo(initialState);
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit} className="form-container">
        <label>First name:</label>
        <br />
        <input
          className="form-inputs"
          name="userFirstName"
          type="text"
          value={contactInfo.userFirstName}
          onChange={handleChange}
        />
        <br />
        <label>Last name:</label>
        <br />
        <input
          className="form-inputs"
          name="userLastName"
          type="text"
          value={contactInfo.userLastName}
          onChange={handleChange}
        />
        <br />
        <label>Phone:</label>
        <br />
        <input
          className="form-inputs"
          name="userPhone"
          type="text"
          value={contactInfo.userPhone}
          onChange={handleChange}
        />
        <br />
        <input className="form-submit-btn" type="submit" value="Add User" />
      </form>
    </div>
  );
};
export default CreateContact;
