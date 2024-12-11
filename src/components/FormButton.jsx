import React from "react";
import { ClipLoader } from "react-spinners";
import { useState } from "react";

const FormButton = ({handleClick, btnClass, btnType, btnText, loading}) => {
  return (
    <div>
      <button
        onClick={(e) => handleClick(e)}
        className={btnClass}
        type={btnType}
      >
        {loading ? (
          <ClipLoader
            color="white"
            loading={loading}
            size={15}
            aria-label="Registering Account"
            data-testid="registerLoader"
          />
        ) : (
          btnText
        )}
      </button>
    </div>
  );
};

export default FormButton;
