import React, { Component } from 'react'
import { Pagination } from 'semantic-ui-react';

export default class Footer extends Component {

    state = { activePage: 1 };

    handleInputChange = (e, { value }) => this.setState({ activePage: value });

    handlePaginationChange = (e, { activePage }) => this.setState({ activePage });

    render(){
        const { activePage } = this.state;
        return(
            <div>
                <Pagination
                activePage={activePage}
                onPageChange={this.handlePaginationChange}
                totalPages={5}
            />
            </div>
        )
    }
}