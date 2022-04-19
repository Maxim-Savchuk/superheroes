import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 400px;
    padding: 30px 40px;
    background-color: #fff;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
  1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    margin-bottom: 30px;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;