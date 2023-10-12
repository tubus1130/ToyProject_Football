/*
    퀴즈를 진행하고, 결과를 보여주는
    나름의 게임(?) 부분을 담당하는 컴포넌트
*/
import React from 'react'
import Question from './game/Question'
import Result from './game/Result'

// 총 질문 수
const NUMBER_OF_QUESTION = 7;

const gameContainer = {
    textAlign: 'center'
}

class Game extends React.Component{
  constructor(props){
    super(props)
    // count : 대답을 들은 질문 수
    // e, s, t, j : 각 타입의 점수를 누산할 상태
    // 1번을 누르면 양수, 2번을 누르면 음수
    this.state = {
        count: 0,
        MAC: 0,
        LIV: 0,
        TOT: 0,
        ARS: 0,
        MAU: 0,
        CHE: 0
    }
  }

  // 질문 하나 대답하면 넘어가기 + 점수 계산하기
  // btnNum : 1번 눌렀냐(+), 2번 눌렀냐(-)
  // type : e, s, t, j 중 뭐에 대한 문제였냐
  // selectAnswer = (btnNum, type) => {
  //     if(btnNum == 1){
  //       if(type == 'e'){this.setState({e : this.state.e + 1, count : this.state.count + 1})}
  //       if(type == 's'){this.setState({s : this.state.s + 1, count : this.state.count + 1})}
  //       if(type == 't'){this.setState({t : this.state.t + 1, count : this.state.count + 1})}
  //       if(type == 'j'){this.setState({j : this.state.j + 1, count : this.state.count + 1})}
  //     }else{
  //       if(type == 'e'){this.setState({e : this.state.e - 1, count : this.state.count + 1})}
  //       if(type == 's'){this.setState({s : this.state.s - 1, count : this.state.count + 1})}
  //       if(type == 't'){this.setState({t : this.state.t - 1, count : this.state.count + 1})}
  //       if(type == 'j'){this.setState({j : this.state.j - 1, count : this.state.count + 1})}
  //     }
  // }

//   selectAnswer = (btnNum, count) => {
//     if(btnNum == 1){
//       this.setState({g : this.state.g + 1, count : this.state.count + 1})
//       console.log(btnNum)
//       console.log(count)
//     }else if(btnNum == 2){
//       this.setState({r : this.state.r + 1, count : this.state.count + 1})
//     }else if(btnNum == 3){
//       this.setState({s : this.state.s + 1, count : this.state.count + 1})
//     }else{
//       this.setState({h : this.state.h + 1, count : this.state.count + 1})
//     }
// }
selectAnswer = (btnNum, count) => {
  switch(count){
    case 1:
      if(btnNum == 1){
        this.setState({
          LIV : this.state.LIV + 1,
          ARS : this.state.ARS + 1,
          MAU : this.state.MAU + 1,
          count : this.state.count + 1
        })
      }else{
        this.setState({
          MAC : this.state.MAC + 1,
          TOT : this.state.TOT + 1,
          CHE : this.state.CHE + 1,
          count : this.state.count + 1
        })
      }
      break;
    case 2:
      if(btnNum == 1){
        this.setState({
          ARS : this.state.ARS + 1,
          MAU : this.state.MAU + 1,
          TOT : this.state.TOT + 1,
          count : this.state.count + 1
        })
      }else{
        this.setState({
          MAC : this.state.MAC + 1,
          LIV : this.state.LIV + 1,
          CHE : this.state.CHE + 1,
          count : this.state.count + 1
        })
      }
      break;
    case 3:
      if(btnNum == 1){
        this.setState({
          ARS : this.state.ARS + 1,
          CHE : this.state.CHE + 1,
          TOT : this.state.TOT + 1,
          count : this.state.count + 1
        })
      }else{
        this.setState({
          MAC : this.state.MAC + 1,
          LIV : this.state.LIV + 1,
          MAU : this.state.MAU + 1,
          count : this.state.count + 1
        })
      }
      break;
    case 4:
      if(btnNum == 1){
        this.setState({
          MAC : this.state.MAC + 1,
          CHE : this.state.CHE + 1,
          count : this.state.count + 1
        })
      }else{
        this.setState({
          ARS : this.state.ARS + 1,
          LIV : this.state.LIV + 1,
          MAU : this.state.MAU + 1,
          TOT : this.state.TOT + 1,
          count : this.state.count + 1
        })
      }
      break;
    case 5:
      if(btnNum == 1){
        this.setState({
          MAU : this.state.MAU + 1,
          CHE : this.state.CHE + 1,
          count : this.state.count + 1
        })
      }else{
        this.setState({
          ARS : this.state.ARS + 1,
          LIV : this.state.LIV + 1,
          MAC : this.state.MAC + 1,
          TOT : this.state.TOT + 1,
          count : this.state.count + 1
        })
      }
      break;
    case 6:
      if(btnNum == 1){
        this.setState({
          MAU : this.state.MAU + 1,
          MAC : this.state.MAC + 1,
          count : this.state.count + 1
        })
      }else{
        this.setState({
          ARS : this.state.ARS + 1,
          LIV : this.state.LIV + 1,
          CHE : this.state.CHE + 1,
          TOT : this.state.TOT + 1,
          count : this.state.count + 1
        })
      }
      break;
    case 7:
      case 6:
      if(btnNum == 1){
        this.setState({
          ARS : this.state.ARS + 1,
          TOT : this.state.TOT + 1,
          LIV : this.state.LIV + 1,
          count : this.state.count + 1
        })
      }else{
        this.setState({
          MAU : this.state.MAU + 1,
          MAC : this.state.MAC + 1,
          CHE : this.state.CHE + 1,
          count : this.state.count + 1
        })
      }
      break;
  }
}


  render(){

    // Result 에다 e, s, t, j를 넘겨주기 위해 구조분해!
    const {MAC, LIV, TOT, ARS, MAU, CHE} = this.state

    return <div style={gameContainer}>
        {this.state.count == NUMBER_OF_QUESTION 
        ? <Result goFirst={this.props.goFirst} points={{MAC, LIV, TOT, ARS, MAU, CHE}}/> 
        : <Question count={this.state.count} 
        selectAnswer={this.selectAnswer}/>}
        <p style={{color: "white"}}>MADE BY DH</p>
    </div>
  }
}

export default Game;