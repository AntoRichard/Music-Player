exports.convertor = arr => {
    let value = '';

    arr.forEach((val, index)=> {
        if(index === 0){
            value+=`'{"${val}",`
        }else if(index === arr.length-1){
            value+=`"${val}"}'`
        }else {
            value+=`"${val}",`
        }
    })
    return value;
}