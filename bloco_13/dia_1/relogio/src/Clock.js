import Reac from 'react';

class Clock extends Reac.Component {
    constructor(props) {
        super(props)
        this.state = { date: new Date() };
        this.counter = 0;
    }

    componentDidMount(){
        this.timerID = setInterval(() => {
            this.setState( {date: new Date() } )
        }, 1000)
    }

    ComponentDidUpdate() {

    }   

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        this.counter += 1;
        
        return (
            <div>
                <h1>Relógio</h1>
                <h2>Agora são {this.state.date.toLocaleTimeString()}</h2>
                <button onClick={() => this.props.desligarRelogio}>Desligar Relogio</button>
            </div>
        )
    }
}

export default Clock;