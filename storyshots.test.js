import initStoryshots, {
  multiSnapshotWithOptions
} from "@storybook/addon-storyshots";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.createPortal = node => React.createElement("PortalMock", null, node); // eslint-disable-line

initStoryshots({
  test: multiSnapshotWithOptions()
});
