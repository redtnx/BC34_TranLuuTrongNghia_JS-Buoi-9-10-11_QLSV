// Khởi tạo đối tượng DSSV từ lớp đối tượng DanhSachSinhVien
var dssv = new DanhSachSinhVien();
var validation = new Validation();

// Gọi hàm getLocalStorage để lấy data
getLocalStorage();

function getEle(id) {
  return document.getElementById(id);
}

function layThongTinSV(isAdd) {
  // Dom tới thẻ input lấy value
  var maSV = getEle("txtMaSV").value;
  var tenSV = getEle("txtTenSV").value;
  var email = getEle("txtEmail").value;
  var matKhau = getEle("txtPass").value;
  var ngaySinh = getEle("txtNgaySinh").value;
  var khoaHoc = getEle("khSV").value;
  var diemToan = getEle("txtDiemToan").value * 1;
  var diemLy = getEle("txtDiemLy").value * 1;
  var diemHoa = getEle("txtDiemHoa").value * 1;
  var diemTB = 0;

  // isValid = true => form hợp lệ
  var isValid = true;

  // Kiểm tra rỗng
  if (isAdd) {
    isValid &=
      validation.kiemTraRong(
        maSV,
        "errorMaSV",
        "(*) Vui lòng nhập mã sinh viên"
      ) &&
      validation.kiemTraDoDaiKiTu(
        maSV,
        "errorMaSV",
        "(*) Vui lòng nhập từ 4-10 kí tự",
        4,
        10
      ) &&
      validation.kiemTraMaSinhVienTonTai(
        maSV,
        "errorMaSV",
        "(*) Mã sinh viên đã tồn tại",
        dssv.arr
      );
  }

  isValid &=
    validation.kiemTraRong(
      tenSV,
      "errorTenSV",
      "(*) Vui lòng nhập tên sinh viên"
    ) &&
    validation.kiemTraKiTuChuoi(
      tenSV,
      "errorTenSV",
      "Vui lòng nhập chuỗi kí tự"
    );

  isValid &=
    validation.kiemTraRong(email, "errorEmail", "(*) Vui lòng nhập email") &&
    validation.kiemTraEmail(
      email,
      "errorEmail",
      "(*) Vui lòng nhập đúng email"
    );

  isValid &= validation.kiemTraRong(
    matKhau,
    "errorMatKhau",
    "(*) Vui lòng nhập mật khẩu"
  );

  isValid &= validation.kiemTraRong(
    ngaySinh,
    "errorNgaySinh",
    "(*) Vui lòng nhập ngày sinh"
  );

  isValid &= validation.kiemTraKhoaHoc(
    khSV,
    "errorKhoaHoc",
    "(*) Vui lòng chọn khóa học"
  );

  isValid &= validation.kiemTraRong(
    diemToan,
    "errorDiemToan",
    "(*) Vui lòng nhập điểm toán"
  );

  isValid &= validation.kiemTraRong(
    diemLy,
    "errorDiemLy",
    "(*) Vui lòng nhập điểm lý"
  );

  isValid &= validation.kiemTraRong(
    diemHoa,
    "errorDiemHoa",
    "(*) Vui lòng nhập điểm Hóa"
  );

  if (!isValid) return null;

  // Tạo đối tượng sinh viên từ lớp đối tượng SinhVien
  var sinhVien = new SinhVien(
    maSV,
    tenSV,
    email,
    matKhau,
    ngaySinh,
    khoaHoc,
    diemToan,
    diemLy,
    diemHoa,
    diemTB
  );

  // Tính ĐTB sinh viên
  sinhVien.tinhDTB();

  return sinhVien;
}

// Thêm sinh viên
getEle("btnThemSV").addEventListener("click", function () {
  var sinhVien = layThongTinSV();

  if (sinhVien) {
    // Thêm sinh viên vào mảng arr
    dssv.themSV(sinhVien);

    // Gọi hàm setLocalStorage để lưu data
    setLocalStorage();

    // In thông tin ra table
    renderTable(dssv.arr);
  }
});

// In thông tin ra table
// Cách 1:
// function renderTable(data) {
//   var content = "";
//   for (var i = 0; i < data.length; i++) {
//     var sv = data[i];
//     content += "<tr>";
//     content += "<td>" + sv.maSV + "</td>";
//     content += "<td>" + sv.tenSV + "</td>";
//     content += "<td>" + sv.email + "</td>";
//     content += "<td>" + sv.ngaySinh + "</td>";
//     content += "<td>" + sv.khoaHoc + "</td>";
//     content += "<td>" + sv.diemTB + "</td>";
//     content += "</tr>";
//   }
//   getEle("tbodySinhVien").innerHTML = content;
// }

// Cách 2:
function renderTable(data) {
  var content = "";
  data.forEach(function (sv) {
    // trong forEach() là callback function
    // ES6: String Template
    content += `
    <tr>
    <td>${sv.maSV}</td>
    <td>${sv.tenSV}</td>
    <td>${sv.email}</td>
    <td>${sv.ngaySinh}</td>
    <td>${sv.khoaHoc}</td>
    <td>${sv.diemTB}</td>
    <td><button class="btn btn-info" onclick="suaSV('${sv.maSV}')">Sửa</button></td>
    <td><button class="btn btn-danger" onclick="xoaSV('${sv.maSV}')">Xóa</button></td>
    </tr>
    `;
  });
  getEle("tbodySinhVien").innerHTML = content;
}

// Sửa sinh viên
function suaSV(maSV) {
  var sv = dssv._layThongTinSV(maSV);
  if (sv) {
    // Dom tới thẻ input show value
    getEle("txtMaSV").value = sv.maSV;
    getEle("txtTenSV").value = sv.tenSV;
    getEle("txtEmail").value = sv.email;
    getEle("txtPass").value = sv.matKhau;
    getEle("txtNgaySinh").value = sv.ngaySinh;
    getEle("khSV").value = sv.khoaHoc;
    getEle("txtDiemToan").value = sv.diemToan;
    getEle("txtDiemLy").value = sv.diemLy;
    getEle("txtDiemHoa").value = sv.diemHoa;
    // disabled #txtMaSV
    getEle("txtMaSV").disabled = true;
  }
}

// Cập nhật sinh viên
getEle("btnCapNhatSV").addEventListener("click", function () {
  // Lấy value từ input
  var sinhVien = layThongTinSV();
  dssv._capNhatSV(sinhVien);
  renderTable(dssv.arr);
  setLocalStorage();
});

// Xóa sinh viên
function xoaSV(maSV) {
  dssv._xoaSV(maSV);
  renderTable(dssv.arr);
  setLocalStorage();
}

// Tìm sinh viên
getEle("txtKeyWord").addEventListener("keyup", function () {
  // Dom lấy value từ #txtKeyWord
  var keyWord = getEle("txtKeyWord").value;
  var mangTimKiem = dssv._timKiemSV(keyWord);
  renderTable(mangTimKiem);
});

// Lưu data của DSSV vào Local Storage của trình duyệt
function setLocalStorage() {
  // Convert từ JSON (cú pháp của JavaScript) => String
  var dataString = JSON.stringify(dssv.arr);
  // Lưu xuống local storage
  localStorage.setItem("DanhSachSinhVien", dataString);
}

// Lấy lại data từ local storage để sử dụng
function getLocalStorage() {
  if (localStorage.getItem("DanhSachSinhVien")) {
    // IMPORTANT: PHẢI KIỂM TRA DATA CÓ TỒN TẠI HAY KHÔNG RỒI MỚI CHO CHẠY LỆNH ĐỂ TRÁNH BỊ LỖI CODE
    var dataString = localStorage.getItem("DanhSachSinhVien");
    // Convert từ String => JSON để sử dụng
    var dataJSON = JSON.parse(dataString);
    // Gọi lại hàm renderTable để nhập lại thông tin từ local storage ra table
    renderTable(dataJSON);
    // Thêm lại thông tin từ local storage vào arr
    dssv.arr = dataJSON;
  }
}
