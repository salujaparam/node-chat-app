const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;
  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'param',
      room: 'node course'
    }, {
      id: '2',
      name: 'meha',
      room: 'node chat'
    }, {
      id: '3',
      name: 'pu',
      room: 'node course'
    }]
  });

  it('should add new user', () => {
    var users = new Users();
    var user ={
      id: '123',
      name: 'param',
      room: 'the office'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var userId = '1';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    var userId = '4';
    var user = users.removeUser(userId);

    expect(user).toBeFalsy();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var userId = '2';
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('should not find a user', () => {
    var userId = '4';
    var user = users.getUser(userId);

    expect(user).toBeFalsy();
  });

  it('should return names for node course', () => {
    var userList =users.getUserList('node course');

    expect(userList).toEqual(['param', 'pu']);
  });

  it('should return names for node course', () => {
    var userList =users.getUserList('node chat');

    expect(userList).toEqual(['meha']);
  });
});
