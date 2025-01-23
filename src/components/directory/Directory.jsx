import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import  { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/Menu-Item';
import './Directory.styles.scss';

const Directory = ({ sections }) =>  {
    return (
    <div className="directory-menu">
      {sections.map(({id, ...rest}) => (
        // destructuring the section before passing the keys to menu item
        <MenuItem key={id} {...rest} />
      ))}
    </div>
    )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
