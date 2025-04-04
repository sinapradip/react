import "./App.css";
import FilteredTable from "./components/FilteredTable";
import MappedTable from "./components/MappedTable";
import SalaryTable from "./components/SalaryTable";

function App() {
  return (
    <>
      <h1 className="heading mb-10">Famous Scientists</h1>
      <MappedTable />
      <FilteredTable />
      <SalaryTable />
    </>
  );
}

export default App;
