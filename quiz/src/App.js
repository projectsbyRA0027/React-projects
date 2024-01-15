import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Question from "./Components/Question";
import qBank from "./Components/QuestionBank";
import Score from "./Components/Score";
import React,{Component} from "react";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      questionBank: qBank,
      currentQuestion: 0,
      selectedOption:"",
      score: 0,
      quizEnd:false,
    };
  }
}



  

export default App;
