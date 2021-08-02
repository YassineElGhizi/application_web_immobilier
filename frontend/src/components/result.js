import { render } from '@testing-library/react';
import React from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtensions from "react-data-table-component-extensions";

import './result.css';

// const data = [
//     { id: 1, title: 'yassine', year: 12 } ,
//     { id: 2, title: 'salim', year: 25 }, 
//     { id: 3, title: 'adel', year: 4 }, 
//     { id: 4, title: 'oussama', year: 80 }, 
//     { id: 5, title: 'adnan', year: 52 }, 
//     { id: 6, title: 'hafssa', year: 78 }, 
//     { id: 8, title: 'godzilla', year: 45 }, 
//     { id: 9, title: 'noussaib', year: 54 }, 
//     { id: 14, title: 'engenner man', year: 88 }, 
//     { id: 15, title: 'brian', year: 88.80 }, 
//     { id: 16, title: 'ain saiss', year: 78 }, 
//     { id: 17, title: 'oud nill', year: 1000 }, 
//     ];

// const columns = [
//   {
//     name: 'Title',
//     selector: 'title',
//     sortable: true,
//   },
//   {
//     name: 'Year',
//     selector: 'year',
//     sortable: true,
//     right: true,
//   },
// ];
// const tableData = {columns,data}

export default class Result extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            data : [
                { id: 1, title: 'yassine', year: 12 } ,
                { id: 2, title: 'salim', year: 25 }, 
                { id: 3, title: 'adel', year: 4 }, 
                { id: 4, title: 'oussama', year: 80 }, 
                { id: 5, title: 'adnan', year: 52 }, 
                { id: 6, title: 'hafssa', year: 78 }, 
                { id: 8, title: 'godzilla', year: 45 }, 
                { id: 9, title: 'noussaib', year: 54 }, 
                { id: 14, title: 'engenner man', year: 88 }, 
                { id: 15, title: 'brian', year: 88.80 }, 
                { id: 16, title: 'ain saiss', year: 78 }, 
                { id: 17, title: 'oud nill', year: 1000 }, 
                ],
            columns : [
                {
                    name: 'Title',
                    selector: 'title',
                    sortable: true,
                  },
                  {
                    name: 'Year',
                    selector: 'year',
                    sortable: true,
                    right: true,
                  }
            ],
            // tableData: {
            //     columns: { ...this.state.columns },
            //     data: { ...this.state.data }
            //   }
            // tableData: {
            //     columns: Object.assign({}, this.state.columns),
            //     data: Object.assign({}, this.state.data)
            //   }
        };
    }
        
    render(){  
        return(
            <div>   
                <div style={{width: '65%' , marginLeft : '20%' , marginTop : '2vw'}}>
                    <DataTableExtensions
                        {...this.state.tableData}
                        export={false}
                        print={false}
                    >
                        <DataTable
                        title="Test Data Table"
                        columns={this.state.columns}
                        data={this.state.data}
                        pagination
                        // defaultSortFieldId={1}
                        defaultSortField="id"
                        highlightOnHover
                        paginationPerPage={6}
                        paginationRowsPerPageOptions={[6 , 8]}
                        />
                    </DataTableExtensions>
                </div>   
            </div>
        );
    }
}