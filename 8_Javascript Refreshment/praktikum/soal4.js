let bdays = ['10-17', '05-19', '20-19'];

function ganti(min){
    let garing = "";
    for(var i = 0; i <= 4; i++){
        if(i == 2){
            garing = garing + "/";
        }else{
            garing = garing + min[i];
        }   
    }
    bdays.push(garing); 
}

for(var i = 0; i <= 2; i++){
    ganti(bdays[i]);
}

for(var i = 0; i <= 2; i++){
    bdays.shift();
}

console.log(bdays);