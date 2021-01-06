import { MUIDataTableColumnDef } from "mui-datatables";

export interface IEmperor {
  id: Number,
  praenomen: String,
  nomen?: String,
  cognomen?: String,
  bio?: String,
  dateOfBirth?: Date,
  dateOfDeath?: Date,
  relations?: [],
  active?: boolean
}

export interface IObjectScanResult {
  AP_Info_Date: String,
  System_Name: String,
  AP_Status: String,
  AP_Object_Type: String,
  AP_Objects_Scanned?: Number,
  AP_ScanDate?: String,
  AP_Pulse?: String,
  AP_LastScannedId?: Number,
  AP_Config?: String
}


export interface IObjectScanResult {
  AP_Info_Date: String,
  System_Name: String,
  AP_Status: String,
  AP_Object_Type: String,
  AP_Objects_Scanned?: Number,
  AP_ScanDate?: String,
  AP_Pulse?: String,
  AP_LastScannedId?: Number,
  AP_Config?: String
}
