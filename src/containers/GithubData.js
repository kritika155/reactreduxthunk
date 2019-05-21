import React from 'react';
import { connect } from 'react-redux';

function GithubData({ data }) {
  if(!data) {
    return (
      <div>
        No Data
      </div>
    )
  }
  return (
    <div>
      <div>
        Name: { data.name }
      </div>
      <br />
      <div>
        Login: { data.login }
      </div>
      <br />
      <div>
        Avatar: <img src={ data.avatar_url } alt="avatar"/>
      </div>
      <br />
      <div>
        Github Followers: { data.followers }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

export default connect(
  mapStateToProps,
  null
)(GithubData);