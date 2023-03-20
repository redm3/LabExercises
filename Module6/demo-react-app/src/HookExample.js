import react from "react";

function HookExample() {

    const [hungry, setHungry] = react.useState(false)
    const [mood, setMood] = react.useState('great')

    const getsHungry = () => {
        setHungry(true);
        setMood('hangry')
    }

    return (
        <div>
            <div className='componentBox'>
                <h2>State Hook Example</h2>

                <p>Mood: {mood}</p>
                <p>Hungry? {String(hungry)}</p>

                <button onClick={() => getsHungry()}> Getting Hungry....</button>
            </div>
        </div>
    );

}

export default HookExample