import xlsx from 'xlsx'

export class ExcelUtils{
    // filepath
    // sheetname


    static getDataFromExcel(filePath:string, sheetName:string){
    
        try{
        const workbook = xlsx.readFile(filePath)
        const sheet = workbook.Sheets[sheetName]
        const data  = xlsx.utils.sheet_to_json(sheet)
        return data
        }
        catch(error){
            console.log(error);
        }
    }
}


// install the xlsx library
// Create a utils function 
// Get the data from the sheet and convert the excel in json format and return the data
// Call the method inside the test file
