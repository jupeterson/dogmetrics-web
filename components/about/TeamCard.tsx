import type { CSSProperties } from 'react';

type Props = { initial: string; name: string; role: string; bio: string; avatarStyle?: CSSProperties };

export function TeamCard({ initial, name, role, bio, avatarStyle }: Props) {
  return (
    <div className="t-card">
      <div className="t-avatar" style={avatarStyle}>{initial}</div>
      <div>
        <h3>{name}</h3>
        <div className="role">{role}</div>
        <p>{bio}</p>
      </div>
    </div>
  );
}
