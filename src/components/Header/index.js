import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';

import logo from '../../images/logo.svg';

const HeaderWrapper = styled.div`
      background: linear-gradient(115.21381842654796deg, rgba(46, 148, 176,1) 5.736111111111111%,rgba(42, 96, 111,1) 96.29166666666666%);
      margin-bottom: 1.45rem;
      h1 {
        img {
            height: 100px;
        }
      }
`;

const HeaderContainer = styled.div`
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
`;

const ScreenReader = styled.span`
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute !important;
    width: 1px;
    word-wrap: normal !important;
`;

const Header = ({data}) => (
    <HeaderWrapper>
        <HeaderContainer>
            <h1 style={{margin: 0}}>
                <Link
                    to="/"
                    style={{
                        color: 'white',
                        textDecoration: 'none',
                    }}
                >
                    <ScreenReader class="screen-reader">{data.site.siteMetadata.title}</ScreenReader>
                    <img src={logo} alt="logo"/>
                </Link>
            </h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </HeaderContainer>

    </HeaderWrapper>
);

export default Header
