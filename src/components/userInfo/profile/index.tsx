import { Button, H2, Label } from "components/userInfo/index.styles";
import { useJwtToken } from "lib/hooks/useJwtToken";
import {
  useUpdateNickNameMutation,
  useUpdateProfileImgMutation,
} from "lib/hooks/useMyInfoMutation";
import Image from "next/image";
import type { ChangeEvent } from "react";
import { useCallback, useRef, useState } from "react";
import { palette } from "styles/palette";

import userProfileImageSVG from "/public/mocks/user_profile.svg";

import * as S from "./index.styles";

interface IProfileProps {
  email: string;
  nickName: string;
  profileImg: string;
  social: string;
}

const Profile = ({ email, nickName, profileImg, social }: IProfileProps) => {
  const { token: jwtToken } = useJwtToken();
  const inputRef = useRef<HTMLInputElement>(null);
  const [state, setState] = useState({
    nickName,
    profileImg,
  });
  console.log(state.profileImg);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const onClickEdit = () => {
    setIsEdit((prev) => !prev);
  };

  const onChangeNickname = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setState((prev) => ({ ...prev, nickName: event.target.value }));
    },
    [],
  );

  const onChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const imageFile = event.target.files[0];

    updateProfileImage({ imageFile, jwtToken });
  };

  const { mutate: updateNickname } = useUpdateNickNameMutation(() => {
    setIsEdit(false);
  });
  const { mutate: updateProfileImage } = useUpdateProfileImgMutation(() => {
    setIsEdit(false);
  });

  const onUpdateImage = () => {
    if (!inputRef.current) return;
    inputRef.current.click();
  };

  const onUpdateNickname = () => {
    updateNickname({ nickname: state.nickName, jwtToken });
  };
  return (
    <S.ProfileWrapper>
      <H2>차곡 프로필</H2>
      <S.ImageController>
        <S.ImageBox>
          <Image
            width={150}
            height={150}
            src={
              state.profileImg
                ? `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${state.profileImg}`
                : userProfileImageSVG
            }
            alt="프로필 이미지"
          />
        </S.ImageBox>
        {isEdit && (
          <S.ButtonBox>
            <Button
              type="button"
              onClick={onUpdateImage}
              backgroundColor={palette.black}
            >
              이미지 수정
            </Button>
            <Button backgroundColor={palette.black}>이미지 삭제</Button>
          </S.ButtonBox>
        )}
        <input
          type="file"
          ref={inputRef}
          onChange={onChangeImage}
          style={{ display: "none" }}
          accept="image/*"
        />
      </S.ImageController>
      <S.NameController>
        <S.Left>
          <Label htmlFor="nickname">닉네임</Label>
          {!isEdit && <Label>{state.nickName ?? "테스트 닉네임"}</Label>}
          {isEdit && (
            <S.Input
              id="nickname"
              type="text"
              value={state.nickName}
              onChange={onChangeNickname}
              placeholder={state.nickName ?? "테스트 닉네임"}
            />
          )}
        </S.Left>
        <S.Right>
          <tbody>
            <tr>
              <td>
                <Label>소셜 로그인</Label>
              </td>
              <td>
                <S.Text>{social ?? ""}</S.Text>
              </td>
            </tr>
            <tr>
              <td>
                <Label>이메일</Label>
              </td>
              <td>
                <S.Text>{email ?? ""}</S.Text>
              </td>
            </tr>
          </tbody>
        </S.Right>
      </S.NameController>
      <S.ProfileController>
        <Button
          backgroundColor={palette.black}
          onClick={isEdit ? onUpdateNickname : onClickEdit}
        >
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
