import React from "react";
import { connect } from 'react-redux';
import { removeChoosenItem } from '../multiselect/multiselectActions';
import './Item.scss';

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  handleRemove = e => {
    const id = e.target.getAttribute("data");
    this.props.removeChoosenItem(+id);
  }

  render() {
    const { index, name } = this.props;
    return (
      <li
        className="multiselect-item"
        data={name}
        key={index}
      >
        <span>{name}</span>
        <span className="remove" onClick={this.handleRemove}>X</span>          
      </li>

    );
  }
}

const mapDispatchToProps = dispatch => ({
  removeChoosenItem: item => dispatch(removeChoosenItem(item)),
});

export default connect(mapDispatchToProps)(Item);
