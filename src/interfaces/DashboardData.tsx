import { DashData } from './DashData';
import { GettingStartedData } from './GettingStartedData';
import { Tile } from './Tile';

export interface DashboardData {
  userName: string;
  tiles: Tile[];
  dashData: DashData;
  gettingStartedData: GettingStartedData;
}
