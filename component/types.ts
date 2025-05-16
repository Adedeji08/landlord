/* eslint-disable @typescript-eslint/no-explicit-any */

export interface MetricData {
 totalTenants: number;
    totalListings: number;
    totalEarnings: number;
    occupancyRate: number;
    activeListings: number;
}

export interface ChartData {
 monthlyRevenue: {
      month: string;
      amount: number;
    }[];
}

export interface ListingData {
upcomingInspections: any[]; 
}

export interface ProfileData {
  username: string;
  email: string;
  phone: string;
  address: string;
  lastLogin: string;
}


