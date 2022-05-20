//function to add new line in string at every forward slash
const addCommas = x => x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export default addCommas;
