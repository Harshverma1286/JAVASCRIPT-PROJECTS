const id = document.getElementById("inputthing");

const innerlength = 12;

function generatepassword(){
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const digits = "123456789";
    const specialchars = "!@#$%^&*()_+[]{}|;:',.<>?/`~";

    const allchars = upper + lower + digits + specialchars;

    let password="";

    password+=upper[Math.floor(Math.random()*upper.length)];
    password+=lower[Math.floor(Math.random()*lower.length)];
    password+=digits[Math.floor(Math.random()*digits.length)];
    password+=digits[Math.floor(Math.random()*specialchars.length)]; 

    while(innerlength>password.innerlength){
        password+=allchars[Math.floor(Math.random()*allchars.length)];
    }
    

    password = password.split('').sort(()=>0.5-Math.random()).join('');

    id.value = password;

}

function copypassword(){
    id.select();
    document.execCommand("copy");
} 

