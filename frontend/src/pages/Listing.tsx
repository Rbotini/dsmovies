import Pagination from '../components/pagination'
import Card from '../components/MovieCard'

function Listing() {

  return (
    <>
      <Pagination />
      <div className="container">

        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <Card />


          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <Card />


          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <Card />


          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <Card />


          </div>


        </div>
      </div>
    </>
  )

}
export default Listing