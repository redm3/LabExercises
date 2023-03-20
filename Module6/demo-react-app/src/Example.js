import React from "react";

class Example extends React.Component {
    constructor(props) {

        // React components always have to
        // call super in their constructors
        // to be set up properly
        super(props);

        // this.state should be an object
        // representing the initial “state”
        // of any component instance
        this.state = {
            mood: 'great',
            hungry: false
        };
    }

    getsHungry(){
        this.setState({ hungry:true});
    }

    render() {
        return (
            <div>
                <div className='componentBox'>
                    <h2>State Example</h2>
                    <p>Mood: {this.state.mood}</p>
                    <p>Hungry? {String(this.state.hungry)}</p>

                    <button onClick={() => this.getsHungry()}> Getting Hungry....</button>
                </div>
            </div>
        );
    }
}

export default Example;