import React, {Component} from 'react';

// components
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component.jsx';
 
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      cats: [],
      search: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ cats: users }))
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value })
  }

  render() {

    const { cats, search } = this.state;
    const filteredPeople = cats.filter(cat => 
      cat.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div className="App">
        <nav>
          <h1>React Cats</h1>
          <SearchBox placeholder="search cats" handleChange = {this.handleChange}/>
        </nav>
        <CardList people={filteredPeople}/>
      </div>
    );
  }

}

export default App;
