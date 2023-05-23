export const findLongestCollaboration = (formattedData) => {
    let longestCollaboration = null;
    let longestDuration = 0;

    for (let i = 0; i < formattedData.length; i++) {
        const currentLine = formattedData[i];
        const { employee1, employee2, project, daysWorked } = currentLine;

        if (daysWorked > longestDuration) {
            longestCollaboration = {
                employee1,
                employee2,
                project,
                duration: daysWorked,
            };
            longestDuration = daysWorked;
        }
    }

    return longestCollaboration;
};