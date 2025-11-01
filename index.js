import { error } from 'node:console';
import { readFile, writeFile } from 'node:fs';
import { write } from 'node:fs';


readFile('./file/example.txt', 'utf-8', (err, data) => {
    if(err) throw err;
    console.log(data);
})

//write file

const text='this rakib'
writeFile('./file/exampleWrite.txt',text, 'utf-8' ,(err)=>{

    if(err) throw err;
    console.log("file created successfully");
 
} )