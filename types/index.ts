export type CampaignCategory =
  | "Medical"
  | "Education"
  | "Disaster Relief"
  | "Animal Welfare"
  | "Community"
  | "Environment"
  | "Arts & Culture"
  | "Sports";

export type CampaignStatus = "pending" | "active" | "completed" | "rejected" | "paused";

export interface CampaignUpdate {
  id: string;
  title: string;
  content: string;
  date: string;
}

export interface CampaignComment {
  id: string;
  userName: string;
  userAvatar: string;
  comment: string;
  amount?: number;
  date: string;
}

export interface Campaign {
  id: string;
  slug: string;
  title: string;
  category: CampaignCategory;
  coverImage: string;
  shortDescription: string;
  description: string;
  goalAmount: number;
  raisedAmount: number;
  donorsCount: number;
  daysLeft: number;
  deadline: string;
  status: CampaignStatus;
  location: string;
  creator: {
    id: string;
    name: string;
    avatar: string;
    verified: boolean;
  };
  isFeatured?: boolean;
  isUrgent?: boolean;
  updates?: CampaignUpdate[];
  comments?: CampaignComment[];
  gallery?: string[];
}

export type UserRole = "supporter" | "creator" | "admin";

export interface Donation {
  id: string;
  campaignId: string;
  campaignTitle: string;
  campaignImage: string;
  amount: number;
  date: string;
  status: "completed" | "pending" | "failed";
  paymentMethod: string;
  isAnonymous: boolean;
  receiptId: string;
}

export interface Withdrawal {
  id: string;
  campaignId: string;
  campaignTitle: string;
  amount: number;
  requestedDate: string;
  status: "pending" | "approved" | "rejected" | "processed";
  method: string;
  accountDetails: string;
  note?: string;
}

export interface Notification {
  id: string;
  type: "donation" | "campaign" | "withdrawal" | "system" | "comment";
  title: string;
  message: string;
  date: string;
  read: boolean;
  link?: string;
}

export interface PlatformUser {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: UserRole;
  status: "active" | "suspended";
  joinedDate: string;
  campaignsCount: number;
  totalDonated?: number;
  totalRaised?: number;
}