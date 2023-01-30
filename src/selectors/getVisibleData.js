const getVisibleData = (data, search) => {
    return data.filter((row) => row.name.toLowerCase().includes(search.toLowerCase()))
}

export default getVisibleData;