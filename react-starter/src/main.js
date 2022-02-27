import './scss/main.scss'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'


// // 1: function Component
// const HomeContent = (props) => {
//     console.log('home content props', props);
//     return (
//         <div>
//             Home Content.
//             <div>
//                 prosp1: {props.prop1}
//             </div>
//             <div>
//                 prop5: {props.prop5}
//             </div>
//         </div>
//     )
// }

// 2: class Component

class Div extends Component {
    componentWillUnMount() {
        console.log('div unmout');
    }

    render() {
        return (
            <div>Div</div>
        )
    }

}

class HomeContent extends Component {
    constructor(props) {
        super(props)
        setTimeout(() => this.setState({ timeout: true }), 2000)
      }
    
      render() {
        return this.state && this.state.timeout
          ? <div>Timeout</div>
          : <Div />
      }
}

const data = ['a', 'b', 'c']
ReactDOM.render(
    <HomeContent
        prop1="Tears To Tea"
        prop2="Tuan"
        prop3="Hai Phong"
        prop4={[1, 2, 3]}
        prop5={data}
    />,
    document.querySelector('#app')
)



{/* <div class="parent">
<div class="child-1">
    Child content
</div>
<div class="child-2">
    Child content
</div>
</div> */}