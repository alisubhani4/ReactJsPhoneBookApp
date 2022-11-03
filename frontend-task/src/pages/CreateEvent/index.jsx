import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import "./index.scss";

const CreateEvent = () => {
  const [eventInfo, setEventInfo] = useState({
    eventName: "",
    hostName: "",
    startDate: "",
    endDate: "",
    location: "",
    eventPhoto: "",
  });

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setEventInfo({ ...eventInfo, [name]: value });
  };
  console.log("values=", eventInfo);

  useEffect(() => {
    localStorage.setItem("eventInfo", JSON.stringify(eventInfo));
  }, [eventInfo]);

  return (
    <div className="create-event">
      <div className="main-text">
        <div className="dark-text">Create an</div>
        <div className="gradient-text">Event </div>
        <div className="dark-text  section-bottom">For loved ones</div>
        <div className="summary-text">Please enter event details below</div>
      </div>
      <div className="event-form">
        <div className="container">
          <form>
            <div className="group">
              <label className="form-input-label">
                Event Name <div className="required">*</div>
              </label>
              <input
                className="form-input"
                name="eventName"
                type="text"
                id="event-name"
                onChange={handleChange}
                value={eventInfo.eventName}
                required
              />
            </div>

            <div className="group">
              <label className="form-input-label">
                Host Name <div className="required">*</div>
              </label>
              <input
                className="form-input"
                name="hostName"
                type="text"
                id="host-name"
                onChange={handleChange}
                value={eventInfo.hostName}
                required
              />
            </div>

            <div className="group">
              <label className="form-input-label">
                Start Date <div className="required">*</div>
              </label>
              <input
                className="form-input"
                name="startDate"
                type="text"
                id="start-date"
                onChange={handleChange}
                value={eventInfo.startDate}
                required
              />
            </div>
            <div className="group">
              <label className="form-input-label">
                End Date <div className="required">*</div>
              </label>
              <input
                className="form-input"
                name="endDate"
                type="text"
                id="end-date"
                onChange={handleChange}
                value={eventInfo.endDate}
                required
              />
            </div>

            <div className="group">
              <label className="form-input-label">
                Location <div className="required">*</div>
              </label>
              <input
                className="form-input"
                name="location"
                type="text"
                id="location"
                onChange={handleChange}
                value={eventInfo.location}
                required
              />
            </div>
            <Link to="/event">
              <input className="create-btn" type="submit" value="Next"></input>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CreateEvent;
