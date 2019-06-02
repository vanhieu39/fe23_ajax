function DanhSachNguoiDung() {
  this.layDanhSachNguoiDung = function() {
    return $.ajax({
      url: `http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachNguoiDung`,
      type: "GET"
    });
  };

  this.themNguoiDung = function(nguoiDung) {
    $.ajax({
      url: `http://svcy.myclass.vn/api/QuanLyTrungTam/ThemNguoiDung`,
      type: "POST",
      data: nguoiDung
    })
      .done(function(data) {
        if (data === "tai khoan da ton tai !") {
          alert(data);
        } else {
          location.reload();
        }
      })
      .fail(function(err) {
        console.log(err);
      });
  };

  this.xoaNguoiDung = function(nguoiDung) {
    $.ajax({
      url: `http://svcy.myclass.vn/api/QuanLyTrungTam/XoaNguoiDung/${nguoiDung}`,
      type: "DELETE"
    })
      .done(function(data) {
        location.reload();
      })
      .fail(function(err) {
        console.log(err);
      });
  };

  this.layThongTinNguoiDung = function(taiKhoan) {
    var mangNguoiDung = JSON.parse(localStorage.getItem("DSND"));
    return mangNguoiDung.find(function(item) {
      return item.TaiKhoan === taiKhoan;
    });
  };

  this.capNhatNguoiDung = function(nguoiDung) {
    var ngd = JSON.stringify(nguoiDung);
    $.ajax({
      url: `http://svcy.myclass.vn/api/QuanLyTrungTam/CapNhatThongTinNguoiDung`,
      type: "PUT",
      data: ngd,
      contentType: "application/json",
      dataType: "json"
    })
      .done(function(data) {
        location.reload();
      })
      .fail(function(err) {
        console.log(err);
      });
  };
}
