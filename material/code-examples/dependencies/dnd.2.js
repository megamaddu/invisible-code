class FileUpload extends React.Component {
  static initialState = {
    isDragging: false,
    isOverTarget: false,
    unrelatedBusinessLogic: ...
  };

  state = initialState;

  onDrop = e => {
    // handle files...

    this.setState(initialState);
  };

  render() {
    return ...
  }
}
