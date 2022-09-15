import data from '../../shared/temp.json'
import { groupBy } from 'lodash';

const grouper = () => {
    const groupedData = groupBy(data ,"subcategory")
    return groupedData
}
export default grouper