import { useState, useCallback } from "react"
import Dropzone, { useDropzone } from 'react-dropzone'

function MyDropzone() {
    const [files, setFiles] = useState([]);

    const onDrop = useCallback(acceptedFiles => {
        setFiles(prevFiles => [
            ...prevFiles,
            ...acceptedFiles
        ]);
    }, []);
    const { getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop,
        onDropRejected: (rejectedFiles) => {
            console.log("Rejected files:", rejectedFiles);
            alert("Please upload only image files.");
        },
        accept: {
            'image/jpeg': [],
            'image/png': [],
            'image/webp': [],
            'image/heic': [],
            'image/jfif': [],
         },
    })

    return (
        <div>
            <div 
                {...getRootProps()}
                style={{
                    border: '2px dashed #888',
                    padding: '20px',
                    textAlign: 'center',
                    cursor: 'pointer'
                }}
            >
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <p>Drop the files here ...</p> :
                        <p>Drag 'n' drop the files here, or click to select files</p>
                }

            </div>

            {/* Displays uploaded files */}
            <div style={{ marginTop: '20px'}}>
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
                                style={{ width: '100px', height: 'auto', margin: '10px'}}
                            />
                        </div>
                    ))
                )}
            </div>
        </div> 
    )
}

export const Page = () => {
    const handleSubmit = () => {
        alert('Submitting files...');
    }
    
    return (
        <div>
            <h1>Upload files below</h1>
            <MyDropzone />
            <button onClick={handleSubmit} style={{ marginTop: '20px' }}>
                Submit Files
            </button>
        </div>
    )
}