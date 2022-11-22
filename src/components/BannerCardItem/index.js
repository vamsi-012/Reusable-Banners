// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerCardItems} = props
  const {headerText, description, className} = bannerCardItems
  return (
    <li className={`${className} banner-card-item`}>
      <h1 className="heading">{headerText}</h1>
      <p className="description">{description}</p>
      <button className="show-more-btn" type="button">
        Show More
      </button>
    </li>
  )
}

export default BannerCardItem
