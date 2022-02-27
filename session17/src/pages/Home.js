import React, { Component } from 'react'
import CTitle from '../component/pieces/Title'
import CSpacer from '../component/pieces/Spacer'
import CTableGroup from '../component/parts/TableGroup/index'

// F2
class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <CTitle>Products</CTitle>
                <CSpacer></CSpacer>
                <CTableGroup></CTableGroup>
            </div>
        )
    }
}

export default Home
