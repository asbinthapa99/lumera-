import { ImageResponse } from "next/og";

export const runtime = "edge";
export const contentType = "image/png";
export const size = { width: 1200, height: 630 };
export const alt = "Lumera Technologies — Software built in Nepal, for the world";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background:
            "linear-gradient(135deg, #ffffff 0%, #f7f7f7 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "#0a0a0a",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
              fontWeight: 600,
            }}
          >
            L
          </div>
          <div style={{ fontSize: 28, color: "#0a0a0a", fontWeight: 500 }}>
            Lumera Technologies
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 84,
              lineHeight: 1.05,
              color: "#0a0a0a",
              fontWeight: 500,
              letterSpacing: -2,
              maxWidth: 900,
            }}
          >
            Software that quietly does its job.
          </div>
          <div style={{ fontSize: 28, color: "#666" }}>
            A software studio in Kathmandu, Nepal.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
