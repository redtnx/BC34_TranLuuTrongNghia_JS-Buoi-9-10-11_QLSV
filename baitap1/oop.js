function getEle(id) {
  return document.getElementById(id);
}

function hienThiThongTin() {
  //input
  var _maSV = getEle("txtMaSV").value;
  var _tenSV = getEle("txtTenSV").value;
  var _loaiSV = getEle("loaiSV").value;
  var _diemToan = getEle("txtDiemToan").value * 1;
  var _diemVan = getEle("txtDiemVan").value * 1;

  //tạo đối tương (object)
  var sinhVien = {
    //key: value

    //propertiy
    maSV: _maSV,
    tenSV: _tenSV,
    loaiSV: _loaiSV,
    diemToan: _diemToan,
    diemVan: _diemVan,
    diemTB: 0,
    //method
    tinhDTB: function () {
      this.diemTB = (this.diemToan + this.diemVan) / 2;
    },
    xepLoaiSV: function () {
      var result = "";

      if (8 <= this.diemTB && this.diemTB <= 10) {
        result = "Giỏi";
      } else if (6 < this.diemTB && this.diemTB < 8) {
        result = "Khá";
      } else if (5 <= this.diemTB && this.diemTB <= 6) {
        result = "TB";
      } else {
        result = "Yếu";
      }
      return result;
    },
  };
  sinhVien.tinhDTB();
  var xl = sinhVien.xepLoaiSV();
  //output
  getEle("spanTenSV").innerHTML = sinhVien.tenSV;
  getEle("spanMaSV").innerHTML = sinhVien.maSV;
  getEle("spanLoaiSV").innerHTML = sinhVien.loaiSV;
  getEle("spanDTB").innerHTML = sinhVien.diemTB;
  getEle("spanXepLoai").innerHTML = xl;
}
