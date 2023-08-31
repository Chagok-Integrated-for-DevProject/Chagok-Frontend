import styled from "@emotion/styled";

export const SelectBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  position: relative;

  ::after {
    content: "";
    display: block;
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 0.5rem;
    height: 0.5rem;
    border-left: 1.5px solid black;
    border-bottom: 1.5px solid black;
    transform: rotate(-45deg);
    background-color: white;
  }

  margin-bottom: 4.5rem;
`;

export const Select = styled.select`
  width: 18.6875rem;
  padding: 0.8rem 2rem;
  border-radius: 0.625rem;
  border: 1px solid #525252;
  font-size: 1.25rem;
  color: #888;
  appearance: none;
`;

export const ListBox = styled.div`
  display: grid;
  /* FIXME: 반응형 적용 필요 */
  grid-template-columns: repeat(auto-fill, 23.75rem);
  grid-gap: 1.87rem;

  margin: 0 auto;
`;

export const BottomContents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin-top: 5rem;
`;
