import React from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtensions from "react-data-table-component-extensions";


const data = [
    { id: 1, title: 'yassine', year: 12 } ,
    { id: 2, title: 'salim', year: 25 }, 
    { id: 3, title: 'adel', year: 4 }, 
    { id: 4, title: 'oussama', year: 80 }, 
    { id: 5, title: 'adnan', year: 52 }, 
    { id: 6, title: 'hafssa', year: 78 }, 
    { id: 7, title: 'fakhita', year: 55}, 
    { id: 8, title: 'godzilla', year: 45 }, 
    { id: 9, title: 'noussaib', year: 54 }, 
    { id: 10, title: 'lghlit', year: 65 }, 
    { id: 11, title: 'fuck', year: 91 }, 
    { id: 12, title: 'my life', year: 1 }, 
    { id: 13, title: 'why d fuck its not working', year: 52 }, 
    { id: 14, title: 'engenner man', year: 88 }, 
    { id: 15, title: 'brian', year: 88.80 }, 
    { id: 16, title: 'ain saiss', year: 78 }, 
    { id: 17, title: 'oud nill', year: 1000 }, 
    
    ];
const columns = [
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
  },
];


const tableData = {columns,data}



export default class Result extends React.Component
{
    render(){
        return(
            <div>   
                <div style={{width: '65%' , marginLeft : '20%' , marginTop : '2vw'}}>
                    <DataTableExtensions
                        {...tableData}
                    >
                        <DataTable
                        title="Test Data Table"
                        columns={columns}
                        data={data}
                        pagination
                        defaultSortFieldId={1}
                        defaultSortField="id"
                        highlightOnHover
                        />
                    </DataTableExtensions>
                </div>   
            </div>
        );
    }
}