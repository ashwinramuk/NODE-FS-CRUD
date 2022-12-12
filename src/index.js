const fs = require('fs/promises')
const path = require('path')


const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	// console.log("writeB")
	await fs.writeFile(fileName,fileContent)
	// console.log("writeA")
	// return new Promise((resolve,reject)=>{
	// 	fs.writeFile(fileName,fileContent,(err)=>{
	// 		if(err) reject(err);
	// 		else resolve();
	// 	})	
	// })
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	// console.log("readB")
	const data = await fs.readFile(fileName,{encoding:"utf-8"})
	console.log(data)
	// console.log("readA")
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function 
	// console.log("appendB")

	await fs.appendFile(fileName,fileContent)
	// console.log("appendA")
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	await fs.unlink(fileName)
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }

myFileWriter(path.join(__dirname,"File.txt"),"Hello")
myFileReader(path.join(__dirname,"File.txt"))
myFileUpdater(path.join(__dirname,"File.txt")," Ashwin")
myFileReader(path.join(__dirname,"File.txt"))

