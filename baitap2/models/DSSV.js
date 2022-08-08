function DanhSachSinhVien() {
  this.arr = [];

  // Thêm sinh viên
  this.themSV = function (sv) {
    this.arr.push(sv);
  };

  // Tìm vị trí sinh viên
  this._timViTriSV = function (maSV) {
    // Tìm vị trí sinh viên cần xóa
    // - Tạo 1 biến index = -1
    // - Duyệt mảng arr, i
    // - Kiểm tra sv.maSV trùng maSV?
    // => true: cập nhật index = i
    var index = -1;
    this.arr.forEach(function (sv, i) {
      if (sv.maSV === maSV) {
        index = i;
      }
    });

    return index;
  };

  // Xóa sinh viên
  this._xoaSV = function (maSV) {
    var index = this._timViTriSV(maSV);
    if (index !== -1) {
      this.arr.splice(index, 1);
    }
  };

  // Lấy thông tin SV để sửa
  this._layThongTinSV = function (maSV) {
    var sv = null;
    // Tìm vi trí sinh viên
    var index = this._timViTriSV(maSV);

    if (index !== -1) {
      sv = this.arr[index];
    }
    return sv;
  };

  // Cập nhật thông tin sinh viên
  this._capNhatSV = function (sv) {
    // Tìm vị trí
    var index = this._timViTriSV(sv.maSV);
    if (index !== -1) {
      this.arr[index] = sv;
    }
  };

  // Tìm kiếm sinh viên
  this._timKiemSV = function (keyWord) {
    /*
    0. tạo mangTimKiem = []
    1. duyệt mảng this.arr => sv 
    2. kiểm tra điều kiện sv.tenSV trùng với keyword hay không
      => true => thêm sv vào mangTimKiem
    3. trả về mangTimKiem
    */
    var mangTimKiem = [];

    this.arr.forEach(function (sv) {
      // chuyển tên sinh viên thành chữ thường
      var nameLowerCase = sv.tenSV.toLowerCase();
      var keyWordLowerCase = keyWord.toLowerCase();

      if (nameLowerCase.indexOf(keyWordLowerCase) !== -1) {
        mangTimKiem.push(sv);
      }
    });

    return mangTimKiem;
  };
}
