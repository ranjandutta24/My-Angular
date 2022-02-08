const XLSX = require("xlsx")
const student=[
    {name:"ranjan",rmail:"connecttoranjan@gmail.com",age:27},
    {name:"regs",rmail:"cosgan@gmail.com",age:47}
];


const convertJsonToExcel=()=>{
        
    const workSheet=XLSX.utils.json_to_sheet(student);
    const workBook=XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workBook,workSheet,"My_Sheet")

 //   Generate buffer
 XLSX.write(workBook,{bookType:'xlsx',type:"buffer"})
    // BS
    XLSX.write(workBook,{bookType:"xlsx",type:"binary"})
    XLSX.writeFile(workBook,"posts.xlsx")
}

convertJsonToExcel()