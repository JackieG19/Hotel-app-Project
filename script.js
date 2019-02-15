var fs = require('fs'); // file system = library 
// require brings the library that allows interaction with unix command for the fie system

fs.readFile('myfile.txt', 'utf8', function(err, data){
    if(err) throw err;
    
    var array = data.split('\n');
    console.log(array);
    
    for(var i = 0; i < array.length; i++){
        console.log("the data on line ", i+1, "is:", array[i]); 
    }
});

// slipt = takes a string and creates an array
