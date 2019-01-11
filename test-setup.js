import registerRequireContextHook from "babel-plugin-require-context-hook/register";
import ReactDOM from "react-dom";
registerRequireContextHook();

ReactDOM.createPortal = node => React.createElement("PortalMock", null, node); // eslint-disable-line
