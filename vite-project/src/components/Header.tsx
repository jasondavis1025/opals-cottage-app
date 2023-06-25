export interface Props {
  title: string;
  headerList: any;
}

const Header = (props: Props) => {
  const reservePage = () => {
    window.location.href = "http://localhost:3001/reservations";
  };

  return (
    <header className="header">
      <h1>{props.title}</h1>
      <div className="headersList">
        {props.headerList.map((item: any) => {
          return (
            <a href={"http://localhost:3001/" + item.title.replaceAll(" ", "")}>
              <div id={item.id} className="headerItem">
                {item.title}
              </div>
            </a>
          );
        })}
      </div>
      <button className="ReservationBTN" onClick={reservePage}>
        Reservation
      </button>
    </header>
  );
};

Header.defaultProps = {
  title: "Opal's Cottage",
};

export default Header;
