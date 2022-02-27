import React, { Component } from 'react'
import './Clock.scss'
import { to2Digit, randomColor, loadImage } from '../../../utils'


class Clock extends Component {
    constructor(props) {
        super(props)
        // props: { type: 'text' | 'figure'}
        // type == 'text' : clock write text
        // type == 'figure': clock draw image
        this.state = {
            color: 'rgb(0,0,0)',
            hour: '00',
            minute: '00',
            second: '00',
            amOrPm: '',
            canvasSize: 500,
            canvasRef: React.createRef(),
            image: null,
            imageLink: 'https://www.google.com.vn/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
        }
    }

    componentDidMount() {
        setInterval(this.updateTime.bind(this), 1000)
        let imageLink = this.state.imageLink
        loadImage(imageLink)
            .then(image => this.setState({ image }))
        // let image = await loadImage(imageLink)
        // this.setState({
        //     image
        // })
    }


    updateTime() {
        let now = new Date()
        let hour = now.getHours()
        let hour12 = (hour == 12) ? hour : hour % 12
        let minute = now.getMinutes()
        let second = now.getSeconds()
        let amOrPm = hour >= 12
            ? "PM"
            : "AM"
        this.setState({
            hour: hour12,
            minute,
            second,
            amOrPm
        })

        if (this.props.type == 'figure') {
            let canvas = this.state.canvasRef.current
            this.drawClock(canvas, hour, minute, second)
        }

    }

    drawClock(canvas, hour, minute, seconds) {
        let { canvasSize } = this.state
        let context = canvas.getContext('2d')
        let centerX = canvasSize / 2
        let centerY = canvasSize / 2
        let radius = (canvasSize - 20) / 2

        // clear canvas
        context.clearRect(0, 0, canvasSize, canvasSize)

        // draw circle
        context.beginPath()
        context.arc(centerX, centerY, radius, 0, 2 * Math.PI)
        context.stroke()

        // let image = this.state.image
        // if (image) {
        // context.setTransform(1, 0.5, -0.5, 1, 30, 10)
        // context.drawImage(image, 0, 0)
        // context.resetTransform()
        // }

        // draw hands
        context.fillStyle = '#a8a8a8'

        context.rotate(0.1)
        context.translate(centerX, centerY)
        context.fillRect(0, -1, 100, 1)

        context.resetTransform()

        // context.fillStyle = '#f00'
        // context.fillRect(10, 0, 1, 100)

        // context.fillStyle = '#0f0'
        // context.fillRect(20, 0, 1, 100)

    }



    onClick() {
        let newColor = randomColor();
        this.setState({
            color: newColor
        })
    }


    render() {
        let { color, hour, minute, second, amOrPm, canvasRef, canvasSize } = this.state
        let style = {
            color: color,
            borderColor: color
        }
        return this.props.type == 'text'
            ? (
                <div
                    id="clock"
                    className="clock"
                    onClick={this.onClick.bind(this)}
                    style={style}>
                    <span className="hour">{to2Digit(hour)}</span>
                    <span className="colon">:</span>
                    <span className="minute">{to2Digit(minute)}</span>
                    <span className="colon">:</span>
                    <span className="seconds">{to2Digit(second)}</span>
                    <span className="am-pm">{amOrPm}</span>
                </div >
            )
            : (
                <canvas
                    ref={canvasRef}
                    width={canvasSize}
                    height={canvasSize}
                ></canvas>
            )
    }

}

export default Clock