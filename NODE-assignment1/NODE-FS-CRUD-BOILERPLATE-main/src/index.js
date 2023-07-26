const fs = require('fs')

const myFileWriter =  (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	 fs.writeFile(fileName , fileContent, (err)=>{
		console.log("File written");
	})

}

const myFileReader =  (fileName) => {
	// write code here
	// dont chnage function name

	 fs.readFile(fileName, {encoding:'utf-8'}, (err, data)=>{
		if(err){
            console.log(err);
		}else{
			console.log(data);
		}
	})
}


const myFileUpdater = (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	 fs.appendFile(fileName, fileContent, (err)=>{
		
	})
}

const myFileDeleter =  (fileName) => {
	// write code here
	// dont chnage function name

fs.unlink(fileName, (err)=>{
		
	})

}
//myFileWriter("file.html","Hello");
myFileReader("file.html");
myFileUpdater("file.html"," World");
myFileDeleter("file.html");




module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }