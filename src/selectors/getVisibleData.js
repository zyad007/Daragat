const getVisibleData = (data, search, sort) => {
    const filteredData = data.filter((row) => row.name.toLowerCase().includes(search.toLowerCase()));

    switch (sort.prop) {
        case 'ID':
            filteredData.sort((a, b) => (sort.order) ? ((a.id < b.id) ? -1 : 1) : ((a.id > b.id) ? -1 : 1))
        case 'SUB1':
            filteredData.sort((a, b) => (sort.order) ? ((a.sub1 < b.sub1) ? -1 : 1) : ((a.sub1 > b.sub1) ? -1 : 1))
        case 'SUB2':
            filteredData.sort((a, b) => (sort.order) ? ((a.sub2 < b.sub2) ? -1 : 1) : ((a.sub2 > b.sub2) ? -1 : 1))
        case 'SUB3':
            filteredData.sort((a, b) => (sort.order) ? ((a.sub3 < b.sub3) ? -1 : 1) : ((a.sub3 > b.sub3) ? -1 : 1))
        case 'SUB4':
            filteredData.sort((a, b) => (sort.order) ? ((a.sub4 < b.sub4) ? -1 : 1) : ((a.sub4 > b.sub4) ? -1 : 1))
        case 'SUB5':
            filteredData.sort((a, b) => (sort.order) ? ((a.sub5 < b.sub5) ? -1 : 1) : ((a.sub5 > b.sub5) ? -1 : 1))
        case 'SUB6':
            filteredData.sort((a, b) => (sort.order) ? ((a.sub6 < b.sub6) ? -1 : 1) : ((a.sub6 > b.sub6) ? -1 : 1))
    }

    return filteredData;
}

export default getVisibleData;