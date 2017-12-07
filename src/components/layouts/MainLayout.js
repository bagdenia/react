import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Header, Container } from 'semantic-ui-react';
import Link from 'components/elements/Link';
import { aboutPath, rootPath } from 'helpers/routes/index';

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
  <Segment.Group horizontal>
    <Segment>
      <Header>
        <Link to  = { rootPath()}>Thinknetica Blog</Link>
      </Header>
    </Segment>
    <Segment>
      <Link to  = { aboutPath()}>About</Link>
    </Segment>
  </Segment.Group>
);

const Footer = () => (
  <Segment>
    Powered by react course
  </Segment>
);

