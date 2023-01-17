var namaElement = document.getElementById("nama")
var jenisKelaminElement = document.getElementById("jenis-kelamin")
var emailElement = document.getElementById("email")
var passwordElement = document.getElementById("password")
var nomorTeleponElement = document.getElementById("nomor-telepon")
var alamatElement = document.getElementById("alamat")
var syaratKetentuanElement = document.getElementById("syarat-ketentuan")
var submitElement = document.getElementById("button-submit")

var namaError = document.getElementById("required-text-error-nama")
var jenisKelaminError = document.getElementById("required-text-error-jenis-kelamin")
var emailError = document.getElementById("required-text-error-email")
var passwordError = document.getElementById("required-text-error-password")
var nomorTeleponError = document.getElementById("required-text-error-nomor-telepon")
var alamatError = document.getElementById("required-text-error-alamat")
var syaratKetentuanError = document.getElementById("required-text-error-syarat-ketentuan")

submitElement.addEventListener("click",validation)

function validation(e){
    // e.preventDefault()

    let namaValue = namaElement.value
    let jenisKelaminValue = jenisKelaminElement.value
    let emailValue = emailElement.value
    let passwordValue = passwordElement.value
    let nomorTeleponValue = nomorTeleponElement.value
    let alamatValue = alamatElement.value
    let syaratKetentuanValue = syaratKetentuanElement.checked

    if(!cekNama(namaValue)){
        // alert("nama")
        namaError.style.display = "inline"
        namaElement.style.border = "3px solid red"
    }
    else{
        namaError.style.display = "none"
        namaElement.style.border = "1px solid black"
    }
    if(!cekJenisKelamin(jenisKelaminValue)){
        // alert("jenis kelamin")
        jenisKelaminError.style.display = "inline"
        jenisKelaminElement.style.border = "3px solid red"
    }
    else{
        jenisKelaminError.style.display = "none"
        jenisKelaminElement.style.border = "1px solid black"
    }
    if(!cekEmail(emailValue)){
        // alert("email")
        emailError.style.display = "inline"
        emailElement.style.border = "3px solid red"
    }
    else{
        emailError.style.display = "none"
        emailElement.style.border = "1px solid black"
    }
    if(!cekPassword(passwordValue)){
        // alert("password")
        passwordError.style.display = "inline"
        passwordElement.style.border = "3px solid red"
    }
    else{
        passwordError.style.display = "none"
        passwordElement.style.border = "1px solid black"
    }
    if(!cekNomorTelepon(nomorTeleponValue)){
        // alert("no telp")
        nomorTeleponError.style.display = "inline"
        nomorTeleponElement.style.border = "3px solid red"
    }
    else{
        nomorTeleponError.style.display = "none"
        nomorTeleponElement.style.border = "1px solid black"
    }
    if(!cekAlamat(alamatValue)){
        // alert("alamat")
        alamatError.style.display = "inline"
        alamatElement.style.border = "3px solid red"
    }
    else{
        alamatError.style.display = "none"
        alamatElement.style.border = "1px solid black"
    }
    if(!syaratKetentuanValue){
        // alert("syarat ketentuan")
        syaratKetentuanError.style.display = "inline"
        syaratKetentuanElement.style.border = "3px solid red"
    }
    else{
        syaratKetentuanError.style.display = "none"
        syaratKetentuanElement.style.border = "1px solid black"
    }
}

function cekNama(nama){
    let length = nama.length
    if(length == 0){
        // alert("nama kosong")
        return false
    }
    return true
}

function cekJenisKelamin(jenisKelamin){
    if(jenisKelamin == ""){
        return false
    }
    return true
}

function cekEmail(email){
    if(hitungKarakterTertentu(email, '@') != 1){
        // alert("more than one @ or no @")
        return false
    }
    if(email.startsWith('@')){
        // alert("starts with @")
        return false
    }
    if(email.endsWith('@')){
        // alert("ends with @")
        return false
    }
    if(email.includes("@.")){
        // alert("@.")
        return false
    }
    if(email.startsWith('.')){
        // alert("starts with .")
        return false
    }
    if(email.endsWith('.')){
        // alert("ends with .")
        return false
    }
    if(email.includes("..")){
        // alert("..")
        return false
    }
    return true
}

function cekPassword(password){
    let length = password.length
    if(length < 10){
        // alert("password length less than 10")
        return false
    }

    let checkUppercase = false
    let checkNumber = false
    let checkSpecial = false

    for (let i = 0; i < length; i++) {
        const element = password[i];
        if(element >= 'A' && element <= 'Z'){
            checkUppercase = true
        }
        else if(element >= '0' && element <= '9'){
            checkNumber = true
        }
        else if((element >= '!' && element <= '/') || (element >= ':' && element <= '@') || (element >= '[' && element <= '`') || (element >= '{' && element <= '~')){
            checkSpecial = true
        }
        if(checkUppercase == true && checkNumber == true && checkSpecial == true){
            return true
        }
    }
    // alert("password does not contain uppercase, number, or special")
    return false
}

function cekNomorTelepon(nomorTelepon){
    let length = nomorTelepon.length
    if(length < 10 || length > 13){
        // alert("no telp less than 10 or more than 13")
        return false
    }

    for (let i = 0; i < length; i++) {
        const element = nomorTelepon[i];
        if(!(element >= '0' && element <= '9')){
            // alert("no telp contains non-numeric characters")
            return false
        }
    }
    return true
}

function cekAlamat(alamat){
    let length = alamat.length
    if(length == 0){
        // alert("alamat kosong")
        return false
    }
    return true
}

function hitungKarakterTertentu(string, karakter){
    let length = string.length
    let count = 0
    for (let i = 0; i < length; i++) {
        const element = string[i];
        if(element == karakter){
            count++
        }
    }
    return count
}