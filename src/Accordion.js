import React from "react";

class Accordion extends React.Component {
  // constructor(props) {
  //   super(props);
  state = {
    index: -1,
    active: false,
  };
  // this.expandClick = this.expandClick.bind(this);

  expandClick  (ind)   {
    ind === this.state.index
      ? this.setState({ active: false, index: -1 })
      : this.setState({ active: true, index: ind });
  }

  render() {
    const userExpand = this.props.sections.map((section, index) => (
      <li key={index}>
        <button onClick={() => this.expandClick(index)}>{section.title}</button>
        {this.state.active && this.state.index === index ? (
          <p>{section.content}</p>
        ) : (
          ""
        )}{" "}
      </li>
    ));
    return (
      <div>
        <ul> {userExpand} </ul>
      </div>
    );
  }

  static defaultProps = { section: "" };
}

export default Accordion;
