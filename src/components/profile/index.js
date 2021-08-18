import React from 'react';
import * as S from './styled';

const Profile = () => {
  return (
  <S.Wrapper>
    <S.WrapperImage 
      src="https://avatars.githubusercontent.com/u/46933512?v=4" 
      alt="avatar of user"
            />
            <S.WrapperInfoUser>
            <div>
            <h1>Jorge Auri</h1>
            <S.WrapperUserName>
            <h3>Username:</h3>
            <span>jorge</span>
            </S.WrapperUserName>
            </div>
            <S.WrapperStatusCount>
              <div>
                <h4>Followers</h4>
               <span>5</span>
              </div>
              <div>
                <h4>Starreds</h4>
               <span>5</span>
              </div>
              <div>
                <h4>Followings</h4>
               <span>5</span>
              </div>
            </S.WrapperStatusCount>
            </S.WrapperInfoUser>
  </S.Wrapper>
  );
}

export default Profile
