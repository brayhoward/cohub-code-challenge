# Cohub Code Challenge

The purpose of this challenge is to evaluate your skills as a developer.

**Demo version of completed project**
> https://graphql-questionnaire.herokuapp.com

1. Go to `/dashboard` to see the answered questions.

2. You can log in with `veryhardpassword` when It prompts you.

# What you are making

You will be building a questionnaire/test-taking application that reads questions from a GraphQL API and asks the user to answer them.

You are responsible for implementing a solution that records the name of the person answering the questions as well as the answers to the questions themselves.

In addition to the test itself, you are also responsible for implementing a small "admin" type screen that allows an admin or privileged user to view tests/questionnaires that people have taken.

# What you start with

This project starts with a single data model called Question. A question is made up of the following fields:

| Property    | Data Type | Purpose                                                                                                                |
| ----------- | --------- | ---------------------------------------------------------------------------------------------------------------------- |
| id          | Integer   | The primary key                                                                                                        |
| label       | String    | The actual question being asked                                                                                        |
| position    | Integer   | The order of the question                                                                                              |
| field_type  | String    | One of `string`, `boolean` or `list`. It can be used by the UI to determine the controls needed to answer the question |
| options     | Array     | When `list` is used as the `field_type`, this field is used to display the possible options in the list               |
| multiselect | Boolean   | Can be used by the UI to allow test takers to select more than one option from the list                                |

# Getting set up

This app requires Ruby 2.3.x and a modern version of Node. Clone the project to get started. Once cloned, cd into the project root and run the following commands:

`bundle install`

`yarn install`

`rails db:create && rails db:migrate && rails db:seed`

You should now have a sqlite database in the db folder which will contain several pre-built questions. Feel free to add your own questions as well.

Now run `rails server` to start the rails app in development mode.

And run `./bin/webpack-dev-server --host 127.0.0.1` in another terminal window to get the app to auto refresh on js file changes.

You can now browse to `http://localhost:3000` in your browser. It's up to you to implement the questionnaire however you think is best. We just ask that you stick to using React, Apollo, and GraphQL.

# Submitting your app

Once you're finished and ready to submit, please deploy your application to Heroku and send us a link to it. Please also include a link to the "admin" page where we can view the questionnaire submissions. (Please include any required credentials).

# GraphQL Help

Graph**i**QL is a very handy tool that you can use to run queries and mutations against your GraphQL API. This project comes with Graph**i**QL installed and it's available at:

http://localhost:3000/graphiql

# Reference

* GraphQL Ruby - http://graphql-ruby.org/
* Apollo/React GraphQL Client - https://www.apollographql.com/docs/react/
* React Docs - https://reactjs.org/docs/hello-world.html
* Rails Docs - http://guides.rubyonrails.org/
