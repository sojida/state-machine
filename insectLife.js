const Machine = require('./Machine');

// egg -> larva -> pupa -> adult
const insectLife = new Machine()

insectLife.defineState('egg')
    .onEnter(() => console.log('grown to egg'))
    .onExit(() => console.log('growing from egg'))
    .on(() => console.log('egg stage'))

insectLife.defineState('larva')
    .onEnter(() => console.log('grown to larva'))
    .onExit(() => console.log('growing from larva'))
    .on(() => console.log('larva stage'))

insectLife.defineState('pupa')
    .onEnter(() => console.log('grown to pupa'))
    .onExit(() => console.log('growing from pupa'))
    .on(() => console.log('pupa stage'))

insectLife.defineState('adult')
    .onEnter(() => console.log('grown to adult'))
    .onExit(() => console.log('growing from adult'))
    .on(() => console.log('adult stage'))

insectLife.defineState('dead')
    .onEnter(() => console.log('about dying'))
    .onExit(() => console.log('dead'))
    .on(() => console.log('death'))

insectLife.defineTransition('grow', 'egg', 'larva');
insectLife.defineTransition('grow', 'larva', 'pupa');
insectLife.defineTransition('grow-up', 'larva', 'adult');
insectLife.defineTransition('grow', 'pupa', 'adult');
insectLife.defineTransition('die', 'adult', 'dead');
// insectLife.defineTransition('die', 'pupa', 'dead');
insectLife.defineTransition('die', 'larva', 'dead');

insectLife.transition('grow')
insectLife.transition('grow-up')
insectLife.transition('grow')
insectLife.transition('die')
insectLife.transition('grow')

console.log(insectLife.state)
