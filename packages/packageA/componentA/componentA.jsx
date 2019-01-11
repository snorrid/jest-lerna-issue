import React from "react";
import ReactDOM from "react-dom";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.modalRoot = document.createElement("div");
    this.modalRoot.className = "react-container";
    document.body.appendChild(this.modalRoot);
  }

  componentDidMount() {
    document.body.classList.add(this.bodyClass);
  }

  componentWillUnmount() {
    document.body.classList.remove(this.bodyClass);
    document.body.removeChild(this.modalRoot);
  }

  render() {
    return ReactDOM.createPortal(<div>Hello world</div>, this.modalRoot);
  }
}

export default Modal;
