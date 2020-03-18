import React, { Component } from 'react';
import Shop_data from './Shop.Data';


class ShopPage extends Component {
  Component(props) {
    super(props);

    this.state = {
      collections: Shop_data,
    }
  }

  render() {
    return(
      <div>

      </div>
    )
  }
}

export default ShopPage;