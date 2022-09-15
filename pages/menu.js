import styles from '../styles/Menu.module.css'
import Drinks from './../components/molecules/Drinks';
import grouper from '../components/atoms/tempGroup';

export default function Menu({ data }) {
    // console.log(data)

    return (
    <div>
        <Drinks props={data}/>        
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
