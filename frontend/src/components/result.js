import { render } from '@testing-library/react';
import React from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtensions from "react-data-table-component-extensions";

import './result.css';

import More from './subComponents/more';

export default class Result extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            data : [],
            columns : [
                {
                    name: 'Titre',
                    selector: 'titre',
                    sortable: true,
                  },
                  {
                    name: 'Created at',
                    selector: 'created_at',
                    sortable: true,
                    right: true,
                  },
                  {
                    name: 'Surface',
                    selector: 'surface',
                    sortable: true,
                    right: true,
                  },
                  {
                    name: 'Prix',
                    selector: 'price',
                    sortable: true,
                    right: true,
                  },
            ],
            clickedForMore : false,
            tel : "",
            name : ""
        };
    }

    componentDidMount()
    {
        const mythis = this;
        var columns;
        var data;
        let tmp = async () => 
        {
            columns = mythis.state.columns;
            data  = [];
            for(let i = 0 ;i < this.props.data.length ; i++)
            {
                data.push(this.props.data[i][0])
            }
        }
        let mysetState = async () => {
            mythis.setState({
                data : data,
                tableData: {columns,data}
            })
        }
        tmp().then( () => mysetState())
    }
    
    click = (e) => 
    {
        this.state.clickedForMore ? this.setState({clickedForMore : false}) : this.setState({clickedForMore : true})
        console.log(e.id);
    }

    render(){  
        console.log(this.props.data[0]);
        return(
            <div>
                {this.state.clickedForMore ? <More /> : <div></div>}

                <div style={{width: '75%' , marginLeft : '10%' , marginTop : '2vw'}}>
                    <DataTableExtensions
                        {...this.state.tableData}
                        export={false}
                        print={false}
                    >
                        <DataTable
                        title="Offres disponibles"
                        columns={this.state.columns}
                        data={this.state.data}
                        pagination
                        defaultSortFieldId={1}
                        defaultSortField="id"
                        highlightOnHover
                        paginationPerPage={6}
                        paginationRowsPerPageOptions={[6 , 8]}
                        onRowClicked={(e) => this.click(e)}
                        />
                    </DataTableExtensions>
                </div>   
            </div>
        );
    }
}