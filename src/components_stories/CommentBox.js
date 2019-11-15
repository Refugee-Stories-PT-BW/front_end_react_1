import React from "react";
import { Button, Comment, Form } from "semantic-ui-react";
import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  height: 300px;
  margin-top: 2%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

`;
const CommentExampleReplyForm = () => (
    <Wrapper>
  <Comment.Group style={{width:"500px"}}>
    <Comment>
      <Comment.Content>
        <Comment.Author as="a">annonmous</Comment.Author>
        <Comment.Metadata>
          <div>2 days ago</div>
        </Comment.Metadata>
        <Comment.Text>Revolutionary!</Comment.Text>
        <Comment.Actions>
          <Comment.Action active >
            Reply
          </Comment.Action>
        </Comment.Actions>
        <Form reply>
          <Form.TextArea />
          <Button
            content="Add Reply"
            labelPosition="left"
            icon="edit"
            primary
            style={{ backgroundColor: "red" }}
          />
        </Form>
      </Comment.Content>
    </Comment>
  </Comment.Group>
  </Wrapper>
);

export default CommentExampleReplyForm;