import { Link } from "react-router-dom";
import { Logo } from "../components";
import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
import styled from "styled-components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Single-origin coffee man braid edison bulb mlkshk schlitz paleo DSA
            skateboard asymmetrical yr. Mumblecore kitsch vaporware, squid blog
            street art kogi succulents artisan kale chips chambray.
          </p>
          <Link to='/register' className='btn btn-hero'>
            login/register
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }
  p {
    color: var(--gery-600);
  }

  .main-img {
    display: none;
  }

  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }

    .main-img {
      display: block;
    }
  }
`;

export default Landing;
