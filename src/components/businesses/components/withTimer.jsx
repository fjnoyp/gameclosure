import React from 'react';

// HOC that provides Timer functionality to BaseComponent 
export default function withTimer(BaseComponent) {

    return class extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                curTime: 0,
            }

            this.onCollectClick = this.onCollectClick.bind(this);
            this.onTimer = this.onTimer.bind(this);
        }

        componentDidMount() {
            const { autoCollect } = this.props;

            if (autoCollect) {
                this.onCollectClick();
            }
        }

        componentDidUpdate(prevProps, prevState, snapshot) {
            const prevAutoCollect = prevProps.autoCollect;
            const autoCollect = this.props.autoCollect;
            const { onCollectClick } = this;


            if (autoCollect && !prevAutoCollect) {
                onCollectClick();
            }
        }

        onTimer() {
            const { autoCollect, collectTime, onCollected } = this.props;
            const { curTime } = this.state;
            const { onCollectClick } = this;

            var newCurTime = curTime + .10;


            if (newCurTime >= collectTime) {
                clearTimeout(this.timer);
                this.setState({
                    curTime: 0,
                });
                onCollected();

                if (autoCollect) {
                    onCollectClick();
                }
            }
            else {
                this.timer = setTimeout(this.onTimer, 100);
                this.setState({
                    curTime: newCurTime
                });
            }
        }

        onCollectClick() {
            this.timer = setTimeout(this.onTimer, 100);
            this.onTimer();
        }

        render() {
            const { curTime } = this.state;
            const { onCollectClick } = this;

            return (
                <BaseComponent
                    curTime={curTime}
                    onCollectClick={onCollectClick}

                    {...this.props}
                />
            )
        }
    }
}

