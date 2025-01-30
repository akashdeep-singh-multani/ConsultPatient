import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import '../styles/dashboard.scss';
import {
  HEADING_DESC_NURSE,
  HEADING_NURSE,
  TABS_DATA,
} from '../constants/constants';
import TabsComponent from '../components/TabsComponent';

const Dashboard: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="dashboard-content">
        <h2>{HEADING_NURSE}</h2>
        <p>{HEADING_DESC_NURSE}</p>

        <TabsComponent tabsData={TABS_DATA} />

        <h3>Dashboard</h3>
        <Card
          title="Welcome Claire"
          description="Request a consult with one of our qualified nurses."
          buttonLabel="Request now"
        />
        <Card
          title="Services"
          description="Set up a reminder so you don't miss an appointment or treatment."
          buttonLabel="Setup now"
        />
      </div>
    </div>
  );
};

export default Dashboard;
