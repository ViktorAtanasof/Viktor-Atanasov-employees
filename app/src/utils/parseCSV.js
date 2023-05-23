export const parseCSV = (csvText) => {
    const lines = csvText.trim().split('\n');
    const headers = lines[0].split(',').map((header) => header.trim());
    const data = [];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].split(',').map((cell) => cell.trim());

        if (line.length === headers.length) {
            const record = {};
            for (let j = 0; j < headers.length; j++) {
                const value = line[j];

                // Handle the case when DateTo is NULL
                record[headers[j]] = value === 'NULL' ? null : value;
            }

            data.push(record);
        }
    }
    const cells = data.reduce((result, record) => {
        const row = Object.values(record).slice(0, 4);
        result.push(row);
        return result;
    }, []);

    return cells;
};
