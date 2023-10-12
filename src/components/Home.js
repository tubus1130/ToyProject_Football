/*
    시작 화면, 사용자에게 시작을 유도하고
    퀴즈에 대해 소개하는 화면
*/
import React from 'react'
import {Button, Title} from '../styles/styledComponents'

const homeContainer = {
    textAlign: "center"
}

class Home extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return <div style={homeContainer}>
        <Title>프리미어리그 BIG6</Title>
        <p style={{color: "#F15F5F"}}>나에게 맞는 팀은?</p>
        <img src={("images/main.gif")}/>
        <br />
        <Button onClick={this.props.goTest}>시작하기</Button>
        <p>MADE BY DH</p>
    </div>
  }
}

export default Home;