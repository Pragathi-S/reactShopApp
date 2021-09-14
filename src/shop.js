import React, { Component } from "react";
import shopData from "./shop.data.js";
import "./style.shop.css";

class Shop extends Component {
    constructor() {
        super();
        this.state = {
            shopData,
            count: 0,
        };
    }

    addToCart = () => {
        this.setState({ count: this.state.count + 1 });
    }

    removefromCart = () => {
        if (this.state.count > 0) {
            this.setState({ count: this.state.count - 1 });
        }
    }
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container px-4 px-lg-5">
                        <a className="navbar-brand" href="#!">Start Bootstrap</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                                <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                                <li className="nav-item"><a class="nav-link" href="#!">About</a></li>
                                <li className="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={this.shopMenu}>Shop</a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#!">All Products</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a class="dropdown-item" href="#!">Popular Items</a></li>
                                        <li><a class="dropdown-item" href="#!">New Arrivals</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <button className="btn btn-outline-dark" type="submit">
                                    <i className="bi-cart-fill me-1"></i>
                                    Cart &nbsp;
                                    <span className="badge bg-dark text-white ms-1 rounded-pill">{this.state.count}</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </nav>
                <header className="bg-dark py-5">
                    <div className="container px-4 px-lg-5 my-5">
                        <div className="text-center text-white">
                            <h1 className="display-4 fw-bolder">Shop in style</h1>
                            <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                        </div>
                    </div>
                </header>
                {this.state.shopData.map(({ category, priceRange, item }) => {
                    return (
                        <section className="py-5">
                            <div className="container px-4 px-lg-5 mt-5">
                                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                                    <div className="col mb-5">
                                        <div className="card h-100">
                                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                            <div className="card-body p-4">
                                                <div className="text-center">
                                                    <h5 className="fw-bolder">{category}</h5>
                                                    {priceRange}
                                                </div>
                                            </div>
                                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                                            </div>
                                        </div>
                                    </div>
                                    {item.map((data) => {
                                        return (
                                            <div className="col mb-5">
                                                <div className="card h-100">
                                                    <div className="badge bg-dark text-white position-absolute">Sale</div>
                                                    <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                                    <div className="card-body p-4">
                                                        <div className="text-center">
                                                            <h5 className="fw-bolder">{data.product}</h5>
                                                            <div className="d-flex justify-content-center small text-warning mb-2">
                                                                <div className="bi-star-fill"></div>
                                                                <div className="bi-star-fill"></div>
                                                                <div className="bi-star-fill"></div>
                                                                <div className="bi-star-fill"></div>
                                                                <div className="bi-star-fill"></div>
                                                            </div>
                                                            <span className="text-muted text-decoration-line-through">{data.price1}</span>&nbsp;
                                                            {data.price2}
                                                        </div>
                                                    </div>
                                                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                                        <div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={this.addToCart} >Add</button> &nbsp; <button className="btn btn-outline-dark mt-auto" onClick={this.removefromCart} >Remove</button></div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                        </section>
                    )
                })
                }
                <footer className="py-5 bg-dark">
                    <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2021</p></div>
                </footer>

            </>
        )
    }
}


export default Shop;
