import React, { PureComponent } from 'react'
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';
import Portfoliojson from './portfolio.json'
import './portfoli.css'

export class Portfolio extends PureComponent {
    static propTypes = {}
    constructor(props) {
        super(props);
        this.state = {
            filters: ["All", "Websites", "Flayers", "Business Cards"], 
            selected: 'All',
            projects: Portfoliojson
        };
        this.onSelectFilter = this.onSelectFilter.bind(this);
    }

    onSelectFilter(evt) {
        this.setState({selected: evt})
        console.log(evt);
    }

    render() {
        return (
            <div className='wrap'>
                <div>
                    {
                        this.state.filters.map(d => <Toolbar filter={d} selected={this.state.selected} onChangeFilter={this.onSelectFilter} />)
                    }
                </div>
                <ProjectList projects={this.state.selected === 'All' ? this.state.projects : this.state.projects.filter(el => el.category === this.state.selected)} />                    
            </div>
        )
    }
}

export default Portfolio;