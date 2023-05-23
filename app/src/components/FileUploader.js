export const FileUploader = ({
    onFileUpload
}) => {
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        onFileUpload(file);        
    }
    return (
        <>
            <h1>CSV File Uploader</h1>
            <input type="file" accept=".csv" onChange={handleFileChange}/>
        </>
    );
}