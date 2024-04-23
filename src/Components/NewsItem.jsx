import image from '../assets/project_image.jpg'
const NewsItem = ({title, description, src, url}) => {
    // Displaying fetched data to card display
  return (
    // Formatting card display background & page fit
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"389px"}}>
  <img src={src?src:image} style={{height:"200px", width:"372px"}} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"News is unavailable at this time."}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}

export default NewsItem