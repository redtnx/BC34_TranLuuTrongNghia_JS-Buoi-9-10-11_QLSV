function getEle(id) {
  return document.getElementById(id);
}

function hienThiThongTin() {
  var maSV = getEle("txtMaSV").value;
  var tenSV = getEle("txtTenSV").value;
  var diemToan = getEle("txtDiemToan").value * 1;
  var diemVan = getEle("txtDiemVan").value * 1;
}

function tinhDTB(diemToan, diemVan) {
  var result = (diemToan + diemVan) / 2;
  return result;
}

function xepLoaiSV(dtb) {
  var result = "";

  if (8 <= dtb && dtb <= 10) {
    result = "Giỏi";
  } else if (6 <= dtb && dtb < 8) {
    result = "Khá";
  } else if (5 <= dtb && dtb < 6) {
    result = "TB";
  } else {
    result = "Yếu";
  }
  return result;
}
