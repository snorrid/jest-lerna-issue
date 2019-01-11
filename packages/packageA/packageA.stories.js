import React from "react";
import ReactDOM from "react-dom";
import { storiesOf } from "@storybook/react";
import ComponentA from "./componentA/componentA";
//ReactDOM.createPortal = node => React.createElement("PortalMock", null, node); // eslint-disable-line
storiesOf("PackageA", module).add("ComponentA", () => {
  return <ComponentA />;
});
