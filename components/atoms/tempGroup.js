import data from '../../shared/temp.json'
import { groupBy } from 'lodash';

const grouper = () => {
    const groupedData = groupBy(data ,"category")
    return groupedData
}
export default grouper