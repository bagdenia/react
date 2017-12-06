import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Header, Container } from 'semantic-ui-react';
import Link from 'components/elements/Link';
import { rootPath } from 'helpers/routes/index';

const MainLayout = ({ children }) => (
  <Container>
    <Logo />
    {children}
    <Footer />
  </Container>
);

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;

const Logo = () => (
  <Segment>
    <Header>
      <Link to  = { rootPath()}>Thinknetica Blog</Link>
    </Header>
  </Segment>
);

const Footer = () => (
  <Segment>
    Powered by react course
  </Segment>
);

