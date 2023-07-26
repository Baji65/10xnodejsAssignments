const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	 fs.writeFile(fileName , fileContent )
	

}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name

	 fs.readFile(fileName, {encoding:'utf-8'}).then((data)=>console.log(data))
	
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	 fs.appendFile(fileName, fileContent, (err)=>{
		
	})
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name

fs.unlink(fileName, (err)=>{
		
	})

}
/*myFileWriter("File.txt","Hello");
myFileReader("File.txt");
myFileUpdater("File.txt"," World");
myFileDeleter("File.txt");*/




module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }




