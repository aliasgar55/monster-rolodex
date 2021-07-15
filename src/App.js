import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      loading: true,
      search: "",
    };
  }

  handleChange = (e) => this.setState({ search: e.target.value });

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => this.setState({ monsters: data, loading: false }))
      .catch((error) => console.log(error));
  }

  render() {
    const filteredMonsters = this.state.monsters.filter((monster) =>
      monster.name.toLowerCase().includes(this.state.search.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          value={this.state.search}
          handleChange={this.handleChange}
          placeholder="Monster name"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
