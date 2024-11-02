//Checking of Fisrt name field
function checkFirst() {
    var first = document.getElementById("first").value;
    /*var regex = /^[a-zA-Z\s]{2,15}$/;*/
    var regex = /^[а-яА-Я\s]{2,15}$/;

    if (regex.test(first)) { // if testing of first is true
        document.getElementById("first_Check").style.color = "green";
        document.getElementById("first_Check").innerHTML = "Input correct :)";
        return true;
    }
    else {// if it's not
        document.getElementById("first_Check").style.color = "red";
        document.getElementById("first_Check").innerHTML = "Please, enter 2-15 characters";
        return false;
    }
}


//Checking of Last name field
function checkLast() {
    var last = document.getElementById("last").value;
    /*var regex = /^[а-яА-Я\s]{2,20}$/;*/
    var regex = /^[а-яА-Я\s]{2,15}$/;

    if (regex.test(last)) { // if testing of first is true
        document.getElementById("last_Check").style.color = "green";
        document.getElementById("last_Check").innerHTML = "Input correct :)";
        return true;
    }
    else {// if it's not
        document.getElementById("last_Check").style.color = "red";
        document.getElementById("last_Check").innerHTML = "Please, enter 2-20 characters";
        return false;
    }
}

//Checking of Destination field
function checkDest() {
    var dest = document.getElementById("dest").value;
    var regex = /^[а-яА-Я\s\.\,\d\ ]{5,50}$/;

    if (regex.test(dest)) { // if testing of dest is true
        document.getElementById("dest_Check").style.color = "green";
        document.getElementById("dest_Check").innerHTML = "Input correct :)";
        return true;
    }
    else {// if it's not
        document.getElementById("dest_Check").style.color = "red";
        document.getElementById("dest_Check").innerHTML = "Please, enter 2-50 characters";
        return false;
    }
}

//Checking of Phone number field
function checkPhone() {
    var phone = document.getElementById("phone").value;
    var regex = /^\d{3}-(\d{3})-\d{3}$/;

    if (regex.test(phone)) { // if testing of first is true
        document.getElementById("phone_Check").style.color = "green";
        document.getElementById("phone_Check").innerHTML = "Input correct :)";
        return true;
    }
    else {// if it's not
        document.getElementById("phone_Check").style.color = "red";
        document.getElementById("phone_Check").innerHTML = "Input is incorrect!";
        return false;
    }
}

//Collect and output all the data
function outputData() {
    var first = document.getElementById("first").value;
    var last = document.getElementById("last").value;
    var dest = document.getElementById("dest").value;
    var phone = document.getElementById("phone").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var dateAndTime = date + " at " + time;
    var quantity = document.getElementById("quantity").value;
    var paymethod = document.getElementById("paymethod").value;

    if (first != "" && last != "" && dest != "" && phone != "" && date != "" && time != "" && quantity != "") {
        document.getElementById("summary").style.color = "black";
        document.getElementById("summary").innerHTML = "Здавствуйте, " + first + " " + last + "!";
        document.getElementById("summary").innerHTML += "<p>Ваш Заказ успешно сформинрован. Для уточнения деталей заказа мы свяжемся с Вами позже: </p>";
        document.getElementById("summary").innerHTML += "<p>Номер телефона: " + phone + ".</br>";
        document.getElementById("summary").innerHTML += "Место: " + dest + ".</br>";
        document.getElementById("summary").innerHTML += "Дата и время: " + dateAndTime + ".</br>";
        document.getElementById("summary").innerHTML += "Количество человек: " + quantity + ".</br>";
        document.getElementById("summary").innerHTML += "Способ оплаты: " + paymethod + ".</p>";
        document.getElementById("summary").innerHTML += "<p style='font-weight: bold;'>Мы рады, что вы с нами! :)</p>";
    }
    else {
        document.getElementById("summary").style.color="red";
        document.getElementById("summary").innerHTML = "Пожалуйста, заполните все поля...";
    }
}




