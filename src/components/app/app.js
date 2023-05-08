import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';


import './app.css';

function App() {

    const data = [
        {name: "John Smith", salary: 4800, increase: false, id: 1},
        {name: "Alex Puplkin", salary: 8000, increase: true, id: 2},
        {name: "Abram Israilevich", salary: 4800, increase: false, id: 3},
        {name: "Kurwa Polska", salary: 5500, increase: false, id: 4},
        {name: "Bulba Belaruska", salary: 13500, increase: false, id: 5},
        {name: "Natashenka Karpuk", salary: 6000, increase: false, id: 6}
    ];

    return(
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    );
}


export default App;