import React from 'react';
import PropTypes from 'prop-types';
import './List.css';

const ListItem = (props) => {
  let listItemType;
  switch (props.modifier) {
    case 'inline':
    case 'middot':
      listItemType = 'p-inline-list__item';
      break;
    default:
      listItemType = 'p-list__item';
  }

  return (
    <li className={`${listItemType}${props.ticked ? ' is-ticked' : ''}`}>
      { props.children }
    </li>
  );
};

ListItem.defaultProps = {
  ticked: false,
  modifier: '',
};

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
  ticked: PropTypes.bool,
  modifier: PropTypes.string,
};

export default ListItem;
