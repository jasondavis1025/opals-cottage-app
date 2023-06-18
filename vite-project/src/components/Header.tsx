export interface Props {
  title: string,
  headerList: any,
}

const Header = (props: Props) => {
  return (
    <header className="header">
        <h1>{props.title}</h1>
        <div className='headersList'>
            {props.headerList.map((item: any) => {
                return <div id={item.id} className="headerItem">{item.title}</div>
            })}
        </div>
        <button className="ReservationBTN">Reservation</button>
    </header>
  )
}

Header.defaultProps = {
    title: "Opal's Cottage",
}

export default Header