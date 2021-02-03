import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './MultiSelect.scss';

class MultiSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: "Please select an category",
      input: this.props.input || '',
      options: this.props.options || [],
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

  handleSearch = (e) => {
    e.preventDefault();
    this.setState({
        input: this.searchRef.current.value,
        isOpen: true
      })
  };

  handleOptionClick = e => {
    e.preventDefault();
    this.setState({
      item: e.target.getAttribute("data-name"),
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
    const { isOpen, placeholder, page, input } = this.state;
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
    return (
      <div className="multiselect-container">
        <input className="search-field" autoComplete="on" type="search"
          placeholder={placeholder} ref={this.searchRef} onChange={this.handleSearch}></input>
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
