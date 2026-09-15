
import fs from 'fs';
import { parse } from 'csv-parse/sync';

export class CsvHelper{


    static readCsv(filepath:string):Record<string,string>[]{
       return parse(fs.readFileSync(filepath,"utf-8"),{
            columns:true, //first row as header of all the columns
            trim:true,
            skip_empty_lines:true

        }) as Record<string,string>[];
    }



}