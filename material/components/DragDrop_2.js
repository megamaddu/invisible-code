import React from "react";

class DragDrop extends React.Component {
  static initialState = {
    isDragging: false,
    isOverTarget: false
  };

  state = initialState;

  onDrop = e => {
    // handle files...

    this.setState(initialState);
  };

  render() {
    return <div>[Drop area]</div>;
  }
}

export default DragDrop;
