import React, { Suspense, lazy } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import { TabsComponentProps } from '../interfaces/TabsComponentProps';

// Lazy load Card component
const ListCard = lazy(() => import('./ListCard'));

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
          <Suspense key={index} fallback={<div>Loading...</div>}>
            <Tab.Pane eventKey={tab.eventKey}>
              <ListCard
                title={tab.cardTitle}
                description={tab.cardDescription}
                buttonLabel={tab.buttonLabel}
              />
            </Tab.Pane>
          </Suspense>
        ))}
      </Tab.Content>
    </Tab.Container>
  );
};

export default TabsComponent;
