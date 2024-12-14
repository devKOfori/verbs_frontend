import React from "react";

const APIErrors = ({ apiErrors }) => {
  return (
    <>
      <div className="api-errors error-message">
        <ul className="api-error-list">
          {apiErrors.map((apiError, index) => (
            <li key={index} className="api-error">
              {apiError}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default APIErrors;
