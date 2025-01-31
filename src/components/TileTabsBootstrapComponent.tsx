import React from 'react';
import { Tab, Nav, Card } from 'react-bootstrap';
import '../styles/tile-tabs.scss';
import DashCard from './DashCard';
import GettingStartedCard from './GettingStartedCard';
import { DashCardProps } from '../interfaces/DashCardProps';
import { GettingStartedData } from '../interfaces/GettingStartedData';

const TileTabsComponent: React.FC<{
  dashData: DashCardProps;
  gettingStartedData: GettingStartedData;
}> = ({ dashData, gettingStartedData }) => {
  return (
    <Card className="tabs-card">
      <Tab.Container id="tile-tabs" defaultActiveKey="dashboard">
        <Card.Header>
          <Nav className="flex-row nav-container">
            <Nav.Item className="nav-item-50">
              <Nav.Link eventKey="dashboard">Dashboard</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item-50">
              <Nav.Link eventKey="getting-started">Getting Started</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>

        <Card.Body>
          <Tab.Content>
            <Tab.Pane eventKey="dashboard">
              <DashCard {...dashData} />
            </Tab.Pane>
            <Tab.Pane eventKey="getting-started">
              <GettingStartedCard gettingStartedData={gettingStartedData} />
            </Tab.Pane>
          </Tab.Content>
        </Card.Body>
      </Tab.Container>
    </Card>
  );
};

export default TileTabsComponent;
