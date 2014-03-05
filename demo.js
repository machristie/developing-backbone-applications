
// Define the Todo Model
var Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  }
});

var myTodo = new Todo({
  title: 'Check attributes property of the logged models in the console.'
});

var TodoView = Backbone.View.extend({

  tagName: 'li',
  todoTpl: _.template($('#item-template').html()),
  events:  {
    'dblclick label': 'edit',
    'keypress .edit': 'updateOnEnter',
    'blur .edit': 'close'
  },
  initialize: function() {
    this.$el = $('#todo');
  },
  render: function() {
    this.$el.html( this.todoTpl( this.model.toJSON() ) );
    this.input = this.$('.edit');
  },
  edit: function() {
    // executed when todo label is double clicked
  },

  close: function() {
    // executed when todo loses focus
  },

  updateOnEnter: function( e ) {
    // executed on each keypress when in todo edit mode, 
    // but we'll wait for enter to get in action
  }
});

var todoView = new TodoView({model: myTodo});
