 export function checkNonEmpty(fname,lname,phone){
    if(fname.length<1 || lname.length<1 || phone.length<10){
        return false;
        }
    return true;
}
