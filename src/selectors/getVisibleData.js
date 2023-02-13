const getVisibleData = (data, search, sort) => {
    const filteredData = data.filter((row) => row.name.toLowerCase().includes(search.toLowerCase()));
    data.forEach((ele) => {
        ele.subject1 = Number(ele.subject1);
        ele.subject2 = Number(ele.subject2);
        ele.subject3 = Number(ele.subject3);
        ele.subject4 = Number(ele.subject4);
        ele.subject5 = Number(ele.subject5);
        ele.subject6 = Number(ele.subject6);
    })
    switch (sort.prop) {
        case 'ID' || "NAME":
            filteredData.sort((a, b) => (sort.order) ? ((a.id > b.id) ? -1 : 1) : ((a.id < b.id) ? -1 : 1))
            break;
        case 'SUB1':
            filteredData.sort((a, b) => (sort.order) ? ((a.subject1 < b.subject1) ? -1 : 1) : ((a.subject1 > b.subject1) ? -1 : 1))
            break;
        case 'SUB2':
            filteredData.sort((a, b) => (sort.order) ? ((a.subject2 < b.subject2) ? -1 : 1) : ((a.subject2 > b.subject2) ? -1 : 1))
            break;
        case 'SUB3':
            filteredData.sort((a, b) => (sort.order) ? ((a.subject3 < b.subject3) ? -1 : 1) : ((a.subject3 > b.subject3) ? -1 : 1))
            break;
        case 'SUB4':
            filteredData.sort((a, b) => (sort.order) ? ((a.subject4 < b.subject4) ? -1 : 1) : ((a.subject4 > b.subject4) ? -1 : 1))
            break;
        case 'SUB5':
        filteredData.sort((a, b) => (sort.order) ? ((a.subject5 < b.subject5) ? -1 : 1) : ((a.subject5 > b.subject5) ? -1 : 1))
        break;
        case 'SUB6':
        filteredData.sort((a, b) => (sort.order) ? ((a.subject6 < b.subject6) ? -1 : 1) : ((a.subject6 > b.subject6) ? -1 : 1))
        break;
        case 'TOTAL':
            filteredData.sort((a, b) => (sort.order) ? ((a.total < b.total) ? -1 : 1) : ((a.total > b.total) ? -1 : 1))
            break;
        default:
            filteredData.sort((a, b) => (sort.order) ? ((a.id < b.id) ? -1 : 1) : ((a.id > b.id) ? -1 : 1))
            break;
    }

    return filteredData;
}

export default getVisibleData;