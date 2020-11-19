import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    }
  }

  componentDidMount() {
    let postsurl = "http://headless.floydhartford.com/admin/wp-json/wp/v2/posts?_embed&per_page=1&slug=" + slug;
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
        <div className="post__item" key={index}>
          <figure className="post__item-figure">
            <img src={post._embedded.['wp:featuredmedia'][0].source_url} alt="" />
          </figure>
          <h1 className="post__item-title">{post.title.rendered}</h1>
          <div className="post__item-content" dangerouslySetInnerHTML={{__html: post.content.rendered}}></div>
        </div> 
      );
    });
 
    return (
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card text-center">
                <div className="Post">
                  <div className="post">
                    {posts}
                  </div>
                </div>
                <div className="go-home">
                  <a href={'/'}>Home</a>
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
if (document.getElementById('post')) {
    ReactDOM.render(<Posts />, document.getElementById('post'));
}