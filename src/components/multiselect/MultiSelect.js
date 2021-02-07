import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toggleItem, changeSearch } from './multiselectActions';
import './MultiSelect.scss';
import Item from '../item';
import { convertArrayToObject } from '../shared';
import { getAllItems } from '../../reducers/itemReducer';

class MultiSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: "Please select items",
      filtered: [],
      isOpen: false,
      page: 0
    }
    this.searchRef = React.createRef();
  }

  componentDidMount() {
    this.props.getAll();
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  componentWillReceiveProps() {
    this.setState((_, props) => ({
      filtered: props.options.filter(item =>
        item.name.includes(props.search)
          && !props.choosen.includes(item.id)
            && (!props.category || item.parent_id === props.category)
      )
    }));
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
    this.props.changeSearch(this.searchRef.current.value);
  };

  handleOptionClick = e => {
    e.preventDefault();
    this.props.toggleItem(+e.target.getAttribute("data"));
    this.setState({
      isOpen: false
    });
  };

  handleIncrementPage = () => {
    let { page, filtered } = this.state;

    if (filtered.length >= (page + 1) * 2)
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
    const { choosen, options } = this.props;
    const { isOpen, placeholder, page, filtered } = this.state;
    const items = filtered.slice(page * 2, page * 2 + 2)
      .map(item =>
        <li
          className="multiselect-option"
          data={item.id}
          key={item.id}
          onClick={this.handleOptionClick}
        >
          {item.name}
        </li>
      );
    const optionsById = convertArrayToObject(options, 'id');
    const choosenItems = choosen && choosen.map(key => optionsById[key] &&
      <Item index={key} name={optionsById[key].name} choosen={this.props.choosen} />
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

MultiSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  choosen: PropTypes.arrayOf(PropTypes.number),
  search: PropTypes.string,
  category: PropTypes.number,
  toggleItem: PropTypes.func,
  changeSearch: PropTypes.func,
};

MultiSelect.defaultProps = {
  options: [],
  choosen: [],
  search: '',
  category: undefined,
  toggleItem: () => undefined,
  changeSearch: () => undefined,
};

const mapStateToProps = store => ({
  options: store.item.items,
  choosen: store.item.choosen,
  search: store.item.search,
  category: store.category.choosen,
});

const mapDispatchToProps = dispatch => ({
  getAll: () => dispatch(getAllItems()),
  toggleItem: item => dispatch(toggleItem(item)),
  changeSearch: str => dispatch(changeSearch(str)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MultiSelect);
