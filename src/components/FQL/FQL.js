import React, { useState } from 'react';
import './FQL.css';

const dataFql = [
  {
    id: 1,
    question: '1. How do I book a property on your website?',
    answer: 'Find your perfect stay using the search bar, select your dates, and click "Book Now." Follow the quick checkout steps to securely complete your payment and confirm the booking.'
  },
  {
    id: 2,
    question: '2. Can I cancel or change my booking after confirmation?',
    answer: 'Yes, you can manage or cancel your reservation directly through your personal user dashboard. Cancellation policies and potential refunds depend on the specific rules set by the host.'
  },
  {
    id: 3,
    question: '3. When and how do I get the exact address of my stay?',
    answer: 'For safety reasons, the exact address and check-in instructions are hidden until payment. Once your booking is confirmed, you will receive all details via email and internal chat.'
  },
  {
    id: 4,
    question: '4. How can I contact the host before or during my trip?',
    answer: 'You can easily message the host at any time using our secure built-in messenger. Simply click the "Contact Host" button on the property page or in your trips dashboard.'
  },
  {
    id: 5,
    question: '5. Are there any hidden fees or extra charges at checkout?',
    answer: 'No, we believe in 100% price transparency, so the final price you see is what you pay. All service fees, local taxes, and cleaning charges are fully detailed before checkout.'
  },
  {
    id: 6,
    question: '6. What should I do if I experience an issue during my stay?',
    answer: 'First, try contacting your host through our chat, as they can resolve most issues quickly. If you need further assistance, our dedicated support team is available 24/7 to help you out.'
  }
];

const FQL = () => {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="FQL">
      <h2 className="fql-title">Help Center</h2>

      <div className="fql-list">
        {dataFql.map((item) => {
          const isOpen = openId === item.id;

          return (
            <div key={item.id} className="fql-item">
              <button
                className="fql-trigger"
                onClick={() => toggleAccordion(item.id)}
              >
                <span className="fql-question">{item.question}</span>

                {/* ИСПРАВЛЕНО: Добавлены фигурные скобки для className */}
                <svg
                  className={`fql-arrow ${isOpen ? 'open' : ''}`}
                  width="29"
                  height="15"
                  viewBox="0 0 29 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.1109 14.4036L29 2.88031L25.7783 0L14.5 10.0831L3.22172 0L0 2.88031L12.8891 14.4036C13.3164 14.7855 13.8958 15 14.5 15C15.1042 15 15.6836 14.7855 16.1109 14.4036Z"
                    fill="black"
                  />
                </svg>
              </button>

              {/* ИСПРАВЛЕНО: Добавлены фигурные скобки для className */}
              <div className={`fql-content-wrapper ${isOpen ? 'show' : ''}`}>
                <div className="fql-answer">
                  {item.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FQL;
