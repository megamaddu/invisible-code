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
    return <div onDrop={this.onDrop}>{children(this.state)}</div>;
  }
}
