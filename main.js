//Bài 1: Viết chương trình nhập vào ngày tháng năm

/**
 * Phân tích:
 * input: nhập vào ngày tháng năm
 * handle: khai báo biến ngày tháng năm hiện tại, ngày tháng năm tiếp theo và ngày tháng năm trước đó
 * output: xuất ra ngày tháng năm trước đó và ngày tháng năm tiếp theo
 */

var btnHienThi = document.getElementById('btnHienThi');
btnHienThi.onclick = function() {
    var date = Number(document.getElementById('nhapNgay').value);
    var month = Number(document.getElementById('nhapThang').value);
    var year = Number(document.getElementById('nhapNam').value);
    
    var preDate = 0;
    var nextDate = 0;

    var preMonth = 0;
    var nextMonth = 0;

    var preYear = 0;
    var nextYear = 0;

    if((1 < date && date < 31) && (1 <= month && month <= 12) && year > 0) {
        preDate = date - 1;
        nextDate = date + 1;

        preMonth = month;
        nextMonth = month;

        preYear = year;
        nextYear = year;

    } else if(date == 1 && month == 1 && year > 0) {
        preDate = 31;
        nextDate = date + 1;

        preMonth = 12;
        nextMonth = month;

        preYear = year - 1;
        nextYear = year;


    } else if(date == 1 && month == 12 && year > 0) {

        preDate = 31;
        nextDate = date + 1;

        preMonth = month - 1;
        nextMonth = month;

        preYear = year;
        nextYear = year; 

    } else if(date == 31 && month == 12 && year > 0)  {

        preDate = date - 1;
        nextDate = 1;
    
        preMonth = month;
        nextMonth = 1;

        preYear = year;
        nextYear = year + 1;
        
    } else if(date == 31 && month == 1 && year > 0) {

        preDate = date - 1;
        nextDate = 1;

        preMonth = month;
        nextMonth = month + 1;

        preYear = year;
        nextYear = year;

    } else if(date == 31 && 1 < month && month < 12 && year > 0) {

        preDate = date - 1;
        nextDate = 1;

        preMonth = month;
        nextMonth = month + 1;

        preYear = year;
        nextYear = year;

    } else{
        preDate = 'không hợp lệ';
        nextDate = 'không hợp lệ';
        preMonth = 'không hợp lệ';
        nextMonth = 'không hợp lệ';
        preYear = 'không hợp lệ';
        nextYear = 'không hợp lệ';
    }

    alert('Ngày, tháng, năm của ngày trước đó là ngày: ' + preDate + ' tháng ' + preMonth + ' năm ' + preYear + ' và Ngày, tháng, năm của ngày sau đó là ngày: ' + nextDate + ' tháng ' + nextMonth + ' năm ' + nextYear);

}



//Bài 2: Viết chương trình nhập vào tháng năm. Cho biết tháng đó có bao nhiêu ngày bao gồm tháng nhuận
/**
 * Phân tích:
 * input: nhập vào tháng và năm, 
 * handle: khai bao biến tháng , năm, số ngày của tháng
 * output: xuất ra tháng đó có bao nhiêu ngày
 */

var btnXuatRa = document.getElementById('btnXuatRa');
btnXuatRa.onclick = function() {

    var thang = Number(document.getElementById('soThang').value);
    var nam = Number(document.getElementById('soNam').value);

    var soNgay = 0;
   

    if(thang % 2 === 0 && thang != 2 && thang > 0 && thang < 8 && nam > 0) {
        soNgay = 30;

    } else if(thang % 2 !== 0 && thang !== 2 && thang > 0 && thang < 8 && nam > 0) {
        soNgay = 31;

    } else if(thang % 2 === 0 && thang !== 2 && thang >= 8 && thang <= 12 && nam > 0) {
        soNgay = 31;

    } else if(thang % 2 !== 0 && thang !== 2 && thang >= 8 && thang <= 12 && nam > 0) {

        soNgay = 30;

    } else if((thang === 2) && (nam % 4 == 0 && nam % 100 !== 0) || nam % 400 == 0) {
        soNgay = 29;

    } else if((thang === 2) && (nam % 4 == 0 && nam % 100 == 0) || nam % 400 !== 0){
        soNgay = 28;

    } else if((thang === 2) && (nam % 4 !== 0 && nam % 100 !== 0) || nam % 400 !== 0){
        soNgay = 28;


    } else{
        soNgay = 'Không hợp lệ'
    }

    alert('Số ngày của tháng ' + thang + ' năm ' + nam + ' là ' + soNgay + ' ngày')
}



// Bài 3: Viết chương trình nhập vào số nguyên có 3 chữ số. in ra cách đọc

/**
 * Phân tích:
 * input: nhập vào 1 số nguyên có 3 chữ số
 * handle: khai báo biến số nguyên, đơn vị, chục, trăm, cách đọc
 * output: xuất ra cách đọc số nguyên
 */

var btnClickXem = document.getElementById('btnClickXem');
btnClickXem.onclick = function() {
    
    var soNguyen = Number(document.getElementById('soNguyen').value);
    var tram = parseInt(soNguyen/100) ;
    var chuc = parseInt((soNguyen - (tram*100))/10) ;
    var donVi = parseInt((soNguyen-((tram*100)+(chuc*10)))) ;
    console.log(tram, chuc, donVi)
    var cachDocHangTram = '';
    var cachDocHangChuc = '';
    var cachDocHangDonVi = '';

    if(tram === 1) {
        cachDocHangTram = 'Một trăm'
        
    } else if(tram === 2) {
        cachDocHangTram = 'Hai trăm'
        
    } else if(tram === 3) {
        cachDocHangTram = 'Ba trăm'
        
    } else if(tram === 4) {
        cachDocHangTram = 'Bốn trăm'
        
    } else if(tram === 5) {
        cachDocHangTram = 'Năm trăm'
        
    } else if(tram === 6) {
        cachDocHangTram = 'Sáu trăm'
        
    } else if(tram === 7) {
        cachDocHangTram = 'Bảy trăm'
        
    } else if(tram === 8) {
        cachDocHangTram = 'Tám trăm'
        
    } else if(tram == 9) {
        cachDocHangTram = 'Chín trăm'
        
    }

    if(chuc === 0) {
        cachDocHangChuc = 'lẻ'
        
    } else if(chuc === 1) {
        cachDocHangChuc = 'mười'
        
    } else if(chuc === 2) {
        cachDocHangChuc = 'hai mươi'
        
    } else if(chuc === 3) {
        cachDocHangChuc = 'ba mươi'
        
    } else if(chuc === 4) {
        cachDocHangChuc = 'bốn mươi'
        
    } else if(chuc === 5) {
        cachDocHangChuc = 'năm mươi'
        
    } else if(chuc === 6) {
        cachDocHangChuc = 'sáu mươi'
        
    } else if(chuc === 7) {
        cachDocHangChuc = 'bảy mươi'
        
    } else if(chuc === 8) {
        cachDocHangChuc = 'tám mươi'
        
    } else if(chuc === 9) {
        cachDocHangChuc = 'chín mươi'
    }    
        
    if(donVi === 1) {
        cachDocHangDonVi = 'mốt'
        
    } else if(donVi === 2) {
        cachDocHangDonVi = 'hai'
        
    } else if(donVi === 3) {
        cachDocHangDonVi = 'ba'
        
    } else if(donVi === 4) {
        cachDocHangDonVi = 'bốn'
        
    } else if(donVi === 5) {
        cachDocHangDonVi = 'năm'
        
    } else if(donVi === 6) {
        cachDocHangDonVi = 'sáu'
        
    } else if(donVi === 7) {
        cachDocHangDonVi = 'bảy'
        
    } else if(donVi === 8) {
        cachDocHangDonVi = 'tám'
        
    } else if(donVi === 9) {
        cachDocHangDonVi = 'chín'
    }

    alert('Số ' + soNguyen + ' đọc là: ' + cachDocHangTram + ' ' + cachDocHangChuc + ' ' + cachDocHangDonVi);

}




//Bài 4: Cho biết tên và tọa độ của 3 sinh viên. 
// cho biết tạo độ của trường học.Viết chương trình in tên sinh viên xa trường nhất

/**
 * phân tích :
 * input: nhập vào tên và tọa độ của 3 sinh viên với trường học
 * handle: khai báo biến tên,. tọa độ cho ba sinh viên, tọa độ trường học, so sánh tọa của ba sv với tọa độ của trường, tìm ra sv ở xa trường nhất
 * output: xuất ra tên sv xa trường nhất
 */
var btnTinhRa = document.getElementById('btnTinhRa');
btnTinhRa.onclick = function() {

    var tenSinhVien1 = document.getElementById('tenSinhVien1').value;
    var tenSinhVien2 = document.getElementById('tenSinhVien2').value;
    var tenSinhVien3 = document.getElementById('tenSinhVien3').value;

    var toaDoX = document.getElementById('toaDoX').value;
    var toaDoY = document.getElementById('toaDoY').value;

    var toaDoA = document.getElementById('toaDoA').value;
    var toaDoB = document.getElementById('toaDoB').value;

    var toaDoN = document.getElementById('toaDoN').value;
    var toaDoM = document.getElementById('toaDoM').value;
    
    var toaDoTruong = 0;

    var toaDoSinhVien1 = Math.sqrt(((toaDoTruong - toaDoX) * (toaDoTruong - toaDoX) + (toaDoTruong - toaDoY) * (toaDoTruong - toaDoY)));
    var toaDoSinhVien2 = Math.sqrt(((toaDoTruong - toaDoA) * (toaDoTruong - toaDoA) + (toaDoTruong - toaDoB) * (toaDoTruong - toaDoB)));
    var toaDoSinhVien3 = Math.sqrt(((toaDoTruong - toaDoN) * (toaDoTruong - toaDoN) + (toaDoTruong - toaDoM) * (toaDoTruong - toaDoM)));

    var max = toaDoSinhVien1

    if(max < toaDoSinhVien2) {
        max = toaDoSinhVien2
    }else if(max < toaDoSinhVien3){
        max = toaDoSinhVien3
    }

    if(max == toaDoSinhVien1){
        alert('Sinh viên xa trường nhất là: ' + tenSinhVien1)
    } else if(max == toaDoSinhVien2){
        alert('Sinh viên xa trường nhất là: ' + tenSinhVien2)
    } else if(max == toaDoSinhVien3){
        alert('Sinh viên xa trường nhất là: ' + tenSinhVien3)
    }

    
}