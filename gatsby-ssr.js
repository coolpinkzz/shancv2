import * as React from "react";

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script key="headway-widget" src="https://cdn.headwayapp.co/widget.js" />,
  ]);
};
