function makeFriendsList(friends) {
  let friendsUl = document.createElement('ul')
  for (let friend of friends) {
    friendsUl.insertAdjacentHTML('beforeEnd', `<li>${friend.firstName} ${friend.lastName}</li>`)
  }
  return friendsUl
}
