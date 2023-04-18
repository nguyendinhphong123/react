import React, { useEffect, useState } from "react";
import LayoutMatser from "../layouts/LayoutMatser";
import Slideshow from "../components/home/Slideshow";
import ProductModel from "../models/ProductModel";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Home(props) {
	const image = "http://127.0.0.1:8000/uploads/product/"

	const navigate = useNavigate();
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
  return (
    <LayoutMatser>
      <>
        <Slideshow />
        {/* trusted badge start */}
        <div className="trusted-section mt-100 overflow-hidden">
          <div className="trusted-section-inner">
            <div className="container">
              <div className="row justify-content-center trusted-row">
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="trusted-badge bg-trust-1 rounded">
                    <div className="trusted-icon">
                      <img
                        className="icon-trusted"
                        src="/img/trusted/1.png"
                        alt="icon-1"
                      />
                    </div>
                    <div className="trusted-content">
                      <h2 className="heading_18 trusted-heading">
                        Free Shipping &amp; Return
                      </h2>
                      <p className="text_16 trusted-subheading trusted-subheading-2">
                        On all order over $99.00
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="trusted-badge bg-trust-2 rounded">
                    <div className="trusted-icon">
                      <img
                        className="icon-trusted"
                        src="/img/trusted/2.png"
                        alt="icon-2"
                      />
                    </div>
                    <div className="trusted-content">
                      <h2 className="heading_18 trusted-heading">
                        Customer Support 24/7
                      </h2>
                      <p className="text_16 trusted-subheading trusted-subheading-2">
                        Instant access to support
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="trusted-badge bg-trust-3 rounded">
                    <div className="trusted-icon">
                      <img
                        className="icon-trusted"
                        src="/img/trusted/3.png"
                        alt="icon-3"
                      />
                    </div>
                    <div className="trusted-content">
                      <h2 className="heading_18 trusted-heading">
                        100% Secure Payment
                      </h2>
                      <p className="text_16 trusted-subheading trusted-subheading-2">
                        We ensure secure payment!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* trusted badge end */}

        {/* collection start */}
        <div className="featured-collection mt-100 overflow-hidden">
          <div className="collection-tab-inner">
            <div className="container">
              <div className="section-header text-center">
                <h2 className="section-heading">Sản phẩm nổi bật</h2>
              </div>
              <div className="row">
				{products.map((product,key) => (
					 <div className="col-lg-3 col-md-6 col-6">
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
						   <span className="badge-label badge-new rounded">
							 Featured
						   </span>
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
						   <a href="/sanpham/">{product.name}</a>
						   
						 </h3>	
						 <div className="product-card-price">
							
						 <span className="card-price-regular">{product.price.toLocaleString('vi-VN')}đ</span> <br/>
						 <Link to={'/sanpham/'+product.id} className="btn btn-outline-dark mt-auto">Xem chi tiết</Link>
						 
						
						 </div>
					   </div>
					 </div>
				   </div>
				))}
               
              </div>
              <div className="view-all text-center"  >
                <a className="btn-primary" href="#">
                  VIEW ALL
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* collection end */}
        {/* banner start */}
        <div className="banner-section mt-100 overflow-hidden">
          <div className="banner-section-inner">
            <div className="container">
              <div className="row justify-content-center">
                <div
                  className="col-lg-6 col-md-6 col-12"
                  
                  
                >
                  <a
                    className="banner-item position-relative rounded"
                    href="collection-left-sidebar.html"
                  >
                    <img
                      className="banner-img"
                      src="/img/banner/shoe-1.jpg"
                      alt="banner-1"
                    />
                    <div className="content-absolute content-slide">
                      <div className="container height-inherit d-flex align-items-center">
                        <div className="content-box banner-content p-4">
                          <p className="heading_18 mb-3 text-white">
                            Sports Shoes
                          </p>
                          <h2 className="heading_34 text-white">
                            25% off for <br />
                            sports men
                          </h2>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  className="col-lg-6 col-md-6 col-12"
                  
                  
                >
                  <a
                    className="banner-item position-relative rounded"
                    href="collection-left-sidebar.html"
                  >
                    <img
                      className="banner-img"
                      src="/img/banner/shoe-2.jpg"
                      alt="banner-2"
                    />
                    <div className="content-absolute content-slide">
                      <div className="container height-inherit d-flex align-items-center">
                        <div className="content-box banner-content p-4">
                          <p className="heading_18 mb-3 text-white">
                            Sports Shoes
                          </p>
                          <h2 className="heading_34 text-white">
                            25% off for <br />
                            sports women
                          </h2>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* banner end */}

        {/* single banner start */}
        <div className="single-banner-section mt-100 overflow-hidden">
          <div className="position-relative overlay">
            <img
              className="single-banner-img"
              src="/img/banner/single-banner.jpg"
              alt="slide-1"
            />
            <div className="content-absolute content-slide">
              <div className="container height-inherit d-flex align-items-center">
                <div className="content-box single-banner-content py-4">
                  <h2
                    className="single-banner-heading heading_42 text-white animate__animated animate__fadeInUp"
                    data-animation="animate__animated animate__fadeInUp"
                  >
                    Climb up to the mountain with NIK
                  </h2>
                  <p
                    className="single-banner-text text_16 text-white animate__animated animate__fadeInUp"
                    data-animation="animate__animated animate__fadeInUp"
                  >
                    Free shipping, and no hassle returns. NIK Running shoes for
                    men &amp; women
                  </p>
                  <a
                    className="btn-primary single-banner-btn animate__animated animate__fadeInUp"
                    href="collection-left-sidebar.html"
                    data-animation="animate__animated animate__fadeInUp"
                  >
                    SHOP NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* single banner end */}

        {/* newsletter start */}
        <div className="newsletter-section mt-100 overflow-hidden">
          <div className="newsletter-inner">
            <div className="position-relative">
              <img
                className="single-banner-img"
                src="/img/newsletter/2.jpg"
                alt="slide-1"
              />
              <div className="content-absolute">
                <div className="container height-inherit d-flex align-items-center justify-content-center">
                  <div className="content-box py-4">
                    <div className="newsletter-content newsletter-content-2 text-center">
                      <div className="newsletter-header">
                        <p className="newsletter-subheading heading_24">
                          News Letter
                        </p>
                        <h2 className="newsletter-heading heading_42">
                          Subscribe to our newsletter
                        </h2>
                      </div>
                      <div className="newsletter-form-wrapper">
                        <form
                          action="#"
                          className="newsletter-form d-flex align-items-center rounded"
                        >
                          <input
                            className="newsletter-input bg-transparent border-0"
                            type="email"
                            placeholder="Enter your e-mail"
                            autoComplete="off"
                          />
                          <button
                            className="newsletter-btn rounded"
                            type="submit"
                          >
                            <svg
                              width={17}
                              height={14}
                              viewBox="0 0 17 14"
                              fill="#fff"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.11539 -0.000488604L7.50417 1.99951L11.5769 5.59951L0.500001 5.59951L0.500001 8.19951L11.7049 8.19951L7.50417 11.4995L8.70513 13.9995L16.5 7.19951L9.11539 -0.000488604Z"
                                fill="#FEFEFE"
                              />
                            </svg>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* newsletter end */}
        {/* brand logo start */}
        <div className="brand-logo-section mt-100">
          <div className="brand-logo-inner">
            <div className="container">
              <div className="brand-logo-container overflow-hidden">
                <div className="scroll-horizontal row align-items-center flex-nowrap">
                  <div
                    className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6"
                    data-aos123="fade-up"
                    data-aos123-duration={700}
                  >
                    <a
                      href="index-shoe.html"
                      className="brand-logo d-flex align-items-center justify-content-center"
                    >
                      <img src="/img/brand/1.png" alt="img" />
                    </a>
                  </div>
                  <div
                    className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6"
                    data-aos123="fade-up"
                    data-aos123-duration={700}
                  >
                    <a
                      href="index-shoe.html"
                      className="brand-logo d-flex align-items-center justify-content-center"
                    >
                      <img src="/img/brand/2.png" alt="img" />
                    </a>
                  </div>
                  <div
                    className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6"
                    data-aos123="fade-up"
                    data-aos123-duration={700}
                  >
                    <a
                      href="index-shoe.html"
                      className="brand-logo d-flex align-items-center justify-content-center"
                    >
                      <img src="/img/brand/3.png" alt="img" />
                    </a>
                  </div>
                  <div
                    className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6"
                    data-aos123="fade-up"
                    data-aos123-duration={700}
                  >
                    <a
                      href="index-shoe.html"
                      className="brand-logo d-flex align-items-center justify-content-center"
                    >
                      <img src="/img/brand/4.png" alt="img" />
                    </a>
                  </div>
                  <div
                    className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6"
                    data-aos123="fade-up"
                    data-aos123-duration={700}
                  >
                    <a
                      href="index-shoe.html"
                      className="brand-logo d-flex align-items-center justify-content-center"
                    >
                      <img src="/img/brand/5.png" alt="img" />
                    </a>
                  </div>
                  <div
                    className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6"
                    data-aos123="fade-up"
                    data-aos123-duration={700}
                  >
                    <a
                      href="index-shoe.html"
                      className="brand-logo d-flex align-items-center justify-content-center"
                    >
                      <img src="/img/brand/6.png" alt="img" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* brand logo end */}
      </>
    </LayoutMatser>
  );
}

export default Home;
