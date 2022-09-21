import { groupBy } from 'lodash';

const grouper = (data) => {
    const groupedData = groupBy(data ,"category")
    return groupedData
}
export default grouper