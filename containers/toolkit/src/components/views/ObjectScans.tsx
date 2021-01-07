import React, { ReactElement, useDebugValue, useEffect } from "react";
import { IObjectScanResult } from "../../store/types";
//import { getEmperorList } from '../../store/objectscans';
import { useSelector, useDispatch } from "react-redux";
import { Paper } from '@material-ui/core';
import RootState from "../../store/rootReducer";
import { getScanList } from "./../../store/objectScans";
import MUIDataTable, {
	ExpandButton,
	MUIDataTableColumn,
	MUIDataTableOptions,
	MUIDataTableProps,
} from "mui-datatables";


// [TODO ]  Update this interface to take in options for the datatable container that is responsible for passing down those results;
	interface IProps {
		//data: (any)[];
	};
	interface IState { };


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
		}
	};
const columns: MUIDataTableColumn[] = [
			{
				name: "AP_Info_Date",
				label: "APOS Scan Date",
			},
			{
				name: "System_Name",
				label: "Enviroment",
			},
			{
				name: "AP_Status",
				label: "Status",
			},
			{
				name: "AP_Object_Type",
				label: "Object Type",
			},
			{
				name: "AP_Objects_Scanned",
				label: "Objects Scanned",
			},
			{
				name: "AP_ScanDate",
				label: "Scan Date",
			},
			{
				name: "AP_Pulse",
				label: "Last Scan Pulse",
			},
			{
				name: "AP_LastScannedId",
				label: "Last Scanned Object ID",
			},
			{
				name: "AP_Config",
				label: "Configutation XML",
			},
		];
export default function ObjectScans(
	props: IProps,
	state: IState
): ReactElement {
	console.debug('OBJECT SCANS RECEIVED PROPS', props);
	//const {} = props;
	//  const data: string[][] = props.data.map((objectScans: any) => Object.values(objectScans));

	const dispatch = useDispatch();

	const objectScans = useSelector((state: any) => {
		console.debug("\r\n ------- ObjectScans state on selector", state.objectScans);
		return state.objectScans;
	});

	useEffect(() => {
		console.debug('USE EFFECT FIRED FOR GET SCAN LIST')
		dispatch(getScanList)
	}, [dispatch, objectScans])


	return (
		<Paper>
			<MUIDataTable
				title={"TEST"}
				data={objectScans}
				columns={columns}
				options={TableOptions}
			/>
			Object Scans:
			{JSON.stringify(objectScans)}
		</Paper>
	);
}
