import { IEmperor, IObjectScanResult } from './store/types';
import scans from './store/scans.json';
export interface Todo {
  id: number
  /** 内容 */
  text: string
  /** 完成状态 */
  completed: boolean
};

export function fakeFetchRemoteData(time: number) {
  const data: IObjectScanResult[] = [
    {
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
  {
    "AP_Info_Date": "20201230102011",
    "System_Name": "DEV",
    "AP_Status": "Finished",
    "AP_Object_Type": "Webi",
    "AP_Objects_Scanned": 0
  },
  {
    "AP_Info_Date": "20201230083837",
    "System_Name": "TEST",
    "AP_Status": "Finished",
    "AP_Object_Type": "Webi",
    "AP_Objects_Scanned": 0
  },
  {
    "AP_Info_Date": "20201230073922",
    "System_Name": "TEST",
    "AP_Status": "Finished",
    "AP_Object_Type": "Webi",
    "AP_Objects_Scanned": 0
  },
  ]
  return new Promise<typeof data>(resolve => {
    console.debug(' --- DATA ---');
    setTimeout(resolve, time, data)
  })
}
