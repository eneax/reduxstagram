import React from 'react'
import Photo from './photo'

class PhotoGrid extends React.Component {
  render () {
    return (
      <div className='photo-grid'>
        {this.props.posts.map((post, idx) => {
          return <Photo {...this.props} key={idx} index={idx} post={post} />
        })}
      </div>
    )
  }
}

export default PhotoGrid
