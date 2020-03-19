import React, { Component } from "react";
import Shop_data from "./Shop.Data";
import CollectionPreview from '../../components/collection-preview/CollectionPreview';

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: Shop_data
    };
  }

  render() {
    const {collections} = this.state;
    return (
      <div className='shop-page'>
        {
          collections.map(({ id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps}/>
          ))
        }
      </div>
    );
  }
}

export default ShopPage;
