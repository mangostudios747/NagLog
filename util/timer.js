const EventEmitter = require('events');

export default class Timer extends EventEmitter {

    workMiliseconds = null;
    journalMiliseconds = null;

    startDate = null; // this resets every run
    mostRecentPauseDate = null;
    pausedTime = 0;

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
        super()
        this.workMiliseconds = workMinutes * 60000;
        this.journalMiliseconds = journalSeconds * 1000;
    }



    // INTERNAL API

    emitPause(){
        this.emit('pause', this.timePassedFrom(Date.now()))
    }
    reset(){
        this.pausedTime = 0
        this.mostRecentPauseDate = null
        this.startDate = null
        this.currentState = states.PAUSED
    }

    // runs each second
    looper(){
        switch (this.currentState){
            case states.PAUSED:
                
                
        }
    }

    // EXTERNAL API
    // getters

    isWorking(){}
    isJournaling(){}
    isPaused(){}
    /** 
     * @param {number} time Date in miliseconds
     */

    timePassedFrom(time){
        return time - this.startDate + this.pausedTime
    }

    // setters
    reset(){
        this.startDate = Date.now();
        this.currentState = states.PAUSED;
    }
    start(){
        
    }
    resume(){
        if (this.mostRecentPauseDate === null) {
            return false //todo: return an error
        }

        this.pausedTime += (Date.now() - this.mostRecentPauseDate);
        this.mostRecentPauseDate = null;
    }
    pause(){
        this.mostRecentPauseDate = Date.now()
    }
    stop(){

    }
}

