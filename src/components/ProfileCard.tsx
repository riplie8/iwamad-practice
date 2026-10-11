import { useState } from 'react';
import SkillBadge from './SkillBadge';

type ProfileCardProps = {
  name: string;
  role: string;
  avatarUrl?: string;
};

export default function ProfileCard({ name, role, avatarUrl }: ProfileCardProps) {
  const [likes, setLikes] = useState(0);

  // Define a typed array of skills
  const skills = [
    { id: 1, label: 'React' },
    { id: 2, label: 'TypeScript' },
    { id: 3, label: 'Tailwind CSS' },
  ];

  return (
    <div className="card p-6 bg-white rounded-lg shadow-md max-w-sm text-center">
      {avatarUrl && <img src={avatarUrl} alt="Avatar" className="w-24 h-24 mx-auto rounded-full mb-4" />}
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-600 mb-4">{role}</p>
      
      {/* Skills list with conditional rendering */}
      <div className="mb-4 text-left">
        <h3 className="font-semibold text-sm text-gray-500 mb-2">Skills:</h3>
        {skills.length > 0 ? (
          skills.map(skill => (
            <SkillBadge key={skill.id} skill={skill} />
          ))
        ) : (
          <p className="text-sm text-gray-400">No skills listed.</p>
        )}
      </div>

      <button 
        onClick={() => setLikes(likes + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition w-full"
      >
        ❤️ Likes: {likes}
      </button>
    </div>
  );
}