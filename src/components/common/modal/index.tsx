import Image from "next/image";
import type { ReactNode } from "react";
import { createPortal } from "react-dom";

import closeSVG from "/public/utils/close.svg";

import * as S from "./index.styles";

interface ModalProps {
  isOpen: boolean;
  onCloseModal: () => void;
  children: JSX.Element | ReactNode;
}

const Modal = ({ isOpen, onCloseModal, children }: ModalProps) => {
  return (
    <>
      {isOpen &&
        createPortal(
          <S.ModalWrapper onClick={onCloseModal}>
            <S.Box onClick={(e) => e.stopPropagation()}>
              <S.Header>
                <S.PrevButton />
                <S.CloseButton onClick={onCloseModal}>
                  <Image src={closeSVG} alt="닫기" />
                </S.CloseButton>
              </S.Header>
              <S.Main>{children}</S.Main>
            </S.Box>
          </S.ModalWrapper>,
          document.querySelector("#modal-root") as HTMLDivElement,
        )}
    </>
  );
};

export default Modal;
