'use strict';

const Alexa = require('alexa-sdk');

//audio file
const adhanFile = "https://firebasestorage.googleapis.com/v0/b/selam-81642.appspot.com/o/adhan.mp3?alt=media";

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers, controller);
    alexa.execute();
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('CallAdhan');
    },
    'CallAdhanIntent': function () {
        this.emit('CallAdhan');
    },
    'CallAdhan': function () {
        controller.play.call(this);
        this.emit(':responseReady')
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = "Help";
        const reprompt = "Re prompt";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', "Cancelled");
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', "Stopped");
    },
    'Unhandled': function () {
        var message = 'Sorry, I could not understand. Please say, play the audio, to begin the audio.';
        this.response.speak(message).listen(message);
        this.emit(':responseReady');
    }
};


var controller = function () {
    return {
        play: function () {
            this.attributes['enqueuedToken'] = null;

            this.response.audioPlayerPlay('REPLACE_ALL', adhanFile, "kindOfUselessToken", null, 0);
            this.emit(':responseReady');
        },
        stop: function () {
            this.response.audioPlayerStop();
            this.emit(':responseReady');
        }
    }
}();
