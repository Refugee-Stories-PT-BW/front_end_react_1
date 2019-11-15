import React from "react";
import { Button, Checkbox, Form, TextArea } from "semantic-ui-react";
import styled from "styled-components";

const FormWrapper = styled.section`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px;
  box-shadow: 0 40px 20px rgba(0, 0, 0, 0.5);
`;

const FormExampleForm = () => (

    <Form size="mini" style={{ marginLeft: "1%", width:'380px' }}>
        <Form.Group widths="equal">
      <Form.Field>
        <label>First Name</label>
        <input placeholder="First Name" />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input placeholder="Last Name" />
      </Form.Field>
      </Form.Group>
      <Form.Field>
      <TextArea style={{minHeight:150}} placeholder="Tell Us Your Story"/>
    </Form.Field>
      <Form.Field>
        <Checkbox size="small" label="I agree to the Terms and Conditions" />
      </Form.Field>
      <Button size="mini" type="submit" color="teal" >Submit</Button>
    </Form>

);

export default FormExampleForm;
