import React, { Component } from 'react'

class Dropdown extends Component {
    constructor(props = { options, value, onChange }) {
        super(props)

        this.onChange = this.onChange.bind(this)
    }

    onChange(e) {
        if (this.props.onChange instanceof Function) {
            let value = e.target.value
            this.props.onChange(value)
        }

        // console.log('change', e.target.value);
        // console.log(e.target);

    }

    render() {
        // let options = ['Red', 'Green', 'Blue']
        // let options = [
        //     { text: 'Red', value: 'r'},
        //     { text: 'Green', value: 'g'},
        //     { text: 'Blue', value: 'b'},
        // ]
        // let value = 'Red'
        let { options, value } = this.props
        
        // console.log(options)
        return (
            <select
                className="c-dropdown"
                defaultValue={value}
                onChange={this.onChange}
            >
                {/* <option value="Red">Red</option>
                <option value="Green">Green</option>
                <option value="Blue">Blue</option> */}

                {options.map((option, i) => {
                    let optValue, optText
                    if (typeof option == 'string') {
                        optValue = option
                        optText = option
                    } else {
                        optValue = option.value
                        optText = option.text
                    }
                    return (
                        <option key={i} value={optValue}>
                            {optText}
                        </option>
                    )
                })}
            </select>
        )
    }
}

export default Dropdown
