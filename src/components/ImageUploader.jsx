import { useRef, useState } from "react";
import { Upload, Loader, CheckCircle, AlertCircle } from "lucide-react";
import "./ImageUploader.css";

/**
 * Reusable image upload button with progress and preview.
 *
 * Props:
 *   onUpload    - async fn(file) → called with the selected File object
 *   label       - button label text
 *   currentURL  - existing image URL to show as preview
 *   shape       - "circle" | "rect" (default: "rect")
 */
export default function ImageUploader({ onUpload, label = "Upload Photo", currentURL, shape = "rect" }) {
  const inputRef              = useRef(null);
  const [progress, setProgress] = useState(0);
  const [status,   setStatus]   = useState("idle"); // idle | uploading | done | error
  const [errorMsg, setErrorMsg] = useState("");
  const [preview,  setPreview]  = useState(currentURL || "");

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Show local preview immediately
    const localURL = URL.createObjectURL(file);
    setPreview(localURL);
    setStatus("uploading");
    setProgress(0);
    setErrorMsg("");

    try {
      const url = await onUpload(file, (pct) => setProgress(pct));
      setPreview(url);
      setStatus("done");
      setTimeout(() => setStatus("idle"), 3000);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
      setPreview(currentURL || "");
    }

    // Reset input so same file can be re-selected
    e.target.value = "";
  };

  return (
    <div className={`img-uploader img-uploader--${shape}`}>
      {/* Preview */}
      {preview && (
        <div className={`img-uploader__preview img-uploader__preview--${shape}`}>
          <img src={preview} alt="Preview" />
        </div>
      )}

      {/* Upload button */}
      <button
        className={`img-uploader__btn ${status === "uploading" ? "uploading" : ""}`}
        onClick={() => inputRef.current?.click()}
        disabled={status === "uploading"}
        type="button"
      >
        {status === "uploading" && <Loader size={14} className="spin" />}
        {status === "done"      && <CheckCircle size={14} />}
        {status === "error"     && <AlertCircle size={14} />}
        {status === "idle"      && <Upload size={14} />}

        {status === "uploading" ? `Uploading ${progress}%` :
         status === "done"      ? "Uploaded!" :
         status === "error"     ? "Failed — retry" :
         label}
      </button>

      {/* Progress bar */}
      {status === "uploading" && (
        <div className="img-uploader__bar">
          <div className="img-uploader__fill" style={{ width: `${progress}%` }} />
        </div>
      )}

      {/* Error message */}
      {status === "error" && (
        <p className="img-uploader__error">{errorMsg}</p>
      )}

      {/* Hidden file input */}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </div>
  );
}