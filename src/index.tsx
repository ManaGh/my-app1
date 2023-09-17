import ReactDom from "react-dom";

const App = () => {
  return (
    <div>
      <h1>Welcome to my world!</h1>
    </div>
  );
};

ReactDom.render(
    <App />, document.querySelector('#root') 
);

