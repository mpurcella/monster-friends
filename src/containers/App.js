import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ monsters: users }));
    }

    onSearchChange = (event) => {
        this.setState( {searchField: event.target.value} )
    }

    render() {
        let { monsters, searchField } = this.state;
        let filteredMonsters = monsters.filter(monster => {
            return monster.name.toLowerCase().includes(searchField.toLowerCase());
        })
        if (!monsters.length) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f-subheadline ls2 tracked near-black ma2'>Monster Friends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList monsters={filteredMonsters}/>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;