import React, {Component} from 'react';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
// import { thisExpression } from '@babel/types';

class App extends React.Component{
  //화면이 보여지려면 render함수 꼭 써야함.
  constructor(props){
    super(props)
    this.state={
      name:"",
      age:""
    };
  };
/*  componentDidMount(){
//   this.fetchData() // 상태값만 전달 받을 때는 () 안써도 됨
   //this.fetchData() <- 원래는 이렇게 씀
  };
*/
  getData = (e)=>{
    e.preventDefault();
    fetch('http://localhost:3001/data')
    .then(res => res.json())
    .then(resData =>{
      console.log(resData);
      this.setState({
        name : resData[2].name,
        age: resData[2].age

      })
      
    });
  };

  postData = (e)=>{
    e.preventDefault();
    fetch('http://localhost:3001/data')
    .then(res => res.json())
    .then(resData =>{
      this.setState({
        data:resData
      })
      console.log(resData);
    });
    };

  render(){
    return(
      // element나 component가 옴
      <div>
        <Zoom>
          <center>
            <Flip>
              <h3>My Dog List MySQL</h3>
            </Flip>
            <form style={{flex:1, flexDirection:'row'}}>
              <input 
              type="text" 
              id="name" 
              placeholder="이름" 
              //ref={(name)=>{this.input.name}} 
              />
              <input 
              type="text" 
              id="age" 
              placeholder="나이" 
              //ref={(age)=>{this.input.age}} 
              />
              <button 
              style={{width:'100px', height:'20px'}}
              onClick={this.postData.bind(this)}
              >강아지 등록</button>
              <button 
              style={{width:'100px', height:'20px'}}
              onClick={this.getData.bind(this)}
              >강아지 조회</button>
            </form>
          </center>
        </Zoom>
        <Zoom>
          <center>
          <h1>{this.state.name}의 나이는 {this.state.age}살</h1>
          </center>
        </Zoom>
      </div>
    );
  
  };
  
};

export default App;

