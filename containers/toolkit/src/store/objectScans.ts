import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit'
import { fakeFetchRemoteData } from '../api'
import { IObjectScanResult } from './types';
import { useDebugValue } from 'react';


const initialState: IObjectScanResult[] = [
  {
    AP_Info_Date: '20201231145600',
    System_Name:  'PROD',
    AP_Status: 'Started',
    AP_Object_Type: 'Webi',
    AP_Objects_Scanned: 0,
    AP_ScanDate: 'String',
    AP_Pulse: '',
    AP_LastScannedId: 0,
    AP_Config: ''
  },{
    "AP_Info_Date": "20201231145600",
    "System_Name": "PROD",
    "AP_Status": "Started",
    "AP_Object_Type": "Webi",
    "AP_Objects_Scanned": 0
  },
  {
    "AP_Info_Date": "20201231141239",
    "System_Name": "TEST",
    "AP_Status": "Finished",
    "AP_Object_Type": "Webi",
    "AP_Objects_Scanned": 0
  },
  {
    "AP_Info_Date": "20201231085652",
    "System_Name": "PROD",
    "AP_Status": "Finished",
    "AP_Object_Type": "Webi",
    "AP_Objects_Scanned": 0
  },
  {
    "AP_Info_Date": "20201230102059",
    "System_Name": "TEST",
    "AP_Status": "Finished",
    "AP_Object_Type": "Webi",
    "AP_Objects_Scanned": 0
  },
]

const scanSlice = createSlice({
  name: 'objectScans',
  initialState,
  reducers: {
    addScan(state, action: PayloadAction<IObjectScanResult>) {
      //const { id, nomen,cognomen,praenomen,bio,dateOfBirth,dateOfDeath,relations } = <IEmperor>action.payload
      console.debug(`\r\n ------- ADD SCAN STATE AND ACTION`, state, 'ACTION', action);
      state.push({ ...action.payload })
    }
  }
})

export const { addScan } = scanSlice.actions

export default scanSlice.reducer

export const getScanList = (time: number) => {
  return async (dispatch: Dispatch) => {
    console.debug(` ---- getScanList was DISPATCHED`);
    const response = await fakeFetchRemoteData(time);
    debugger;
    console.debug(` ---- getScanList FAKE API RETURN ----`,response);

      return response;
  }
}
