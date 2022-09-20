import styles from '../styles/Menu.module.css'
import Drinks from './../components/molecules/Drinks';
import Appetizers from './../components/molecules/Appetizers';
import Entrees from '../components/molecules/Entrees';
import grouper from '../components/atoms/tempGroup';

export default function Menu({ data }) {
 
    return (
    <div>
                <Drinks props={data}/>
                <Appetizers props={data} />
                <Entrees props={data} />
    </div>    
    )
}
export async function getStaticProps() {
    const data = grouper();
    return {
        props: {
            data,
        },
    }
}
