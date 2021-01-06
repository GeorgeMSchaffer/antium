import React, { ReactElement, useDebugValue, useEffect } from "react";
import { IObjectScanResult } from "../../store/types";
//import { getEmperorList } from '../../store/objectscans';
import { useSelector, useDispatch } from "react-redux";
import RootState from "../../store/rootReducer";
import { getScanList } from "./../../store/objectScans";
import MUIDataTable, {
	ExpandButton,
	MUIDataTableColumn,
	MUIDataTableOptions,
	MUIDataTableProps,
} from "mui-datatables";

const Todos = [
    { id: 1, name: 'Buy apples', color: 'Red', amount: 4 },
    { id: 2, name: 'Eat apple', color: 'Green', amount: 1 },
    { id: 3, name: 'Eat some more apple', color: 'Yellow', amount: 3 },
];

const todoOptions: MUIDataTableOptions = {
    textLabels: {
        body: {
            noMatch: <p>You have no apples, go an buy some.</p>,
        },
    },
};
interface IProps {
  data: (any)[];
  options?: (MUIDataTableOptions);
  title?: (string)
}
interface IState {}

export default function ObjectScans(
	props: IProps,
	state: IState
): ReactElement {
  console.debug('OBJECT SCANS RECEIVED PROPS', props);
  const {data,options,title} = props;
	//  const data: string[][] = props.data.map((objectScans: any) => Object.values(objectScans));
	const columns: MUIDataTableColumn[] = [
		{
			name: "AP_Info_Date",
			label: "APOS Scan Date",
			options: {
				draggable: true,
				sortThirdClickReset: true,
				filterType: "custom",
				sortCompare: (order) => (val1, val2) => {
					return (
						(val1.data.length - val2.data.length) * (order === "asc" ? 1 : -1)
					);
				},
				customBodyRender: (value, tableMeta, updateValue) => {
					return (
						<input
							type="text"
							value={value}
							name={`${tableMeta.columnData.name}-${tableMeta.rowIndex}`}
							onChange={(event) => updateValue(event.target.value)}
						/>
					);
				},
			},
		},
		{
			name: "System_Name",
			label: "Enviroment",
			options: {
				filter: true,
			},
		},
		{
			name: "AP_Status",
			label: "Status",
		},
		{
			name: "AP_Object_Type",
			label: "Object Type",
			options: {
				filter: true
			},
		},
		{
			name: "AP_Objects_Scanned",
			label: "Objects Scanned",
			options: {
				filter: true
			},
		},
		{
			name: "AP_ScanDate",
			label: "Scan Date",
			options: {
				filter: true,
				customFilterListOptions: {
					render: (value: string) => value.toUpperCase(),
				},
			},
		},
		{
			name: "AP_Pulse",
			label: "Last Scan Pulse",
			options: {
				filter: true,
				customFilterListOptions: {
					render: (value: string) => value.toUpperCase(),
				},
			},
		},
		{
			name: "AP_LastScannedId",
			label: "Last Scanned Object ID",
			options: {
				filter: true,
				customFilterListOptions: {
					render: (value: string) => value.toUpperCase(),
				},
			},
		},
		{
			name: "AP_Config",
			label: "Configutation XML",
			options: {
				filter: true,
				customFilterListOptions: {
					render: (value: string) => value.toUpperCase(),
				},
			},
		},
	];

	const TableOptions: MUIDataTableOptions = {
		jumpToPage: true,
		fixedHeader: true,
		fixedSelectColumn: false,
		sortOrder: { name: "amount", direction: "asc" },
		filterType: "checkbox",
		responsive: "standard",
		selectableRows: "none",
		elevation: 0,
		rowsPerPageOptions: [5, 10, 20, 25, 50, 100],
		downloadOptions: {
			filename: "filename.csv",
			separator: ",",
		},
		draggableColumns: {
			enabled: true,
		},

		onRowsDelete: (rowsDeleted: {
			lookup: { [dataIndex: number]: boolean };
			data: Array<{ index: number; dataIndex: number }>;
		}) => {
			if (
				rowsDeleted.data[0].index === rowsDeleted.data[0].dataIndex &&
				rowsDeleted.lookup[0]
			) {
				console.log(`Data deleted on index ${rowsDeleted.data[0].dataIndex}`);
			}
		},
		onTableChange: (action, tableState) => {
			switch (action) {
				case "changeRowsPerPage":
					break;
				case "changePage":
					break;
				case "sort":
					break;
				case "search ":
					break;
				case "filterChange":
					break;
				default:
					console.warn("action not handled.");
			}
		},
		setFilterChipProps: () => {
			return {
				color: "secondary",
				variant: "outlined",
			};
		},
		setRowProps: (row, dataIndex, rowIndex) => {
			console.debug('SET ROW PROPS',row,dataIndex,rowIndex)
			return {
				className: `row${dataIndex}`,
			};
		},
		textLabels: {
			body: {
				noMatch: "Sorry, no matching records found",
				toolTip: "Sort",
				columnHeaderTooltip: (column) =>
					column.label ? `Sort on ${column.label}` : `Sort`,
			},
			pagination: {
				next: "Next Page",
				previous: "Previous Page",
				rowsPerPage: "Rows per page:",
				displayRows: "of",
				jumpToPage: "Go To",
			},
			toolbar: {
				search: "Search",
				downloadCsv: "Download CSV",
				print: "Print",
				viewColumns: "View Columns",
				filterTable: "Filter Table",
			},
			filter: {
				all: "All",
				title: "FILTERS",
				reset: "RESET",
			},
			viewColumns: {
				title: "Show Columns",
				titleAria: "Show/Hide Table Columns",
			},
			selectedRows: {
				text: "rows(s) selected",
				delete: "Delete",
				deleteAria: "Delete Selected Rows",
			},
		},
	};

	return (
    <div>
      <h2>TABLE</h2>
			<MUIDataTable
				title={"TEST"}
				data={data}
				columns={columns}
				options={options}
      />
      Object Scans:
      {JSON.stringify(data)}
		</div>
	);
}
