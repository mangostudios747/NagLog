const EventEmitter = require('events');

class Timer extends EventEmitter {

    workMiliseconds = null;
    journalMiliseconds = null;

    secondsPassed = 0; // this resets every time

    /**
     * @type {Enumerator.number}
     */
    static states = {
        WORKING: 0,
        JOURNALING: 1,
        PAUSED: 2,
    };

    currentState = states.PAUSED

    /**
     * @param {number} workMinutes The amount of minutes a work period should last.
     * @param {number} journalSeconds The amount of seconds that the journal period should last.
     */
    constructor(workMinutes, journalSeconds){
        this.workMiliseconds = workMinutes * 60000;
        this.journalMiliseconds = journalSeconds * 1000;
        super()
    }

    // INTERNAL API

    emitPause(){

    }

    
    
    reset(){

    }



    // EXTERNAL API

    // getters

    isWorking(){

    }

    isJournaling(){

    }

    isPaused(){

    }

    // setters

    pause(){

    }

    stop(){

    }
}

