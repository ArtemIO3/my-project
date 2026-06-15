import React, { useState } from 'react';
import './Place.css';

const placesData = {
  beach: [
    { id: 1, title: "Villa in Corfu", bedrooms: 4, rating: 10, price: 510, img: "./5.jpg" },
    { id: 2, title: "Villa Horizon View", bedrooms: 4, rating: 9.8, price: 640, img: "./6.png" },
    { id: 3, title: "Casa del Sol Marina", bedrooms: 6, rating: 9.5, price: 780, img: "./7.png" },
    { id: 4, title: "Azure Edge Villa", bedrooms: 5, rating: 9.0, price: 720, img: "./8.jpg" },
    { id: 5, title: "Villa de la Costa", bedrooms: 3, rating: 9.8, price: 850, img: "./9.png" },
    { id: 6, title: "Ocean Pearl Estate", bedrooms: 4, rating: 10, price: 670, img: "./10.png" },
    { id: 7, title: "Royal Aquamarine Villa", bedrooms: 7, rating: 9.7, price: 890, img: "./11.png" },
    { id: 8, title: "Palm Breeze Sanctuary", bedrooms: 4, rating: 9.5, price: 690, img: "./12.png" },
  ],
  pools: [
    { id: 9, title: "Infinity Pool Villa", bedrooms: 4, rating: 10, price: 510, img: "./13.png" },
    { id: 10, title: "Azure Pool House", bedrooms: 3, rating: 9.8, price: 420, img: "./14.jpg" },
    { id: 11, title: "Infinity Pool Resort", bedrooms: 5, rating: 10, price: 750, img: "./15.jpg" },
    { id: 12, title: "Modern Villa with Pool", bedrooms: 2, rating: 9.5, price: 310, img: "./16.jpg" },
    { id: 13, title: "Sunset Pool Retreat", bedrooms: 3, rating: 9.2, price: 220, img: "./17.jpg" },
    { id: 14, title: "Lagoon Pool Estate", bedrooms: 6, rating: 9.9, price: 600, img: "./18.jpg" },
    { id: 15, title: "Rooftop Pool Villa", bedrooms: 4, rating: 9.6, price: 480, img: "./19.jpg" },
    { id: 16, title: "Crystal Waters House", bedrooms: 5, rating: 9.4, price: 560, img: "./20.jpg" },
  ],
  international: [
    { id: 17, title: "Parisian Penthouse", bedrooms: 2, rating: 9.8, price: 680, img: "./21.jpg" },
    { id: 18, title: "Tuscan Farmhouse", bedrooms: 5, rating: 9.7, price: 520, img: "./22.jpg" },
    { id: 19, title: "Santorini Cave House", bedrooms: 2, rating: 10, price: 750, img: "./23.jpg" },
    { id: 20, title: "Bali Jungle Villa", bedrooms: 3, rating: 9.5, price: 310, img: "./24.jpg" },
    { id: 21, title: "Tokyo City Loft", bedrooms: 1, rating: 9.2, price: 220, img: "./100.jpg" },
    { id: 22, title: "Moroccan Riad", bedrooms: 4, rating: 9.9, price: 400, img: "./25.jpg" },
    { id: 23, title: "Amalfi Coast Villa", bedrooms: 3, rating: 9.8, price: 870, img: "./26.jpg" },
    { id: 24, title: "Dubai Sky Suite", bedrooms: 2, rating: 9.6, price: 930, img: "./27.jpg" },
  ],
  family: [
    { id: 25, title: "Family Beach House", bedrooms: 6, rating: 9.8, price: 620, img: "./28.jpg" },
    { id: 26, title: "Country Estate", bedrooms: 7, rating: 9.7, price: 540, img: "./29.jpg" },
    { id: 27, title: "Lakeside Family Lodge", bedrooms: 5, rating: 10, price: 750, img: "./30.jpg" },
    { id: 28, title: "Garden Villa Retreat", bedrooms: 4, rating: 9.5, price: 410, img: "./31.jpg" },
    { id: 29, title: "Forest Cabin Escape", bedrooms: 3, rating: 9.3, price: 280, img: "./32.jpg" },
    { id: 30, title: "Countryside Manor", bedrooms: 8, rating: 9.9, price: 800, img: "./33.jpg" },
    { id: 31, title: "Riverside Family Home", bedrooms: 5, rating: 9.6, price: 490, img: "./34.jpg" },
    { id: 32, title: "Sunny Meadow Villa", bedrooms: 4, rating: 9.4, price: 360, img: "./35.jpg" },
  ],
  mountains: [
    { id: 33, title: "Alpine Chalet", bedrooms: 4, rating: 10, price: 580, img: "./37.jpg" },
    { id: 34, title: "Rocky Peak Cabin", bedrooms: 3, rating: 9.8, price: 420, img: "./38.jpg" },
    { id: 35, title: "Summit View Lodge", bedrooms: 5, rating: 10, price: 750, img: "./39.jpg" },
    { id: 36, title: "Pine Forest Retreat", bedrooms: 2, rating: 9.5, price: 310, img: "./40.jpg" },
    { id: 37, title: "Mountain Stream House", bedrooms: 3, rating: 9.2, price: 260, img: "./41.jpg" },
    { id: 38, title: "Snowy Ridge Villa", bedrooms: 6, rating: 9.9, price: 670, img: "./42.jpg" },
    { id: 39, title: "Highland Stone Cottage", bedrooms: 2, rating: 9.6, price: 340, img: "./43.jpg" },
    { id: 40, title: "Glacier View Chalet", bedrooms: 4, rating: 9.7, price:720, img: "./44.jpg" },
  ],
};

/* ── Иконки ── */

const BeachIcon = ({ active = false }) => active ? (
  <svg width="55" height="52" viewBox="0 0 55 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.242554 40.8808C1.03619 40.6824 2.86157 40.4047 3.81394 40.8808C5.0044 41.4761 5.59963 43.2616 8.57578 43.2616C11.5519 43.2616 11.5519 40.2854 14.5281 40.2854C17.5042 40.2854 16.909 43.2616 20.4804 43.2616C24.0518 43.2616 24.647 39.6902 28.2184 39.6902C31.7898 39.6902 30.5993 43.2616 35.3612 43.2616C40.123 43.2616 38.9325 40.8806 42.5039 40.2854C46.0753 39.6902 45.4801 42.6663 47.861 42.6663C49.7657 42.6663 51.4324 41.476 52.0276 40.8808" stroke="#000080" strokeWidth="2"/>
    <path d="M2.02832 48.6191C2.82196 48.4207 4.64734 48.1429 5.5997 48.6191C6.79017 49.2143 7.3854 50.9999 10.3616 50.9999C13.3377 50.9999 13.3377 48.0237 16.3139 48.0237C19.29 48.0237 18.6948 50.9999 22.2662 50.9999C25.8375 50.9999 26.4328 47.4285 30.0042 47.4285C33.5755 47.4285 32.3851 50.9999 37.1469 50.9999C41.9088 50.9999 40.7183 48.6189 44.2897 48.0237C47.8611 47.4285 47.2659 50.4046 49.6468 50.4046C51.5515 50.4046 53.2182 49.2143 53.8134 48.6191" stroke="#000080" strokeWidth="2"/>
    <path d="M27.6231 39.2832L28.1101 12.4975M28.1101 12.4975C28.0755 14.4023 24.9933 11.7039 23.4565 10.1166C19.8852 6.5455 16.3138 6.35588 11.5519 4.57045C18.6946 -0.667576 25.8374 2.97412 28.2183 6.5455L28.1101 12.4975ZM23.4565 10.1166C15.1233 7.54655 12.0281 12.0703 11.5519 15.8798C12.7423 14.6893 15.1233 13.924 18.6946 12.9036C22.7199 11.7535 24.0519 11.8426 25.8375 12.4975C20.5995 12.4975 17.7027 19.6403 16.909 23.2117" stroke="#000080" strokeWidth="2" strokeLinecap="round"/>
    <path d="M28.2185 6.84386C29.0121 3.6693 32.2661 -0.963924 41.3136 1.89318C40.911 3.90596 39.8105 4.50875 37.7422 5.91193M37.7422 5.91193C33.694 8.65832 28.2185 10.6338 28.2185 13.3915C28.8137 15.1772 34.1708 13.3915 36.5517 20.5342M28.2185 13.3915C36.5517 8.62963 37.7422 14.5819 45.4802 13.3915C45.4802 7.67726 40.3215 6.02419 37.7422 5.91193" stroke="#000080" strokeWidth="2" strokeLinecap="round"/>
  </svg>
) : (
  <svg width="55" height="52" viewBox="0 0 55 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.242432 40.8808C1.03607 40.6824 2.86145 40.4047 3.81382 40.8808C5.00428 41.4761 5.59951 43.2616 8.57566 43.2616C11.5518 43.2616 11.5518 40.2854 14.528 40.2854C17.5041 40.2854 16.9089 43.2616 20.4803 43.2616C24.0517 43.2616 24.6469 39.6902 28.2183 39.6902C31.7897 39.6902 30.5992 43.2616 35.361 43.2616C40.1229 43.2616 38.9324 40.8806 42.5038 40.2854C46.0752 39.6902 45.48 42.6663 47.8609 42.6663C49.7656 42.6663 51.4323 41.476 52.0275 40.8808" stroke="black" strokeWidth="2"/>
    <path d="M2.02808 48.6191C2.82172 48.4207 4.64709 48.1429 5.59946 48.6191C6.78992 49.2143 7.38515 50.9999 10.3613 50.9999C13.3375 50.9999 13.3375 48.0237 16.3136 48.0237C19.2898 48.0237 18.6945 50.9999 22.2659 50.9999C25.8373 50.9999 26.4325 47.4285 30.0039 47.4285C33.5753 47.4285 32.3848 50.9999 37.1467 50.9999C41.9085 50.9999 40.7181 48.6189 44.2895 48.0237C47.8608 47.4285 47.2656 50.4046 49.6465 50.4046C51.5513 50.4046 53.2179 49.2143 53.8131 48.6191" stroke="black" strokeWidth="2"/>
    <path d="M27.623 39.2832L28.11 12.4975M28.11 12.4975C28.0754 14.4023 24.9932 11.7039 23.4564 10.1166C19.8851 6.5455 16.3137 6.35588 11.5518 4.57045C18.6945 -0.667576 25.8373 2.97412 28.2182 6.5455L28.11 12.4975ZM23.4564 10.1166C15.1231 7.54655 12.0279 12.0703 11.5518 15.8798C12.7422 14.6893 15.1231 13.924 18.6945 12.9036C22.7198 11.7535 24.0518 11.8426 25.8374 12.4975C20.5993 12.4975 17.7026 19.6403 16.9089 23.2117" stroke="black" strokeWidth="2" strokeLinecap="round"/>
    <path d="M28.2183 6.84386C29.0119 3.6693 32.2658 -0.963924 41.3133 1.89318C40.9108 3.90596 39.8103 4.50875 37.742 5.91193M37.742 5.91193C33.6937 8.65832 28.2183 10.6338 28.2183 13.3915C28.8135 15.1772 34.1706 13.3915 36.5515 20.5342M28.2183 13.3915C36.5515 8.62963 37.742 14.5819 45.48 13.3915C45.48 7.67726 40.3213 6.02419 37.742 5.91193" stroke="black" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const PoolsIcon = ({ active = false }) => active ? (
  <svg width="56" height="54" viewBox="0 0 56 54" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.242432 42.2184C1.05132 42.0162 2.91176 41.7331 3.88243 42.2184C5.09576 42.8251 5.70243 44.6449 8.73576 44.6449C11.7691 44.6449 11.7691 41.6115 14.8024 41.6115C17.8358 41.6115 17.2291 44.6449 20.8691 44.6449C24.5091 44.6449 25.1158 41.0049 28.7558 41.0049C32.3958 41.0049 31.1824 44.6449 36.0357 44.6449C40.8891 44.6449 39.6757 42.2182 43.3157 41.6115C46.9557 41.0049 46.3491 44.0382 48.7757 44.0382C50.7171 44.0382 52.4157 42.825 53.0224 42.2184" stroke="#000080" strokeWidth="2"/>
    <path d="M2.0625 50.1051C2.87139 49.9029 4.73183 49.6198 5.7025 50.1051C6.91583 50.7118 7.5225 52.5316 10.5558 52.5316C13.5892 52.5316 13.5892 49.4983 16.6225 49.4983C19.6558 49.4983 19.0492 52.5316 22.6892 52.5316C26.3292 52.5316 26.9358 48.8916 30.5758 48.8916C34.2158 48.8916 33.0025 52.5316 37.8558 52.5316C42.7091 52.5316 41.4958 50.1049 45.1358 49.4983C48.7758 48.8916 48.1691 51.9249 50.5958 51.9249C52.5371 51.9249 54.2358 50.7117 54.8425 50.1051" stroke="#000080" strokeWidth="2"/>
    <path d="M17.229 42.2179V5.81795C17.229 4.60462 18.0438 1.57095 21.4757 1.57129C24.509 1.57159 24.7112 5.81766 25.1157 8.24432" stroke="#000080" strokeWidth="2"/>
    <path d="M37.8557 44.4661V5.24666C37.8557 4.03333 38.6706 1.00007 42.1024 1C45.1357 0.999941 45.3379 5.21177 45.7424 7.63843" stroke="#000080" strokeWidth="2"/>
    <path d="M38.4623 16.7383H17.229" stroke="#000080" strokeWidth="2"/>
    <path d="M17.229 25.8379H37.8557" stroke="#000080" strokeWidth="2"/>
    <path d="M17.229 34.3313H37.8557" stroke="#000080" strokeWidth="2"/>
  </svg>
) : (
  <svg width="56" height="54" viewBox="0 0 56 54" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.242554 42.2184C1.05144 42.0162 2.91189 41.7331 3.88255 42.2184C5.09588 42.8251 5.70255 44.6449 8.73588 44.6449C11.7692 44.6449 11.7692 41.6115 14.8025 41.6115C17.8359 41.6115 17.2292 44.6449 20.8692 44.6449C24.5092 44.6449 25.1159 41.0049 28.7559 41.0049C32.3959 41.0049 31.1825 44.6449 36.0359 44.6449C40.8892 44.6449 39.6759 42.2182 43.3159 41.6115C46.9559 41.0049 46.3492 44.0382 48.7759 44.0382C50.7172 44.0382 52.4159 42.825 53.0225 42.2184" stroke="black" strokeWidth="2"/>
    <path d="M2.06262 50.1051C2.87151 49.9029 4.73195 49.6198 5.70262 50.1051C6.91595 50.7118 7.52262 52.5316 10.556 52.5316C13.5893 52.5316 13.5893 49.4983 16.6226 49.4983C19.6559 49.4983 19.0493 52.5316 22.6893 52.5316C26.3293 52.5316 26.9359 48.8916 30.5759 48.8916C34.2159 48.8916 33.0026 52.5316 37.8559 52.5316C42.7093 52.5316 41.4959 50.1049 45.1359 49.4983C48.7759 48.8916 48.1693 51.9249 50.5959 51.9249C52.5373 51.9249 54.2359 50.7117 54.8426 50.1051" stroke="black" strokeWidth="2"/>
    <path d="M17.2292 42.2179V5.81795C17.2292 4.60462 18.0441 1.57095 21.4759 1.57129C24.5092 1.57159 24.7115 5.81766 25.1159 8.24432" stroke="black" strokeWidth="2"/>
    <path d="M37.8558 44.4661V5.24666C37.8558 4.03333 38.6707 1.00007 42.1025 1C45.1358 0.999941 45.3381 5.21177 45.7425 7.63843" stroke="black" strokeWidth="2"/>
    <path d="M38.4624 16.7383H17.2291" stroke="black" strokeWidth="2"/>
    <path d="M17.2292 25.8379H37.8559" stroke="black" strokeWidth="2"/>
    <path d="M17.2292 34.3313H37.8559" stroke="black" strokeWidth="2"/>
  </svg>
);

const InternationalIcon = ({ active = false }) => active ? (
  <svg width="55" height="56" viewBox="0 0 55 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="27.5" cy="27.8008" r="26.5" stroke="#000080" strokeWidth="2"/>
    <path d="M28.05 0.851562V54.2016" stroke="#000080" strokeWidth="2"/>
    <path d="M0.550049 27.8008H54.45" stroke="#000080" strokeWidth="2"/>
    <path d="M28.05 0.851562C32.8167 3.7849 43.34 13.2816 42.9 27.8016C42.46 42.3216 32.45 52.0016 28.05 54.7516" stroke="#000080" strokeWidth="2"/>
    <path d="M28.05 0.851562C23.2834 3.7849 12.7749 13.8316 13.2149 28.3516C13.6549 42.8716 22.5649 52.0016 26.9649 54.7516" stroke="#000080" strokeWidth="2"/>
    <path d="M5.5 11.3008C8.98333 13.5008 18.37 17.9008 28.05 17.9008C37.73 17.9008 46.0167 13.5008 48.95 11.3008" stroke="#000080" strokeWidth="2"/>
    <path d="M6.05005 43.7512C8.98338 41.7345 17.49 37.7012 28.05 37.7012C38.61 37.7012 46.3834 41.7345 48.95 43.7512" stroke="#000080" strokeWidth="2"/>
  </svg>
) : (
  <svg width="55" height="56" viewBox="0 0 55 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="27.5" cy="27.8008" r="26.5" stroke="black" strokeWidth="2"/>
    <path d="M28.05 0.851562V54.2016" stroke="black" strokeWidth="2"/>
    <path d="M0.550049 27.8008H54.45" stroke="black" strokeWidth="2"/>
    <path d="M28.05 0.851562C32.8167 3.7849 43.34 13.2816 42.9 27.8016C42.46 42.3216 32.45 52.0016 28.05 54.7516" stroke="black" strokeWidth="2"/>
    <path d="M28.05 0.851562C23.2834 3.7849 12.7749 13.8316 13.2149 28.3516C13.6549 42.8716 22.5649 52.0016 26.9649 54.7516" stroke="black" strokeWidth="2"/>
    <path d="M5.5 11.3008C8.98333 13.5008 18.37 17.9008 28.05 17.9008C37.73 17.9008 46.0167 13.5008 48.95 11.3008" stroke="black" strokeWidth="2"/>
    <path d="M6.05005 43.7512C8.98338 41.7345 17.49 37.7012 28.05 37.7012C38.61 37.7012 46.3834 41.7345 48.95 43.7512" stroke="black" strokeWidth="2"/>
  </svg>
);

const FamilyIcon = ({ active = false }) => active ? (
  <svg width="63" height="54" viewBox="0 0 63 54" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M31.3757 9.88584C32.6822 6.61961 37.4509 0.283128 46.0738 1.06702C56.8523 2.04689 62.405 9.88584 60.7718 19.685C59.302 28.5038 33.3355 51.0408 31.3757 53.0005" stroke="#000080" strokeWidth="2" strokeLinecap="round"/>
    <path d="M30.6772 9.88584C29.3708 6.61961 24.6021 0.283128 15.9792 1.06702C5.20067 2.04689 -0.351991 9.88584 1.2812 19.685C2.751 28.5038 28.7175 51.0408 30.6772 53.0005" stroke="#000080" strokeWidth="2" strokeLinecap="round"/>
  </svg>
) : (
  <svg width="63" height="54" viewBox="0 0 63 54" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M31.3757 9.88584C32.6822 6.61961 37.4509 0.283128 46.0738 1.06702C56.8523 2.04689 62.405 9.88584 60.7718 19.685C59.302 28.5038 33.3355 51.0408 31.3757 53.0005" stroke="black" strokeWidth="2" strokeLinecap="round"/>
    <path d="M30.6771 9.88584C29.3706 6.61961 24.6019 0.283128 15.9791 1.06702C5.20055 2.04689 -0.352114 9.88584 1.28108 19.685C2.75088 28.5038 28.7174 51.0408 30.6771 53.0005" stroke="black" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const MountainsIcon = ({ active = false }) => active ? (
  <svg width="67" height="53" viewBox="0 0 67 53" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.4124 51.7263H2.00288C1.25052 51.7263 0.767623 50.9268 1.1178 50.2609L18.7365 16.757C19.1288 16.011 20.2115 16.0552 20.5417 16.8308L26.1733 30.0597M15.4124 51.7263H64.7538C65.4912 51.7263 65.975 50.9555 65.6544 50.2915L53.7928 25.7263M29.4015 23.5597L26.1733 30.0597L15.4124 51.7263M29.4015 23.5597L40.3302 1.55509C40.7001 0.810242 41.7647 0.816165 42.1263 1.56509L53.7928 25.7263M29.4015 23.5597L34.7476 29.2583C35.1509 29.6882 35.8365 29.6778 36.2265 29.236L40.5318 24.36C40.9144 23.9267 41.5836 23.9071 41.9909 24.3171L47.0974 29.4581C47.4422 29.8051 47.9874 29.8518 48.3862 29.5685L53.7928 25.7263" stroke="#000080" strokeWidth="2" strokeLinecap="round"/>
  </svg>
) : (
  <svg width="67" height="53" viewBox="0 0 67 53" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.4121 51.7263H2.00263C1.25028 51.7263 0.767379 50.9268 1.11755 50.2609L18.7362 16.757C19.1286 16.011 20.2113 16.0552 20.5414 16.8308L26.173 30.0597M15.4121 51.7263H64.7536C65.491 51.7263 65.9747 50.9555 65.6541 50.2915L53.7926 25.7263M29.4013 23.5597L26.173 30.0597L15.4121 51.7263M29.4013 23.5597L40.33 1.55509C40.6999 0.810242 41.7645 0.816165 42.1261 1.56509L53.7926 25.7263M29.4013 23.5597L34.7474 29.2583C35.1506 29.6882 35.8362 29.6778 36.2263 29.236L40.5316 24.36C40.9141 23.9267 41.5833 23.9071 41.9907 24.3171L47.0972 29.4581C47.4419 29.8051 47.9872 29.8518 48.3859 29.5685L53.7926 25.7263" stroke="black" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const categories = [
  { id: "beach", label: "Beach", Icon: BeachIcon },
  { id: "pools", label: "Pools", Icon: PoolsIcon },
  { id: "international", label: "Int'l", Icon: InternationalIcon },
  { id: "family", label: "Family", Icon: FamilyIcon },
  { id: "mountains", label: "Mountains", Icon: MountainsIcon },
];

const Place = () => {
  const [activeCategory, setActiveCategory] = useState('beach');
  const currentPlaces = placesData[activeCategory] || [];

  return (
    <div className="place-container">
      <h2>Find your place</h2>

      <div className="categories-tabs">
        {categories.map(({ id, label, Icon }) => (
          <button
            key={id}
            className={`tab-btn ${activeCategory === id ? 'active' : ''}`}
            onClick={() => setActiveCategory(id)}
          >
            <span className="tab-icon">
              <Icon active={activeCategory === id} />
            </span>
            <span className="tab-label">{label}</span>
          </button>
        ))}
      </div>

      <div className="cards-grid">
        {currentPlaces.map((place) => (
          <div key={place.id} className="card">
            <div className="card-image-wrapper">
              <img src={place.img} alt={place.title} className="card-img" />
              <button className="view-more-btn">View more</button>
            </div>
            <div className="card-info">
              <div className="card-main">
                <h3>{place.title}</h3>
                <p className="bedrooms">{place.bedrooms} bedrooms</p>
                <span className="rating-badge">{place.rating}</span>
              </div>
              <div className="card-price">
                <span>${place.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Place;