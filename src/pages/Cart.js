import React, { useEffect, useState } from "react";
import LayoutMaster from "../layouts/LayoutMatser";
import CartModel from "../models/CartModel";

function Cart(props) {
  const image = "http://127.0.0.1:8000/uploads/product/";
  const [products, setProducts] = useState([]);
  
      useEffect(() => {
        CartModel.getAll()
            .then((res) => {
                setProducts(res);
                // console.log(res);
            })
            .catch((err) => {
                throw err;
            });
    }, []);
    const handleQty = (e, key) => {
      const updatedProducts = [...products];
      updatedProducts[key].quantity = parseInt(e.target.value);
      setProducts(updatedProducts);
    };

    const handleRemove = async (id) => {
      try {
        // Call the API to delete the product
        const response = await fetch(`http://127.0.0.1:8000/api/remove_cart${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        // Check if the response is successful
        if (response.ok) {
          // Remove the product from the state
          const updatedProducts = products.filter(product => product.id !== id);
          setProducts(updatedProducts);
          // Display a success message or perform any other necessary actions
          console.log('Product removed successfully');
        } else {
          // Display an error message or perform any other necessary actions
          console.error('Failed to remove product');
        }
      } catch (err) {
        // Handle any errors that may occur during the API call
        console.error(err);
      }
    };
  
   
  return (
    <LayoutMaster>
      
        <main id="MainContent" className="content-for-layout">
          <div className="cart-page mt-100">
            <div className="container">
              <div className="cart-page-wrapper">
                <div className="row">
                  <div className="col-lg-7 col-md-12 col-12">
                    <table className="cart-table w-100">
                      <thead>
                        <tr>
                          <th className="cart-caption heading_18">Product</th>
                          <th className="cart-caption heading_18" />
                          <th className="cart-caption text-center heading_18 d-none d-md-table-cell">
                            Quantity
                          </th>
                         
                          <th className="cart-caption text-end heading_18">
                            Price
                          </th>
                          <th className="cart-caption text-center heading_18 d-none d-md-table-cell">
                            Total
                          </th>
                        </tr>
                      </thead>
                      {products.map((product,key) => (
                      <tbody>
                           <tr className="cart-item">
                           <td className="cart-item-media">
                             <div className="mini-img-wrapper">
                               <img
                                 className="mini-img"
                                 src={`${image}${product.image}`}
                                 alt="img"
                               />
                             </div>
                           </td>
                           <td className="cart-item-details">
                             <h2 className="product-title">
                               <a href="#">{product.name}</a>
                             </h2>
                           </td>
                           <td className="cart-item-quantity">
                           <input
                              className="form-control text-center me-3"
                              type="number"
                              value={product.quantity}
                              onChange={(e) => handleQty(e, key)}
                            />
                            <a href="" className="product-remove mt-2" onClick={() => handleRemove(product.id)}>Remove</a>
                           </td>
                           <td className="cart-item-price text-end">
                             <div className="product-price">{product.price.toLocaleString('vi-VN')} đ</div>
                           </td>
                           <td className="cart-item-price text-end">
                           <div className="product-price">{(product.price * product.quantity).toLocaleString()} đ</div>

                           </td>
                         </tr>
                       
                      </tbody>
                      ))}
                    </table>
                  </div>
                  <div className="col-lg-5 col-md-12 col-12">
                    <div className="cart-total-area">
                      <h3 className="cart-total-title d-none d-lg-block mb-0">
                        Cart Totals
                      </h3>
                      <div className="cart-total-box mt-4">
                        <div className="subtotal-item subtotal-box">
                          <h4 className="subtotal-title">Subtotals:</h4>
                          <p className="subtotal-value">$465.00</p>
                        </div>
                        <div className="subtotal-item shipping-box">
                          <h4 className="subtotal-title">Shipping:</h4>
                          <p className="subtotal-value">$10.00</p>
                        </div>
                        <div className="subtotal-item discount-box">
                          <h4 className="subtotal-title">Discount:</h4>
                          <p className="subtotal-value">$100.00</p>
                        </div>
                        <hr />
                        <div className="subtotal-item discount-box">
                          <h4 className="subtotal-title">Total:</h4>
                          <p className="subtotal-value">$1000.00</p>
                        </div>
                        <p className="shipping_text">
                          Shipping &amp; taxes calculated at checkout
                        </p>
                        <div className="d-flex justify-content-center mt-4">
                          <a
                            href="checkout.html"
                            className="position-relative btn-primary text-uppercase"
                          >
                            Procced to checkout
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
    
    </LayoutMaster>
  );
}

export default Cart;
