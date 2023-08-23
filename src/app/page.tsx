import React, { useState } from 'react';
import Tooltip from '../components/Tooltip';
import styles from '../styles/Home.module.css';

const Home = () => {
  const [tooltipData, setTooltipData] = useState(null);

  const handleTooltipClick = (position, text) => {
    setTooltipData({ position, text });
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <button
          className={styles.button}
          onMouseEnter={() => handleTooltipClick('top', 'Top Tooltip')}
          onMouseLeave={() => setTooltipData(null)}
        >
          Top
        </button>
        {/* Create similar buttons for other positions */}
      </div>
      {tooltipData && (
        <>
          <div className="tooltip-target" style={{ position: 'absolute', top: '50%', left: '50%' }} id="topButton">
            {/* Placeholder div for the tooltip target */}
          </div>
          <Tooltip
            position={tooltipData.position}
            text={tooltipData.text}
            style={{ top: '50%', left: '50%' }}
            target=".tooltip-target"
          />
        </>
      )}
    </div>
  );
};

export default Home;
