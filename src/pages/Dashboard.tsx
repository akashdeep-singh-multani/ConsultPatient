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

const Dashboard: React.FC = () => {
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        const response: DashboardData = await fetchDashboardData(); // Explicitly typing the response here
        setData(response); // Now TypeScript knows `response` is of type `DashboardData`
      } catch (error) {
        console.error('Error loading dashboard data:', error);
      }
    };

    loadDashboardData();
  }, []); // Empty dependency array to run this effect once when the component mounts
  if (!data) return <LoadingSkeleton />;
  console.log('data fetched from api: ' + JSON.stringify(data));
  return (
    <div>
      {/* Suspense wrapper to show a fallback while components are loading */}
      <Suspense fallback={<LoadingSkeleton height="60px" />}>
        <Header />
      </Suspense>

      <div className="dashboard-content">
        <h2>{HEADING_NURSE}</h2>
        <p>{HEADING_DESC_NURSE}</p>

        {/* Lazy load TabsComponent */}
        <Suspense fallback={<LoadingSkeleton height="40px" />}>
          <TabsComponent tabsData={TABS_DATA} />
        </Suspense>
        <br></br>
        <DashCard {...data} />
        <br></br>
        <GettingStartedCard {...data} />
        {/* <AboutMedicationCard
          heading="About your medication"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          videoUrl="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" // Add video URL
        />
        <ArticleSuggestion {...data.gettingStartedData} /> */}
      </div>
    </div>
  );
};

export default Dashboard;
