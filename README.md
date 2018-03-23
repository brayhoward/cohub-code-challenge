# Cohub Code Challenge

The purpose of this challenge is to evaluate your skills as a developer.

# What you are making

You will be building a questionnaire/test-taking application that reads questions from a GraphQL API.

You are responsible for implementing a solution that records the name of the person answering the questions as well as the answers to the questions themselves.

In addition to the test itself, you are also responsible for implementing a small "admin" type screen that allows us to view tests/questionnaires that people have taken.

# Reference

* GraphQL Ruby - http://graphql-ruby.org/
* Apollo/React GraphQL Client - https://www.apollographql.com/docs/react/
* React Docs - https://reactjs.org/docs/hello-world.html
* Rails Docs - http://guides.rubyonrails.org/

# Getting set up

This app requires Ruby 2.3.x and a modern version of Node. Clone the project to get started. Once cloned, cd into the project root and run the following commands:

`bundle install`

`yarn install`

`rails db:create && rails db:migrate && rails db:seed`

You should now have a sqlite database in the db folder which will contain several pre-built questions. Feel free to add your own questions as well.

Now run `rails server` to start the rails app in development mode.

You can now browse to `http://localhost:3000` in your browser. It's up to you to implement the questionnaire however you think is best. We just ask that you stick to using React, Apollo, and GraphQL.
