// == vs ===
// == means equal in value
// === takes into account type

if (1 == "1") {
	console.log("same value different type");
}

if(1 === "1"){
    console.log("this won't execute");
}else if(1 === 1){
    console.log("same value and type");
}else{
    console.log("not the same");
}

if(2!=1){
    console.log("2 is not equal to one");
}