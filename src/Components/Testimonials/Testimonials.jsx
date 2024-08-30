import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_pfp from "../../assets/user.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} onClick={slideForward} className="next-btn" />
      <img src={back_icon} onClick={slideBackward} className="back-btn" />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_pfp} />
                <div>
                  <h3>Person 1</h3>
                  <span>State, COUNTRY</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                maiores omnis, labore totam aliquid obcaecati cupiditate sed a,
                sunt dignissimos adipisci, cum voluptate iusto tempore quae
                dolor iste unde aliquam.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_pfp} />
                <div>
                  <h3>Person 2</h3>
                  <span>State, COUNTRY</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                maiores omnis, labore totam aliquid obcaecati cupiditate sed a,
                sunt dignissimos adipisci, cum voluptate iusto tempore quae
                dolor iste unde aliquam.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_pfp} />
                <div>
                  <h3>Person 3</h3>
                  <span>State, COUNTRY</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                maiores omnis, labore totam aliquid obcaecati cupiditate sed a,
                sunt dignissimos adipisci, cum voluptate iusto tempore quae
                dolor iste unde aliquam.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_pfp} />
                <div>
                  <h3>Person 4</h3>
                  <span>State, COUNTRY</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                maiores omnis, labore totam aliquid obcaecati cupiditate sed a,
                sunt dignissimos adipisci, cum voluptate iusto tempore quae
                dolor iste unde aliquam.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
