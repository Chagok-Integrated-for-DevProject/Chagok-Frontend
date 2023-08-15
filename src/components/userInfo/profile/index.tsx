import { Button, H2, Label } from "components/userInfo/index.styles";
import Image from "next/image";
import { useState } from "react";
import { palette } from "styles/palette";

import userProfileImageSVG from "/public/mocks/user_profile.svg";

import * as S from "./index.styles";

const Profile = () => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const onClickEdit = () => {
    setIsEdit((prev) => !prev);
  };
  return (
    <S.ProfileWrapper>
      <H2>차곡 프로필</H2>
      <S.ImageController>
        <S.ImageBox>
          <Image src={userProfileImageSVG} alt="프로필 이미지" />
        </S.ImageBox>
        {isEdit && (
          <S.ButtonBox>
            <Button backgroundColor={palette.black}>이미지 수정</Button>
            <Button backgroundColor={palette.black}>이미지 삭제</Button>
          </S.ButtonBox>
        )}
      </S.ImageController>
      <S.NameController>
        <S.Left>
          <Label htmlFor="nickname">닉네임</Label>
          {!isEdit && <Label>{"테스트 닉네임"}</Label>}
          {isEdit && (
            <S.Input id="nickname" type="text" placeholder={"테스트 닉네임"} />
          )}
        </S.Left>
        <S.Right>
          <tbody>
            <tr>
              <td>
                <Label>소셜 로그인</Label>
              </td>
              <td>
                <S.Text>{"Google"}</S.Text>
              </td>
            </tr>
            <tr>
              <td>
                <Label>이메일</Label>
              </td>
              <td>
                <S.Text>{"test@gmail.com"}</S.Text>
              </td>
            </tr>
          </tbody>
        </S.Right>
      </S.NameController>
      <S.ProfileController>
        <Button backgroundColor={palette.black} onClick={onClickEdit}>
          수정하기
        </Button>
        {isEdit && (
          <Button backgroundColor={palette.black} onClick={onClickEdit}>
            취소하기
          </Button>
        )}
      </S.ProfileController>
    </S.ProfileWrapper>
  );
};

export default Profile;
