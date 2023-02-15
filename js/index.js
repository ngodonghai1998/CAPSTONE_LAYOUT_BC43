function btnTest() {
    var e1 = document.getElementById('inputGroupSelect01');
    var e2 = document.getElementById('inputGroupSelect02');

    var diemToan = document.getElementById('inputDiemToan');
    var diemLy = document.getElementById('inputDiemLy');
    var diemHoa = document.getElementById('inputDiemHoa');
    
    var diemTrungBinh;
    var value1 = e1.value;
    var value2 = e2.value;
    diemToan = +diemToan.value;
    diemLy = +diemLy.value;
    diemHoa = +diemHoa.value;
    
    diemTrungBinh = (value1*1 + value2*1 + diemHoa + diemLy + diemToan)/3;

    if (diemTrungBinh >= 10){
        diemTrungBinh = 10;
    }

    console.log(diemToan, diemLy,  diemHoa);
    document.getElementById('output').innerHTML = diemTrungBinh;
}

document.getElementById('btnTienDien').onclick = function(){
    var inputTenUser = document.getElementById('inputTenUser').value;
    var inputDongTieuThu = document.getElementById('inputDongTieuThu').value;

    tinhTienDien(inputDongTieuThu);

    document.getElementById('outputUser').innerHTML = inputTenUser;

}

function tinhTienDien(tienDien){
    var tienDien;
    var tongTienDien;

    if (tienDien >= 0 && tienDien <= 50){
        tongTienDien = tienDien*500;
    }
    else if (tienDien > 50 && tienDien <= 100){
        tongTienDien = (tienDien-50)*650 + 50*500;
    }
    else if (tienDien > 100 && tienDien <= 200){
        tongTienDien = (tienDien-100)*850 + 50*650 + 50*500;
    }
    else if (tienDien > 200 && tienDien <= 350){
        tongTienDien = (tienDien-200)*1100 + 100*850 + 50*650 + 50*500;
    }
    else if (tienDien > 350){
        tongTienDien = (tienDien-350)*1300 + 150*1100 + 100*850 + 50*650 + 50*500;
    }

    document.getElementById('outputTienDien').innerHTML = Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(tongTienDien);
}

document.getElementById('btnTax').onclick = function(){
    var inputTaxUser = document.getElementById('inputTaxUser').value;
    var inputIncome = document.getElementById('inputIncome').value;
    var inputRelyUser = document.getElementById('inputRelyUser').value;

    tinhThue(inputIncome,inputRelyUser);

    document.getElementById('outputUserTax').innerHTML = inputTaxUser;
    document.getElementById('outputRelyUser').innerHTML = inputRelyUser;

    
}

function tinhThue(tienThue, nguoiPhuThuoc){
    var tienThue;
    var nguoiPhuThuoc;
    var tongTienThue;
    
    if (tienThue >= 0 && tienThue <= 60){
        tongTienThue = tienThue*0.05 - 4 - 1.6*nguoiPhuThuoc;
        if (tongTienThue < 0){
            tongTienThue = 0;
        }
    }

    else if (tienThue > 60 && tienThue <= 120){
        tongTienThue = (tienThue-60)*0.1+60*0.05 - 4 - 1.6*nguoiPhuThuoc;
        if (tongTienThue < 0){
            tongTienThue = 0;
        }
    }

    else if (tienThue > 120 && tienThue <= 210){
        tongTienThue = (tienThue-120)*0.15+60*0.1+60*0.05 - 4 - 1.6*nguoiPhuThuoc;
        if (tongTienThue < 0){
            tongTienThue = 0;
        }
    }

    else if (tienThue > 210 && tienThue <= 384){
        tongTienThue = (tienThue-210)*0.2+90*0.15+60*0.1+60*0.05 - 4 - 1.6*nguoiPhuThuoc;
        if (tongTienThue < 0){
            tongTienThue = 0;
        }
    }

    else if (tienThue > 384 && tienThue <= 624){
        tongTienThue = (tienThue-384)*0.25+174*0.2+90*0.15+60*0.1+60*0.05 - 4 - 1.6*nguoiPhuThuoc;
        if (tongTienThue < 0){
            tongTienThue = 0;
        }
    }

    else if (tienThue > 624 && tienThue <= 960){
        tongTienThue = (tienThue-624)*0.3+240*0.25+174*0.2+90*0.15+60*0.1+60*0.05 - 4 - 1.6*nguoiPhuThuoc;
        if (tongTienThue < 0){
            tongTienThue = 0;
        }
    }

    else if (tienThue > 960){
        tongTienThue = (tienThue-960)*0.35+236*0.3+240*0.25+174*0.2+90*0.15+60*0.1+60*0.05 - 4 - 1.6*nguoiPhuThuoc;
        if (tongTienThue < 0){
            tongTienThue = 0;
        }
    }
    tongTienThue = tongTienThue*1000000;

    document.getElementById('outputTax').innerHTML = Intl.NumberFormat('de-DE', {style: 'currency', currency: 'VND' }).format(tongTienThue);
}

document.getElementById('btnCable').onclick = function (){
    var onChangeTest = +document.getElementById('inputLoaiKH').value;
    console.log(onChangeTest);

    if (onChangeTest == 0 || onChangeTest == null){
        var inputCableRent = document.getElementById('inputCableRent').value;
        var tinhTienCap;

        tinhTienCap = inputCableRent*7.5+20.5+4.5;


        document.getElementById('outputTienCap').innerHTML = tinhTienCap;
    }

    else if (onChangeTest == 1) {
        var inputCableRent = +document.getElementById('inputCableRent').value;
        var inputDisabled = +document.getElementById('inputDisabled').value;
        var tinhTienCap;

        if (inputDisabled <= 10){
            tinhTienCap = inputCableRent*50+75+15;
        }
        else if (inputDisabled > 10){
            tinhTienCap = inputCableRent*50+75+5*(inputDisabled-10)+15;
        }

        document.getElementById('outputTienCap').innerHTML = tinhTienCap;
    }
}

function onChangeTest(){
    var onChangeTest = +document.getElementById('inputLoaiKH').value;

    if (onChangeTest == 1){
        document.getElementById('inputDisabled').disabled = false;
    }
    else {
        document.getElementById('inputDisabled').disabled = true;
    }
}







