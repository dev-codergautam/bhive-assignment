import React from "react";
import "./spaceOverview.scss";
import DIRECTION from "./../assets/image/assistant_direction.png";

import SPACE1 from "./../assets/image/space/Rectangle1.png";

interface SpaceCard {
  title: string;
  location: string;
  image: string;
  type: string;
  dayPass: number;
  bulkPass: number;
}

const spaceCards: SpaceCard[] = [
  {
    title: "Workspace",
    location: "HSR Sector 6, Service Road",
    image: "workspace.jpg",
    type: "Workspace",
    dayPass: 249,
    bulkPass: 2400,
  },
  {
    title: "Workspace",
    location: "HSR Sector 6, Service Road",
    image: "workspace.jpg",
    type: "Workspace",
    dayPass: 249,
    bulkPass: 2400,
  },
  {
    title: "Workspace",
    location: "HSR Sector 6, Service Road",
    image: "workspace.jpg",
    type: "Workspace",
    dayPass: 249,
    bulkPass: 2400,
  },
  {
    title: "Workspace",
    location: "HSR Sector 6, Service Road",
    image: "workspace.jpg",
    type: "Workspace",
    dayPass: 249,
    bulkPass: 2400,
  },
  {
    title: "Workspace",
    location: "HSR Sector 6, Service Road",
    image: "workspace.jpg",
    type: "Workspace",
    dayPass: 249,
    bulkPass: 2400,
  },
  // Add the other 5 cards here with their respective details
];

const SpaceOverview: React.FC = () => {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Our Space Overview</h1>
      <div className="row row-cols-1 row-cols-md-3  g-4">
        {spaceCards.map((card, index) => (
          <div key={index} className="col">
            <div className="card space-card p-2">
              <div className="d-flex justify-content-between align-items-center">
                <div className="title ">
                  <h5 className="fw-semibold">HSR Sector 6, Service Road</h5>
                </div>
                <div className="direction-box">
                  <img alt="direction" src={DIRECTION} />
                </div>
              </div>
              <div className="space-image position-relative">
                <img src={SPACE1} className="w-100 mt-2" alt="space1" />
                <span className="position-absolute end-0 badge bg-light m-2">
                  <i className="bi bi-info-circle"></i>
                </span>
                <span className="position-absolute start-0 badge bg-warning m-2">
                  <i className="bi bi-building"></i> {card.type}
                </span>
              </div>
              <div className="row row-cols-2 mt-4">
                <div className="d-flex w-100">
                  <div
                    className="card me-3"
                    style={{ width: "50%", backgroundColor: "#f8f9fa" }}
                  >
                    <div className="card-body p-3 d-flex justify-content-between align-items-center">
                      <div className="position-relative">
                        <h5 className="card-title mb-0">Bulk Pass</h5>
                        <p className="card-text mb-0 mt-2">
                          <span className="h5 fw-bold">₹ 2400</span>
                          <small>/ 10 Days</small>
                        </p>
                      </div>
                      <div className="">
                        <span className="h4 mb-0">&raquo;&raquo;</span>
                      </div>
                    </div>
                  </div>

                  <div
                    className="card position-realtive"
                    style={{ width: "50%", backgroundColor: "#ffc107" }}
                  >
                    <span
                      className="position-absolute badge discount bg-dark"
                    >
                      20% Discount
                    </span>
                    <div className="card-body p-3 d-flex justify-content-between align-items-center">
                      <div className="position-relative">
                        <h5 className="card-title mb-0">Bulk Pass</h5>
                        <p className="card-text mb-0 mt-2">
                          <span className="h5 fw-bold">₹ 2400</span>
                          <small>/ 10 Days</small>
                        </p>
                      </div>
                      <div className="">
                        <span className="h4 mb-0">&raquo;&raquo;</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpaceOverview;
