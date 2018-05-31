import React from 'react';
import {Text} from 'react-native';
import BackgroundTimer from 'react-native-background-timer';

export default class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            seconds : props.seconds,
        };

        BackgroundTimer.runBackgroundTimer(() => {
            this.setState({
                seconds: this.state.seconds - 1
            });

            if (this.state.seconds === 0) {
                props.callback();
                BackgroundTimer.stopBackgroundTimer();
            }

        },1000);
    }

    render() {
        return <Text>{this.formatSeconds(this.state.seconds)}</Text>
    }

    formatSeconds(seconds) {
        return `${Math.floor(seconds / 60)} : ${("0" + seconds % 60).slice(-2)}`;
    }
} 