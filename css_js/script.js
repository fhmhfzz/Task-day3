function getData(){
    let name = document.getElementById("nama").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let urmsg = document.getElementById("urmsg").value

    //validasi
    if(name == ""){
        return alert("Nama harus Diisi")
    }else if(email == ""){
        return alert("Email harus Diisi")
    }else if(phone == ""){
        return alert("Nomor telepon harus Diisi")
    }else if(subject == ""){
        return alert("Subject harus Dipilih")
    }else if(urmsg == ""){
        return alert("Pesan harus Diisi")
    }

    const kirim = "Fahmihafizprasetyo@gmail.com"
    let a = document.createElement("a")
    a.href = `mailto:${kirim}?subject=${subject}&body= Hallo nama saya ${name},Email Saya ${email}, (Pesan) ${urmsg}, Hubungi Saya untuk kelanjutannya ${phone}`
    a.click()
}