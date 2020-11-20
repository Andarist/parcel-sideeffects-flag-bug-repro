var hasOwnProperty = Object.prototype.hasOwnProperty;

function jsx(type, props) {
  if (!hasOwnProperty.call(props, 'css')) {
    console.log('has css prop');
  }
}

console.log(jsx("div", { css: "" }));
