import React from "react";
import './appDownload.scss'
import FOOTER from "./../assets/image/footer.png";
import GOOGLE from "./../assets/image/google.png";
import APPLE from "./../assets/image/apple.png";

const AppDownload: React.FC = () => {
  return (
    <div className="container my-5">
      <h2 className="mb-4">Download our app now</h2>
      <div className="download-card">
        <div className="row position-relative align-items-center">
          <div className="card shadow-lg">
            <div className="card-body p-4">
              <div className="row p-4 align-items-center">
                <div className="col-md-6">
                  <img
                    src={FOOTER}
                    alt="App Screenshot"
                    className="img-fluid bottom-0 footer-img"
                    style={{ zIndex: 1 }}
                  />
                </div>
                <div className="col-md-6">
                  <p className="download-card-text h4">
                    Boost your productivity with the BHIVE Workspace app.
                    Elevate your workspace, collaborate efficiently, and unlock
                    exclusive perks.
                  </p>
                  <div className="mt-4 d-flex">
                    <a href="/" className="me-3">
                      <img
                        src={GOOGLE}
                        alt="Get it on Google Play"
                        height="40"
                      />
                    </a>
                    <a href="/">
                      <img
                        src={APPLE}
                        alt="Download on the App Store"
                        height="40"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
