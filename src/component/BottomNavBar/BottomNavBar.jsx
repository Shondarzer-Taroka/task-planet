

import { useState } from 'react';
import { FaHome, FaClipboardList, FaPlus, FaCog, FaTrophy } from 'react-icons/fa';

const BottomNavBar = () => {
  // State to track the active icon
  const [activeIcon, setActiveIcon] = useState('Home');

  // Function to handle icon click and set active icon
  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
  };

  // Function to determine icon styles based on active state
  const iconStyles = (iconName) => {
    return activeIcon === iconName
      ? 'bg-white text-blue-500 translate-y-[-24px] p-3 rounded-full transition-all duration-200 ease-in-out'
      : 'text-white p-3';
  };

  return (
    <div className="mx-auto  left-0 right-0 bg-blue-500 flex justify-around items-center h-16 shadow-lg">
      {/* Home Button */}
      <div className="flex flex-col items-center" onClick={() => handleIconClick('Home')}>
        <div className={iconStyles('Home')}>
          <FaHome size={24} />
        </div>
        <p className="text-xs mt-0 text-white">Home</p> {/* Reduced margin-top */}
      </div>

      {/* Tasks Button */}
      <div className="flex flex-col items-center" onClick={() => handleIconClick('Tasks')}>
        <div className={iconStyles('Tasks')}>
          <FaClipboardList size={24} />
        </div>
        {activeIcon === 'Tasks' && <p className="text-xs mt-0 text-white">Tasks</p>}
      </div>

      {/* Add Button */}
      <div className="flex flex-col items-center" onClick={() => handleIconClick('Create Task')}>
        <div className={iconStyles('Create Task')}>
          <FaPlus size={24} />
        </div>
        {activeIcon === 'Create Task' && <p className="text-xs mt-0 text-white">Create Task</p>}
      </div>

      {/* Settings Button */}
      <div className="flex flex-col items-center" onClick={() => handleIconClick('Settings')}>
        <div className={iconStyles('Settings')}>
          <FaCog size={24} />
        </div>
        {activeIcon === 'Settings' && <p className="text-xs mt-0 text-white">Settings</p>}
      </div>

      {/* Leaderboard Button */}
      <div className="flex flex-col items-center" onClick={() => handleIconClick('Leadership')}>
        <div className={iconStyles('Leadership')}>
          <FaTrophy size={24} />
        </div>
        {activeIcon === 'Leadership' && <p className="text-xs mt-0 text-white">Leadership</p>}
      </div>
    </div>
  );
};

export default BottomNavBar;
