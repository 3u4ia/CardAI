import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export const DropzoneUploader = ({ files, setFiles }) => {
    const onDrop = useCallback(
        (acceptedFiles) => {
            setFiles((prev) => [...prev, ...acceptedFiles]);
        },
        [setFiles]
    );

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
                    border: "2px dashed #888",
                    pading: "20px",
                    textAlign: "center",
                    cursor: "pointer",
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
                <h3>Uploaded Files:</h3>
                {files.length === 0 ? (
                    <p>No files uploaded yet.</p>
                ) : (
                    files.map((file, index) => (
                        <div key={index}>
                            <p>{file.name}</p>
                            <img
                                src={URL.createObjectURL(file)}
                                alt={file.name}
                                style={{ width: "100px", height: "auto", margin: "10px" }}
                            />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};