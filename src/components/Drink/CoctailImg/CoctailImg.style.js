import styled from 'styled-components';


export const Photo = styled.img`
width: 335px;
height: 400px;


@media (min-width: 768px) {
    width: 704px;
    height: 400px;
    object-fit: cover;
    object-position: center top;
}

@media (min-width: 1440px) {
    width: 400px;
    height: 400px;

}
`