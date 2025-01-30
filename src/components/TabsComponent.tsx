import React from 'react';
import { Tab, Nav } from 'react-bootstrap';
import Card from './Card';
import { TabsComponentProps } from '../interfaces/TabsComponentProps';

const TabsComponent: React.FC<TabsComponentProps> = ({ tabsData }) => {
  return (
    <Tab.Container id="tabs" defaultActiveKey={tabsData[0].eventKey}>
      <Nav variant="pills" className="mb-3">
        {tabsData.map((tab, index) => (
          <Nav.Item key={index}>
            <Nav.Link eventKey={tab.eventKey}>
              <tab.icon className="tabview-btn-icon" />{' '}
              {/* Dynamically render the icon */}
              {tab.label}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>

      <Tab.Content>
        {tabsData.map((tab, index) => (
          <Tab.Pane key={index} eventKey={tab.eventKey}>
            <Card
              title={tab.cardTitle}
              description={tab.cardDescription}
              buttonLabel={tab.buttonLabel}
            />
          </Tab.Pane>
        ))}
      </Tab.Content>
    </Tab.Container>
  );
};

export default TabsComponent;
