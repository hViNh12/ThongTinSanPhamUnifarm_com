import { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Link } from "react-router-dom";

export default function QrPage() {
  const [ngayNhap, setNgayNhap] = useState("");
  const [maLo, setMaLo] = useState("");
  const [ngayXuat, setNgayXuat] = useState("");
  const [qrUrl, setQrUrl] = useState("");
  const qrRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // format về dạng dd-mm-yyyy
    const formatDate = (d) => {
      try {
        const [day, month, year] = d.split("/");
        return `${day}-${month}-${year}`;
      } catch {
        return d;
      }
    };

    const ngayNhapF = formatDate(ngayNhap);
    const ngayXuatF = formatDate(ngayXuat);

    const url = `${window.location.origin}?ngayNhap=${ngayNhapF}&maLo=${maLo}&ngayXuat=${ngayXuatF}`;
    setQrUrl(url);
  };

  const handleDownload = () => {
    if (qrRef.current) {
      const canvas = qrRef.current.querySelector("canvas");
      const pngUrl = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = "qr-code.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #eef2ff, #e0f2fe)",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "20px",
          boxShadow:
            "0 8px 24px rgba(0,0,0,0.1), 0 12px 48px rgba(0,0,0,0.05)",
          width: "100%",
          maxWidth: "480px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "22px", fontWeight: "700", marginBottom: "20px" }}>
          Tạo mã QR cho lô sản phẩm
        </h1>

        <form onSubmit={handleSubmit} style={{ marginBottom: "24px" }}>
          <div style={{ textAlign: "left", marginBottom: "16px" }}>
            <label><b>Ngày nhập lô:</b></label>
            <input
              type="text"
              value={ngayNhap}
              onChange={(e) => setNgayNhap(e.target.value)}
              placeholder="dd/mm/yyyy"
              required
              style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}
            />
          </div>

          <div style={{ textAlign: "left", marginBottom: "16px" }}>
            <label><b>Mã lô:</b></label>
            <input
              type="text"
              value={maLo}
              onChange={(e) => setMaLo(e.target.value)}
              placeholder="0xxxxxxx"
              required
              style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}
            />
          </div>

          <div style={{ textAlign: "left", marginBottom: "16px" }}>
            <label><b>Ngày xuất lô dự kiến:</b></label>
            <input
              type="text"
              value={ngayXuat}
              onChange={(e) => setNgayXuat(e.target.value)}
              placeholder="dd/mm/yyyy"
              required
              style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              background: "linear-gradient(90deg,#2563eb,#1d4ed8)",
              color: "#fff",
              padding: "12px",
              borderRadius: "10px",
              border: "none",
              fontSize: "16px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            Xuất mã QR
          </button>
        </form>

        {qrUrl && (
          <div>
            <div ref={qrRef} style={{ marginTop: "20px" }}>
              <QRCodeCanvas value={qrUrl} size={220} />
            </div>
            <p style={{ marginTop: "14px", wordBreak: "break-word" }}>
              URL: <a href={qrUrl} target="_blank" rel="noreferrer">{qrUrl}</a>
            </p>
            <button
              onClick={handleDownload}
              style={{
                marginTop: "15px",
                padding: "10px 18px",
                background: "linear-gradient(90deg,#10b981,#059669)",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              Tải QR về
            </button>
          </div>
        )}

        <p style={{ marginTop: "20px" }}>
          <Link to="/">← Về trang chính</Link>
        </p>
      </div>
    </div>
  );
}
