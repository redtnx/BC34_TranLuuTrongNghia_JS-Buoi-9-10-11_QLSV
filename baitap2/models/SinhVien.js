function SinhVien(
  _maSV,
  _tenSV,
  _email,
  _password,
  _ngaySinh,
  _khoaHoc,
  _diemToan,
  _diemLy,
  _diemHoa,
  _diemTB
) {
  this.maSV = _maSV;
  this.tenSV = _tenSV;
  this.email = _email;
  this.password = _password;
  this.ngaySinh = _ngaySinh;
  this.khoaHoc = _khoaHoc;
  this.diemToan = _diemToan;
  this.diemLy = _diemLy;
  this.diemHoa = _diemHoa;
  this.diemTB = 0;

  this.tinhDTB = function () {
    this.diemTB =
      (parseFloat(this.diemToan) +
        parseFloat(this.diemLy) +
        parseFloat(this.diemHoa)) /
      3;
  };
}
