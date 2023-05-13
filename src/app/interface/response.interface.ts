import { Info } from "./info.interface";

export interface Response {
    info: Info; // import from info.interface.ts file
    results: any[];  // set result to any array
}