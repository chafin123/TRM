import Link from 'next/link'

const Navigation = (props) => {
    return (
        <div className={props.className}>
            <Link href="/menu"><p>MENU</p></Link>
            <a href={props.href}><p>INFO</p></a>
        </div>
    )
}

export default Navigation