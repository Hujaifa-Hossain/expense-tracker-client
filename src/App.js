import "./App.css";
import Form from "./components/Form";
import Graph from "./components/Graph";
import { FloatingWhatsApp } from "react-floating-whatsapp";

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

      <FloatingWhatsApp
        phoneNumber="+8801791158039"
        accountName="Expense Tracker"
        avatar="https://www.livetecs.com/wp-content/uploads/2019/05/Time-Expense-Tracking-.png"
        darkMode={true}
        chatboxHeight={450}
        statusMessage="replies within minutes"
      />
    </div>
  );
};

export default App;
