

const SocialMediaTask = () => {
  const platforms = [
    { name: 'Instagram', points: '+300', bg: 'bg-gradient-to-r from-pink-500 to-yellow-500', icon: '📸' }, // Replace with actual icons or images
    { name: 'Facebook', points: '+225', bg: 'bg-blue-600', icon: '📘' },
    { name: 'X', points: '+85', bg: 'bg-black', icon: 'X' }, // For Twitter
    { name: 'Youtube', points: '+130', bg: 'bg-red-600', icon: '▶️' },
    { name: 'Telegram', points: '+60', bg: 'bg-blue-400', icon: '✈️' },
    { name: 'LinkedIn', points: '+30', bg: 'bg-blue-700', icon: '🔗' },
  ];

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Social Media Task</h2>
      <div className="grid grid-cols-2 gap-4">
        {platforms.map((platform, index) => (
          <div
            key={index}
            className="relative flex items-center justify-center p-4 border rounded-lg shadow-md"
          >
            {/* Platform Icon */}
            <div
              className={`w-12 h-12 ${platform.bg} text-white rounded-full flex items-center justify-center text-2xl`}
            >
              {platform.icon}
            </div>

            {/* Platform Name */}
            <div className="ml-4">
              <h3 className="font-bold">{platform.name}</h3>
            </div>

            {/* Points Badge */}
            <div className="absolute top-2 right-2 bg-green-500 text-white text-sm rounded-full px-2 py-1">
              {platform.points}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaTask;
