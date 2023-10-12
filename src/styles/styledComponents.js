/*
    재활용 할 수 있는 버튼 만들어서 갖다쓰기
    +
    홈 화면에 필요한 스타일
*/
import styled from 'styled-components'

export const Button = styled.button`
    width: 300px; height: 60px;
    font-size: 16px;
    border-radius: 100px; border: none;
    font-family: 'CookieRun-Regular';
    color: white;
    background-color: #944BF4;
    margin: 20px;
    &:active{
        outline: none;
    }
    &:focus{
        outline: none;
    }
`

// 제목이 적절한 위치에 배치되도록 최소높이 지정한!
export const Title = styled.div`
    font-size: 70px;
    margin: 0;
    font-weight: bold;
`

export const Main = styled.div`
    font-size: 20px;
    font-weight: bold;
`

export const Number = styled.div`
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 30px;
    color: #944BF4;
`