import gql from "graphql-tag";

const login = gql`
  mutation UserLogin($email: String!, $password: String!) {
    userLogin(email: $email, password: $password) {
      authenticatable {
        id
        email
        isOnboarded
        approvedProfileImages {
          imageUrl
        }
      }
      credentials {
        accessToken
        client
        expiry
        uid
      }
    }
  }
`;

const loginFacebook = gql`
  mutation UserFacebookLogin($input: UserFacebookLoginInput!) {
    userFacebookLogin(input: $input) {
      authenticatable {
        id
        email
      }
      credentials {
        accessToken
        client
        expiry
        uid
      }
    }
  }
`;

const loginGoogle = gql`
  mutation UserGoogleLogin($input: UserGoogleLoginInput!) {
    userGoogleLogin(input: $input) {
      authenticatable {
        id
      }
      credentials {
        accessToken
        client
        expiry
        uid
      }
    }
  }
`;

const logout = gql`
  mutation UserLogout {
    userLogout {
      authenticatable {
        id
      }
    }
  }
`;

// const register = gql`
//   mutation UserRegister($email: String!, $password: String!, $confirmUrl: String, $passwordConfirmation: String!) {
//     userRegister(email: $email, password: $password, confirmUrl: $confirmUrl, passwordConfirmation: $passwordConfirmation) {
//       authenticatable {
//         id
//       }
//       credentials {
//         accessToken
//         client
//         expiry
//         uid
//       }
//     }
//   }
// `;

const register = gql`
  mutation RegisterUser(
    $username: String!
    $email: String!
    $password: String!
    $confirmUrl: String
    $passwordConfirmation: String!
  ) {
    registerUser(
      username: $username
      email: $email
      password: $password
      confirmUrl: $confirmUrl
      passwordConfirmation: $passwordConfirmation
    ) {
      authenticatable {
        id
      }
      credentials {
        accessToken
        client
        expiry
        uid
      }
    }
  }
`;

const forgotPw = gql`
  mutation UserSendPasswordResetWithToken(
    $email: String!
    $redirectUrl: String!
  ) {
    userSendPasswordResetWithToken(email: $email, redirectUrl: $redirectUrl) {
      message
    }
  }
`;

const resetPw = gql`
  mutation UserUpdatePasswordWithToken(
    $password: String!
    $passwordConfirmation: String!
    $resetPasswordToken: String!
  ) {
    userUpdatePasswordWithToken(
      password: $password
      passwordConfirmation: $passwordConfirmation
      resetPasswordToken: $resetPasswordToken
    ) {
      authenticatable {
        id
      }
      credentials {
        accessToken
        client
        expiry
        uid
      }
    }
  }
`;

const update = gql`
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      id
    }
  }
`;

const uploadProfileImage = gql`
  mutation UploadUserProfileImage($image: Upload!) {
    uploadUserProfileImage(image: $image) {
      id
    }
  }
`;
export {
  login as loginUser,
  logout as logoutUser,
  loginFacebook as loginFacebookUser,
  loginGoogle as loginGoogleUser,
  register as registerUser,
  forgotPw as userSendPasswordResetWithToken,
  resetPw as userUpdatePasswordWithToken,
  update as updateUser,
  uploadProfileImage,
};
