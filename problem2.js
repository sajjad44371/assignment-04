function  onlyCharacter( str ) {
    if(typeof str !== "string") {
        return "Invalid";
    }

    return str.split(" ").join("").toUpperCase();
}
console.log(onlyCharacter("S aJ ja D- hos sa IN"));