import React, { useEffect, useRef, useState } from 'react';
import './Page2b.css';
import PersonalCoachesImg from './assets/Personal_Coaches_img.png';
import WorkshopHostsImg from './assets/Workshop_Hosts_img.png';
import ClubsAssociationsImg from './assets/Clubs_&_Associations_img.png';
import ContentCreatorsImg from './assets/Content_Creators_img.png';
import LearningDevelopmentImg from './assets/Learning_&_Development_img.png';
import CorporateTeamsImg from './assets/Corporate_Teams_img.png';
import FitnessStudioImg from './assets/Fitness_Studio_img.png';
import SchoolsCollegesImg from './assets/Schools_and_Colleges_img.png';
import SportsClubImg from './assets/Sports_Club_img.png';

const CARDS_DATA = [
  {
    title: 'Personal coaches',
    img: PersonalCoachesImg,
    desc: 'Manage group and 1:1 sessions, collect payments and keep clients in sync effortlessly.',
    list: ['Group class schedules', 'One-on-one slots', 'Plan timelines', 'Progress check-in dates']
  },
  {
    title: 'Workshop hosts',
    img: WorkshopHostsImg,
    desc: 'Manage registrations, share timetables and collect payments for multi-day programmes.',
    list: ['Workshop session timetables', 'Registration deadlines', 'Multi-day program schedules', 'Follow-up session dates']
  },
  {
    title: 'Clubs & associations',
    img: ClubsAssociationsImg,
    desc: 'Keep members informed of meetings, events and activities without group chat chaos.',
    list: ['Monthly meeting schedules', 'Annual event calendars', 'Committee meeting dates', 'Member activity timetables']
  },
  {
    title: 'Content creators',
    img: ContentCreatorsImg,
    desc: 'Share your content drops, launches and live sessions with your audience in one place.',
    list: ['Content drop calendars', 'Product launch timelines', 'Merch drop dates', 'Community live dates']
  },
  {
    title: 'L&D teams',
    img: LearningDevelopmentImg,
    desc: 'Manage training sessions, workshops and learning programs across large employee groups.',
    list: ['Training session calendars', 'Workshop timetables', 'Certification programme dates', 'Induction schedules']
  },
  {
    title: 'Corporate teams',
    img: CorporateTeamsImg,
    desc: 'Share sprint schedules, project milestones and team rosters without endless email chains.',
    list: ['Sprint & release schedules', 'Town hall and all-hands dates', 'Onboarding timetables', 'Holiday calendars']
  },
  {
    title: 'Fitness studios',
    img: FitnessStudioImg,
    desc: 'Publish weekly class timetables that auto-sync to every member’s calendar.',
    list: ['Weekly class timetables', 'Seasonal programmes', 'Studio holiday closures', 'Special workshop dates']
  },
  {
    title: 'Schools & colleges',
    img: SchoolsCollegesImg,
    desc: 'Sync class schedules, exams, and academic calendars for students and parents.',
    list: ['Term timetables', 'Parent-teacher meeting dates', 'Sports day & event calendar', 'Exam hall schedules']
  },
  {
    title: 'Sports clubs',
    img: SportsClubImg,
    desc: 'Share fixture lists, practice timetables and tournament schedules with players and fans.',
    list: ['Match fixture calendars', 'Practice session timetables', 'Tournament brackets', 'Club holiday notices']
  }
];

const Page2b = () => {
  const rowRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let animationFrameId;
    const row = rowRef.current;

    const scrollStep = () => {
      if (!isHovered && row) {
        // Increment scroll position for continuous auto-scroll
        row.scrollLeft += 1; 
        
        // The track holds two identical sets of cards. When we've scrolled exactly halfway
        // (which is exactly one set + one gap), snap back to 0 for a seamless infinite loop.
        if (row.scrollLeft >= row.scrollWidth / 2) {
          row.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scrollStep);
    };

    // Start auto-scroll
    animationFrameId = requestAnimationFrame(scrollStep);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  return (
    <section className="page2b-section">
      <div className="page2b-container">

        {/* Heading */}
        <div className="page2b-content">
          <span className="text-black">Built for anyone who's ever said </span>
          <br />
          <span className="text-slate-500">'just show up'</span>
          <span className="text-black"> — and meant it</span>
        </div>

        {/* Cards Row */}
        <div 
          className="page2b-cards-row"
          ref={rowRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          <div className="page2b-cards-track">
            {[...CARDS_DATA, ...CARDS_DATA].map((card, index) => (
              <div className="page2b-card" key={index}>
                <div className="page2b-card-header">
                  <img
                    src={card.img}
                    alt={`${card.title} Icon`}
                    className="page2b-card-icon"
                  />
                  <span className="page2b-card-title">{card.title}</span>
                </div>
                <p className="page2b-card-desc">
                  {card.desc}
                </p>
                <p className="page2b-card-list">
                  {card.list.map((item, i) => (
                    <React.Fragment key={i}>
                      • {item}
                      {i < card.list.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page2b;
