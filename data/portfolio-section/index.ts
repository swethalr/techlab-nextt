import React from 'react';
import { 
  FaChartSimple, 
  FaPhone, 
  FaMessage, 
  FaCalendarDays, 
  FaLocationDot, 
  FaGlobe, 
  FaMapLocationDot, 
  FaRankingStar 
} from 'react-icons/fa6';

export const marqueeTexts = [
  'Marketing',
  'Development',
  'Marketing Agency',
  'Branding',
];

export const tabContent = {
  Overview: {
    title: 'We Grow your Business Overview',
    desc: "With Performance Max, you get the best of Google all-in-one. Powered by Google's AI, reach valuable customers most likely to buy from you wherever they're browsing.",
    btn: 'Explore Performance Max',
    icon: React.createElement(FaChartSimple),
  },
  Calls: {
    title: 'Get more Sales Calls',
    desc: 'Reach customers actively searching on Google to drive sales, leads, and traffic. Upgrade your Search Ads with Message Ads to let people instantly start a WhatsApp conversation directly from your ad.',
    btn: 'Explore Search Ads',
    icon: React.createElement(FaPhone),
  },
  'Chat Clicks': {
    title: 'Engage with your New Leads',
    desc: "Build awareness and consideration with memorable, visually engaging ads that reach your audience when they're online, checking Gmail or using mobile apps.",
    btn: 'Explore Display Ads',
    icon: React.createElement(FaMessage),
  },
  Bookings: {
    title: 'More Bookings',
    desc: 'Show up when people are shopping with visually engaging product listings and let them know what you have in stock to drive more sales.',
    btn: 'Explore Shopping Ads',
    icon: React.createElement(FaCalendarDays),
  },
  Directions: {
    title: 'We improve your Business Walkins',
    desc: "Boost awareness of your brand, follow up with former ad viewers and reach potential customers while they're watching or searching for videos on YouTube.",
    btn: 'Explore Video Ads',
    icon: React.createElement(FaLocationDot),
  },
  'Website Clicks': {
    title: 'More impressions & More Clicks',
    desc: 'Reach people who are interested in apps like yours to drive installations, or choose to re-engage current users to drive more in-app actions.',
    btn: 'Explore App Ads',
    icon: React.createElement(FaGlobe),
  },
};

export const mapSteps = [
  {
    title: 'Profile Optimization',
    desc: 'Enhance your Google Business Profile with accurate details and images.',
    icon: React.createElement(FaMapLocationDot),
    color: 'bg-primary',
    image: '/assets/images/map/optimization.jpg',
  },
  {
    title: 'Local Citations',
    desc: 'Build strong local citations that improve trust and ranking consistency.',
    icon: React.createElement(FaRankingStar),
    color: 'bg-cyan-500',
    image: '/assets/images/map/citations.jpg',
  },
  {
    title: 'Performance Tracking',
    desc: 'Monitor engagement and ranking progress through detailed reports.',
    icon: React.createElement(FaChartSimple),
    color: 'bg-indigo-500',
    image: '/assets/images/map/tracking.jpg',
  },
];