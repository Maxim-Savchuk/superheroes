import styled from '@emotion/styled';

export const Container = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: row;
`;

export const Image = styled.img`
    width: 400px;
`;

export const InfoContainer = styled.div`
    margin-left: 40px;
    padding: 20px 40px;
`;

export const ImageContainer = styled.div``;

export const Info = styled.p`
    & > span {
        color: grey;
    }
`;

export const Title = styled.h2`
    margin-top: 20px;
    color: green;
`;