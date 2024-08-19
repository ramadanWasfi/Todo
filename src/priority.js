export function Priority(pNum = 2) {
    let priorityNumber = pNum;
    let priortyDescription = generatePriorityDescription(priorityNumber);

    const getNumber = () => priorityNumber;
    const getDescription = () => priortyDescription;

    return {getNumber, getDescription};
}

function generatePriorityDescription(priorityNumber) {
    switch (priorityNumber) {
        case 1:
            return "Important and urgent";
        case 2:
            return "Urgent not important";
        case 3:
            return "Important not urgent";
        case 4:
            return "Not important not urgent";
    }
}