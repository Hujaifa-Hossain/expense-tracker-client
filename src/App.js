import "./App.css";
import Form from "./components/Form";
import Graph from "./components/Graph";

const App = () => {
  return (
    <div className="text-center">
      <div className="bg-gray-800 py-6 m-5">
        <h1 className="text-center text-3xl text-white">Expense Tracker</h1>
      </div>
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <Graph />
        <Form />
      </div>
    </div>
  );
};

export default App;
