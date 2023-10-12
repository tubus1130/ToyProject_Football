/*
    질문을 끝내고 결과를 산출하여 보여주는 컴포넌트
*/
import React from 'react'
import {Button, Title} from '../../styles/styledComponents'

// 결과 내용 들어있는 배열 가져다 놓기
import {resultContent} from '../../utils/resultContent'

class Result extends React.Component{
  constructor(props){
    super(props)
    // result : 성향 파악 후 알려주기 위한 상태값
    // content : 배열에서 결과 하나만 쏙 빼서 저장할 상태
    this.state = {
      result : "",
      content: {}
    }
  }

  // 넘어온 속성들을 가지고 성향 결론짓기!
  componentDidMount(){
    const {MAC, LIV, TOT, ARS, MAU, CHE} = this.props.points
    let result = "" // 계산 결과 누산할 임시 변수
    let temp = ""
    temp = Math.max(MAC, LIV, TOT, ARS, MAU, CHE)
    // console.log(temp)
    if(temp == MAC){
      result = 'MAC'
    }else if(temp == LIV){
      result = 'LIV'
    }else if(temp == TOT){
      result = 'TOT'
    }else if(temp == ARS){
      result = 'ARS'
    }else if(temp == MAU){
      result = 'MAU'
    }else{
      result = 'CHE'
    }
    // console.log(result)


    let content; // 성향에 해당하는 결과 객체 하나만 임시 저장할 변수
    // forEach(콜백함수) : 요소 수만큼 콜백함수 호출하는 메소드!
    resultContent.forEach(rc => {
      if(rc.type == result){
        content = rc; // 일치하는 성향의 객체를 임시 저장!
      }
    })

    this.setState({result: result, content: content})
  }

  render(){
    const {content} = this.state // 콘텐츠만 뽑는 구조분해!
    return <div>
      <br/><br/><br/>
          <img style={{
            width: 300, height: 300, opacity: 1.0
          }}src={content.dormimg}/>

          <h1>{content.dorm}</h1>
          <h3>감독 : {content.manager}</h3>
          <p>현역선수 : {content.nowperson}</p>
          <p>은퇴선수 : {content.reperson}</p>
          <img src={content.uni1} style={{width:300}}/>
          <img src={content.uni2} style={{width:300}}/>
          <br/>
        <Button onClick={this.props.goFirst}
        style={{backgroundColor: content.color}}>다시하기</Button>
    </div>
  }
}

export default Result;