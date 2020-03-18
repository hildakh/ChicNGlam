import React, { Component } from 'react';
import Shop_data from './Shop.Data';


class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: Shop_data,
    }
  }

  render() {
    return(
      <div>
        SHOP PAGE
      </div>
    )
  }
}

export default ShopPage;