import React from 'react';
import Aff from './Aff'; // Add missing import statement for the Films component

class StarWars extends React.Component {
    constructor() {
        super()
        this.state = {
            load: false,
            name: null,
            height: null,
            homeworld: null,
            image: null,
            affiliations: [],            
        }
    }
    
    newCharacter() {
        fetch(`https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/${Math.ceil(Math.random() * 88)}.json`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                
                this.setState({
                name: data.name,
                height: data.height,
                homeworld: data.homeworld,
                affiliations: data.affiliations,
                image: data.image,
                load: true,
                })
            })
    }

    render() {

        const aff = this.state.affiliations.map((name, i) => {
            return <Aff key={i} name={name} />
        })

        return (
            <div className="App">
                <h1>Star Wars character generator</h1>
            

                <div id="generator">
                    <button type="button" onClick={() => this.newCharacter()}>Generate</button>

                    {
                        this.state.load &&
                            <div>        
                                <p id="name">Name: {this.state.name}</p>
                                <p id="height">Height: {this.state.height}</p>
                                <p id="home"><a href={this.state.homeworld}>Homeworld</a></p>
                                <ul title='Affiliations'>
                                    {aff}
                                </ul>
                                
                                <img src={this.state.image} alt="" id="image"/>
                            </div>
                    }
                </div>
            </div>
        );
    }
}

export default StarWars;