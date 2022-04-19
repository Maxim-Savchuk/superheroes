import styled from "@emotion/styled";

export const Item = styled.li`
    position: relative;
    width: 230px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    margin-right: 20px;
    padding-bottom: 10px;
    background-color: #fff;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
  1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const Image = styled.img`
`;

export const Title = styled.h3`
  margin-top: 10px; 
`;

export const Button = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
`;