import React from 'react';

const LeaderboardList = () => {
    const users = [
        {
            id: 1,
            name: 'Manoj',
            rank: 4,
            prize: '₹7',
            points: 81,
            image: 'https://res.cloudinary.com/green-valley-grocery/image/upload/v1667014541/tp-app-assests/icons/profile_nadfzb.png',
        },
        {
            id: 2,
            name: 'AMIT',
            rank: 5,
            prize: '₹6',
            points: 77,
            image: 'https://res.cloudinary.com/green-valley-grocery/image/upload/v1667014541/tp-app-assests/icons/profile_nadfzb.png',
        },
        {
            id: 3,
            name: 'Karan',
            rank: 6,
            prize: '₹5',
            points: 75,
            image: 'https://res.cloudinary.com/green-valley-grocery/image/upload/v1667014541/tp-app-assests/icons/profile_nadfzb.png',
        },
        {
            id: 4,
            name: 'JAGA',
            rank: 7,
            prize: '₹4',
            points: 62,
            image: 'https://res.cloudinary.com/green-valley-grocery/image/upload/v1667014541/tp-app-assests/icons/profile_nadfzb.png',
        },
        {
            id: 5,
            name: 'TaskPlanet',
            rank: null, // Custom styling for TaskPlanet
            prize: null,
            points: 78,
            image: 'https://res.cloudinary.com/green-valley-grocery/image/upload/v1667014541/tp-app-assests/icons/profile_nadfzb.png',
        },
    ];

    return (
        <div className="w-full max-w-md mx-auto">
            {users.map((user, index) => (
                <div
                    key={index}
                    className={`flex items-center justify-between p-4 rounded-full shadow-md my-2 ${user.name === 'TaskPlanet' ? 'bg-yellow-400 text-white' : 'bg-white'
                        }`}
                >
                    <div className="flex items-center">
                        <img
                            src={user.image}
                            alt={user.name}
                            className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="ml-4">
                            <p className={`font-bold text-lg ${user.name === 'TaskPlanet' ? '' : 'text-black'}`}>
                                {user.name}
                            </p>
                            {user.rank !== null && (
                                <p className="text-gray-500">Rank: {user.rank}</p>
                            )}
                        </div>
                    </div>
                    <div className="text-right">
                        {user.prize && (
                            <p className="text-orange-500 font-bold">Prize: {user.prize}</p>
                        )}
                        <p className={`font-bold text-green-500 ${user.name === 'TaskPlanet' ? 'text-white' : ''}`}>
                            {user.points}
                        </p>
                    </div>
                </div>
            ))}





            <div>
                <div className="ml-4">
                    <p className={`font-bold text-lg 'text-black'}`}>
                     
                    </p>
                  <img src="" alt="" />
                </div>
            </div>
        </div>
    );
};

export default LeaderboardList;
