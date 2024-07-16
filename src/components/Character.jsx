import PropTypes from 'prop-types';

export const Character = ({ id, name, status, species, gender, location, image }) => {

  return (
    <div className="col-sm-6 mb-3 w-45" key={id}>

      <div className="card card-width py-3 bg-light  text-dark">
        <div className="row g-0 bg-light rounded">
          <div className="col-md-4">
          <img src={image} className="img-fluid rounded-start" alt={species} />
        </div>
        <div className="col">
          <div className="card-body" >
              <h5 className='card-title '>{id} - {name}</h5>
              <span className="card-text">Status: {status}</span> <br />
              <span className="card-text">Species: {species}</span><br />
              <span className="card-text">Gender: {gender}</span> <br />
              <span className="card-text"> Location: {location}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
Character.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}
