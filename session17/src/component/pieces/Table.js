import React, { Component } from 'react'

class Table extends Component {
    constructor(props = { list, header }) {
        super(props)
    }
 
    renderList(list) {
        // console.log('list', list);
        return list.map((item, i) => {
            let {
                title,
                description,
                categories
            }
                = item
            return (
                <tr key={i}>
                    <td>{title}</td>
                    <td>{this.getCategoryDescriptions(categories)}</td>
                    <td>{this.getCategoryTitles(categories)}</td>
                </tr>
            )
        })
    }

    getCategoryTitles(categories = []) {
        return categories
        .map(item => item.title || '')
        .join(', ')
    }

    getCategoryDescriptions(categories = []) {
        return categories
        .map(item => item.description || '')
        .join(', ')
    }

    renderHeader(header) {
        return (
            <tr>
                {header.map((item, i) => {
                    return (
                        <th key={i}>
                            {item}
                        </th>
                    )
                })}
            </tr>
        )
    }

    render() {
        let list = this.props.list || []
        let header = this.props.header || []

        return (
            <table className="c-table table table-striped">
                <thead>
                    {this.renderHeader(header)}
                </thead>
                <tbody>
                    {this.renderList(list)}
                </tbody>
            </table>
        )
    }
}

export default Table
