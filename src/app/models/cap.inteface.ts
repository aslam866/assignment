export interface responseType {
    total:number;
    resultSetId:number;
    value:capTypeValues[]
  }
  
export interface capTypeValues {
    name:string;
    isSmallCap:string;
    currentValue:number
  }