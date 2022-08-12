function Validation() {
  this.kiemTraRong = function (value, errorId, message) {
    if (value === "") {
      // Error
      getEle(errorId).style.display = "block";
      getEle(errorId).innerHTML = message;
      return false;
    }

    getEle(errorId).style.display = "none";
    getEle(errorId).innerHTML = "";
    return true;
  };

  this.kiemTraDoDaiKiTu = function (value, errorId, message, min, max) {
    if (value.length >= min && value.length <= max) {
      // true
      getEle(errorId).style.display = "none";
      getEle(errorId).innerHTML = "";
      return true;
    }
    // false
    getEle(errorId).style.display = "block";
    getEle(errorId).innerHTML = message;
    return false;
  };

  this.kiemTraKiTuChuoi = function (value, errorId, message) {
    // a - z
    var letter =
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
      "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
      "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
    if (value.match(letter)) {
      //true
      getEle(errorId).style.display = "none";
      getEle(errorId).innerHTML = "";
      return true;
    }
    // false
    getEle(errorId).style.display = "block";
    getEle(errorId).innerHTML = message;
    return false;
  };

  this.kiemTraEmail = function (value, errorId, message) {
    var letter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (value.match(letter)) {
      //true
      getEle(errorId).style.display = "none";
      getEle(errorId).innerHTML = "";
      return true;
    }
    // false
    getEle(errorId).style.display = "block";
    getEle(errorId).innerHTML = message;
    return false;
  };

  this.kiemTraKhoaHoc = function (selectId, errorId, message) {
    if (getEle(selectId.selectIndex) !== 0) {
      //true
      getEle(errorId).style.display = "none";
      getEle(errorId).innerHTML = "";
      return true;
    }
    // false
    getEle(errorId).style.display = "block";
    getEle(errorId).innerHTML = message;
    return false;
  };

  this.kiemTraMaSinhVienTonTai = function (value, errorId, message, list) {
    // false = không tồn tại
    // true = tồn tại
    // Cách 1:
    // var status = false;
    // list.forEach(function (sv) {
    //   if (value === sv.maSV) {
    //     status = true;
    //   }
    // });

    // Cách 2:
    var status = list.some(function (sv) {
      return value === sv.maSV;
    });

    if (status) {
      getEle(errorId).style.display = "block";
      getEle(errorId).innerHTML = message;
      return false;
    }
    getEle(errorId).style.display = "none";
    getEle(errorId).innerHTML = "";
    return true;
  };
}
