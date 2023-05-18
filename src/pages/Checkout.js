import React, { useState } from "react";
import LayoutMaster from "../layouts/LayoutMatser";

function Checkout(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      phone,
      address,
    };
    fetch("http://127.0.0.1:8000/api/order/store", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // redirect to the next step in the checkout process
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <LayoutMaster>
      <main id="MainContent" className="content-for-layout">
        <div className="checkout-page mt-100">
          <div className="container">
            <div className="checkout-page-wrapper">
              <div className="row">
                <div className="col-xl-9 col-lg-8 col-md-12 col-12">
            

                  <div className="shipping-address-area">
                    <h2 className="shipping-address-heading pb-1">
                      Địa chỉ giao hàng
                    </h2>
                    <div className="shipping-address-form-wrapper">
                    <form action="#"
                    
                        className="shipping-address-form common-form"
                        onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-lg-6 col-md-12 col-12">
                            <fieldset>
                              <label className="label">Họ Và Tên</label>
                              <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                              />
                            </fieldset>
                          </div>
                          <div className="col-lg-6 col-md-12 col-12">
                            <fieldset>
                              <label className="label">Email</label>
                              <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </fieldset>
                          </div>
                          <div className="col-lg-6 col-md-12 col-12">
                            <fieldset>
                              <label className="label">Số điện thoại</label>
                              <input
                                type="text"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                              />
                            </fieldset>
                          </div>
                          <div className="col-lg-6 col-md-12 col-12">
                            <fieldset>
                              <label className="label">Địa chỉ</label>
                              <input
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                              />
                            </fieldset>
                          </div>
                        </div>
                        <div className="shipping-address-area billing-area">
                    <div className="minicart-btn-area d-flex align-items-center justify-content-between flex-wrap">
                      <a
                        href="/cart"
                        className="checkout-page-btn minicart-btn btn-secondary"
                      >
                        Quay lại giỏ hàng
                      </a>
                      <button
      type="submit"
      className="checkout-page-btn minicart-btn btn-primary"
    >
      Tiến hành vận chuyển
    </button>
                    </div>
                  </div>
                      </form>
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

export default Checkout;
