import React, { Suspense, lazy } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import { TabsComponentProps } from '../interfaces/TabsComponentProps';

// Lazy load ListCard component
const ListCard = lazy(() => import('./ListCard'));

/**
 * Props for the TabsComponent.
 *
 * @interface TabsComponentProps
 * @property {Array} tabsData - Array of objects containing data for each tab, including eventKey, label, icon, cardTitle, cardDescription, and buttonLabel.
 */

/**
 * A tab component that displays a series of tabs with dynamically loaded content for each tab.
 * Each tab can contain an icon and displays content in the form of `ListCard` components.
 *
 * @component
 * @param {TabsComponentProps} props - The props for the component.
 * @returns {React.FC} - The TabsComponent.
 */
const TabsComponent: React.FC<TabsComponentProps> = ({ tabsData }) => {
  return (
    <Tab.Container id="tabs" defaultActiveKey={tabsData[0].eventKey}>
      {/* Tab navigation links */}
      <Nav variant="pills" className="mb-3">
        {tabsData.map((tab, index) => (
          <Nav.Item key={index}>
            <Nav.Link eventKey={tab.eventKey}>
              {/* Dynamically render the icon for each tab */}
              <tab.icon className="tabview-btn-icon" /> {tab.label}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>

      {/* Tab content */}
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
