import React, { Suspense, lazy, useEffect, useState } from 'react';
import LoadingSkeleton from '../components/LoadingSkeleton';

// Lazy load components
const Header = lazy(() => import('../components/Header'));
const TabsComponent = lazy(() => import('../components/TabsComponent'));

import '../styles/dashboard.scss';
import {
  HEADING_DESC_NURSE,
  HEADING_NURSE,
  TABS_DATA,
} from '../constants/constants';
import { DashboardData } from '../interfaces/DashboardData';
import { fetchDashboardData } from '../services/api';
import DashCard from '../components/DashCard';
import GettingStartedCard from '../components/GettingStartedCard';

/**
 * Dashboard component that loads and displays the dashboard data,
 * along with various components such as header, tabs, and cards.
 * It loads dashboard data asynchronously and renders components with
 * fallback skeleton loading indicators.
 *
 * @component
 * @returns {React.FC} - The Dashboard component.
 */

const Dashboard: React.FC = () => {
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        const response: DashboardData = await fetchDashboardData();
        setData(response);
      } catch (error) {
        console.error('Error loading dashboard data:', error);
      }
    };

    loadDashboardData();
  }, []); // Empty dependency array to run this effect once when the component mounts
  if (!data) return <LoadingSkeleton />;
  return (
    <div>
      <Suspense fallback={<LoadingSkeleton height="60px" />}>
        <Header />
      </Suspense>

      <div className="dashboard-content">
        <h2 className="heading">{HEADING_NURSE}</h2>
        <p>{HEADING_DESC_NURSE}</p>

        {/* Lazy load TabsComponent */}
        <Suspense fallback={<LoadingSkeleton height="40px" />}>
          <TabsComponent tabsData={TABS_DATA} />
        </Suspense>
        <br></br>
        <DashCard {...data} />
        <br></br>
        <GettingStartedCard {...data} />
      </div>
    </div>
  );
};

export default Dashboard;
