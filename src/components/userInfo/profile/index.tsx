import { Button, H2, Label } from "components/userInfo/index.styles";
import { useGetMyInfoQuery } from "lib/hooks";
import { useJwtToken } from "lib/hooks/useJwtToken";
import {
  useDeleteProfileImgMutation,
  useUpdateNickNameMutation,
  useUpdateProfileImgMutation,
} from "lib/hooks/useMyInfoMutation";
import Image from "next/image";
import type { ChangeEvent } from "react";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { palette } from "styles/palette";

import userProfileImageSVG from "/public/mocks/user_profile.svg";

import * as S from "./index.styles";

const Profile = () => {
  const { token: jwtToken } = useJwtToken();
  const { data: userInfo } = useGetMyInfoQuery(jwtToken);

  const inputRef = useRef<HTMLInputElement>(null);
  const [nickName, setNickName] = useState(userInfo?.nickName || "");

  const [isEdit, setIsEdit] = useState<boolean>(false);
  const onClickEdit = () => {
    setIsEdit((prev) => !prev);
  };

  const onChangeNickname = (e: ChangeEvent<HTMLInputElement>) => {
    setNickName(e.target.value);
  };

  const onChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const imageFile = event.target.files[0];
    const fileExtension = /\.(jpg|png)$/;
    const fileSizeLimit = 200000;

    if (imageFile.size >= fileSizeLimit) {
      toast.warn("파일 크기가 200KB를 초과합니다.");
      return;
    }

    const isProperFileExtension = new RegExp(fileExtension).test(
      imageFile.name,
    );
    if (!isProperFileExtension) {
      toast.warn("파일 확장자는 jpg, png만 가능합니다.");
      return;
    }
    updateProfileImage({ imageFile, jwtToken });
  };

  const { mutate: updateNickname } = useUpdateNickNameMutation(() => {
    setIsEdit(false);
  });

  const { mutate: deleteProfileImage } = useDeleteProfileImgMutation(() => {
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
    const isProperNickName = new RegExp(/^[a-zA-Z0-9가-힣]{2,20}$/).test(
      nickName,
    );

    if (!isProperNickName) {
      toast.error("2 ~ 20자 내외로 작성해주세요.");
      return;
    }

    updateNickname({ nickName, jwtToken });
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
              userInfo?.profileImg
                ? `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${userInfo?.profileImg}`
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
            <Button
              backgroundColor={palette.black}
              type="button"
              onClick={() => deleteProfileImage(jwtToken)}
            >
              이미지 삭제
            </Button>
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
          {!isEdit && <Label>{userInfo?.nickName}</Label>}
          {isEdit && (
            <S.Input
              id="nickname"
              type="text"
              value={nickName}
              onChange={onChangeNickname}
              placeholder={userInfo?.nickName}
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
                <S.Text>{userInfo?.social}</S.Text>
              </td>
            </tr>
            <tr>
              <td>
                <Label>이메일</Label>
              </td>
              <td>
                <S.Text>{userInfo?.email}</S.Text>
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
