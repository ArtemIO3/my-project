import React, { useState } from 'react';
import './Rentiqpage.css';

const faqData = [
  {
    id: 1,
    question: "How can I join One Key?",
    answer: [
      "It's easy (and free) to join One Key.",
      "In order to be eligible for One Key (currently only available in the US and UK) you must log in or create an account on the US or UK version of the Expedia, Hotels.com or Vrbo site or app."
    ]
  },
  {
    id: 2,
    question: "How does the One Key travel rewards program work?",
    answer: [
      "One Key is our travel rewards program where members can enjoy Member Prices and can earn and use OneKeyCash on eligible bookings.",
      "OneKeyCash is simple, $1 in OneKeyCash gives you a $1 discount on eligible travel.",
      "As long as you're an eligible member—and sign in before you make any bookings—we'll add any rewards and trip elements you've earned to your account.",
      "Here's what you earn on Vrbo: Silver members earn 1% and Gold and Platinum members earn 2% on all eligible holiday rentals.",
      "On Expedia and Hotels.com: Members will receive 2% in OneKeyCash per $ spent on eligible hotels, vacation rentals, activities, packages, car hire and cruises, and 0.2% in OneKeyCash per $ spent on eligible flights.",
      "You can earn more on stays at eligible VIP Access properties as you move up the tiers. And don't forget, you earn OneKeyCash on top of most airline miles and credit card rewards.",
      "Planning a family trip? As long as you are an eligible member and make the booking, you will earn OneKeyCash on all elements of the booking, even flights booked for others. No need to set up accounts for all of your family members. It pays to be the planner!",
      "OneKeyCash earned on bookings won't expire if you make an eligible booking at least once within 18 months. OneKeyCash received through offers and promotions can expire sooner.",
      "USD only. Excludes taxes and fees."
    ]
  },
  {
    id: 3,
    question: "How can I track and redeem my rewards with One Key?",
    answer: [
      "Your rewards are easy to track – just head to your rewards activity page to see what you have earned and your progress toward your tier status.",
      "Note: Only eligible bookings receive rewards. For more information on what bookings are eligible please see our terms and conditions.",
      "When you're ready to redeem OneKeyCash, once confirmed, it's yours to use at any time.",
      "OneKeyCash can be used on US dollar 'Pay Now' bookings only and participating vacation rentals.",
      "To use OneKeyCash on a flight, you will need enough OneKeyCash to cover the entire cost of your eligible flight, including taxes and fees, and may not add any optional extras like checked bags or seat assignments. You can purchase those extras after booking your ticket.",
      "OneKeyCash may only be used on selected flights.",
      "OneKeyCash cannot be redeemed for cash and is not transferable to other members, but you can redeem OneKeyCash on eligible bookings in someone else's name.",
      "If you choose to use a credit card associated with an airline, your credit card benefits may not be passed to the airline. You'll still be able to enter your airline loyalty program number at checkout to earn airline loyalty rewards and OneKeyCash."
    ]
  },
  {
    id: 4,
    question: "How do you reach tier status with One Key?",
    answer: [
      "The more trip elements you book across Expedia, Hotels.com and Vrbo, the higher status you earn with One Key.",
      "What's a trip element? They're the different parts of a trip—One Key takes every trip element into account and rewards you for it.",
      "1 air ticket (one way or roundtrip)",
      "1 hotel room night (each night counts as an element)",
      "1 night in a vacation rental",
      "1 night on a cruise",
      "1-day car rental",
      "1 roundtrip ground transportation ticket (airport shuttles, transfers, etc.)",
      "1 activity ticket (a private tour, a theme park ticket, etc.)",
      "Trip elements must be worth $25 or more in USD excluding taxes and fees to qualify.",
      "Your tier status: It's fast and easy to move up One Key tiers. Here's what you need to book to qualify for each tier:",
      "Blue - Just sign up, it's free!",
      "Silver - 5 trip elements within a year",
      "Gold - 15 trip elements within a year",
      "Platinum - 30 trip elements within a year",
      "So, for example, if you booked 5 nights in a vacation rental, you'd earn 5 trip elements, enough to reach Silver tier status in one trip.",
      "Tier status will be earned on a calendar year basis, from Jan 1 to Dec 31. Your status for the upcoming year will be determined according to the number of trip elements you have collected by Dec 31 and your progress will reset as of Jan 1."
    ]
  },
 {
    id: 5,
    question: "How do I get a discount with the Expedia, Hotels.com and Vrbo travel rewards program, One Key?",
    answer: [
      "By joining our travel rewards program, One Key, you can instantly unlock member savings and earn and use OneKeyCash on eligible bookings.",
      "Just by signing up, you can save 10% or more on over 100,000 hotels worldwide with One Key Member Prices and the savings and perks get bigger as you move up the tiers."
    ]
  },
  {
    id: 6,
    question: "Is One Key, the Expedia, Hotels.com and Vrbo travel rewards program, free?",
    answer: [
      "Yes, One Key is free to join!",
      "Once you sign up you can instantly start earning OneKeyCash and get access to Member Prices on Expedia and Hotels.com.",
      "On Vrbo you'll start earning OneKeyCash on bookings made once you qualify for Silver—after 5 trip elements."
    ]
  },
 {
    id: 7,
    question: "How do I stay up to date on One Key?",
    answer: [
      "Don't miss out on important One Key updates across Expedia, Hotels.com and Vrbo!",
      "Follow these steps on our sites to subscribe to One Key updates on the Vrbo, Expedia and Hotels.com apps or websites:",
      "Sign-in > Account > Communications"
    ]
  },
  {
    id: 8,
    question: "Using accounts outside of the US and UK",
    answer: [
      "One Key is currently live in the United States and United Kingdom. That means that in some regions, you will be a part of the One Key program and in others, the Hotels.com Rewards program will exist until One Key arrives in that region. Your rewards will be transferred over to OneKeyCash when you become a One Key member in that region.",
      "In order to calculate your eligibility for One Key, your Hotels.com Rewards account will be associated with the region where you booked the most travel in the last 12 months. If that region isn't part of One Key, then you will remain a member of the Hotels.com Rewards program in that region. If it is, then you will be a One Key member.",
      "When One Key launches in the region associated with your account, we'll convert your Hotels.com stamps and reward nights to OneKeyCash. For example, if you are already a One Key member in the US but have also earned most of your Hotels.com Rewards stamps and reward nights in the UK in the last 12 months, we'll convert the stamps and reward nights to OneKeyCash and combine those with your US balance when you become a One Key member in the UK.",
      "Depending on where the majority of your bookings were in the last 12 months, the currency associated with your One Key account may change from USD to GBP. Any eligible activity will also be carried over and converted to trip elements as well, getting you closer to the next tier status.",
      "Please note that if you have made bookings in multiple regions on your Hotels.com Rewards account and the majority of bookings were made on other Hotels.com Rewards regions in the last 12 months, we will transition your rewards and account to that region when you become a One Key member in that region.",
      "One Key is currently live in the United States and United Kingdom. If you have Expedia Rewards accounts in different regions, your rewards and trip elements will transfer to One Key when One Key launches and you become a One Key member in those regions.",
      "Until then, you will have separate active Expedia Rewards accounts with Expedia Rewards points to use in each region where you have an account. The same process will follow for all other regions. Accounts in other regions will be transitioned when you become a One Key member in that region.",
      "For example: if you have US and UK Expedia accounts, you will have separate OneKeyCash you can use in the US One Key program and Expedia Rewards points you can use in the UK Expedia Rewards program until One Key launches in the UK. When One Key launches in the UK and you become a One Key member, those Expedia Rewards points will convert to OneKeyCash and combine with your US balance. Any trip elements will also be carried over as well, getting you closer to the next tier status."
    ]
  },
 {
    id: 9,
    question: "If you no longer want to participate in One Key or have a single account, here is how to request the deletion of your account",
    answer: [
      "Important note in case of deletion requests and ongoing or upcoming trips: If you have an ongoing or upcoming trip and ask us to delete your account, our Customer Service teams won't be able to answer any questions, concerns, cancellations, refunds, etc.",
      "This is because when your account is deleted, our Customer Service team will not have your deleted account information anymore. Therefore, they may kindly ask you to re-submit your deletion request after your trip is completed.",
      "Wait until after your trip to submit the deletion request.",
      "Save a copy of all your itineraries and correspondence with us or the travel supplier before you request the deletion.",
      "Web: Log into your single account on the Expedia, Hotels.com or Vrbo website and go to Account > Settings > scroll down to the 'Account management' section and click on 'Delete Account'.",
      "App: Log into your single account on your Expedia, Hotels.com or Vrbo app and go to Profile > Settings > scroll down to the 'Account management' section and click on 'Delete account'.",
      "Web/Phone: Click on Support > Other > Privacy & Security > Request that we delete your data > Contact Us link and ask our Customer Services to delete your account.",
      "Chat: click on Support > Chat Now and ask our agent to delete your account."
    ]
  }
];

const ChevronIcon = ({ isOpen }) => (
  <svg
    className={`faq-arrow ${isOpen ? 'open' : ''}`}
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const RentiqPage = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="rentiq-page">

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-left">
          <div className="hero-logo">
            <svg width="150" height="44" viewBox="0 0 150 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M45.9321 41.0962V22.7205C45.9321 22.338 46.0691 22.0121 46.3477 21.7476C46.6216 21.4832 46.9522 21.3509 47.3348 21.3509H64.3504C64.7329 21.3509 65.0588 21.4879 65.3232 21.7665C65.5972 22.0404 65.7388 22.371 65.7388 22.7535V24.142C65.7388 24.5245 65.6019 24.8551 65.3232 25.129C65.0588 25.3935 64.7329 25.5257 64.3504 25.5257H51.4954V29.8186H62.5652C62.9478 29.8186 63.2736 29.9555 63.5381 30.2342C63.812 30.4986 63.9537 30.8245 63.9537 31.207V32.5955C63.9537 32.978 63.8167 33.3086 63.5381 33.5825C63.2736 33.847 62.9478 33.9792 62.5652 33.9792H51.4954V38.3335H64.3221C64.6951 38.3335 65.0163 38.4657 65.2807 38.7302C65.5452 38.9947 65.6774 39.3205 65.6774 39.703V41.1198C65.6774 41.5024 65.5405 41.833 65.2619 42.1069C64.9879 42.3713 64.6574 42.5036 64.2748 42.5036H47.3348C46.9522 42.5036 46.6216 42.3713 46.3477 42.1069C46.0691 41.8377 45.9321 41.4977 45.9321 41.0962ZM68.4544 41.1246V22.7488C68.4544 22.3663 68.5866 22.0357 68.8511 21.7618C69.1155 21.4879 69.4414 21.3462 69.8239 21.3462H74.164C74.5088 21.3462 74.8724 21.4831 75.2549 21.7618C75.6375 22.0357 75.9539 22.3663 76.1995 22.7488L85.1158 36.4586V22.7205C85.1158 22.338 85.248 22.0121 85.5125 21.7476C85.7864 21.4832 86.117 21.3509 86.4995 21.3509H89.0403C89.4228 21.3509 89.7487 21.4832 90.0132 21.7476C90.2871 22.0121 90.4288 22.3474 90.4288 22.7488V41.1246C90.4288 41.5071 90.2918 41.8377 90.0132 42.1116C89.7487 42.3761 89.4228 42.5083 89.0403 42.5083H84.1382C83.7557 42.5083 83.359 42.3761 82.9576 42.1116C82.5561 41.8377 82.235 41.5071 81.9989 41.1246L73.8382 28.4632V41.1246C73.8382 41.5071 73.7012 41.8377 73.4273 42.1116C73.1628 42.3761 72.837 42.5083 72.4544 42.5083H69.857C69.4744 42.5083 69.1439 42.3761 68.87 42.1116C68.5913 41.8377 68.4544 41.5071 68.4544 41.1246ZM92.8467 24.1373V22.7488C92.8467 22.3474 92.979 22.0121 93.2434 21.7476C93.5079 21.4832 93.8432 21.3509 94.2446 21.3509H112.975C113.376 21.3509 113.711 21.4832 113.976 21.7476C114.24 22.0121 114.373 22.3474 114.373 22.7488V24.1373C114.373 24.5387 114.24 24.874 113.976 25.1385C113.711 25.3935 113.376 25.521 112.975 25.521H106.391V41.1482C106.391 41.5307 106.254 41.8566 105.976 42.121C105.711 42.3761 105.385 42.5036 105.003 42.5036H102.212C101.829 42.5036 101.499 42.3761 101.225 42.121C100.96 41.8566 100.828 41.5307 100.828 41.1482V25.521H94.2446C93.8432 25.521 93.5079 25.3935 93.2434 25.1385C92.979 24.874 92.8467 24.5434 92.8467 24.1373ZM116.8 41.1529V22.7488C116.8 22.3663 116.937 22.0357 117.216 21.7618C117.489 21.4879 117.82 21.3462 118.203 21.3462H120.946C121.348 21.3462 121.683 21.4831 121.952 21.7618C122.226 22.0357 122.363 22.3663 122.363 22.7488V41.1246C122.363 41.5071 122.222 41.8377 121.933 42.1116C121.66 42.3761 121.329 42.5083 120.946 42.5083H118.203C117.82 42.5083 117.489 42.3808 117.216 42.1258C116.937 41.8613 116.8 41.5402 116.8 41.1529ZM125.39 31.7832C125.39 28.0334 126.401 25.2849 128.418 23.5328C130.434 21.7807 133.395 20.907 137.301 20.907C141.216 20.907 144.168 21.7382 146.156 23.4005C148.153 25.0629 149.15 27.7548 149.15 31.4715C149.15 33.4408 148.767 35.0418 147.998 36.2839C147.455 37.1812 146.874 37.9746 146.255 38.6735H148.602C149.004 38.6735 149.339 38.8105 149.603 39.0891C149.868 39.3536 150 39.6794 150 40.062V41.271C150 41.6535 149.868 41.9841 149.603 42.258C149.339 42.5225 149.004 42.6547 148.602 42.6547H137.268C133.381 42.6547 130.429 41.781 128.413 40.0289C126.396 38.2815 125.39 35.533 125.39 31.7832ZM137.273 38.6735C141.485 38.6735 143.591 36.2744 143.591 31.4715C143.591 29.2377 143.096 27.5848 142.099 26.5127C141.107 25.4313 139.502 24.8882 137.287 24.8882C135.081 24.8882 133.476 25.4738 132.46 26.645C131.454 27.8162 130.954 29.5258 130.954 31.7832C130.954 34.0359 131.454 35.7502 132.46 36.9214C133.471 38.0879 135.077 38.6735 137.273 38.6735Z" fill="#010101"/>
              <path d="M25.1858 0H0L4.95877 7.73567H19.24C22.8103 7.73567 28.7608 7.73567 30.1493 11.901C32.1328 17.8515 27.174 20.0334 25.1905 20.0334H17.0581L32.9262 42.839H42.447C36.6948 37.9463 29.3559 26.1776 29.3559 26.1776C33.5212 24.1941 39.5048 20.2554 37.6866 10.7062C36.0903 2.38023 29.3512 0.330584 25.1858 0Z" fill="#010101"/>
              <path d="M7.50928 19.6558C5.77135 19.6558 6.13972 26.4516 6.56003 28.6052L16.997 43.0281H24.114C18.4233 34.7398 8.17989 19.6558 7.50928 19.6558Z" fill="#010101"/>
            </svg>
          </div>
          <p className="hero-tagline">
            Rentiq, the vacation rental brand that rewards you for being a
          </p>
          <button className="btn-primary">Sign in, it's free</button>
        </div>
        <div className="hero-image" aria-hidden="true" />
      </section>

      {/* ── Feature icons ── */}
      <section className="features">
        <div className="feature-item">
          <div className="feature-icon">
            <svg width="32" height="32" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M4.89453 53.8154V51.0503H61.4695V53.8154H4.89453ZM12.7642 48.2851C11.4903 48.2851 10.4276 47.8584 9.57593 47.0048C8.72427 46.1513 8.29751 45.0886 8.29567 43.8166V16.8039C8.29567 15.5319 8.72242 14.4692 9.57593 13.6156C10.4294 12.7621 11.4913 12.3363 12.7614 12.3381H53.6027C54.8746 12.3381 55.9365 12.764 56.7881 13.6156C57.6398 14.4673 58.0665 15.53 58.0684 16.8039V43.8194C58.0684 45.0914 57.6416 46.1532 56.7881 47.0048C55.9346 47.8565 54.8719 48.2833 53.5999 48.2851H12.7642ZM12.7642 45.52H53.6027C54.0267 45.52 54.4165 45.3421 54.7723 44.9863C55.1281 44.6305 55.3051 44.2406 55.3032 43.8166V16.8039C55.3032 16.3799 55.1263 15.99 54.7723 15.6342C54.4165 15.2784 54.0257 15.1005 53.5999 15.1005H12.7642C12.3383 15.1005 11.9475 15.2784 11.5917 15.6342C11.2378 15.9881 11.0608 16.378 11.0608 16.8039V43.8194C11.0608 44.2434 11.2378 44.6323 11.5917 44.9863C11.9457 45.3402 12.3356 45.5181 12.7614 45.52" fill="#5a5fd4"/>
            </svg>
          </div>
          <p className="feature-title">Members always get our best prices</p>
          <p className="feature-desc">You could get a discount on eligible booking when signed in</p>
        </div>

        <div className="feature-item">
          <div className="feature-icon">
            <svg width="32" height="26" viewBox="0 0 64 19" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M19.5977 17.5345V9.69417C19.5977 9.53096 19.6561 9.39192 19.775 9.27908C19.8918 9.16624 20.0329 9.10982 20.1961 9.10982H27.4561C27.6193 9.10982 27.7584 9.16826 27.8712 9.28714C27.9881 9.40401 28.0485 9.54506 28.0485 9.70828V10.3007C28.0485 10.4639 27.9901 10.6049 27.8712 10.7218C27.7584 10.8346 27.6193 10.8911 27.4561 10.8911H21.9713V12.7227H26.6945C26.8577 12.7227 26.9967 12.7811 27.1096 12.9C27.2264 13.0129 27.2869 13.1519 27.2869 13.3151V13.9075C27.2869 14.0707 27.2284 14.2118 27.1096 14.3286C26.9967 14.4415 26.8577 14.4979 26.6945 14.4979H21.9713V16.3557H27.444C27.6032 16.3557 27.7402 16.4121 27.8531 16.525C27.9659 16.6378 28.0223 16.7768 28.0223 16.9401V17.5446C28.0223 17.7078 27.9639 17.8488 27.845 17.9657C27.7282 18.0785 27.5871 18.1349 27.4239 18.1349H20.1961C20.0329 18.1349 19.8918 18.0785 19.775 17.9657C19.6561 17.8508 19.5977 17.7058 19.5977 17.5345ZM29.2072 17.5466V9.70626C29.2072 9.54305 29.2636 9.40199 29.3764 9.28512C29.4893 9.16825 29.6283 9.1078 29.7915 9.1078H31.6433C31.7904 9.1078 31.9455 9.16624 32.1087 9.28512C32.272 9.40199 32.407 9.54305 32.5117 9.70626L36.3161 15.5558V9.69417C36.3161 9.53096 36.3725 9.39192 36.4853 9.27908C36.6022 9.16624 36.7432 9.10982 36.9064 9.10982H37.9905C38.1537 9.10982 38.2928 9.16624 38.4056 9.27908C38.5225 9.39192 38.5829 9.53499 38.5829 9.70626V17.5466C38.5829 17.7098 38.5245 17.8508 38.4056 17.9677C38.2928 18.0805 38.1537 18.137 37.9905 18.137H35.8989C35.7357 18.137 35.5665 18.0805 35.3952 17.9677C35.2239 17.8508 35.0869 17.7098 34.9862 17.5466L31.5042 12.1444V17.5466C31.5042 17.7098 31.4458 17.8508 31.3289 17.9677C31.2161 18.0805 31.0771 18.137 30.9139 18.137H29.8056C29.6424 18.137 29.5013 18.0805 29.3845 17.9677C29.2656 17.8508 29.2072 17.7098 29.2072 17.5466ZM39.6146 10.2987V9.70626C39.6146 9.53499 39.671 9.39192 39.7839 9.27908C39.8967 9.16624 40.0398 9.10982 40.211 9.10982H48.2025C48.3738 9.10982 48.5168 9.16624 48.6297 9.27908C48.7425 9.39192 48.7989 9.53499 48.7989 9.70626V10.2987C48.7989 10.4699 48.7425 10.613 48.6297 10.7258C48.5168 10.8347 48.3738 10.8891 48.2025 10.8891H45.3936V17.5566C45.3936 17.7199 45.3352 17.8589 45.2163 17.9717C45.1034 18.0805 44.9644 18.1349 44.8012 18.1349H43.6103C43.4471 18.1349 43.3061 18.0805 43.1892 17.9717C43.0764 17.8589 43.0199 17.7199 43.0199 17.5566V10.8891H40.211C40.0398 10.8891 39.8967 10.8347 39.7839 10.7258C39.671 10.613 39.6146 10.472 39.6146 10.2987ZM49.8346 17.5587V9.70626C49.8346 9.54305 49.8931 9.40199 50.012 9.28512C50.1288 9.16825 50.2699 9.1078 50.4331 9.1078H51.6038C51.7751 9.1078 51.9181 9.16624 52.033 9.28512C52.1499 9.40199 52.2083 9.54305 52.2083 9.70626V17.5466C52.2083 17.7098 52.1479 17.8508 52.0249 17.9677C51.9081 18.0805 51.767 18.137 51.6038 18.137H50.4331C50.2699 18.137 50.1288 18.0826 50.012 17.9737C49.8931 17.8609 49.8346 17.7239 49.8346 17.5587ZM53.4999 13.5609C53.4999 11.961 53.9311 10.7883 54.7915 10.0407C55.6519 9.29318 56.9153 8.92041 58.5817 8.92041C60.2522 8.92041 61.5115 9.27505 62.3598 9.98433C63.2122 10.6936 63.6373 11.8421 63.6373 13.4279C63.6373 14.2682 63.4741 14.9513 63.1457 15.4812C62.914 15.8641 62.6661 16.2026 62.4022 16.5008H63.4036C63.5749 16.5008 63.7179 16.5592 63.8308 16.6781C63.9436 16.791 64 16.93 64 17.0932V17.609C64 17.7723 63.9436 17.9133 63.8308 18.0302C63.7179 18.143 63.5749 18.1994 63.4036 18.1994H58.5676C56.9093 18.1994 55.6499 17.8267 54.7895 17.0791C53.9291 16.3335 53.4999 15.1608 53.4999 13.5609ZM58.5696 16.5008C60.367 16.5008 61.2657 15.4772 61.2657 13.4279C61.2657 12.4748 61.0541 11.7696 60.629 11.3122C60.2058 10.8508 59.5207 10.619 58.5757 10.619C57.6347 10.619 56.9496 10.8689 56.5164 11.3686C56.0872 11.8683 55.8736 12.5978 55.8736 13.5609C55.8736 14.5221 56.0872 15.2535 56.5164 15.7532C56.9476 16.2509 57.6327 16.5008 58.5696 16.5008Z" fill="#5a5fd4"/>
              <path d="M10.746 0H0L2.11574 3.30055H8.20908C9.73242 3.30055 12.2713 3.30055 12.8637 5.07777C13.71 7.61666 11.5943 8.54759 10.748 8.54759H7.27816L14.0485 18.278H18.1108C15.6565 16.1904 12.5252 11.1691 12.5252 11.1691C14.3024 10.3228 16.8554 8.64229 16.0796 4.56799C15.3986 1.01556 12.5232 0.141049 10.746 0Z" fill="#5a5fd4"/>
              <path d="M3.20379 8.38647C2.46227 8.38647 2.61944 11.286 2.79878 12.2049L7.25191 18.3586H10.2885C7.86044 14.8223 3.48992 8.38647 3.20379 8.38647Z" fill="#5a5fd4"/>
            </svg>
          </div>
          <p className="feature-title">Start earning as soon as you reach Silver</p>
          <p className="feature-desc">Get to Silver with just 5 trip elements and start earning OneKeyCash on your next booking</p>
        </div>

        <div className="feature-item">
          <div className="feature-icon">
            <svg width="32" height="26" viewBox="0 0 52 43" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M25.3332 27.9975H17.3332V35.9975H14.6665V27.9975H6.6665V25.3308H14.6665V17.3308H17.3332V25.3308H25.3332V27.9975Z" fill="#5a5fd4"/>
              <path d="M47.8332 17.4985H42.8332V22.4985H41.1665V17.4985H36.1665V15.8318H41.1665V10.8318H42.8332V15.8318H47.8332V17.4985Z" fill="#5a5fd4"/>
              <path d="M28.4444 5.77699H25.7777V8.44366H24.8888V5.77699H22.2222V4.8881H24.8888V2.22144H25.7777V4.8881H28.4444V5.77699Z" fill="#5a5fd4"/>
            </svg>
          </div>
          <p className="feature-title">Use rewards on your next stay</p>
          <p className="feature-desc">$1 in OneKeyCash is $1 to use on your next eligible vacation rental</p>
        </div>
      </section>

      {/* ── Tier info ── */}
      <section className="tier-card">
        <h2 className="tier-title">Move up tiers easily with trip elements</h2>
        <p className="tier-desc">
          Each stay in an eligible vacation home counts towards your tier progress. You'll get one trip element for each eligible vacation rental night that you book and stay. You'll earn trip elements on vacation rental nights over $25 (excluding taxes, fees and after coupons and OneKeyCash are applied to the booking)
        </p>
        <div className="tier-divider" />
        <p className="tier-highlight">And they add up fast, 5 nights in a Vrbo gets you to Silver!</p>
      </section>

      {/* ── OneKeyCash ── */}
      <section className="okc-section">
        <h2 className="okc-title">OneKeyCash – your rewards currency</h2>
        <p className="okc-desc">
          You'll earn OneKeyCash on eligible vacation rentals once you reach Silver. $1 in OneKeyCash is $1 to use on your next eligible vacation rental. Silver Members can earn 1% on all eligible bookings. Gold and Platinum members can earn 2% on all eligible bookings.
        </p>
        <button className="btn-primary">Sign in and start earning</button>
      </section>

      {/* ── FAQ ── */}
      <section className="faq-section">
        <h2 className="faq-title">Explore even more about One Key</h2>
        <div className="faq-list">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="faq-item">
                <button
                  className="faq-trigger"
                  onClick={() => toggleFaq(item.id)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question">{item.question}</span>
                  <ChevronIcon isOpen={isOpen} />
                </button>
                <div className={`faq-body ${isOpen ? 'show' : ''}`}>
                  <ul className="faq-answer-list">
                    {item.answer.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};

export default RentiqPage;