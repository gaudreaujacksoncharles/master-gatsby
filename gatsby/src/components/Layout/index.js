import React from 'react';
import 'normalize.css';
import Nav from '../Nav';
import Footer from '../Footer';
import GlobalStyles from '../../styles/GlobalStyles';
import Typography from '../../styles/Typography';
import { SiteBorderStyles, ContentStyles } from './styles'

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <SiteBorderStyles>
        <ContentStyles>
          <Nav />
          {children}
          <Footer />
        </ContentStyles>
      </SiteBorderStyles>
    </>
  );
}
