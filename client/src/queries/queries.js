import { gql } from 'apollo-boost';

const getrealtorsQuery = gql`
  {
    realtors {
      name
      companyId {
        name
      }
      id
      comments {
        text
        knowledge
        responsiveness
        interest
        professionalism
        id
        dateCreated
        starTotal
      }
    }
  }
`

const getcommentsQuery = gql`
  {
    comments {
      text
      knowledge
      responsiveness
      interest
      professionalism
      id
      realtor {
        name
        id
      }
    }
  }
`

const addrealtorMutation = gql`
  mutation AddRealtor($name: String!, $company: String!, $comments: String!) {
    addRealtor(name: $name, company: $company, comments: $comments) {
      name
      companyId
      comments {
        text
        id
      }
      id
    }
  }
`

const getrealtorQuery = gql`
  query($id: ID){
    realtor(id:$id) {
      id
      name
      companyId {
        name
      }
      comments {
        id
        text
        knowledge
        responsiveness
        interest
        professionalism
        dateCreated
        starTotal
        realtor {
          name
          id
        }
      }
    }
  }
`

const getCompanyQuery = gql`
  query($id: ID) {
    company(id:$id) {
      name
    }
  }
`

const getCompaniesQuery = gql`
{
  companies {
    name
    id
  }
}
`

const deleterealtorMutation = gql`
  mutation Deleterealtor($id: ID!) {
    deleterealtor(id:$id) {
      name
    }
  }
`

const updateRealtorMutation = gql`
  mutation UpdateRealtor($id: ID!, $text: String!) {
    updateRealtor(id:$id, text: $text ) {
     name
    }
  }
`

const addCommentMutation = gql`
  mutation AddComment($text: String!, $knowledge: Int!, $responsiveness: Int!, $interest: Int!, $professionalism: Int!, $realtorId: ID!, $dateCreated: String!) {
    addComment(text: $text, knowledge: $knowledge, responsiveness: $responsiveness, interest: $interest, professionalism: $professionalism, realtorId: $realtorId, dateCreated: $dateCreated) {
      text
      knowledge
      responsiveness
      interest
      professionalism
      dateCreated
    }
  }
`

const getQuestions = gql`
  {
    questions {
      type
      question
      order
    }
  }
`

export {getrealtorsQuery,
  getCompanyQuery,
  getcommentsQuery,
  addrealtorMutation,
  getrealtorQuery,
  deleterealtorMutation,
  updateRealtorMutation,
  getCompaniesQuery,
  getQuestions,
  addCommentMutation
}