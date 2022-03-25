import React, { ReactComponentElement } from "react";
import { RouteProps } from "react-router";

export interface IPrivateRouterProps extends RouteProps {
  Component: React.ComponentType;
}