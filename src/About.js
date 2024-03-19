import React from "react";
import HeroSection from "./components/HeroSection";
import a6 from "./images/a6.jpg"
import styled from "styled-components";

const About = () => {

  return <Wrapper>
    <div className="hero-section-image">
      <figure>
        <img
          src={a6}
          alt="hero-section-photo"
          className="img-style"
        />
      </figure>
    </div>
    <div className="hero-section-data">
      <h3> Who We Are?</h3>
      <p>

        Maecenas arcu tortor, venenatis vehicula odio ut, dictum blandit lectus. Quisque ac suscipit felis. Suspendisse convallis, turpis sed rhoncus malesuada, ante neque tristique nulla, ut malesuada nisi lorem et ipsum. Donec hendrerit lectus ut hendrerit tempus. Aliquam vitae justo nec arcu semper faucibus. Aenean elementum, lacus quis sollicitudin interdum, velit est iaculis velit, nec eleifend ante nibh eu turpis. Nullam condimentum eget elit a rhoncus.
      </p>


    </div>

  </Wrapper>
};
const Wrapper = styled.section`
  padding: 12rem 0;
  display:flex;
  flex-direction:row:
  display: flex;
  justify-content: center;
  align-items: center;
  gap:25rem;

  img {
    
    height: 20rem;
    margin-left:200px;
  }

  .hero-section-data {
    p {
      width:60rem;
      
    }

    
  }

  .hero-section-image {
    width: 500px;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default About;