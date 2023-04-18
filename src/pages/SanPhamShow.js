import React, { useEffect, useState } from "react";
import LayoutMaster from "../layouts/LayoutMatser";
import ProductModel from "../models/ProductModel";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { SET_CART } from "../redux/action";

function SanPhamShow(props) {
  const image = "http://127.0.0.1:8000/uploads/product/";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  // const [quantity, setQty] = useState(1);
  const carts = useSelector((state) => state.cart);
  const [quantity, setQuantity] = useState(1);
  const formattedPrice =
    product?.price?.toLocaleString("vi-VN") || "Price not available";

  useEffect(() => {
    ProductModel.find(id)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);


  const handleQtyChange = (event) => {
    const quantity = parseInt(event.target.value); // Lấy giá trị số lượng nhập vào từ input
    setQuantity(quantity); // Cập nhật trạng thái số lượng sản phẩm
  };
  const handleAddToCart = () => {
    const cart = {
      id: id,
      name: product.name,
      price: product.price,
      quantity: quantity
    };

    // Thực hiện yêu cầu POST đến đường dẫn API
    fetch("http://127.0.0.1:8000/api/add_to_cart/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cart),
    })
      .then((response) => response.json())
      .then((data) => {
        // Xử lý phản hồi thành công
        console.log(data); // Ví dụ: { message: 'Sản phẩm đã được thêm vào giỏ hàng thành công!' }
        // Dispatch hành động Redux để cập nhật trạng thái giỏ hàng
        dispatch({ type: SET_CART, payload: [...carts, cart] });
        // Điều hướng đến trang giỏ hàng
        navigate("/cart");
      })
      .catch((error) => {
        // Xử lý phản hồi lỗi
        console.error(error);
      });
  };
  return (
    <LayoutMaster>
      <main id="MainContent" className="content-for-layout">
        <div className="product-page mt-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="product-gallery product-gallery-vertical d-flex">
                  <div className="product-img-large">
                    <div
                      className="img-large-slider common-slider"
                      data-slick='{
                                    "slidesToShow": 1, 
                                    "slidesToScroll": 1,
                                    "dots": false,
                                    "arrows": false,
                                    "asNavFor": ".img-thumb-slider"
                                }'
                    >
                      <div className="img-large-wrapper">
                        <a
                          href="/img/products/bags/39.jpg"
                          data-fancybox="gallery"
                        >
                          <img src={`${image}${product.image}`} alt="img" />
                        </a>{" "}
                        <br></br> <br></br>
                        <div class="tab-list product-tab-list">
                          <nav class="nav product-tab-nav">
                            <a
                              class="product-tab-link tab-link active"
                              href="#pdescription"
                              data-bs-toggle="tab"
                            >
                              Description
                            </a>
                          </nav>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: product.description,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-img-thumb">
                    <div
                      className="img-thumb-slider common-slider"
                      data-vertical-slider="true"
                      data-slick='{
                                    "slidesToShow": 5, 
                                    "slidesToScroll": 1,
                                    "dots": false,
                                    "arrows": true,
                                    "infinite": false,
                                    "speed": 300,
                                    "cssEase": "ease",
                                    "focusOnSelect": true,
                                    "swipeToSlide": true,
                                    "asNavFor": ".img-large-slider"
                                }'
                    >
                      <div></div>
                    </div>
                    <div className="activate-arrows show-arrows-always arrows-white d-none d-lg-flex justify-content-between mt-3" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="product-details ps-lg-4">
                  <div className="mb-3">
                    <span className="product-availability">In Stock</span>
                  </div>
                  <h2 className="product-title mb-3">{product.name}</h2>
                  <div className="product-rating d-flex align-items-center mb-3">
                    <span className="star-rating">
                      <svg
                        width={16}
                        height={15}
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.168 5.77344L10.082 5.23633L8 0.566406L5.91797 5.23633L0.832031 5.77344L4.63086 9.19727L3.57031 14.1992L8 11.6445L12.4297 14.1992L11.3691 9.19727L15.168 5.77344Z"
                          fill="#FFAE00"
                        />
                      </svg>
                      <svg
                        width={16}
                        height={15}
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.168 5.77344L10.082 5.23633L8 0.566406L5.91797 5.23633L0.832031 5.77344L4.63086 9.19727L3.57031 14.1992L8 11.6445L12.4297 14.1992L11.3691 9.19727L15.168 5.77344Z"
                          fill="#FFAE00"
                        />
                      </svg>
                      <svg
                        width={16}
                        height={15}
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.168 5.77344L10.082 5.23633L8 0.566406L5.91797 5.23633L0.832031 5.77344L4.63086 9.19727L3.57031 14.1992L8 11.6445L12.4297 14.1992L11.3691 9.19727L15.168 5.77344Z"
                          fill="#FFAE00"
                        />
                      </svg>
                      <svg
                        width={16}
                        height={15}
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.168 5.77344L10.082 5.23633L8 0.566406L5.91797 5.23633L0.832031 5.77344L4.63086 9.19727L3.57031 14.1992L8 11.6445L12.4297 14.1992L11.3691 9.19727L15.168 5.77344Z"
                          fill="#FFAE00"
                        />
                      </svg>
                      <svg
                        width={16}
                        height={15}
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.168 5.77344L10.082 5.23633L8 0.566406L5.91797 5.23633L0.832031 5.77344L4.63086 9.19727L3.57031 14.1992L8 11.6445L12.4297 14.1992L11.3691 9.19727L15.168 5.77344Z"
                          fill="#B2B2B2"
                        />
                      </svg>
                    </span>
                    <span className="rating-count ms-2">(22)</span>
                  </div>
                  <div className="product-price-wrapper mb-4">
                    <span className="product-price regular-price">
                      {formattedPrice} đ
                    </span>
                  </div>
                  <div className="product-sku product-meta mb-1">
                    <strong className="label">Mã hàng:</strong> {product.id}
                  </div>

                  <form className="product-form" action="#">
                    <div className="product-form-buttons d-flex align-items-center justify-content-between mt-4">
                    <input
        className="form-control text-center me-3"
        type="number"
        value={quantity}
        onChange={handleQtyChange} // Gán hàm xử lý sự kiện onChange cho input số lượng
      />
                      <button
                        onClick={handleAddToCart}
                        className="btn btn-outline-dark flex-shrink-0"
                        type="button"
                      >
                        <i className="bi-cart-fill me-1"></i>
                        Add to cart
                      </button>
                      <a href="wishlist.html" className="product-wishlist">
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
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* product tab start */}

        {/* product tab end */}
        {/* you may also like start */}

        {/* you may also lik end */}
      </main>
    </LayoutMaster>
  );
}

export default SanPhamShow;
