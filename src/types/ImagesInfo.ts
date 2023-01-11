export interface ImageInfoResponse {
  "Account Management Lead": string;
  "Creative Lead": string;
  "Creative Lead Image": string;
  "Job Number": string;
  "Timesheet Job Number": string;
  Client: string;
  Brand: string | number;
  "Brand Image": string;
  "Job Description": string;
  "New Revision Translation (N/R/T)": string;
  Writer: string;
  Art: string;
  "Creative Brief Date": string;
  "Creative Brief Time": string;
  Internal: string;
  "Internal Time": string;
  "Due Date": string;
  "Actual Due Date": string;
  Remarks: string;
}

export interface ImageInfoPayload {
    body: {
        file: File
    }
}
