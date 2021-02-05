import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './MultiSelect.scss';
import Item from '../item';

class MultiSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: "Please select an category",
      input: this.props.input || '',
      options: this.props.options || [],
      choosen: [],
      isOpen: false,
      page: 0
    }
    this.searchRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = e => {
    if (
      e.target.classList.toString() === ''
    ) {
      this.setState({
        isOpen: false
      });
    }
  };

  handleInputClick = () => {
    this.setState({
        isOpen: true,
        page: 0
      })
  };

  handleSearch = (e) => {
    e.preventDefault();
    this.setState({
        input: this.searchRef.current.value
      })
  };

  handleOptionClick = e => {
    e.preventDefault();
    this.setState({
      choosen: [...this.state.choosen, e.target.getAttribute("data-name")],
      isOpen: false
    });
  };

  handleIncrementPage = () => {
    let { page, options } = this.state;

    if (options.length >= (page + 1) * 2)
      this.setState({
        page: ++page
      });
  }

  handleDecrementPage = () => {
    let { page } = this.state;

    if (page > 0)
      this.setState({
        page: --page
      });
  }

  render() {
    const { options } = this.props;
    const { isOpen, placeholder, page, input, choosen } = this.state;
    const items = options.slice(page * 2, page * 2 + 2)
      .filter(item => item.name.includes(input))
      .map(item =>
        <li
          className="multiselect-option"
          data-name={item.name}
          key={item.id}
          onClick={this.handleOptionClick}
        >
          {item.name}
        </li>
      );
    const choosenItems = choosen && choosen.map((item, index) =>
      <Item index={index} name={item} choosen={this.props.choosen} />
    )
    return (
      <div className="multiselect-container">
        {choosenItems}
        <input className="search-field" autoComplete="on" type="search"
          placeholder={placeholder} ref={this.searchRef} onChange={this.handleSearch} onClick={this.handleInputClick}></input>
        {isOpen && (
          <div className='multiselect-page'>
            <ul className="multiselect-options">
              {items}
            </ul>
            <div className="pagination">
              <span>
                <FontAwesomeIcon icon="arrow-left" className="arrow-left" onClick={this.handleDecrementPage} />
              </span>
              <span>{page + 1}</span>
              <span>
                <FontAwesomeIcon icon="arrow-right" className="arrow-right" onClick={this.handleIncrementPage} />
              </span>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default MultiSelect;
