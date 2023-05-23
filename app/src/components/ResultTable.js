export const ResultTable = ({
    employee1,
    employee2,
    project,
    duration
}) => {
    return (
        <>
            <h2>Common Projects</h2>
            <table>
                <thead>
                    <tr>
                        <th>Employee ID #1</th>
                        <th>Employee ID #2</th>
                        <th>Project ID</th>
                        <th>Days Worked</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{employee1}</td>
                        <td>{employee2}</td>
                        <td>{project}</td>
                        <td>{duration}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}