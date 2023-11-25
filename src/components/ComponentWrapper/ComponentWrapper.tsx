import React from "react";
import { FC, PropsWithChildren } from "react";
import "./wrapper.css";

export const ComponentWrapper: FC<PropsWithChildren<any>> = ({ children }) => {
  return <div className="component-wrapper">{children}</div>;
};
