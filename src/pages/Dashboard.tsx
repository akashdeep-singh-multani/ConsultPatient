import React, { Suspense, lazy } from 'react';

// Lazy load components
const Header = lazy(() => import('../components/Header'));
const Card = lazy(() => import('../components/Card'));
const TabsComponent = lazy(() => import('../components/TabsComponent'));

import '../styles/dashboard.scss';
import {
  HEADING_DESC_NURSE,
  HEADING_NURSE,
  TABS_DATA,
} from '../constants/constants';

const Dashboard: React.FC = () => {
  return (
    <div>
      {/* Suspense wrapper to show a fallback while components are loading */}
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>

      <div className="dashboard-content">
        <h2>{HEADING_NURSE}</h2>
        <p>{HEADING_DESC_NURSE}</p>

        {/* Lazy load TabsComponent */}
        <Suspense fallback={<div>Loading Tabs...</div>}>
          <TabsComponent tabsData={TABS_DATA} />
        </Suspense>

        <h3>Dashboard</h3>

        {/* Lazy load Card components */}
        <Suspense fallback={<div>Loading card...</div>}>
          <Card
            title="Welcome Claire"
            description="Request a consult with one of our qualified nurses."
            buttonLabel="Request now"
          />
        </Suspense>
        <Suspense fallback={<div>Loading card...</div>}>
          <Card
            title="Services"
            description="Set up a reminder so you don't miss an appointment or treatment."
            buttonLabel="Setup now"
          />
        </Suspense>
      </div>
    </div>
  );
};

export default Dashboard;
