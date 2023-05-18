import React, { useEffect, useState } from "react";
import LayoutMatser from "../layouts/LayoutMatser";
import { Link, useNavigate } from "react-router-dom";
import ProductModel from "../models/ProductModel";

function Shop(props) {
  const image = "http://127.0.0.1:8000/uploads/product/"
    const [products, setProducts] = useState([]);
    useEffect(() => {
        ProductModel.getAll()
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                throw err;
            });
    }, []);
    const totalProducts = products.length;

  return (
    <LayoutMatser>
      <div className="collection mt-100">
        <div className="container">
          <div className="row">
            {/* product area start */}
            <div className="col-lg-9 col-md-12 col-12">
              <div className="filter-sort-wrapper d-flex justify-content-between flex-wrap">
                <div className="collection-title-wrap d-flex align-items-end">
                  <h2 className="collection-title heading_24 mb-0">
                    Tất cả sản phẩm
                  </h2>
                  <p className="collection-counter text_16 mb-0 ms-2">
                    ({totalProducts})
                  </p>
                </div>
               
              </div>
              <div className="collection-product-container">
                <div className="row">
                  {products.map((product,key) => (
                       <div
                       className="col-lg-4 col-md-6 col-6"
                     >
                       <div className="product-card">
                         <div className="product-card-img">
                           <a
                             className="hover-switch"
                             href="collection-left-sidebar.html"
                           >
                             <img
                               className="secondary-img"
                               src={`${image}${product.image}`}
                               alt="product-img"
                             />
                             <img
                               className="primary-img"
                               src={`${image}${product.image}`}
                               alt="product-img"
                             />
                           </a>
                           <div className="product-badge">
                             <span className="badge-label badge-percentage rounded">
                               -44%
                             </span>
                           </div>
                           <div className="product-card-action product-card-action-2 justify-content-center">
                             <a
                               href="#quickview-modal"
                               className="action-card action-quickview"
                               data-bs-toggle="modal"
                             >
                               <svg
                                 width={26}
                                 height={26}
                                 viewBox="0 0 26 26"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                               >
                                 <path
                                   d="M10 0C15.5117 0 20 4.48828 20 10C20 12.3945 19.1602 14.5898 17.75 16.3125L25.7188 24.2812L24.2812 25.7188L16.3125 17.75C14.5898 19.1602 12.3945 20 10 20C4.48828 20 0 15.5117 0 10C0 4.48828 4.48828 0 10 0ZM10 2C5.57031 2 2 5.57031 2 10C2 14.4297 5.57031 18 10 18C14.4297 18 18 14.4297 18 10C18 5.57031 14.4297 2 10 2ZM11 6V9H14V11H11V14H9V11H6V9H9V6H11Z"
                                   fill="#00234D"
                                 />
                               </svg>
                             </a>
                             <a href="#" className="action-card action-wishlist">
                               <svg
                                 className="icon icon-wishlist"
                                 width={26}
                                 height={22}
                                 viewBox="0 0 26 22"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                               >
                                 <path
                                   d="M6.96429 0.000183105C3.12305 0.000183105 0 3.10686 0 6.84843C0 8.15388 0.602121 9.28455 1.16071 10.1014C1.71931 10.9181 2.29241 11.4425 2.29241 11.4425L12.3326 21.3439L13 22.0002L13.6674 21.3439L23.7076 11.4425C23.7076 11.4425 26 9.45576 26 6.84843C26 3.10686 22.877 0.000183105 19.0357 0.000183105C15.8474 0.000183105 13.7944 1.88702 13 2.68241C12.2056 1.88702 10.1526 0.000183105 6.96429 0.000183105ZM6.96429 1.82638C9.73912 1.82638 12.3036 4.48008 12.3036 4.48008L13 5.25051L13.6964 4.48008C13.6964 4.48008 16.2609 1.82638 19.0357 1.82638C21.8613 1.82638 24.1429 4.10557 24.1429 6.84843C24.1429 8.25732 22.4018 10.1584 22.4018 10.1584L13 19.4036L3.59821 10.1584C3.59821 10.1584 3.14844 9.73397 2.69866 9.07411C2.24888 8.41426 1.85714 7.55466 1.85714 6.84843C1.85714 4.10557 4.13867 1.82638 6.96429 1.82638Z"
                                   fill="#00234D"
                                 />
                               </svg>
                             </a>
                             <a href="#" className="action-card action-addtocart">
                               <svg
                                 className="icon icon-cart"
                                 width={24}
                                 height={26}
                                 viewBox="0 0 24 26"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                               >
                                 <path
                                   d="M12 0.000183105C9.25391 0.000183105 7 2.25409 7 5.00018V6.00018H2.0625L2 6.93768L1 24.9377L0.9375 26.0002H23.0625L23 24.9377L22 6.93768L21.9375 6.00018H17V5.00018C17 2.25409 14.7461 0.000183105 12 0.000183105ZM12 2.00018C13.6562 2.00018 15 3.34393 15 5.00018V6.00018H9V5.00018C9 3.34393 10.3438 2.00018 12 2.00018ZM3.9375 8.00018H7V11.0002H9V8.00018H15V11.0002H17V8.00018H20.0625L20.9375 24.0002H3.0625L3.9375 8.00018Z"
                                   fill="#00234D"
                                 />
                               </svg>
                             </a>
                           </div>
                         </div>
                         <div className="product-card-details">
                          
                           <h3 className="product-card-title">
                             <a href="collection-left-sidebar.html">
                               {product.name}
                             </a>
                           </h3>
                           <div className="product-card-price">
                             <span className="card-price-regular">{product.price.toLocaleString('vi-VN')} đ</span> <br></br>
                             <Link to={'/sanpham/'+product.id} className="btn btn-outline-dark mt-auto">Xem chi tiết</Link>
                           </div>
                         </div>
                       </div>
                     </div>
                  ))}
                 
          
 
                </div>
              </div>
              <div className="pagination justify-content-center mt-100">
                <nav>
                  <ul className="pagination m-0 d-flex align-items-center">
                    <li className="item disabled">
                      <a className="link">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={100}
                          height={100}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon icon-left"
                        >
                          <polyline points="15 18 9 12 15 6" />
                        </svg>
                      </a>
                    </li>
                    <li className="item">
                      <a className="link" href="#">
                        1
                      </a>
                    </li>
                    <li className="item active">
                      <a className="link" href="#">
                        2
                      </a>
                    </li>
                    <li className="item">
                      <a className="link" href="#">
                        3
                      </a>
                    </li>
                    <li className="item">
                      <a className="link" href="#">
                        4
                      </a>
                    </li>
                    <li className="item">
                      <a className="link" href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={100}
                          height={100}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon icon-right"
                        >
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            {/* product area end */}
            {/* sidebar start */}
            <div className="col-lg-3 col-md-12 col-12">
              <div className="collection-filter filter-drawer">
               
               
                <div className="filter-widget">
                  <div
                    className="filter-header faq-heading heading_18 d-flex align-items-center justify-content-between border-bottom"
                    data-bs-toggle="collapse"
                    data-bs-target="#filter-collection"
                  >
                    Categories
                    <span className="faq-heading-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-down"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </div>
                  <div
                    id="filter-collection"
                    className="accordion-collapse collapse show"
                  >
                    <ul className="filter-lists list-unstyled mb-0">
                      <li className="filter-item">
                        <label className="filter-label">
                          <input type="checkbox" />
                          <span className="filter-checkbox rounded me-2" />
                          <span className="filter-text">Womens Bag</span>
                        </label>
                      </li>
                      <li className="filter-item">
                        <label className="filter-label">
                          <input type="checkbox" />
                          <span className="filter-checkbox rounded me-2" />
                          Bottles
                        </label>
                      </li>
                      <li className="filter-item">
                        <label className="filter-label">
                          <input type="checkbox" />
                          <span className="filter-checkbox rounded me-2" />
                          Men's Shoe
                        </label>
                      </li>
                      <li className="filter-item">
                        <label className="filter-label">
                          <input type="checkbox" />
                          <span className="filter-checkbox rounded me-2" />
                          Toddler Dress
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
                
               
               
              </div>
            </div>
            {/* sidebar end */}
          </div>
        </div>
      </div>
    </LayoutMatser>
  );
}

export default Shop;
