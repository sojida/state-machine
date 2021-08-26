/** State class */
class State {
    constructor(name) {
        this.name = name;
        this.action = () => null;
        this.enterState = () => null;
        this.exitState = () => null;
    }

    on(action) {
        this.action = action;
        return this;
    }

    onEnter(fn =() => null) {
        this.enterState = fn;
        return this
    }

    onExit(fn = () => null) {
        this.exitState = fn;
        return this
    }

    enter() {
        this.enterState();
    }

    exit() {
        this.exitState();
    }

    action() {
        this.action()
    }
}

module.exports = State;
