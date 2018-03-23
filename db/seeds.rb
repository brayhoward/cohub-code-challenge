questions = [
  {
    label: 'How many years have you been developing software?',
    field_type: 'string'
  },
  {
    label: 'Are you a good developer?',
    field_type: 'boolean'
  },
  {
    label: 'What is your favorite programming language?',
    field_type: 'list',
    options: %w[Ruby Javascript C# C++ Java Objective-C Swift Go Python Cobol Fortran],
    multiselect: false
  },
  {
    label: 'Select two or three of your second favorite programming languages:',
    field_type: 'list',
    options: %w[Ruby Javascript C# C++ Java Objective-C Swift Go Python Cobol Fortran],
    multiselect: true
  }
]

questions.each_with_index do |opts, index|
  Question.create(opts.merge(position: index))
end
