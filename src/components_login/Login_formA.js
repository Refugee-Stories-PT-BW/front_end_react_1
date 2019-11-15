import React from "react";
import { Grid, Header, Message, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Button, Form, Input } from "formik-semantic-ui";
import { formik } from 'formik'


function login_formA() {
  return (
    <Grid textAlign="center" verticalAlign="middle" style={{ marginTop: "1%" }}>
      <Header as="h2" color="blue" textAlign="center">
        <img
          src="https://i.ibb.co/9YNWNDT/refugee-stories-icon.png"
          alt="logo"
        />{" "}
        Log-in to your account
      </Header>
    </Grid>
  );
}

export default withFormik({
  mapPropsToValues: props => {
    return {
      firstName: props.firstName || ""
    };
  }
})(login_formA);

{
  /* <Grid textAlign="center" verticalAlign="middle" style={{marginTop: "1%"}}>
<Grid.Column style={{ maxWidth: 450 }}>
  <Header as="h2" color="teal" textAlign="center">
    <img src="https://i.ibb.co/9YNWNDT/refugee-stories-icon.png" alt="logo"  />{" "}
    Log-in to your account
  </Header>
  <Form size="large">
    <Segment stacked>
      <Form.Input
        fluid
        icon="amazon"
        iconPosition="left"
        placeholder="E-mail address"
      />
      <Form.Input
        fluid
        icon="lock"
        iconPosition="left"
        placeholder="Password"
        type="password"
      />
      <Button color="teal" fluid size="large">
        Login
      </Button>
    </Segment>
  </Form>
  <Message>
    New to us? <Link to="/"> Sign UP </Link>
  </Message>
</Grid.Column>
</Grid> */
}
