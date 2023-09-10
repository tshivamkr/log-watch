/* eslint-disable @typescript-eslint/no-explicit-any */
import DataTable from 'react-data-table-component';

const ExpandedComponent = ({ data }: any) => <pre>{JSON.stringify(data, null, 2)}</pre>;

const columns = [
    {
        name: 'Title',
        selector: (row: any) => row.title,
    },
    {
        name: 'Year',
        selector: (row: any) => row.year,
    },
];

const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
]

export default function LogList() {
    return <DataTable
    columns={columns}
    data={data}
    expandableRows
    expandableRowsComponent={ExpandedComponent}
/>
}