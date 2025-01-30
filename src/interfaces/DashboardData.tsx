import { DashData } from './DashData';
import { Tile } from './Tile';

export interface DashboardData {
  userName: string;
  tiles: Tile[];
  dashData: DashData;
}
