import React, { Component } from "react";
import mentorStyles from '../styles/Mentors.module.css'
export class UserCards extends Component {
  state = {
    data: [],
    per: 9,
    page: 1,
    total_pages: null
  };

  uppercase = word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  loadData = () => {
    const { per, page, data } = this.state;
    const endpoint = `https://randomuser.me/api/?nat=us&results=${per}&page=${page}`;
    fetch(endpoint)
      .then(response => response.json())
      .then(json => {
        this.setState({
          data: [...data, ...json.results],
          scrolling: false,
          total_pages: json.info.results
        });
      });
  };

  loadMore = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
        scrolling: true
      }),
      this.loadData
    );
  };

  componentDidMount() {
    this.loadData();
  }

  render() {
    return (
      <div className="clearfix" style={{fontFamily:'Poppins'}}>
      <div className='container'>
        <h2 className={mentorStyles.card_top}>Our team member will ready for your service</h2>
        <div className="row">
          {this.state.data.slice(0, 4).map(data => (
            <div className="col-md-3 animated fadeIn" key={data.id.value}>
              <div className={mentorStyles.card} style={{marginBottom:'20px'}}>
                <div className={mentorStyles.card_body}>
                  <div className={mentorStyles.avatar}>
                    <img
                      src={data.picture.large}
                      className="card-img-top"
                      alt=""
                    />
                  </div>
                  <h5 className={mentorStyles.card_title}>
                    {this.uppercase(data.name.first) +
                      " " +
                      this.uppercase(data.name.last)}
                  </h5>
                  <p className={mentorStyles.card_text}>
                    {data.location.city +
                      ", " +
                      this.uppercase(data.location.state)}
                    <br />
                    <span className={mentorStyles.phone}>{data.phone}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
       
      </div>
      </div>
    );
  }
}

