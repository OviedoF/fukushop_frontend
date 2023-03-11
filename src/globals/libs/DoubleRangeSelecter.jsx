import React from 'react';
import styles from './DoubleRangeSelecter.module.scss';

class DoubleRangeSlider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sliderWidth: 0,
            offsetSliderWidht: 0,
            min: 0,
            max: this.props.max,
            minValueBetween: 10,
    
            currentMin: 0,
            inputMin: 0,
    
            currentMax: this.props.max,
            inputMax: this.props.max
        };
        this.handleMin = this.props.handleMin;
        this.handleMax = this.props.handleMax;
        this.props = props;
      }

    componentDidMount() {
        const { currentMin, currentMax, max } = this.state;

        this.minValue.style.width = (currentMin * 100) / max + "%";
        this.maxValue.style.width = (currentMax * 100) / max + "%";

        this.setState({
            sliderWidth: this.slider.offsetWidth,
            offsetSliderWidht: this.slider.offsetLeft,
        })
    }

    setMin = (e) => {
        const { min, max, currentMax, minValueBetween } = this.state;
        const inputMin = e.target.value;

        this.setState({
            inputMin
        });

        if ((inputMin >= min) && (inputMin <= (currentMax - minValueBetween))) {
            this.setState({
                currentMin: parseInt(inputMin)
            });

            this.minValue.style.width = (inputMin * 100) / max + "%";
        }
    }

    changeMinValue = (e) => {
        e.preventDefault();

        document.addEventListener('mousemove', this.onMouseMoveMin);
        document.addEventListener('mouseup', this.onMouseUpMin);

        document.addEventListener('touchmove', this.onMouseMoveMin);
        document.addEventListener('touchend', this.onMouseUpMin);
    }

    onMouseMoveMin = (e) => {
        const { min, max, currentMax, minValueBetween, sliderWidth, offsetSliderWidht } = this.state;

        const dragedWidht = e.clientX - offsetSliderWidht;
        const dragedWidhtInPercent = (dragedWidht * 100) / sliderWidth;
        const currentMin = Math.abs(parseInt((max * dragedWidhtInPercent) / 100));

        if ((currentMin >= min) && (currentMin <= (currentMax - minValueBetween))) {
            this.minValue.style.width = dragedWidhtInPercent + "%";
            this.minValue.dataset.content = currentMin;

            this.setState({
                currentMin,
                inputMin: (max * dragedWidhtInPercent) / 100 < 0 ? 0 : currentMin
            })
            this.props.handleMin(parseInt(currentMin));
        }
    }

    onMouseUpMin = () => {
        document.removeEventListener('mouseup', this.onMouseUpMin);
        document.removeEventListener('mousemove', this.onMouseMoveMin);

        document.removeEventListener('touchend', this.onMouseMoveMin);
        document.removeEventListener('touchmove', this.onMouseUpMin);
    }

    setMax = (e) => {
        const { min, max, currentMin, currentMax, minValueBetween } = this.state;

        const inputMax = e.target.value;

        this.setState({
            inputMax
        });

        if ((inputMax >= currentMin + minValueBetween) && (inputMax <= max)) {

            this.setState({
                currentMax: parseInt(inputMax)
            });
            this.maxValue.style.width = (inputMax * 100) / max + "%";
        }

    }

    changeMaxValue = (e) => {
        e.preventDefault();

        document.addEventListener('mousemove', this.onMouseMoveMax);
        document.addEventListener('mouseup', this.onMouseUpMax);

        document.addEventListener('touchmove', this.onMouseMoveMax);
        document.addEventListener('touchend', this.onMouseUpMax);
    }

    onMouseMoveMax = (e) => {
        const { max, currentMin, minValueBetween, sliderWidth, offsetSliderWidht } = this.state;
        const maxWalueThumb = this.maxValue;
        const dragedWidht = e.clientX - offsetSliderWidht;
        const dragedWidhtInPercent = (dragedWidht * 100) / sliderWidth;
        const currentMax = Math.abs(parseInt((max * dragedWidhtInPercent) / 100));

        if ((currentMax >= (currentMin + minValueBetween)) && (currentMax <= max)) {
            maxWalueThumb.style.width = dragedWidhtInPercent + "%";
            maxWalueThumb.dataset.content = currentMax;
            this.setState({
                currentMax,
                inputMax: parseInt((max * dragedWidhtInPercent) / 100) > 0 ? currentMax : 0
            })
            this.props.handleMax(parseInt(currentMax));
        }
    }

    onMouseUpMax = () => {
        document.removeEventListener('mouseup', this.onMouseUp);
        document.removeEventListener('mousemove', this.onMouseMoveMax);

        document.removeEventListener('touchend', this.onMouseUp);
        document.removeEventListener('touchmove', this.onMouseMoveMax);
    }

    maxForMin = () => {
        const { currentMax, minValueBetween } = this.state;
        return currentMax - minValueBetween;
    }

    minForMax = () => {
        const { currentMin, minValueBetween } = this.state;
        return currentMin + minValueBetween;
    }


    render() {
        const { min, max, currentMin, inputMin, currentMax, inputMax, minValueBetween } = this.state;

        return (
            <div className={styles.card}>
                <div className={styles.current_value}>
                    <div style={{marginBottom: 10}}>
                        <label htmlFor={styles.min_input}>Min: </label>
                        <input
                            id={styles.min_input}
                            type="number"
                            onChange={this.setMin}
                            value={inputMin}
                            min={min}
                            max={this.maxForMin()} />
                    </div>

                    <div>
                        <label htmlFor={styles.max_input}>Max: </label>
                        <input
                            id={styles.max_input}
                            type="number"
                            onChange={this.setMax}
                            value={inputMax}
                            min={this.minForMax()}
                            max={max} />
                    </div>

                </div>

                <div className={styles.values}>
                    <div>{min}</div>
                    <div>{max}</div>
                </div>

                <div ref={ref => this.slider = ref} id={styles.slider}>

                    <div ref={ref => this.minValue = ref} id={styles.min} data-content={currentMin}>
                        <div ref={ref => this.minValueDrag = ref} id={styles.min_drag} onMouseDown={this.changeMinValue} onTouchStart={this.changeMinValue}></div>
                    </div>

                    <div ref={ref => this.maxValue = ref} id={styles.max} data-content={currentMax}>
                        <div ref={ref => this.maxValueDrag = ref} id={styles.max_drag} onMouseDown={this.changeMaxValue} onTouchStart={this.changeMaxValue}></div>
                    </div>

                </div>
            </div>
        )
    }
}

export default DoubleRangeSlider;