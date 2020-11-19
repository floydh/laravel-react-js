import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    let postsurl = "http://headless.floydhartford.com/admin/wp-json/wp/v2/posts?_embed";
    fetch(postsurl)
    .then(response => response.json())
    .then(response => {
      this.setState({
        posts: response
      })
    })
  }

  render() {
    let posts = this.state.posts.map((post, index) => {
      return (
        <div className="projects__item" key={index}>
          <figure className="projects__item-figure">
            <img src={post._embedded.['wp:featuredmedia'][0].source_url} alt="" />
          </figure>
          <h3><a href={'post/' + post.slug}>{post.title.rendered}</a></h3>
        </div> 
      );
    });
 
    return (
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card text-center">
                <div className="Posts">
                  <h1>Posts</h1>
                  <div className="posts">
                    {posts}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Posts;

// DOM element
if (document.getElementById('posts')) {
    ReactDOM.render(<Posts />, document.getElementById('posts'));
}