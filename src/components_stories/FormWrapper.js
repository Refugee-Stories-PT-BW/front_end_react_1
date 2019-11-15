import React from 'react'
import styled from 'styled-components'
import { Container } from 'semantic-ui-react'

//components
import FormA from './FormA'
import FormImage from './FormImage'
import SubmissionField from './SubmissionField'
import CommentBox from './CommentBox'

const Wrapper = styled.section`
  width: 100%;
  height: 300px;
  margin-top: 2%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

`;

export default function FormWrapper() {
    return (
        <Container>
        <Wrapper>
            <FormImage />
            <FormA />
        </Wrapper>
        <SubmissionField />
        <CommentBox />
        </Container>

    )
}
