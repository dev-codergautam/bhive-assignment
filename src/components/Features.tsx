import React from "react";
import './features.scss'
import CommunityEvents from "./../assets/image/icon/community-events.png";
import GymFacilities from "./../assets/image/icon/gym-facilities.png";
import HighSpeedWiFi from "./../assets/image/icon/High-Speed-WiFi.png";
import CafeTeaBar from "./../assets/image/icon/Cafe-Tea-Bar.png";
import Affordable from "./../assets/image/icon/Affordable.png";
import ComfortLounges from "./../assets/image/icon/Comfort-Lounges.png";
import QuickBooking from "./../assets/image/icon/Quick-Booking.png";
import SportsArea from "./../assets/image/icon/Sports-Area.png";

const features = [
  { name: "Community Events", icon: CommunityEvents },
  { name: "Gym Facilities", icon: GymFacilities },
  { name: "High Speed WiFi", icon: HighSpeedWiFi },
  { name: "Cafe & Tea Bar", icon: CafeTeaBar },
  { name: "Affordable", icon: Affordable },
  { name: "Comfort Lounges", icon: ComfortLounges },
  { name: "Quick Booking", icon: QuickBooking },
  { name: "Sports Area", icon: SportsArea },
];

const Features: React.FC = () => {
  return (
    <div className="container my-5">
      <h2 className=" mb-4">Why Choose us?</h2>
      <div className="row">
        {features.map((feature, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-6 text-center mb-2">
            <div className="features-box d-flex align-items-center flex-column flex-md-row">
              <div className="p-3" style={{ width: "60px", height: "60px" }}>
                <img
                  alt={feature.name}
                  src={feature.icon}
                  className=""
                  style={{ width: 24 }}
                />
              </div>
              <div className="text-muted">{feature.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
