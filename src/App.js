// import in css
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import Header from "./Header";
import Coin from "./Coin";
import Alert from "./Alert";

function App() {
  // Because JSX are just JavaScript objects (aka values), they can be assigned to variables
  const goodbye = <p>Goodbye World</p>;

  return (
    <>
       <Header/>

      <Alert message="Duck!" type="success"/>

      <Alert message="Withdrawal amount exceeds balance amount" type="danger"/>

      {/* Place the two elements in the same React fragment */}
      <div className="container">
        <div>
          <h1>Hello World</h1>
        </div>
        {/* We can have JavaScript expression using double braces */}
        {goodbye}

        {/* Any JavaScript expression can go into the double braces as long as it evaluates to a value */}
        <p style={{
          fontFamily: "Garamond",
          color: "green"
        }}>
          My lucky number is {Math.floor(Math.random() * 100 + 1)}
        </p>

     
        <Coin/>
        <Coin/>
        <Coin/>
     

        <img src={require('./banana.png')} alt="banana" />
        <img src="apple.png" />
      </div>
    </>
  );
}

export default App;
