
const Footer = (props: any) => {
  return (
    <div className='footer'>
        <p>Keep in Touch:</p>
        <div className="footerMediaList">
            {props.socialMedia.map((item: any) => {
                return <div id={item.id} className='footerMediaItem'>{item.title + " |"}</div>
            })}
        </div>
        <p className="address-info">9300 MadeUp lane.</p>
        <p className="address-info-2"> Orange, CA, 92867</p>
    </div>
  )
}

export default Footer