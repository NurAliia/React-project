import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Select.scss';

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "Please select an category",
      options: [],
      isOpen: false,
    }
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = e => {
    if (
      !e.target.classList.toString().match(/select-option|selected-text/i)
    ) {
      this.setState({
        isOpen: false
      });
    }
  };

  handleListDisplay = () => {
    this.setState({
        isOpen: !this.state.isOpen
      })
  };

  handleOptionClick = e => {
    e.preventDefault();
    this.setState({
      item: e.target.getAttribute("data-name"),
      isOpen: false
    });
  };

  render() {
    const { options } = this.props;
    const { isOpen, item } = this.state;
    const items = options.map(item => 
      <li
        className="select-option"
        data-name={item.name}
        key={item.id}
        onClick={this.handleOptionClick}
      >
        {item.name}
      </li>
    );
    return (
      <div className="select-container">
        <div
          className="selected-text"
          onClick={this.handleListDisplay}
        >
          {item}
          { isOpen ? <FontAwesomeIcon icon="angle-up" /> : <FontAwesomeIcon icon="angle-down" /> }
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

export default Select;
