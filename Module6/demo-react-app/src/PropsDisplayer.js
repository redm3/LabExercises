import React from 'react'

class PropsDisplayer extends React.Component {
    render() {
        const stringProps = JSON.stringify(this.props);

        return (
            <div className='componentBox'>
                <h2>Props Display</h2>
                <h1>CHECK OUT MY PROPS OBJECT</h1>
                <h2>{stringProps}</h2>
                <p>Name: {this.props.name}</p>
                <p>Location: {this.props.location}</p>
                <p>Number: {this.props.number}</p>
            </div>
        );
    }
}

export default PropsDisplayer
