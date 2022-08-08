function Validation() {
  this.kiemTraRong = function (value, errorID, message) {
    if (value === "") {
      // Error
      getEle(errorID).style.display = "block";
      getEle(errorID).innerHTML = message;
      return false;
    }

    getEle(errorID).style.display = "none";
    getEle(errorID).innerHTML = "";
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
}
