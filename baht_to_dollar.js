function converter(currency) {
    if(typeof input === 'number') 
        return `$${(input*0.033).toFixed(3)}`
    else  
        return "error"
}
module.exports = converter;