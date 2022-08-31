

const Navigation = (props) => {
    return (
        <div className={props.className}>
            <a><p>MENU</p></a>
            <a href={props.href}><p>INFO</p></a>
        </div>
    )
}

export default Navigation