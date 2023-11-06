/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";

export const Button = ({ buttonText = "Button Text", importance, className, divClassName }) => {
  const [state, dispatch] = useReducer(reducer, {
    importance: importance || "default",
  });

  return (
    <button
      className={`w-[121px] flex items-center gap-[10px] px-[20px] py-[16px] h-[49px] rounded-[8px] justify-center relative all-[unset] box-border ${
        state.importance === "importance-2"
          ? "[background:linear-gradient(180deg,rgba(148.97,0,219.07,0.76)_0%,rgba(227.57,0,150.2,0.69)_100%)]"
          : "[background:linear-gradient(180deg,rgb(90.45,0,133.01)_0%,rgba(135.14,0,89.19,0.96)_100%)]"
      } ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div
        className={`[font-family:'Varela_Round',Helvetica] w-fit mt-[-2.00px] tracking-[0] text-[16px] mr-[-4.00px] ml-[-4.00px] font-normal leading-[normal] whitespace-nowrap relative ${
          state.importance === "importance-2" ? "text-black" : "text-white"
        } ${divClassName}`}
      >
        {buttonText}
      </div>
    </button>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        importance: "importance-2",
      };

    case "mouse_leave":
      return {
        ...state,
        importance: "default",
      };
  }

  return state;
}

Button.propTypes = {
  buttonText: PropTypes.string,
  importance: PropTypes.oneOf(["importance-2", "default"]),
};
