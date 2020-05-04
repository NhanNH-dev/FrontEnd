import React, { useState } from "react";
// import { Cards, Chart, CountryPicker } from "./components";
// import styles from "./App.module.css";
// import { fetchData } from "./components/Corona/api";

import { FetchListData } from "./components/FetchListData/FetchListData";
import Clock from "./components/Clock";

// import Todo from "./components/TodoList/Todo";
// import ColorBox_ReactHook from "./components/ColorBox_ReactHook";
// import TodoItems from "./components/classCom/TodoItems";
// import ClassComponent from "./components/classCom/classComponent";
// import FunctionComponent from "./components/functionCom/FunctionComponent";
// import TrafficLight from "./components/TrafficLight";
// import Login from "./components/functionCom/Login";
// import Login2 from "./components/functionCom/Login2";

function App() {
  const [hideClock, setHideClock] = useState(true);
  return (
    <div>
      {/* <SearchFetchListData onSubmit={handleSearchInput} /> */}
      {/* <FetchListData /> */}
      {hideClock && <Clock />}
      <button onClick={() => setHideClock(!hideClock)}>hide clock</button>
    </div>
  );
}
export default App;

// class App extends React.Component {
//   state = {
//     data: {},
//     country: "",
//   };
//   async componentDidMount() {
//     const fetchedData = await fetchData();
//     this.setState({ data: fetchedData });
//   }
//   handleCountryChange = async (country) => {
//     const fetchedData = await fetchData(country);
//     this.setState({ data: fetchedData, country: country });
//   };

//   render() {
//     const { data, country } = this.state;
//     return (
//       <div className={styles.container}>
//         <Cards data={data} />
//         <CountryPicker handleCountryChange={this.handleCountryChange} />
//         <Chart data={data} country={country} />
//       </div>
//     );
//   }
// }
// export default App;
