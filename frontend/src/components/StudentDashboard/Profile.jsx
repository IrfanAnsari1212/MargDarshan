import React, { useState } from 'react';

export default function Profile() {
  const [profile, setProfile] = useState({
    name: "Aman Singh",
    interests: "Software Development, Hackathons",
    goals: "Get SDE Internship, Learn MERN stack",
    education: "BTech, Computer Science",
    image: null
  });

  // For demo, image preview
  const handleImage = e => {
    if (e.target.files[0]) {
      setProfile({ ...profile, image: URL.createObjectURL(e.target.files[0]) });
    }
  };

  return (
    <div className="max-w-2xl bg-white rounded-xl shadow p-8 mx-auto">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">Profile</h2>
      <div className="flex gap-8 items-center mb-8">
        <img src={profile.image || "/default-profile.png"} alt="Profile" className="w-32 h-32 object-cover rounded-full border-4 border-blue-300" />
        <input type="file" accept="image/*" className="block mt-2" onChange={handleImage} />
      </div>
      <form className="space-y-6">
        <div>
          <label className="block text-blue-900 mb-1 font-semibold">Name</label>
          <input className="border rounded px-3 py-2 w-full" value={profile.name} onChange={e => setProfile({ ...profile, name: e.target.value })} />
        </div>
        <div>
          <label className="block text-blue-900 mb-1 font-semibold">Interests</label>
          <input className="border rounded px-3 py-2 w-full" value={profile.interests} onChange={e => setProfile({ ...profile, interests: e.target.value })} />
        </div>
        <div>
          <label className="block text-blue-900 mb-1 font-semibold">Goals</label>
          <input className="border rounded px-3 py-2 w-full" value={profile.goals} onChange={e => setProfile({ ...profile, goals: e.target.value })} />
        </div>
        <div>
          <label className="block text-blue-900 mb-1 font-semibold">Education Level</label>
          <input className="border rounded px-3 py-2 w-full" value={profile.education} onChange={e => setProfile({ ...profile, education: e.target.value })} />
        </div>
      </form>
      {/* My Progress section */}
      <div className="mt-7">
        <h3 className="text-xl font-bold text-blue-600 mb-2">My Progress</h3>
        <ul className="bg-blue-50 rounded p-5">
          <li>5 Articles Read</li>
          <li>2 Videos Watched</li>
          <li>Next mentor session: Oct 15</li>
        </ul>
      </div>
    </div>
  );
}
