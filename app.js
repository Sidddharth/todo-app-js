var form = document.querySelector('#addForm');
var items = document.querySelector('#items');

// form submit event
form.addEventListener('submit', addItem);
// Delete event
items.addEventListener('click', removeItem);
// Add Item
function addItem(e) {
  e.preventDefault();
  console.log(e.target);
  // Get Input value
  var newItem = document.querySelector('#input').value;
  if(newItem == '') {
    return null;
  }
  else {
    // create new li
    var li = document.createElement('li');
    // Add class
    li.className = 'list-item clearfix';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    // create delete button
    var deleteButton = document.createElement('button');
    // add className to delete button
    deleteButton.className = "delete";
    // crate Delete text node
    deleteButton.appendChild(document.createTextNode('Delete'));
    // append delete button to li
    li.appendChild(deleteButton);
    // add li to ul
    items.appendChild(li);
    // reset the input box
    e.target.reset();
  }
}

// Remove item
function removeItem(e){
   if(e.target.classList.contains('delete')){
     var li = e.target.parentElement;
     items.removeChild(li);
   }
}
