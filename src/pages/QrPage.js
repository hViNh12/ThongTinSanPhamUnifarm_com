import { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Link } from "react-router-dom";

export default function QrPage() {
  const [inputDate, setInputDate] = useState("");
  const [qrUrl, setQrUrl] = useState("");
  const qrRef = useRef(null);

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
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "translateY(-6px)";
          e.currentTarget.style.boxShadow =
            "0 12px 32px rgba(0,0,0,0.15), 0 20px 60px rgba(0,0,0,0.1)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow =
            "0 8px 24px rgba(0,0,0,0.1), 0 12px 48px rgba(0,0,0,0.05)";
        }}
      >
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "700",
            marginBottom: "24px",
            color: "#1e293b",
          }}
        >
          Tạo mã QR cho lô sản phẩm
        </h1>

        {/* Form nhập ngày */}
        <form onSubmit={handleSubmit} style={{ marginBottom: "24px" }}>
          <div style={{ textAlign: "left", marginBottom: "16px" }}>
            <label
              style={{
                fontWeight: "600",
                color: "#334155",
                fontSize: "15px",
              }}
            >
              Ngày nhập lô:
            </label>
            <input
              type="text"
              value={inputDate}
              onChange={(e) => setInputDate(e.target.value)}
              placeholder="dd/mm/yyyy"
              required
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "12px",
                border: "1px solid #cbd5e1",
                marginTop: "6px",
                fontSize: "15px",
                transition: "all 0.3s ease",
              }}
              onFocus={(e) =>
                (e.target.style.boxShadow =
                  "0 0 0 3px rgba(37,99,235,0.3)")
              }
              onBlur={(e) => (e.target.style.boxShadow = "none")}
            />
          </div>

          {/* Nút Xuất QR */}
          <button
            type="submit"
            style={{
              width: "100%",
              background:
                "linear-gradient(90deg, #2563eb, #1d4ed8, #2563eb)",
              color: "#fff",
              padding: "14px 24px",
              borderRadius: "14px",
              border: "none",
              fontSize: "16px",
              fontWeight: "700",
              cursor: "pointer",
              boxShadow: "0 6px 16px rgba(37,99,235,0.3)",
              transition: "all 0.3s ease",
              backgroundSize: "200% 200%",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundPosition = "right center";
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.boxShadow =
                "0 8px 20px rgba(37,99,235,0.45)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundPosition = "left center";
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 6px 16px rgba(37,99,235,0.3)";
            }}
          >
             Xuất mã QR
          </button>
        </form>

        {/* QR code hiển thị */}
        {qrUrl && (
          <div ref={qrRef} style={{ marginTop: "20px" }}>
            <QRCodeCanvas value={qrUrl} size={220} />
            <p
              style={{
                marginTop: "14px",
                color: "#334155",
                wordBreak: "break-word",
                fontSize: "14px",
              }}
            >
              URL: {qrUrl}
            </p>
            <button
              onClick={handleDownload}
              style={{
                marginTop: "15px",
                padding: "12px 20px",
                background: "linear-gradient(90deg, #10b981, #059669)",
                color: "#fff",
                border: "none",
                borderRadius: "12px",
                fontWeight: "700",
                cursor: "pointer",
                fontSize: "15px",
                boxShadow: "0 6px 16px rgba(16,185,129,0.3)",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 22px rgba(16,185,129,0.45)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 6px 16px rgba(16,185,129,0.3)";
              }}
            >
               Tải QR về
            </button>
          </div>
        )}

        <p style={{ marginTop: "24px" }}>
          <Link
            to="/"
            style={{
              color: "#2563eb",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
             Về trang chính
          </Link>
        </p>
      </div>
    </div>
  );
}
