import styled from '@emotion/styled';

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 335px;
  height: 320px;

  background: rgba(22, 31, 55, 0.5);
  border-radius: 8px;

  position: relative;

  overflow: hidden;

  transition: background-color 0.3s ease-in-out;

  &:hover {
    background: #161f37;
  }
`;

export const InputImageWrapper = styled.div`
  font-size: 16px;
  text-align: center;
`;

export const Input = styled.input`
  &[type='file'] {
    display: none;
  }
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & span {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 40px;

    margin-bottom: 18px;

    background: #f3f3f3;
    color: #161f37;

    border-radius: 6px;
    transition: background-color 0.3s ease-in-out;
  }
`;
