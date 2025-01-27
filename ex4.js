function GetStringLength(str, trim) {
    var len = 0;
    if (trim) {
        len = str.trim().length;
    }
    else {
        len = str.length;
    }
    return len;
}
console.log(GetStringLength(" test1 ", true));
console.log(GetStringLength(" test2 ", false));
console.log(GetStringLength(" test1 "));
