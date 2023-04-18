import React from "react";

function Slideshow(props) {
  return (
    <>
      {/* slideshow start */}
      <div className="slideshow-section position-relative">
        <div
          className="slideshow-active activate-slider"
          data-slick='{
              "slidesToShow": 1, 
              "slidesToScroll": 1, 
              "dots": true,
              "arrows": true,
              "responsive": [
                  {
                  "breakpoint": 768,
                  "settings": {
                      "arrows": false
                  }
                  }
              ]
          }'
        >
          <div className="slide-item slide-item-bag position-relative">
            <img
              className="slide-img d-none d-md-block"
              src="/img/slideshow/35.jpg"
              alt="slide-1"
            />
            <img
              className="slide-img d-md-none"
              src="/img/slideshow/s1-m.jpg"
              alt="slide-1"
            />
          </div>
        </div>
        <div className="activate-arrows" />
        <div className="activate-dots dot-tools" />
      </div>
      {/* slideshow end */}
    </>
  );
}

export default Slideshow;
