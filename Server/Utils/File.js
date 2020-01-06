const fs = require('fs');

exports.ReadFile =  () => {
    fs.readFile('Favo.json', async(err, data) => {
        if(err) throw err;
        return new Promise((resolve, reject)=> {
            setTimeout(()=> resolve(JSON.parse(data)), 100)
            
        })
    })
}

exports.WriteFile = async data => fs.writeFile('Favo.json',data,(err, response)=> {
    if(err) throw err;
    return response;
})