// 这是一个基于defineProperty的观察者模式
const moitor = {};
const subscribedObj = {};
Object.defineProperty(moitor, 'test', {
  get: function (value) {
    console.log(this.value, 'in moitor');
  },
  set: function (newValue) {
    console.log(newValue);
    subscribed(newValue);
    subscribedObj.test = newValue;
    this.value = newValue;
  }
})

function subscribed (value) {
  console.log(`我发生了变化，并变成了这个样子${value}`);
}

export {
  moitor,
  subscribedObj
}