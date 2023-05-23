export const formatData = (parsedData) => {
    const formattedData = [];
    for (let i = 0; i < parsedData.length; i++) {
        const [EmpID, ProjectID, DateFrom, DateTo] = parsedData[i][0].split(';');
        const formattedLine = {
            employee1: EmpID,
            employee2: null,
            project: ProjectID,
            daysWorked: calculateDaysWorked(DateFrom, DateTo),
        };
        formattedData.push(formattedLine);
    }
    return formattedData;
};

const calculateDaysWorked = (dateFrom, dateTo) => {
    const date1Parts = dateFrom.split('.');
    const date2Parts = dateTo === 'NULL' ? formatDate(new Date()) : dateTo.split('.');

    const day1 = parseInt(date1Parts[0]);
    const month1 = parseInt(date1Parts[1]) - 1; // Months are zero-based in JavaScript Date object
    const year1 = parseInt(date1Parts[2]);

    let day2, month2, year2;
    if (dateTo === 'NULL') {
        const currentDate = new Date();
        day2 = currentDate.getDate();
        month2 = currentDate.getMonth();
        year2 = currentDate.getFullYear();
    } else {
        day2 = parseInt(date2Parts[0]);
        month2 = parseInt(date2Parts[1]) - 1;
        year2 = parseInt(date2Parts[2]);
    }

    const date1 = new Date(year1, month1, day1);
    const date2 = new Date(year2, month2, day2);

    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const days = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return days.toString();
};

const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-based, so we add 1
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
};