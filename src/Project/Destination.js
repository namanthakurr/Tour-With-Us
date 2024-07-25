import React from "react";

function Destination() {
  return (
    <>
      <div className="Destination">
        <div className="Destination-info">
          <div className="HEADER">
            <h3>QUICK GETAWAY DESTINATIONS</h3>
            <p>Ideal for 3-5 days trip</p>
          </div>
          <div className="Countries-Distribution">
            <div className="Maldives">
              <img
                src="#"
                alt="coming soon..."
                style={{
                  width: "420px",
                  height: "200px",
                  borderRadius: "20px",
                }}
              />
              <p className="Info">
                MALDIVES
                <p>
                  From <span>&#8377;</span> 89,999/-
                </p>
              </p>
              <div className="MAld">
                <div>
                  <img
                    src="#"
                    alt="coming soon..."
                    style={{
                      width: "200px",
                      height: "250px",
                      borderRadius: "20px",
                    }}
                  />
                  <p className="Info-1">
                    BAHRAIN
                    <p>
                      From <span>&#8377;</span> 55,555/-
                    </p>
                  </p>
                </div>
                <div>
                  <img
                    src="#"
                    alt="coming soon..."
                    style={{
                      width: "200px",
                      height: "250px",
                      borderRadius: "20px",
                    }}
                  />
                  <p className="Info-2">
                    PARIS
                    <p>
                      From <span>&#8377;</span> 1,25,000/-
                    </p>
                  </p>
                </div>
              </div>
            </div>
            <div className="LA">
              <img
                src="#"
                alt="coming soon..."
                style={{
                  width: "342px",
                  height: "469px",
                  borderRadius: "20px",
                }}
              />
              <p className="Info-3">
                LA
                <p>
                  From <span>&#8377;</span> 94,999/-
                </p>
              </p>
            </div>
            <div className="Mexico">
              <div>
                <img
                  src="#"
                  alt="coming soon..."
                  style={{
                    width: "360px",
                    height: "230px",
                    borderRadius: "20px",
                  }}
                />
                <p className="Info-4">
                  MEXICO
                  <p>
                    From <span>&#8377;</span> 70,899/-
                  </p>
                </p>
              </div>
              <div>
                <img
                  src="#"
                  alt="coming soon..."
                  style={{
                    width: "360px",
                    height: "230px",
                    borderRadius: "20px",
                  }}
                />
                <p className="Info-5">
                  SPAIN
                  <p>
                    From <span>&#8377;</span> 84,999/-
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Destination;
