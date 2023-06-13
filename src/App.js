import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFild: " ",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }
  onSearchGhange = (event) => {
    const searchFild = event.target.value.toLowerCase();

    this.setState(() => {
      return { searchFild };
    });
  };
  render() {
    const { monsters, searchFild } = this.state;
    const { onSearchGhange } = this;
    const filterdMonster = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchFild);
    });

    return (
      <div className="App">
        <h1 className="titel">my first react app</h1>
        <SearchBox
          onChangehendler={onSearchGhange}
          placeholder={"search monster"}
          className="monster search box"
        />
        <CardList monsters={filterdMonster} />
      </div>
    );
  }
}

export default App;
