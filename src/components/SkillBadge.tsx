type Skill = {
    id: number;
    label: string;
  };
  
  type SkillBadgeProps = {
    skill: Skill;
  };
  
  export default function SkillBadge({ skill }: SkillBadgeProps) {
    return (
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        {skill.label}
      </span>
    );
  }