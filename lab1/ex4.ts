

function GetStringLength(str: string, trim?: boolean): number{
    let len: number;

    if(trim){
       len = str.trim().length;
    }else{
        len = str.length;
    }

    return len;
}

console.log(GetStringLength(" test1 ", true));
console.log(GetStringLength(" test2 ", false));
console.log(GetStringLength(" test1 "));