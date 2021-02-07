import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Item.scss';
import { createObjectRegistry } from '../shared';
import { removeChoosenItem } from '../multiselect/multiselectActions';
import { addUserAction } from '../../commonActions';

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  handleRemove = e => {
    const id = +e.target.getAttribute("id");
    this.props.removeChoosenItem(id);

    this.props.registry(createObjectRegistry(
      'handleRemoveItem',
      id
    ));
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
        <span className="remove" id={index} onClick={this.handleRemove}>X</span>          
      </li>

    );
  }
}

Item.propTypes = {
  removeChoosenItem: PropTypes.func,
  registry: PropTypes.func,
};

Item.defaultProps = {
  removeChoosenItem: () => undefined,
  registry: () => undefined,
};


const mapDispatchToProps = dispatch => ({
  removeChoosenItem: item => dispatch(removeChoosenItem(item)),
  registry: item => dispatch(addUserAction(item)),
});

export default connect(null, mapDispatchToProps)(Item);
