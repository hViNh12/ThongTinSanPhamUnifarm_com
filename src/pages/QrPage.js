import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Link } from "react-router-dom";

export default function QrPage() {
  const [inputDate, setInputDate] = useState("");
  const [qrUrl, setQrUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const [day, month, year] = inputDate.split("/");
      const dateStr = `${day}-${month}-${year}`;
      const url = `${window.location.origin}/${dateStr}`;
      setQrUrl(url);
    } catch {
      setQrUrl(window.location.origin + "/" + inputDate.replace("/", "-"));
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Tạo mã QR cho lô sản phẩm</h1>
      <form onSubmit={handleSubmit}>
        <label>Ngày nhập lô:</label>
        <input
          type="text"
          value={inputDate}
          onChange={(e) => setInputDate(e.target.value)}
          placeholder="dd/mm/yyyy"
          required
        />
        <button type="submit">Sinh mã QR</button>
      </form>

      {qrUrl && (
        <div style={{ marginTop: "20px" }}>
          <QRCodeCanvas value={qrUrl} size={200} />
          <p>URL: {qrUrl}</p>
        </div>
      )}

      <p>
        <Link to="/">← Về trang chính</Link>
      </p>
    </div>
  );
}
