import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import { getUser } from "../../redux";
import ProfileImage from "./ProfileImage";

class ProfileCard extends React.Component {
  componentDidUpdate(previousProps) {
    if (this.props.username !== previousProps.username) {
      this.props.getUser(this.props.username);
    }
  }

  render() {
    const username = JSON.parse(localStorage.getItem("login")).result.username;
    return (
      <>
        <Card>
          <Image
            src={`https://kwitter-api.herokuapp.com/users/${username}/picture`}
            alt="profile_picture"
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className="date">Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name="user" />
            22 Friends
          </Card.Content>
        </Card>
        <ProfileImage />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.login.result.username,
    result: state.users.getUser.result,
    loading: state.users.getUser.loading,
    error: state.users.getUser.error
  };
};

const mapDispatchToProps = { getUser };

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCard);
