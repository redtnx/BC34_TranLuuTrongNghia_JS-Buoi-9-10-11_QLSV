// Lớp đối tượng
// Hàm khởi tạo (constructor)
function SinhVien(_maSV, _tenSV, _loaiSV, _diemToan, _diemVan) {
  //key = value;
  this.maSV = _maSV;
  this.tenSV = _tenSV;
  this.loaiSV = _loaiSV;
  this.diemToan = _diemToan;
  this.diemVan = _diemVan;
  this.diemTB = 0;

  this.tinhDTB = function () {
    this.diemTB = (this.diemToan + this.diemVan) / 2;
  };

  this.xepLoaiSV = function () {
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
  };
}
