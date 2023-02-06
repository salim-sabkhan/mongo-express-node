// This is for Node JS

const fs = require("fs")

const quote = "No beauty shines brighter than that of good heart"

// fs.writeFile("./awesome.html",quote,(err)=>{
//     console.log("Completed awesome.html")
// });


const quote2 = "Live more, Worry less"

//Task 1
// Create below files with quote 2 as content 
// /backup/
// text-1.html
// text-2.html
// text-3.html
// text-4.html
//....
//text-10.html

for (let i = 1; i <= 10; i++) { 
    fs.writeFile(`./Backup/text-${i}.html`,quote2,(err)=>{
        console.log(`Completed text-${i}.html`)
    });
}

for (let i = 1; i <= 10; i++) { 
    fs.writeFile("./Backup1/text-.html",quote2,(err)=>{
        console.log("Completed text-.html")
    });
}

//Task 2  
// node file.js 5 - 5 files need to be created / text-1.html ... text-5.html
//destructuring 

const[, ,noOfFiles] = process.argv;
console.log(noOfFiles);
const quote3 = "Stay Happy, Stay Safe";
for (let i = 1; i <= noOfFiles; i++) { 
    fs.writeFile(`./Backup2/text-${i}.html`,quote3,(err)=>{
        console.log(`Completed text-${i}.html`)
    });
}

// Read a File

fs.readFile("./cool.txt","utf-8",(err,data) => {
    if(err){
        console.log("Error",err)
    }
    console.log("The content of the file is:",data)
})

//  Write File

const niceQuote = "Make Everyday a better one"

fs.writeFile("./nice.txt",niceQuote,(err)=>{
    console.log("Completed nice.txt")
});


// Append File

const niceQuote1 = "\nMake Everyday a better one"

fs.appendFile("./nice1.txt",niceQuote1,(err)=>{
    console.log("Completed nice.txt")
});


// Delete File

fs.unlink("./delete.txt",(err)=>{
    console.log("Deleted Successfully")
});


//  Read Directory

fs.readdir("./Backup",(err,files) => {
    console.log("All file name:",files)
})


// Delete all files from backup folder

// fs.readdir("./Backup",(err,data) => {
//     data.forEach(fileName => {
//         fs.unlink(`./Backup/${fileName}`,(err) => {
//             console.log("Deleted Successfully")
//         })
//     })
// })

for (let i = 1; i <= 10; i++) { 
    fs.writeFile(`./Backup/text-${i}.html`,quote2,(err)=>{
        console.log(`Completed text-${i}.html`)
    });
}

// quote3 = " Happy day ";

const [, , noOfFile] = process.argv;
 console.log(noOfFile);

const quote4 = " Happy day ";
for (let i = 1; i <= noOfFile; i++ ) {
    fs.writeFileSync(`./Back/text-${i}.html`, quote4) ;
        console.log(`Completed writing text-${i}.html`);
    }



//npm init - package.json file
//npm i express 