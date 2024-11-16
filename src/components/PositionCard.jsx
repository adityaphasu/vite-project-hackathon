import React from "react";

const PositionCard = ({ position }) => {
  return (
    <div className="position-card">
      <div className="heading-container">
        <h3>Position Details</h3>
      </div>
      <div className="position-field">
        <span>Owner:</span> {position.positionOwner}
      </div>
      <div className="position-field">
        <span>Collateral (USD):</span> ${position.collateralInUSD}
      </div>
      <div className="position-field">
        <span>Position Type:</span> {position.isLong ? "Long" : "Short"}
      </div>
      <div className="position-field">
        <span>Creation Size (USD):</span> ${position.creationSizeInUSD}
      </div>
      <div className="position-field">
        <span>Position ID:</span> {position.positionID}
      </div>
      <div className="position-field">
        <span>Size:</span> {position.size}
      </div>
      <div className="position-field">
        <span>Creation Time:</span> {new Date(position.creationTime * 1000).toLocaleString()}
      </div>
    </div>
  );
};

export default PositionCard;
