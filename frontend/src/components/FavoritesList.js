import React, { Component } from "react";
import FavoriteItem from "./FavoriteItem";
import { getProducts, id_user, removeCartProduct } from "../api";

export default class Favoriteslist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentWillMount() {
    getProducts().then((item) => {
      this.setState({ products: item });
    });
  }
  removeFromCart = (product) => {
    const cart = {
      user: { _id: id_user },
      favorite: { _id: product._id },
    };
    let prod = this.state.products.filter((item) => item._id !== product._id);
    removeCartProduct(cart).then();
    this.setState({ products: prod });
  };

  render() {
    const { products } = this.state;
    return (
      <div>
        <h3 className="card-title">Favorites</h3>
        <hr />
        {products.map((product, index) => (
          <FavoriteItem
            product={product}
            key={index}
            remove={this.removeFromCart}
          />
        ))}
        <hr />
        {!products.length ? (
          <div style={{ display: "flex" }}>
            <h3 className="text-warning">No Favorites</h3>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
