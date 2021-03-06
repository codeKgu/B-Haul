import React from 'react';
import './Sidebar.css';
import downArrow from './sort-down.svg';

import SidebarItem from './SidebarItem/SidebarItem';
import FiltersPanel from './FiltersPanel/FiltersPanel';
import SidebarDropdown from './SidebarItem/SidebarDropdown.js';

class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {filtersVisible: false};
  }

  handleClick() {
    this.setState(state => ({filtersVisible: !state.filtersVisible}));
  }

  render() {
    const sidebarItemList = this.props.items.map((item, index) =>
      <div>
        <SidebarItem
          item={item}
          index={index}
        />
        <SidebarDropdown 
          item={item}
          index={index}
        />
      </div>
    );

    return (
      <div className="sidebar-container">
        <span id="show-filter-header" onClick={this.handleClick}>
          <img style={{transform: this.state.filtersVisible ? 'rotate(180deg)' : ''}} className="sort-arrow" height="10px" src={downArrow} />
          {this.state.filtersVisible ? "Hide filters" : "Show filters"}
        </span>
        {this.state.filtersVisible ? <FiltersPanel globalFilters={this.props.globalFilters} localFilters={this.props.localFilters} /> : sidebarItemList}
      </div>
    );
  }
}

export default Sidebar;
