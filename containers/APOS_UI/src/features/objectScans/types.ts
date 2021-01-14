
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

export interface SerializedError {
  name?: string
  message?: string
  stack?: string
  code?: string
}