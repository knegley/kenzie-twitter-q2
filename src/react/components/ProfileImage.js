import React, { Component } from "react";
import { Input } from "semantic-ui-react";
import { connect } from "react-redux";
import { uploadImage } from "../../redux";

class ProfileImage extends Component {
  handleUploadUserPicture = e => {
    e.preventDefault();
    const photo = new FormData(e.target);
    this.props.uploadImage(photo);
  };

  render() {
    return (
      <>
        <form
          onSubmit={this.handleUploadUserPicture}
          className="changePictureButtons"
        >
          <div className="ui input">
            <input
              id="choosePictureButton"
              type="file"
              name="picture"
              placeholder="Select Picture"
            ></input>
          </div>

          <Input
            id="submitPictureButton"
            type="submit"
            value="Upload Picture"
          ></Input>
        </form>
      </>
    );
  }
}

export default connect(
  state => ({
    loginusername: state.auth.login.result.username,
    result: state.users.uploadImage.result,
    loading: state.users.uploadImage.loading,
    error: state.users.uploadImage.error
  }),
  { uploadImage }
)(ProfileImage);
