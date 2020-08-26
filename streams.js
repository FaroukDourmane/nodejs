const fs = require("fs");

/* if ( fs.existsSync('./files/blog2.txt') )
{
    fs.unlink('./files/blog2.txt', (err) => {
        if (err){
            console.log(err);
        }else{
            console.log("deleted successfully !");
        }
    });
} */

/* const readStream = fs.createReadStream('./files/blog.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./files/blog2.txt'); */

/* readStream.on('data',(chunk) => {
    writeStream.write("/n /n -- New data /n /n");
    writeStream.write(chunk.toUpperCase());
}); */

/* readStream.pipe(writeStream); */