import { VscGithubInverted } from 'react-icons/vsc';

import * as s from './Profile.css';

import useSiteMetadata from '@/hooks/useSiteMetadata';

import ProfileLink from '@/components/profile/ProfileLink';

const Profile = () => {
  const { nickname, description, github } = useSiteMetadata();

  return (
    <div>
      <div className={s.nickname}>@{nickname}</div>
      <div className={s.description}>{description}</div>
      <div className={s.links}>
        <ProfileLink to={github || ''}>
          <VscGithubInverted size="1.75rem" />
        </ProfileLink>
      </div>
    </div>
  );
};

export default Profile;
