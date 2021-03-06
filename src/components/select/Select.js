import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Select.scss';
import { toggleCategoryItem } from './selectActions';
import { convertArrayToObject, createObjectRegistry } from '../shared';
import { getAllCategories } from '../../reducers/categoryReducer';
import { addUserAction } from '../../commonActions';

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "Please select an category",
      isOpen: false,
    }
  }

  componentDidMount() {
    this.props.getAll();
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = e => {
    this.props.registry(createObjectRegistry('handleClickOutside', 'Select'));

    if (
      !e.target.classList.toString().match(/select-option|selected-text/i)
    )
      this.setState({
        isOpen: false
      });
  };

  handleListDisplay = () => {
    this.props.registry(createObjectRegistry(
      'handleListDisplay',
      this.state.isOpen ? 'Close': 'Open'
    ));

    this.setState({
        isOpen: !this.state.isOpen
      });
  };

  handleOptionClick = e => {
    e.preventDefault();
    const data = parseInt(e.target.getAttribute("data"), 10);
    this.props.toggleCategory(data);

    if (!e.target.getAttribute("flags"))
      this.props.registry(createObjectRegistry('handleOptionClick', data));

    this.setState({
      isOpen: false
    });
  };

  render() {
    const { options, choosen } = this.props;
    const { isOpen } = this.state;
    const optionsById = convertArrayToObject(options, 'id');
    const items = options.map(item => 
      <li
        className="select-option"
        data={item.id}
        key={item.id}
        flags={item.flags}
        onClick={this.handleOptionClick}
      >
        {item.name}
      </li>
    );
    const showItem = optionsById[choosen]
      ? optionsById[choosen].name
      : this.state.item;
    return (
      <div className="select-container">
        <div
          className="selected-text"
          onClick={this.handleListDisplay}
        >
          {showItem}
          { isOpen
            ? <FontAwesomeIcon icon="angle-up" />
            : <FontAwesomeIcon icon="angle-down" />
          }
        </div>
        {isOpen && (
          <ul className="select-options">
            {items}
          </ul>
        )}
      </div>
    );
  }
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  choosen: PropTypes.number,
  toggleCategory: PropTypes.func,
  registry: PropTypes.func,
};

Select.defaultProps = {
  options: [],
  choosen: undefined,
  toggleCategory: () => undefined,
  registry: () => undefined,
};

const mapStateToProps = store => ({
  options: store.category.items,
  choosen: store.category.choosen,
});

const mapDispatchToProps = dispatch => ({
  getAll: () => dispatch(getAllCategories()),
  toggleCategory: item => dispatch(toggleCategoryItem(item)),
  registry: item => dispatch(addUserAction(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Select);
