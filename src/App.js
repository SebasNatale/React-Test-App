import './App.scss';
import Card from './components/card/card.js';

const test = {
  testTxt: "test text",
  testBtn: () => {
    alert("button clicked")
  },
  testData: {
    doing: [
      {
        "id": 0,
        "content": "doingTxt_1"
      },
      {
        "id": 1,
        "content": "doingTxt_2"
      },
      {
        "id": 2,
        "content": "doingTxt_3"
      }
    ],
    toKeepInMind: [],
    todo: [
      {
        "id": 0,
        "content": "todoTxt_1"
      },
      {
        "id": 1,
        "content": "todoTxt_2"
      },
      {
        "id": 2,
        "content": "todoTxt_3"
      }
    ],
    done: []
  }
};

const App = () => {
  return (<>
    <div className="container-fluid app-wrapper">
      <div className="row">
        <div className="col-md-7 wrapper doing">
          <Card wrapper="Doing" test={test}/>
        </div>
        <div className="col wrapper tokeepinmind">
          <Card wrapper="To keep in mind" test={test}/>
        </div>
      </div>
      <div className="row">
        <div className="col-md wrapper todo">
          <Card wrapper="To do" test={test}/>
        </div>
        <div className="col-md wrapper done">
          <Card wrapper="Done" test={test}/>
        </div>
      </div>
    </div>
  </>);
}

export default App;