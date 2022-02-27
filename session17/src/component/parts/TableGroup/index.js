import React, { Component } from 'react'
import CDropdown from '../../pieces/Dropdown'
import CTable from '../../pieces/Table.js'
import SearchForm from './SearchForm.js'
import TableControls from './TableControls'
import axios from 'axios'

class TableGroup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            requesting: false,
            listInQueue: false,

            tableHeader: ['Title', 'Description', 'Categories'],
            list: [], // Table
            count: 0,   // Table Controls

            pageIndex: 1,
            pageSize: 5,   // Table Controls
            search: '',     // Search Form
            filter: {
                categoryId: ''    //  Dropdown.value
            },
            optionCategories: [
                { value: '', text: 'Select category!' }
            ]    // Dropdown.options
        }


        // bind this for handlers
        this.callAPICount = this.callAPICount.bind(this)
        this.callAPIList = this.callAPIList.bind(this)
        this.setPageConfig = this.setPageConfig.bind(this)
    }

    componentDidMount() {
        let state = this.state
        this.callAPIList(state)
        this.callAPICount(state)
        this.callOptionCategories()
    }


    componentWillUpdate(newProps, newState) {
        // console.log('will update', newState, this.state)
        let oldState = this.state
        let mustCallList = false
        let mustCallCount = false

        if (newState.pageIndex != oldState.pageIndex) {
            mustCallList = true
        }
        if (newState.pageSize != oldState.pageSize) {
            mustCallList = true
        }
        if (newState.search != oldState.search) {
            mustCallList = true
            mustCallCount = true
        }
        if (newState.filter.categoryId != oldState.filter.categoryId) {
            mustCallList = true
            mustCallCount = true
        }

        if (mustCallCount) {
            this.callAPICount(newState)
        }
        if (mustCallList) {
            this.callAPIList(newState)
        }

    }


    setPageConfig(config = { pageIndex, pageSize, search, filter }) {
        // console.log('set new state');
        this.setState(config)
    }

    callAPICount(state) {
        let { search, filter } = state
        let queryParams = {
            count: true,
            search,
            categoryId: filter.categoryId || ''
        }

        axios.request({
            url: 'http://localhost:9000/api/product',
            method: "GET",
            params: queryParams
        })
            .then(res => {
                // console.log('api count response:', res)

                let count = res.data.count || 0
                this.setState({ count })
            })


    }


    callAPIList(state) {
        if (this.state.requesting) {
            this.setState({ listInQueue: true })
            return
        }

        this.setState({ requesting: true })
        let { pageIndex, pageSize, search, filter } = state
        let queryParams = {
            pageIndex,
            pageSize,
            search,
            categoryId: filter.categoryId || ''
        }

        axios.request({
            url: 'http://localhost:9000/api/product',
            method: "GET",
            params: queryParams
        })
            .then(res => {
                // console.log('api list response:', res)

                let list = res.data
                // console.log('list', list);
                this.setState({ list })
            })
            .finally(() => {
                this.setState({ requesting: false })
                if (this.state.listInQueue) {
                    this.setState({ listInQueue: false })
                    this.callAPIList(this.state)
                }
            })

    }

    callOptionCategories() {
        axios.request({
            url: 'http://localhost:9000/api/category',
            method: 'GET'
        }).then(res => {
            let categories = res.data
            // console.log(categories);

            let optionCategories = [
                { value: '', text: 'Select category' },
                ...categories.map(category => {
                    return { value: category._id, text: category.title }
                })
            ]
            this.setState({ optionCategories })


        })
    }

    render() {
        // console.log('render')
        let { list, tableHeader, pageIndex, pageSize, count, filter, search, optionCategories } = this.state
        return (
            <div className="c-table-group">
                <div>
                    <SearchForm
                        value={search}
                        onChange={(value) => {
                            this.setPageConfig({ search: value })
                        }}
                        placeholder="Enter search keywords ..." />
                    <CDropdown
                        options={optionCategories}
                        value={filter.categoryId}
                        onChange={(value) => {
                            console.log(value)
                            this.setPageConfig({ filter: { categoryId: value } })
                        }}
                    />
                </div>
                <div>
                    <CTable list={list}
                        header={tableHeader} />
                </div>
                <div>
                    <TableControls
                        count={count}
                        pageSize={pageSize}
                        pageIndex={pageIndex}
                        setPageConfig={this.setPageConfig}
                    // callAPIList={this.callAPIList} 
                    />
                </div>
            </div>
        )
    }
}

export default TableGroup
