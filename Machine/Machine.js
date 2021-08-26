const State = require('./State');

/**
 * Machine class
 */
class Machine {
    constructor() {
        this.state = '';
        this.currentState = null
        this.states = {};
        this.transitions = {}
    }

    /** defines a state */
    defineState(name) {
        const state = new State(name);

        if (!this.state.length) {
            this.state = state.name;
            this.currentState = state;
        }
    
        this.states[name] = state;
        return state;
    }

    /** defines a transition */
    defineTransition(event, from, to) {
        this.transitions[`${event}*${from}`] = { to: this.states[to], from: this.states[from] }
    }

    /** transition */
    transition(event) {
        const state = this.states[this.state];
        const transition = this.transitions[`${event}*${state.name}`];

        if (transition) {
            const currentState = transition.from;
            const nextState = transition.to;
    
            currentState.exit();
            nextState.action()
            nextState.enter()
    
            this.state = nextState.name
            this.currentState = nextState
    
            return this.state;
        }

        return this.state;
    }
}

module.exports = Machine;
