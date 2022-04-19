import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Button = styled.button`
  width: 30px;
  height: 30px;
`;

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    max-width: 800px;
    margin-top: -20px;
    margin-right: -20px;
    margin-bottom: 10px;
`;

export const Item = styled.li`
    width: 230px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    margin-right: 20px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
  1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const Image = styled.img`
`;

export const Title = styled.h3`

`;