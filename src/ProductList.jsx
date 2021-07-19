import React from 'react';

class ProductList extends React.Component {
  render() {
    const total = this.props.cartItems.reduce(
      (acc, item) => acc + item.price,
      0
    );
    return (
      <div className="products">
        <ul className="products__list">
          {this.props.cartItems.map(({id, name, price}) =>
            <li key={id} class="products__list-item">
            <span class="products__item-name">{name}</span>
            <span class="products__item-price">{price}</span>
          </li>
          )}
        </ul>
        <div className="products__total">{`Total: ${total}`}</div>
      </div>
    );
  }
}

export default ProductList;
