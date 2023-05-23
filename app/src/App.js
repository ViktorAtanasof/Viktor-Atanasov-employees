import { useState } from 'react';
import { FileUploader } from "./components/FileUploader";
import { ResultTable } from "./components/ResultTable";
import { parseCSV } from './utils/parseCSV';
import { findLongestCollaboration } from './utils/findLongestCollaboration';
import { formatData } from './utils/dateUtils';

function App() {
  const [longestCollaboration, setLongestCollaboration] = useState(null);

  const handleFileUpload = (file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const csvText = event.target.result;
      const parsedData = parseCSV(csvText);
      const formattedData = formatData(parsedData);
      const longestCollaboration = findLongestCollaboration(formattedData);
      setLongestCollaboration(longestCollaboration);
    };
    reader.readAsText(file);
  };

  return (
    <>
      <FileUploader onFileUpload={handleFileUpload} />
      {longestCollaboration && (
        <ResultTable
          employee1={longestCollaboration.employee1}
          employee2={longestCollaboration.employee2}
          project={longestCollaboration.project}
          duration={longestCollaboration.duration} />
      )}
    </>
  );
}

export default App;
