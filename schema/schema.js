const graphql = require("graphql");
const _ = require("lodash");
const Realtor = require("../models/realtor");
const Comment = require("../models/comment");
const Company = require("../models/company");
const Branch = require("../models/branch");
const Question = require("../models/question");

// Describes data, object types, relationships, how interaction works

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull
} = graphql;

const RealtorType = new GraphQLObjectType({
  // defining the realtor type
  name: "Realtor",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    companyId: {
      type: new GraphQLList(CompanyType),
      resolve(parent, args) {
        return Company.find({ _id: parent.companyId });
      }
    },
    branchId: {
      type: new GraphQLList(BranchType),
      resolve(parent, args) {
        return Company.find({ _id: parent.branchId });
      }
    },
    comments: {
      type: new GraphQLList(CommentType),
      resolve(parent, args) {
        return Comment.find({ _id: parent.comments });
      }
    }
  })
});

const CommentType = new GraphQLObjectType({
  // defining the realtor type
  name: "Comment",
  fields: () => ({
    id: { type: GraphQLID },
    text: { type: GraphQLString },
    knowledge: { type: GraphQLInt},
    responsiveness: { type: GraphQLInt},
    interest: { type: GraphQLInt},
    professionalism: { type: GraphQLInt},
    dateCreated: {type: GraphQLString},
    starTotal: {type: GraphQLInt},
    realtor: {
      type: RealtorType,
      resolve(parent, args) {
        return Realtor.findById(parent.realtorId);
      }
    }
  })
});

const CompanyType = new GraphQLObjectType({
  // defining company type --> Sutton
  name: "Company",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    realtors: {
      type: RealtorType,
      resolve(parent, args) {
        return Realtor.find({ _id: parent.realtors });
      }
    }
  })
});

const BranchType = new GraphQLObjectType({
  // defining branch type --> West Coast
  name: "Branch",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    companyId: { type: GraphQLID },
    realtors: {
      type: RealtorType,
      resolve(parent, args) {
        // parent is the branch
        return Realtor.find({ _id: parent.realtors });
      }
    }
  })
});

const QuestionType = new GraphQLObjectType({
  // defining branch type --> West Coast
  name: "Question",
  fields: () => ({
    id: { type: GraphQLID },
    type: { type: GraphQLString },
    question: { type: GraphQLString },
    order: {type: GraphQLInt}
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    realtor: {
      type: RealtorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // code to get data from db / other source
        // return _.find(realtors, {id: args.id});
        return Realtor.findById(args.id);
      }
    },
    comment: {
      type: CommentType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // return _.find(comment, {id: args.id});
        return Comment.findById(args.id);
      }
    },
    realtors: {
      type: new GraphQLList(RealtorType),
      args: { limit: {type: GraphQLInt } },
      resolve(parent, args) {
        // return realtors;
        return Realtor.find({});
      }
    },
    comments: {
      type: new GraphQLList(CommentType),
      resolve(parent, args) {
        // return comment;
        return Comment.find({});
      }
    },
    company: {
      type: CompanyType,
      args: { id: {type: GraphQLID} },
      resolve(parent, args) {
        return Company.findById(args.id);
      }
    },
    companies: {
      type: new GraphQLList(CompanyType),
      resolve(parent, args) {
        return Company.find({});
      }
    },
    branches: {
      type: new GraphQLList(CompanyType),
      resolve(parent, args) {
        return Branch.find({});
      }
    },
    questions: {
      type: new GraphQLList(QuestionType),
      resolve(parent, args) {
        // return comment;
        return Question.find({});
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addComment: {
      type: CommentType,
      args: {
        text: { type: GraphQLString },
        knowledge: { type: GraphQLInt},
        responsiveness: { type: GraphQLInt},
        interest: { type: GraphQLInt},
        professionalism: { type: GraphQLInt},
        realtorId: { type: GraphQLID },
        dateCreated: { type: GraphQLString },
        starTotal: { type: GraphQLInt }
      },
      resolve(parent, args) {
        let comment = new Comment({
          text: args.text,
          knowledge: args.knowledge,
          responsiveness: args.responsiveness,
          interest: args.interest,
          professionalism: args.professionalism,
          realtorId: args.realtorId,
          dateCreated: args.dateCreated,
          starTotal: args.starTotal
        });
        comment.save();
        return Realtor.findByIdAndUpdate(
          { _id: args.realtorId },
          { $push: { comments: comment.id } }
        )
      }
    },

    addRealtor: {
      type: RealtorType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        companyId: { type: GraphQLID },
        branchId: { type: GraphQLID }
      },
      resolve(parent, args) {
        let realtor = new Realtor({
          name: args.name,
          companyId: args.companyId,
          branchId: args.branchId
        });
        realtor.save();
        return Company.findByIdAndUpdate(
          { _id: args.companyId },
          { $push: { realtors: realtor.id } }
        )
      }
    },

    addCompany: {
      type: CompanyType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        let company = new Company({
          name: args.name
        });
        return company.save();
      }
    },

    addQuestion: {
      type: QuestionType,
      args: {
        type: {type: GraphQLString},
        question: {type: GraphQLString},
        order: {type: GraphQLInt}
      },
      resolve(parent, args) {
        let question = new Question({
          type: args.type,
          question: args.question,
          order: args.order
        });
        return question.save();
      }
    },

    addBranch: {
      type: BranchType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        companyId: { type: GraphQLID }
      },
      resolve(parent, args) {
        // parent is the branch
        // console.log("ADD BRANCH parent: ", parent);
        // console.log("ADD BRANCH args: ", args);
        // add companyId to branch
        let branch = new Branch({
          name: args.name,
          companyId: args.companyId
        });
        try {
          branch.save();
          return Company.findOneAndUpdate(
            { _id: args.companyId },
            { $push: { branches: branch.id } }
          );
        } catch (err) {
          // console.log(err);
        }
      }
    },

    updateRealtor: {
      type: RealtorType,
      args: {
        id: { type: GraphQLID },
        text: { type: GraphQLString }
      },
      resolve(parent, args) {
        const comment = new Comment({
          text: args.text
        });
        comment.save();
        // Given the realtor id, we update it based on that.
        return Realtor.findOneAndUpdate(
          { _id: args.id },
          { $push: { comments: comment.id } }
        );
      }
    },

    deleteRealtor: {
      type: RealtorType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parent, args) {
        return realtor.deleteOne({ _id: args.id });
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
