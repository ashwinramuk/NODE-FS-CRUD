const fs = require('./index')
const path = require('path')

// fs.myFileWriter(path.join(__dirname,"File.txt"),"Hello").then(()=>fs.myFileReader(path.join(__dirname,"File.txt"))).then(()=>fs.myFileUpdater(path.join(__dirname,"File.txt")," Ashwin")).then(()=>fs.myFileReader(path.join(__dirname,"File.txt")))

fs.myFileWriter(path.join(__dirname,"File.txt"),"Hello")
fs.myFileReader(path.join(__dirname,"File.txt"))
fs.myFileUpdater(path.join(__dirname,"File.txt")," Ashwin")
fs.myFileReader(path.join(__dirname,"File.txt"))

// let file1 = fs.myFileWriter(path.join(__dirname,"File.txt"),"Hello")

// file1 = file1.then(()=>fs.myFileReader(path.join(__dirname,"File.txt")))

// file1 = file1.then(()=>fs.myFileUpdater(path.join(__dirname,"File.txt")," Ashwin"))

// file1 = file1.then(()=>fs.myFileReader(path.join(__dirname,"File.txt")))

// file1.then(()=>fs.myFileDeleter(path.join(__dirname,"File.txt")))

// let file2 = fs.myFileWriter(path.join(__dirname,"File2.txt"),"hi")

// file2 = file2.then(()=>fs.myFileReader(path.join(__dirname,"File2.txt")))

// file2 = file2.then(()=>fs.myFileUpdater(path.join(__dirname,"File2.txt")," Shubham"))

// file2 = file2.then(()=>fs.myFileReader(path.join(__dirname,"File2.txt")))

// file2.then(()=>fs.myFileDeleter(path.join(__dirname,"File.txt")))