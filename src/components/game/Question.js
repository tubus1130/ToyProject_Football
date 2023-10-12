/*
    사용자에게 질문을 던지는 컴포넌트
*/
import React from 'react'
import {Button, Main, Number} from '../../styles/styledComponents'

// 문제가 모여있는 배열을 여기에 가져와서 쓴다!
import {questionContent} from '../../utils/questionContent'



class Question extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return <div>
      
      <img src={questionContent[this.props.count].image}/>
        <Number>
            {this.props.count + 1}번 문제
        </Number>
        <Main>
            {questionContent[this.props.count].question}
        </Main>
        <Button onClick={() => this.props.selectAnswer(1, this.props.count + 1)}>
          A. {questionContent[this.props.count].answer1}
        </Button><br/>
        <Button onClick={() => this.props.selectAnswer(2, this.props.count + 1)}>
          B. {questionContent[this.props.count].answer2}
        </Button>
    </div>
  }
}


export default Question;