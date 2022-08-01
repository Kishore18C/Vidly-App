import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

class TableHeader extends Component {
    raiseSort = path => {
        const sortColumn = {...this.props.sortColumn}
        
        if(sortColumn.path === path)  
            sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc'
        
        else{
            sortColumn.path = path
            sortColumn.order = 'asc'
        }
        this.props.onSort(sortColumn)
    }

    renderSortIcon = column => {
        if(column.path !== this.props.sortColumn.path) return null

        if(this.props.sortColumn.order === 'asc') return <FontAwesomeIcon icon={solid('sort-up')} />
        return <FontAwesomeIcon icon={solid('sort-down')} />
    }

    render() { 
        return (<thead>
            <tr>
           { this.props.columns.map(column => 
                                                <th key = {column.path || column.key}
                                                    className = 'pointer' 
                                                    onClick = {() => this.raiseSort(column.path)}>
                                                    {column.lable} {this.renderSortIcon(column)}</th> ) 
                }
            </tr>
        </thead>
            );
    }
}
 
export default TableHeader;