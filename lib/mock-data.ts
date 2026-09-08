import type {
  Campaign,
  Donation,
  Notification,
  PlatformUser,
  Withdrawal,
} from "@/types";

export const categories: { name: Campaign["category"]; icon: string; count: number }[] = [
  { name: "Medical", icon: "HeartPulse", count: 128 },
  { name: "Education", icon: "GraduationCap", count: 94 },
  { name: "Disaster Relief", icon: "LifeBuoy", count: 61 },
  { name: "Animal Welfare", icon: "PawPrint", count: 47 },
  { name: "Community", icon: "Users", count: 73 },
  { name: "Environment", icon: "Leaf", count: 38 },
  { name: "Arts & Culture", icon: "Palette", count: 29 },
  { name: "Sports", icon: "Trophy", count: 22 },
];

export const campaigns: Campaign[] = [
  {
    id: "c1",
    slug: "help-amara-fight-leukemia",
    title: "Help Amara Fight Leukemia",
    category: "Medical",
    coverImage:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
    shortDescription:
      "Amara, 7, was diagnosed with acute leukemia. Help her family cover chemotherapy and hospital costs.",
    description:
      "Amara is a bright, energetic 7-year-old who loves painting and her pet cat, Milo. Three months ago, her parents noticed persistent fatigue and bruising, and after weeks of tests, she was diagnosed with acute lymphoblastic leukemia. Her treatment plan requires an intensive round of chemotherapy over the next eight months, plus regular hospital stays that her family's insurance only partially covers. Every contribution — no matter the size — brings Amara closer to a full recovery and back to the classroom she misses so much.",
    goalAmount: 45000,
    raisedAmount: 31250,
    donorsCount: 412,
    daysLeft: 18,
    deadline: "2026-09-26",
    status: "active",
    location: "Austin, TX",
    creator: { id: "u1", name: "Sarah Chen", avatar: "https://i.pravatar.cc/150?img=47", verified: true },
    isFeatured: true,
    isUrgent: true,
    gallery: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=800&q=80",
      "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80",
    ],
    updates: [
      {
        id: "up1",
        title: "Second round of chemo complete",
        content: "Amara completed her second round of chemotherapy this week and is responding well. Thank you all for your continued support!",
        date: "2026-08-20",
      },
    ],
    comments: [
      { id: "cm1", userName: "Priya Nair", userAvatar: "https://i.pravatar.cc/150?img=32", comment: "Sending strength to your family. Stay strong, Amara!", amount: 100, date: "2026-08-25" },
      { id: "cm2", userName: "Michael Torres", userAvatar: "https://i.pravatar.cc/150?img=12", comment: "Praying for a speedy recovery.", amount: 50, date: "2026-08-22" },
    ],
  },
  {
    id: "c2",
    slug: "rebuild-mission-hill-library",
    title: "Rebuild Mission Hill Community Library",
    category: "Education",
    coverImage:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&q=80",
    shortDescription:
      "Our neighborhood library burned down. Help us rebuild a space for 3,000+ children to learn and read.",
    description:
      "For 22 years, Mission Hill Community Library has been a second home for local kids — a place to do homework, borrow their first books, and attend free after-school programs. In July, an electrical fire destroyed the building. We're raising funds to rebuild a modern, accessible library that will serve over 3,000 children and families in the neighborhood. Every dollar goes toward construction materials, new books, and furnishings.",
    goalAmount: 80000,
    raisedAmount: 52400,
    donorsCount: 634,
    daysLeft: 34,
    deadline: "2026-10-12",
    status: "active",
    location: "Boston, MA",
    creator: { id: "u2", name: "David Okafor", avatar: "https://i.pravatar.cc/150?img=15", verified: true },
    isFeatured: true,
    gallery: [
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80",
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80",
    ],
  },
  {
    id: "c3",
    slug: "flood-relief-kerala-families",
    title: "Emergency Flood Relief for Kerala Families",
    category: "Disaster Relief",
    coverImage:
      "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=1200&q=80",
    shortDescription:
      "Monsoon floods displaced over 500 families. Provide emergency shelter, food, and clean water.",
    description:
      "Heavy monsoon rains have caused severe flooding across three districts in Kerala, displacing more than 500 families from their homes. Relief camps urgently need clean drinking water, dry food rations, medical supplies, and temporary shelter materials. Funds raised will be distributed directly through our on-ground partner network within 48 hours.",
    goalAmount: 60000,
    raisedAmount: 47800,
    donorsCount: 891,
    daysLeft: 9,
    deadline: "2026-09-17",
    status: "active",
    location: "Kerala, India",
    creator: { id: "u3", name: "Anjali Menon", avatar: "https://i.pravatar.cc/150?img=25", verified: true },
    isUrgent: true,
    gallery: [
      "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=800&q=80",
      "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=801&q=80",
    ],
  },
  {
    id: "c4",
    slug: "safe-haven-street-dogs-shelter",
    title: "Safe Haven: New Shelter for Street Dogs",
    category: "Animal Welfare",
    coverImage:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&q=80",
    shortDescription:
      "Building a no-kill shelter to rescue, vaccinate, and rehome over 200 street dogs a year.",
    description:
      "Our volunteer group has rescued and rehomed strays for six years, working out of a small rented lot. We're raising funds to build a permanent no-kill shelter with proper kennels, a vet clinic, and a quarantine unit — allowing us to help over 200 dogs a year instead of 60.",
    goalAmount: 35000,
    raisedAmount: 12900,
    donorsCount: 203,
    daysLeft: 45,
    deadline: "2026-10-23",
    status: "active",
    location: "Portland, OR",
    creator: { id: "u4", name: "Jamie Rivera", avatar: "https://i.pravatar.cc/150?img=33", verified: false },
    gallery: [
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&q=80",
      "https://images.unsplash.com/photo-1544568100-847a948585b9?w=800&q=80",
    ],
  },
  {
    id: "c5",
    slug: "clean-water-wells-northern-ghana",
    title: "Clean Water Wells for Northern Ghana",
    category: "Community",
    coverImage:
      "https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=1200&q=80",
    shortDescription:
      "Drilling 5 new boreholes to bring clean drinking water to 12 rural villages.",
    description:
      "Families in these villages currently walk over 6km daily to reach clean water. We're partnering with a local drilling team to install 5 solar-powered boreholes, giving over 4,000 residents reliable access to safe drinking water and freeing up hours each day for school and work.",
    goalAmount: 28000,
    raisedAmount: 28000,
    donorsCount: 356,
    daysLeft: 0,
    deadline: "2026-08-01",
    status: "completed",
    location: "Northern Region, Ghana",
    creator: { id: "u5", name: "Kwame Asante", avatar: "https://i.pravatar.cc/150?img=51", verified: true },
    gallery: ["https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=800&q=80"],
  },
  {
    id: "c6",
    slug: "reforest-cedar-valley-wildfire",
    title: "Reforest Cedar Valley After the Wildfire",
    category: "Environment",
    coverImage:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&q=80",
    shortDescription:
      "Plant 10,000 native trees to restore the forest destroyed by last year's wildfire.",
    description:
      "Last summer's wildfire burned over 2,000 acres of Cedar Valley's forest, destroying habitats for local wildlife. Working with the state forestry service, we're organizing volunteer planting days to put 10,000 native saplings back in the ground over the next two planting seasons.",
    goalAmount: 22000,
    raisedAmount: 9450,
    donorsCount: 178,
    daysLeft: 52,
    deadline: "2026-10-31",
    status: "active",
    location: "Cedar Valley, CA",
    creator: { id: "u6", name: "Lena Fischer", avatar: "https://i.pravatar.cc/150?img=44", verified: true },
    gallery: ["https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80"],
  },
  {
    id: "c7",
    slug: "wheelchairs-for-veterans",
    title: "Wheelchairs & Mobility Aids for Veterans",
    category: "Community",
    coverImage:
      "https://images.unsplash.com/photo-1573497491765-dccce02b29df?w=1200&q=80",
    shortDescription:
      "Providing free mobility equipment to disabled veterans who can't afford them.",
    description:
      "Many disabled veterans face months-long waits or high out-of-pocket costs for wheelchairs, prosthetics, and mobility aids. Our fund partners with a certified medical supplier to deliver equipment directly to veterans in need within two weeks of approval.",
    goalAmount: 40000,
    raisedAmount: 15600,
    donorsCount: 267,
    daysLeft: 61,
    deadline: "2026-11-09",
    status: "active",
    location: "Denver, CO",
    creator: { id: "u7", name: "Robert Hale", avatar: "https://i.pravatar.cc/150?img=59", verified: true },
    gallery: ["https://images.unsplash.com/photo-1573497491765-dccce02b29df?w=800&q=80"],
  },
  {
    id: "c8",
    slug: "youth-art-program-scholarships",
    title: "Scholarships for the Youth Art Program",
    category: "Arts & Culture",
    coverImage:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=1200&q=80",
    shortDescription:
      "Fund full-year scholarships for 30 low-income students in our after-school art program.",
    description:
      "Our after-school art program gives kids a creative outlet and a safe space after school, but tuition costs put it out of reach for many families. This fund covers full scholarships — including supplies — for 30 students this year.",
    goalAmount: 15000,
    raisedAmount: 6200,
    donorsCount: 94,
    daysLeft: 27,
    deadline: "2026-10-05",
    status: "active",
    location: "Chicago, IL",
    creator: { id: "u8", name: "Maya Thompson", avatar: "https://i.pravatar.cc/150?img=48", verified: false },
    gallery: ["https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80"],
  },
  {
    id: "c9",
    slug: "junior-league-new-equipment",
    title: "New Equipment for Riverside Junior League",
    category: "Sports",
    coverImage:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1200&q=80",
    shortDescription:
      "Help 120 kids get new uniforms, safety gear, and equipment for the upcoming season.",
    description:
      "Riverside Junior League gives kids ages 6-14 a chance to play organized sports regardless of their family's income. Our current gear is years old and worn out. This campaign funds new uniforms, helmets, and safety equipment for the upcoming season.",
    goalAmount: 12000,
    raisedAmount: 3100,
    donorsCount: 58,
    daysLeft: 40,
    deadline: "2026-10-18",
    status: "active",
    location: "Riverside, CA",
    creator: { id: "u9", name: "Carlos Mendez", avatar: "https://i.pravatar.cc/150?img=60", verified: false },
    gallery: ["https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80"],
  },
  {
    id: "c10",
    slug: "surgery-fund-for-noah",
    title: "Surgery Fund for Noah's Heart Condition",
    category: "Medical",
    coverImage:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=1200&q=80",
    shortDescription:
      "Noah needs open-heart surgery to correct a congenital defect found at birth.",
    description:
      "Noah was born with a congenital heart defect that requires corrective surgery within the next two months. His family has already used their savings on initial treatment and specialist visits. Funds raised will go directly to the hospital's billing department.",
    goalAmount: 55000,
    raisedAmount: 41200,
    donorsCount: 578,
    daysLeft: 12,
    deadline: "2026-09-20",
    status: "active",
    location: "Miami, FL",
    creator: { id: "u10", name: "Elena Vasquez", avatar: "https://i.pravatar.cc/150?img=29", verified: true },
    isUrgent: true,
    gallery: ["https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800&q=80"],
  },
  {
    id: "c11",
    slug: "solar-power-rural-school",
    title: "Solar Power for Ridgeview Rural School",
    category: "Education",
    coverImage:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80",
    shortDescription:
      "Installing solar panels so 300 students can have reliable electricity for the first time.",
    description:
      "Ridgeview Primary School currently runs on a diesel generator for only 3 hours a day, limiting access to computers and evening study sessions. This campaign funds a full solar installation to give the school reliable power around the clock.",
    goalAmount: 18000,
    raisedAmount: 18000,
    donorsCount: 245,
    daysLeft: 0,
    deadline: "2026-07-15",
    status: "completed",
    location: "Ridgeview, Kenya",
    creator: { id: "u11", name: "Grace Muthoni", avatar: "https://i.pravatar.cc/150?img=41", verified: true },
    gallery: ["https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80"],
  },
  {
    id: "c12",
    slug: "pending-review-new-community-garden",
    title: "Downtown Community Garden Initiative",
    category: "Environment",
    coverImage:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=1200&q=80",
    shortDescription:
      "Turning a vacant lot into a shared community garden with 40 growing plots.",
    description:
      "We've secured permission to convert an unused downtown lot into a community garden with 40 raised growing beds, a shared toolshed, and a rainwater collection system, open to all neighborhood residents.",
    goalAmount: 9500,
    raisedAmount: 0,
    donorsCount: 0,
    daysLeft: 60,
    deadline: "2026-11-07",
    status: "pending",
    location: "Seattle, WA",
    creator: { id: "u12", name: "Olivia Park", avatar: "https://i.pravatar.cc/150?img=37", verified: false },
    gallery: ["https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80"],
  },
];

export const donations: Donation[] = [
  {
    id: "d1",
    campaignId: "c1",
    campaignTitle: "Help Amara Fight Leukemia",
    campaignImage: campaigns[0].coverImage,
    amount: 150,
    date: "2026-09-02",
    status: "completed",
    paymentMethod: "Visa •••• 4242",
    isAnonymous: false,
    receiptId: "RCPT-98213",
  },
  {
    id: "d2",
    campaignId: "c3",
    campaignTitle: "Emergency Flood Relief for Kerala Families",
    campaignImage: campaigns[2].coverImage,
    amount: 75,
    date: "2026-08-29",
    status: "completed",
    paymentMethod: "Mastercard •••• 7710",
    isAnonymous: false,
    receiptId: "RCPT-97650",
  },
  {
    id: "d3",
    campaignId: "c10",
    campaignTitle: "Surgery Fund for Noah's Heart Condition",
    campaignImage: campaigns[9].coverImage,
    amount: 200,
    date: "2026-08-15",
    status: "completed",
    paymentMethod: "Visa •••• 4242",
    isAnonymous: true,
    receiptId: "RCPT-95122",
  },
  {
    id: "d4",
    campaignId: "c2",
    campaignTitle: "Rebuild Mission Hill Community Library",
    campaignImage: campaigns[1].coverImage,
    amount: 50,
    date: "2026-08-01",
    status: "completed",
    paymentMethod: "PayPal",
    isAnonymous: false,
    receiptId: "RCPT-92018",
  },
  {
    id: "d5",
    campaignId: "c4",
    campaignTitle: "Safe Haven: New Shelter for Street Dogs",
    campaignImage: campaigns[3].coverImage,
    amount: 25,
    date: "2026-09-06",
    status: "pending",
    paymentMethod: "Visa •••• 4242",
    isAnonymous: false,
    receiptId: "RCPT-99450",
  },
];

export const withdrawals: Withdrawal[] = [
  {
    id: "w1",
    campaignId: "c1",
    campaignTitle: "Help Amara Fight Leukemia",
    amount: 15000,
    requestedDate: "2026-08-28",
    status: "processed",
    method: "Bank Transfer",
    accountDetails: "Chase •••• 8821",
  },
  {
    id: "w2",
    campaignId: "c1",
    campaignTitle: "Help Amara Fight Leukemia",
    amount: 8000,
    requestedDate: "2026-09-05",
    status: "pending",
    method: "Bank Transfer",
    accountDetails: "Chase •••• 8821",
  },
  {
    id: "w3",
    campaignId: "c2",
    campaignTitle: "Rebuild Mission Hill Community Library",
    amount: 20000,
    requestedDate: "2026-08-20",
    status: "approved",
    method: "Bank Transfer",
    accountDetails: "Bank of America •••• 3390",
    note: "Approved — funds will be disbursed within 3 business days.",
  },
  {
    id: "w4",
    campaignId: "c9",
    campaignTitle: "New Equipment for Riverside Junior League",
    amount: 3100,
    requestedDate: "2026-09-01",
    status: "rejected",
    method: "Bank Transfer",
    accountDetails: "Wells Fargo •••• 1187",
    note: "Rejected — please submit updated campaign spending documentation.",
  },
];

export const notifications: Notification[] = [
  {
    id: "n1",
    type: "donation",
    title: "New donation received",
    message: "Priya Nair donated $100 to Help Amara Fight Leukemia.",
    date: "2026-09-08T09:12:00",
    read: false,
    link: "/campaigns/help-amara-fight-leukemia",
  },
  {
    id: "n2",
    type: "withdrawal",
    title: "Withdrawal approved",
    message: "Your withdrawal request for $20,000 has been approved.",
    date: "2026-09-07T15:40:00",
    read: false,
    link: "/dashboard/creator/withdrawals",
  },
  {
    id: "n3",
    type: "campaign",
    title: "Campaign approved",
    message: "Your campaign 'Reforest Cedar Valley After the Wildfire' is now live.",
    date: "2026-09-05T11:02:00",
    read: true,
    link: "/campaigns/reforest-cedar-valley-wildfire",
  },
  {
    id: "n4",
    type: "comment",
    title: "New comment on your campaign",
    message: "Michael Torres left a comment on Help Amara Fight Leukemia.",
    date: "2026-09-04T18:22:00",
    read: true,
  },
  {
    id: "n5",
    type: "system",
    title: "Welcome to GiveOra",
    message: "Your account was created successfully. Start exploring campaigns today!",
    date: "2026-08-30T08:00:00",
    read: true,
  },
];

export const platformUsers: PlatformUser[] = [
  {
    id: "u1", name: "Sarah Chen", email: "sarah.chen@example.com",
    avatar: "https://i.pravatar.cc/150?img=47", role: "creator", status: "active",
    joinedDate: "2025-11-02", campaignsCount: 1, totalRaised: 31250,
  },
  {
    id: "u2", name: "David Okafor", email: "david.okafor@example.com",
    avatar: "https://i.pravatar.cc/150?img=15", role: "creator", status: "active",
    joinedDate: "2025-09-14", campaignsCount: 1, totalRaised: 52400,
  },
  {
    id: "u13", name: "Priya Nair", email: "priya.nair@example.com",
    avatar: "https://i.pravatar.cc/150?img=32", role: "supporter", status: "active",
    joinedDate: "2026-01-20", campaignsCount: 0, totalDonated: 640,
  },
  {
    id: "u14", name: "Michael Torres", email: "michael.torres@example.com",
    avatar: "https://i.pravatar.cc/150?img=12", role: "supporter", status: "active",
    joinedDate: "2026-02-11", campaignsCount: 0, totalDonated: 210,
  },
  {
    id: "u9", name: "Carlos Mendez", email: "carlos.mendez@example.com",
    avatar: "https://i.pravatar.cc/150?img=60", role: "creator", status: "suspended",
    joinedDate: "2025-12-05", campaignsCount: 1, totalRaised: 3100,
  },
  {
    id: "u15", name: "Admin User", email: "admin@giveora.com",
    avatar: "https://i.pravatar.cc/150?img=68", role: "admin", status: "active",
    joinedDate: "2025-01-01", campaignsCount: 0,
  },
];

export const platformStats = {
  totalRaised: 4820500,
  totalCampaigns: 1284,
  totalDonors: 38900,
  totalCreators: 612,
  successRate: 78,
};

export function getCampaignBySlug(slug: string): Campaign | undefined {
  return campaigns.find((c) => c.slug === slug);
}

export function getRelatedCampaigns(campaign: Campaign, limit = 3): Campaign[] {
  return campaigns
    .filter((c) => c.id !== campaign.id && c.category === campaign.category)
    .slice(0, limit);
}