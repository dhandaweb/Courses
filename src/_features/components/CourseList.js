import React, {  } from 'react';
import {getMockCourseList, makeDefaultState} from '../mock/mockCourseList';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import ReactTooltip from 'react-tooltip'
import LogInPopup from './LogInPopup';
class CourseList extends React.Component{
    constructor() {
        super();
        this.state = {
          addedtocart:[],
          LoggedIn:false,
          data: getMockCourseList(),
          initialState: makeDefaultState()
        };
      }
      ConfigureCourse=(event)=>{
        let newState = Object.assign({}, this.state.data);
              // newState[rowInfo.index].configure = !rowInfo.original.configure;
        // this.setState({data:{...this.state.data,}});
        // this.setState({data:newState})
      
      }
      UnConfigureCourse=()=>{

      }
      onRowClick = (state, rowInfo, column, instance) => {
        return {
            onClick: e => {
             this.setState({LoggedIn:true});
             let newState = Object.assign({}, this.state.data);
               newState[rowInfo.index].configure = !rowInfo.original.configure;
               debugger;
               this.setState({addedtocart:this.state.data.filter(x=>x.configure)});
            }
        }
    }
    componentDidMount(){
      this.setState({addedtocart:this.state.data.filter(x=>x.configure)});
    }
      render() {
        const  {data, initialState} = this.state;
       // const adedToCart=this.state.data.find(x=>x.configure).name;
        return (
          <div>
            <ReactTable
              data={data}
              
          columns= {[{
            Header: 'Name',
            accessor: 'name'
          }, {
            Header: 'Description',
            id: 'description',
            accessor: d => d.description
          }
          , {
            Header: 'Author',
            id: 'author',
            accessor: d => d.author
          }
          , {
            Header: 'publishDate',
            id: 'publishDate',
            accessor: d => d.publishDate
          }
          , {
            Header: '',
            Cell: (props => (props.original.configure==false ? 
              <button className="tableDeleteButton" onClick={this.ConfigureCourse}>Add</button> : 
              <button className="tableDeleteButton" onClick={this.UnConfigureCourse}>Remove</button>))
            }        
        ]}        
              defaultPageSize={10}
              className="-striped -highlight"
              filterable
              sorted={this.state.sorted}
          page={this.state.page}
          pageSize={this.state.pageSize}
          expanded={this.state.expanded}
          resized={this.state.resized}
          filtered={this.state.filtered}
          getTrProps={this.onRowClick}
          // Callbacks
          onSortedChange={sorted => this.setState({ sorted })}
          
          onPageChange={page => this.setState({ page })}
          onPageSizeChange={(pageSize, page) =>
            this.setState({ page, pageSize })}
          onExpandedChange={expanded => this.setState({ expanded })}
          onResizedChange={resized => this.setState({ resized })}
          onFilteredChange={filtered => this.setState({ filtered })}
            />
            <p data-tip={this.state.addedtocart.map(x=>x.name)}>Tooltip</p>
            <ReactTooltip />

            {this.state.LoggedIn ? 
          <LogInPopup
            text='Close Me'
            
          />
          : null
        }
          </div>
        );
      }


}
export default CourseList;

