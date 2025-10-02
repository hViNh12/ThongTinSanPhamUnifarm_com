import { useLocation } from "react-router-dom";
import "../App.css";

export default function IndexPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Lấy giá trị từ query string
  const ngayNhapParam = queryParams.get("ngayNhap");
  const maLoParam = queryParams.get("maLo");
  const ngayXuatParam = queryParams.get("ngayXuat");

  // Hàm format dd-mm-yyyy thành dd/mm/yyyy
  const formatDate = (str) => {
    try {
      const [day, month, year] = str.split("-");
      const dateObj = new Date(`${year}-${month}-${day}`);
      if (!isNaN(dateObj.getTime())) {
        return `${day}/${month}/${year}`;
      }
      return str;
    } catch {
      return str;
    }
  };

  const ngayNhap = ngayNhapParam ? formatDate(ngayNhapParam) : "dd/mm/year";
  const maLo = maLoParam ? maLoParam : "0xxxxxxx";
  const ngayXuat = ngayXuatParam ? formatDate(ngayXuatParam) : "dd/mm/year";

  return (
    <div className="page">
      <header className="App-header">
        <div className="header-content">
          <img src="/logo1.jpg" alt="Logo" className="App-logo" />
          <h1 className="App-title">Thông tin sản phẩm cây giống</h1>
        </div>
      </header>

      <main className="container">
        {/* 1. Thông tin về doanh nghiệp */}
        <section className="card">
          <h3>1. Thông tin về doanh nghiệp</h3>
          <p>
            <b>Tên đơn vị cung cấp:</b> Công Ty Cổ Phần Nông Nghiệp U&amp;I (Unifarm).
          </p>
          <p>
            <b>Địa chỉ trang trại giống:</b> Dự án Nông nghiệp Công nghệ cao, xã Phước Thành, TP. Hồ Chí Minh
          </p>
          <p>
            <b>Website:</b>{" "}
            <a href="https://unifarm.com.vn" target="_blank" rel="noreferrer">
              unifarm.com.vn
            </a>
          </p>
          <p>
            <b>Số điện thoại:</b> 02743.889.887
          </p>
        </section>

        {/* 2. Thông tin sản phẩm */}
        <section className="card">
          <h3>2. Thông tin sản phẩm</h3>
          <p>
            <b>Tên giống:</b> Chuối kháng bệnh Panama Uni126
          </p>
          <p>
            <b>Đặc tính:</b> có khả năng chống chịu bệnh Panama lên đến 95%, chồi phát triển nhanh, thời gian trổ buồng sớm.
          </p>
          <p>
            <b>Ưu điểm nổi bật:</b> năng suất cao trung bình 65 tấn/năm/ha, chất lượng trái đồng đều, thời gian thu hoạch trung bình là 9 tháng.
          </p>
          <p>
            <b>Trích dẫn nguồn gốc:</b> Sở NNPTNT cấp theo số: 1870/BC-SNN
          </p>
        </section>

        {/* 3. Thông tin nguồn gốc */}
        <section className="card">
          <h3>3. Thông tin nguồn gốc</h3>
          <p>
            <b>Nơi sản xuất/nhân giống:</b> Công ty Cổ phần Công nghệ Sinh học Cây giống Việt Nam
          </p>
          <p>
            <b>Tiêu chuẩn cây giống:</b> Cây giai đoạn 3 (ươm bầu xơ dừa 6x13cm)
          </p>
          <ul>
            <li>Chiều cao: 15 -18cm</li>
            <li>Số lá thật: 4 – 5 lá thật</li>
            <li>Chu vi thân: 3 ± 0.5 cm</li>
          </ul>
          <p>
            <b>Ngày nhập lô:</b> {ngayNhap}
          </p>
          <p>
            <b>Mã lô:</b> {maLo}
          </p>
          <p>
            <b>Ngày xuất lô dự kiến:</b> {ngayXuat}
          </p>
        </section>

        {/* 4. Hướng dẫn kỹ thuật */}
        <section className="card">
          <h3>4. Hướng dẫn kỹ thuật</h3>
          <p>
            <b>Khoảng cách trồng tối ưu:</b>
          </p>
          <ul>
            <li>Cây x cây = 1.25m x 1.25m</li>
            <li>Hàng x hàng = 3.75m</li>
            <li>Khoảng cách trong hàng: 1.85m – 2m</li>
          </ul>
          <p>
            <b>Đất trồng:</b> cày xới sâu 0.8m – 1m. Cần kênh mương thoát nước tốt.
          </p>
        </section>

        {/* 5. Hình ảnh sản phẩm */}
        <section className="card">
          <h3>5. Hình ảnh sản phẩm</h3>
          <div className="App-gallery">
            <img src="/1.jpg" alt="Sản phẩm 1" className="App-gallery-img" />
            <img src="/2.jpg" alt="Sản phẩm 2" className="App-gallery-img" />
            <img src="/3.jpg" alt="Sản phẩm 3" className="App-gallery-img" />
          </div>
        </section>
      </main>

      <footer className="footer">
        © 2025{" "}
        <a href="https://unifarm.com.vn" target="_blank" rel="noreferrer">
          Công ty Cổ phần Nông nghiệp Unifarm
        </a>{" "}
        - Website chính thức
      </footer>
    </div>
  );
}
