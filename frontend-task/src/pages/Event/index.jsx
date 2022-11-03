import BirthdayImg from "../../assets/images/png/birthdayEvent.png";
import { MdDateRange } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

import CONSTANTS from "../../utils/constants/CONSTANTS";

import "./index.scss";

const Event = () => {
  const eventDetails = JSON.parse(localStorage.getItem("eventInfo"));

  console.log("local event data=", eventDetails);
  console.log("local event name=", eventDetails.eventName);

  return (
    <div className="event-page">
      <img className="birthday-img" src={BirthdayImg} alt="" />
      <div className="text-content">
        <div className="event-title">{eventDetails.eventName}</div>
        <div className="tagline">Hosted by {eventDetails.hostName}</div>
        <div className="image-text">
          <MdDateRange className="icon-img" style={CONSTANTS.EXTRA_BIG_ICON} />
          <div className="group-text">
            <div className="text">{eventDetails.startDate} to</div>
            <div className="text">{eventDetails.endDate}</div>
          </div>
        </div>
        <div className="image-text">
          <IoLocationOutline className="icon-img" style={CONSTANTS.EXTRA_BIG_ICON} />
          <div className="group-text">
            <div className="text">{eventDetails.location}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Event;
