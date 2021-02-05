import React from "react";
import './Item.scss';

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  handleRemove = e => {
    e.target.getAttribute("data-name");
  }

  render() {
    const { index, name } = this.props;
    return (
      <li
        className="multiselect-item"
        data-name={name}
        key={index}
      >
        <span>{name}</span>
        <span className="remove" onClick={this.handleRemove}>X</span>          
      </li>

    );
  }
}

export default Item;
