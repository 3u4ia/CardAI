import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export const DropzoneUploader = ({ files, setFiles }) => {
    const onDrop = useCallback(
        (acceptedFiles) => {
            setFiles((prev) => [...prev, ...acceptedFiles]);
        },
        [setFiles]
    );

    const handleRemoveFile = (fileToRemove) => {
        setFiles((prev) => prev.filter((file) => file !== fileToRemove));
    }

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        onDropRejected: (rejectedFiles) => {
            console.log("Rejected files: ", rejectedFiles);
            alert("Please upload only image files.");
        },
        accept: {
            "image/jpeg": [],
            "image/png": [],
            "image/webp": [],
            "image/heic": [],
            "image/jfif": [],
        },
    });

    return (
        <div>
            <div
                {...getRootProps()}
                style={{
                    border: "2px dashed #A3D9A5",
                    pading: "30px",
                    textAlign: "center",
                    cursor: "pointer",
                    backgroundColor: "#f9f9f9",
                    borderRadius: "12px",
                    color: "#666",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
                }}
            >
                <input {...getInputProps()} />
                {isDragActive ? (
                    <p>Drop the files here ...</p>
                ) : (
                    <p>Drag 'n' drop the files here, or click to select files</p>
                )}
            </div>

            <div style={{ marginTop: "20px" }}>
                <h3 style={{ color: "#A3D9A5" }}>Uploaded Files:</h3>
                {files.length === 0 ? (
                    <p style={{ color: "#999" }} >No files uploaded yet.</p>
                ) : (
                    files.map((file, index) => (
                        <div key={index} style={{ marginBottom: "10px" }}>
                            <img
                                src={URL.createObjectURL(file)}
                                alt={file.name}
                                style={{ width: "100px", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
                            />
                            <div style={{ flex: 1 }}>
                                <p style={{ margin: 0 }}>{file.name}</p>
                                <button
                                    onClick={() => handleRemoveFile(file)}
                                    style={{
                                        background: "#f44336",
                                        color: "white",
                                        border: "none",
                                        padding: "5px 10px",
                                        borderRadius: "5px",
                                        cursor: "pointer",
                                        marginTop: "5px",
                                    }}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};