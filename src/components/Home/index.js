import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import './index.css'

const apiStatusConstants = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    category: 'ALL',
    projectsList: [],
    apiStatus: apiStatusConstants.loading,
  }

  componentDidMount() {
    this.getProjectData()
  }

  onRetry = () => {
    this.getProjectData()
  }

  getProjectData = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const {category} = this.state
    const url = `https://apis.ccbp.in/ps/projects?category=${category}`
    const options = {
      method: 'GET',
    }

    try {
      const response = await fetch(url, options)

      const data = await response.json()
      const updatedData = data.projects.map(each => ({
        id: each.id,
        name: each.name,
        imageUrl: each.image_url,
      }))

      this.setState({
        projectsList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } catch (error) {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onChangeCategory = event => {
    this.setState({category: event.target.value}, () => {
      this.getProjectData()
    })
  }

  renderSuccessView = () => {
    const {projectsList} = this.state
    return (
      <ul className="project-list-container">
        {projectsList.map(eachProject => (
          <li className="project-card" key={eachProject.id}>
            <img
              src={eachProject.imageUrl}
              alt={eachProject.name}
              className="project-image"
            />
            <p className="project-name">{eachProject.name}</p>
          </li>
        ))}
      </ul>
    )
  }

  renderFailureView = () => (
    <div className="page-not-found">
      <img
        src="https://assets.ccbp.in/frontend/react-js/projects-showcase/failure-img.png"
        alt="failure view"
        className="page-not-found-image"
      />
      <h1 className="failure-heading">Oops! Something Went Wrong</h1>
      <p className="failure-content">
        We cannot seem to find the page you are looking for.
      </p>
      <button type="button" className="retry-button" onClick={this.onRetry}>
        Retry
      </button>
    </div>
  )

  renderLoadingView = () => (
    <div className="projects-loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  render() {
    const {categoriesList} = this.props
    const {category, apiStatus} = this.state
    console.log(category)
    return (
      <>
        <Header />
        <div className="home-bg-container">
          <div className="input-container">
            <select
              className="input-field"
              onChange={this.onChangeCategory}
              value={category}
            >
              {categoriesList.map(each => (
                <option key={each.id} value={each.id}>
                  {each.displayText}
                </option>
              ))}
            </select>
          </div>
          {apiStatus === apiStatusConstants.loading && this.renderLoadingView()}
          {apiStatus === apiStatusConstants.success && this.renderSuccessView()}
          {apiStatus === apiStatusConstants.failure && this.renderFailureView()}
        </div>
      </>
    )
  }
}

export default Home
