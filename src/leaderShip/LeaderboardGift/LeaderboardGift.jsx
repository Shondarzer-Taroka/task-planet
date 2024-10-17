import React from "react";
import { FaCrown, FaClock } from "react-icons/fa";

const LeaderboardGift = () => {
  const users = [
    {
      id: 1,
      name: "Mahek",
      points: 230,
      prize: "₹21",
      image: "https://res.cloudinary.com/green-valley-grocery/image/upload/v1667014541/tp-app-assests/icons/profile_nadfzb.png",
      isTop: true,
    },
    {
      id: 2,
      name: "Ashish",
      points: 198,
      prize: "₹11",
      image: "https://res.cloudinary.com/green-valley-grocery/image/upload/v1667014541/tp-app-assests/icons/profile_nadfzb.png",
      isTop: false,
    },
    {
      id: 3,
      name: "Tejas",
      points: 82,
      prize: "₹10",
      image: "https://res.cloudinary.com/green-valley-grocery/image/upload/v1667014541/tp-app-assests/icons/profile_nadfzb.png",
      isTop: false,
    },
  ];

  return (
    <section className="mt-8">
    <div className="flex flex-col items-center justify-center">
      <div className="grid grid-cols-3 gap-4 items-center">
        {users.map((user, index) => (
          <div
            key={user.id}
            className={`flex flex-col items-center ${
              user.isTop ? "mt-[-2rem]" : ""
            }`}
          >
            {user.isTop && <FaCrown className="text-yellow-500 text-3xl" />}
            <div
              className={`rounded-full w-24 h-24 border-4 border-green-500 p-1 ${
                user.isTop ? "scale-110" : ""
              }`}
            >
              <img
                src={user.image}
                alt={user.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <p className="text-xl font-semibold mt-2">{user.name}</p>
            <p className="text-green-600 text-lg">{user.points}</p>
            <p className="text-orange-500 text-md">Prize: {user.prize}</p>
          </div>
        ))}
      </div>

      {/* Countdown Timer Section */}
      <div className="mt-6 flex items-center space-x-2 text-red-500 text-lg">
        <FaClock />
        <p>Ends in 03h 47m 40s</p>
      </div>
    </div>
    </section>
  );
};

export default LeaderboardGift;
