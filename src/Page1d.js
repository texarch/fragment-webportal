import React, { useState, useEffect, useRef } from 'react';
import './Page1d.css';

const sizeStates = [
  { maxWidth: '82%', padding: '14px 22px', borderRadius: '16px', background: '#F5F7FF', boxShadow: '2.08px 4.16px 16.63px 0 rgba(0,0,0,0.15)' },
  { maxWidth: '87%', padding: '14px 22px', borderRadius: '16px', background: '#FFF', boxShadow: '2.04px 4.09px 16.35px 0 rgba(0,0,0,0.15)' },
  { maxWidth: '97%', padding: '18px 28px', borderRadius: '20px', background: '#E0E5EE', boxShadow: '2.51px 5.02px 20.09px 0 rgba(0,0,0,0.15)' },
  { maxWidth: '100%', padding: '22px 34px', borderRadius: '23px', background: '#F6F6FB', boxShadow: '2.9px 5.81px 23.24px 0 rgba(0,0,0,0.15)' },
];

const cardsData = [
  { title: "Built for recurring schedules", description: "Classes, batches, weekly meetups — create once and Fragment handles the rest, every time." },
  { title: "Always up to date", description: "Change a time, cancel a session, add an event — your audience sees it instantly, automatically." },
  { title: "Ready in seconds", description: "No onboarding calls, no configuration. Start sharing your schedule the moment you sign up." },
  { title: "One place. No confusion.", description: "No duplicate messages across five platforms. Everyone gets the same information from a single source." },
];

const Page1d = () => {
  const [cardStates, setCardStates] = useState([3, 1, 0, 2]);
  const tickRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const cardToAdvance = tickRef.current % 4;
      tickRef.current++;
      setCardStates(prev => {
        const next = [...prev];
        next[cardToAdvance] = (prev[cardToAdvance] + 1) % 4;
        return next;
      });
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  const getStyle = (i) => {
    const s = sizeStates[cardStates[i]];
    return {
      maxWidth: s.maxWidth,
      padding: s.padding,
      borderRadius: s.borderRadius,
      backgroundColor: s.background,
      boxShadow: s.boxShadow,
    };
  };

  const isLarge = (i) => cardStates[i] >= 2;

  return (
    <div className="page1d-container">
      <div className="page1d-content">
        <div className="page1d-left">
          <div className="setup-title-container">
            <div className="title-once">Set it up once.</div>
            <div className="title-run">Let it run.</div>
          </div>
          <div className="setup-divider" />
          <p className="setup-description">
            Fragment takes the repetitive work off your plate — so you can focus on showing up, not chasing people down.
          </p>
        </div>

        <div className="page1d-right">
          <div className="cards-wrapper">
            <div className="cards-col cards-col-left">
              {[0, 1].map(i => (
                <div key={i} className="setup-card" style={getStyle(i)}>
                  <div className={`setup-card-title ${isLarge(i) ? 'title-lg' : 'title-md'}`}>{cardsData[i].title}</div>
                  <div className="card-divider" />
                  <p className={`card-description ${isLarge(i) ? 'desc-lg' : 'desc-md'}`}>{cardsData[i].description}</p>
                </div>
              ))}
            </div>
            <div className="cards-col cards-col-right">
              {[2, 3].map(i => (
                <div key={i} className="setup-card" style={getStyle(i)}>
                  <div className={`setup-card-title ${isLarge(i) ? 'title-lg' : 'title-md'}`}>{cardsData[i].title}</div>
                  <div className="card-divider" />
                  <p className={`card-description ${isLarge(i) ? 'desc-lg' : 'desc-md'}`}>{cardsData[i].description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1d;
