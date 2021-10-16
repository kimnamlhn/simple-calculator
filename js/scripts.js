function Processing() {
    //reset notification
    $("#notification").empty();

    //input value
    const calc = $("input[name='calc']:checked").val();
    const num1 = $('#number1').val();
    const num2 = $('#number2').val();

    var warning = '';
    var result;

    //check select calc method or not
    if (calc == undefined) {
        warning = "Bạn chưa chọn phép tính.";
        $("#notification").html(warning);
        return;
    }

    //check validate number
    if ((isNaN(num1) && isNaN(num2)) || (num1 == '' && num2 == '')) {
        warning = "Giá trị nhập ở số thứ nhất và số thứ hai không phải là số thực.";
        $("#notification").html(warning);
        return;
    }
    else if (isNaN(num1) || (num1 == '')) {
        warning = "Giá trị nhập ở số thứ nhất không phải là số thực.";
        $("#notification").html(warning);
        return;

    }
    else if (isNaN(num2) || (num2 == '')) {
        warning = "Giá trị nhập ở số thứ hai không phải là số thực.";
        $("#notification").html(warning);
        return;
    }


    switch (calc) {
        case 'addition':
            result = +num1 + +num2;
            break;
        case 'subtraction':
            result = num1 - num2;
            break;
        case 'multiplication':
            result = num1 * num2;
            break;
        case 'divison':
            result = num1 / num2;
            break;
        default:
            break;
    }

    $("#result").val(result);

}


function checkInputNumber1() {
    //reset notification
    $("#notification").empty();

    const num1 = $('#number1').val();
    //check validate number 1
    if (isNaN(num1) || (num1 == '')) {
        warning = "Giá trị nhập ở số thứ nhất không phải là số thực.";
        $("#notification").html(warning);
    }
}



function checkInputNumber2() {
    //reset notification
    $("#notification").empty();

    const num2 = $('#number2').val();
    //check validate number 2
    if (isNaN(num2) || (num2 == '')) {
        warning = "Giá trị nhập ở số thứ hai không phải là số thực.";
        $("#notification").html(warning);
    }
}