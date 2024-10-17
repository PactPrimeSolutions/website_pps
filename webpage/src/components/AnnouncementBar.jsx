import React, { useState } from 'react';
import './AnnouncementBar.css';

const AnnouncementBar = () => {
  const [visible, setVisible] = useState(true);

  return (
    visible && (
      <div className="announcement-bar">
        <div className="scrolling-text">
        🚨 IMPORTANT ALERT: PractPrime Solution is excited to announce the launch of our innovative technology services, designed to deliver cutting-edge solutions and drive success for our clients.📢
        📢❗🚨
        </div>
      </div>
    )
  );
};

export default AnnouncementBar;
