import { useParams } from "react-router-dom";

export default function IndexPage() {
  const { dateStr } = useParams();

  let ngayNhap = "Chưa có";
  if (dateStr) {
    try {
      const [day, month, year] = dateStr.split("-");
      const dateObj = new Date(`${year}-${month}-${day}`);
      if (!isNaN(dateObj)) {
        ngayNhap = `${day}/${month}/${year}`;
      } else {
        ngayNhap = dateStr;
      }
    } catch {
      ngayNhap = dateStr;
    }
  }

  return (
    <div>
      <header>
        <h1>Thông tin giống cây trồng</h1>
      </header>

      <section className="hero">
        <h2>Ngày nhập lô: {ngayNhap}</h2>
        <p>
          Sở NNPTNT cấp theo số: <b>1870/BC-SNN</b>
        </p>
      </section>

      <main className="container">
        <div className="card">
          <h3>1. Thông tin về giống cây trồng</h3>
          <p>
            <b>Tên giống:</b> Chuối già Nam Mỹ (Williams)
          </p>
          <p>
            <b>Tên khoa học:</b> Musa acuminata Colla
          </p>
          <p>
            <b>Tác giả:</b> Phạm Quốc Liêm, Tô Thị Nhã Trâm
          </p>
        </div>

        <div className="card">
          <h3>2. Đặc điểm thực vật học</h3>
          <p>Thân giả: 2,3 – 3,0 m; đường kính 22–25 cm</p>
          <p>Lá: 12–13 lá, tán rộng</p>
          <p>Rễ: rễ chùm ăn sâu</p>
          <p>Hoa: lưỡng tính</p>
          <p>Quả: &gt;24 trái/nải, đều, hơi cong</p>
          <p>Hạt: không có</p>
        </div>

        <div className="card">
          <h3>3. Giá trị sử dụng</h3>
          <p>
            Dùng ăn trực tiếp hoặc chế biến tinh bột, tráng miệng, lên men
            ethylic
          </p>
        </div>

        <div className="card image-box">
          <h3>Ảnh sản phẩm</h3>
          <img src="/qr (4).png" alt="Sản phẩm" />
        </div>
      </main>

      <footer>
        © 2025{" "}
        <a href="https://unifarm.com.vn" target="_blank" rel="noreferrer">
          Công ty Cổ phần Nông nghiệp Unifarm
        </a>{" "}
        - Website chính thức
      </footer>
    </div>
  );
}
