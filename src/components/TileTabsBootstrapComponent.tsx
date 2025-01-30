import React from 'react';
import { Tab, Nav, Row, Col } from 'react-bootstrap';

const TileTabsComponent = () => {
  return (
    <Tab.Container id="tile-tabs" defaultActiveKey="home">
      <Row>
        {/* Tiles (Nav) */}
        <Col sm={12}>
          <Nav variant="pills" className="flex-row">
            <Nav.Item className="nav-item-50">
              <Nav.Link eventKey="home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item-50">
              <Nav.Link eventKey="profile">Profile</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>

        {/* Content (Tab Panes) */}
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="home">
              <h3>Home Content</h3>
              <p>Welcome to the Home tab!</p>
            </Tab.Pane>
            <Tab.Pane eventKey="profile">
              <h3>Profile Content</h3>
              <p>This is your profile.</p>
            </Tab.Pane>
            <Tab.Pane eventKey="settings">
              <h3>Settings Content</h3>
              <p>Adjust your settings here.</p>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default TileTabsComponent;
