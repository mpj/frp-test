var mockFollowers = [
  { name: 'John' },
  { name: 'Katya' },
  { name: 'Anna' },
  { name: 'Nils' },
  { name: 'Johanna' },
  { name: 'Fox' },
  { name: 'Ninja' }
]

function IndexViewModel() {

  var self = this;

  self.followers = ko.observableArray(mockFollowers);

  self.personUnfollowClicked = function(person) {
    self.followers.splice(self.followers.indexOf(person), 1)
  }

  self.headerText = ko.computed(function() {
    return "You are following " + self.followers().length + " people"
  })

}

var indexViewModel = new IndexViewModel()

ko.applyBindings(indexViewModel)