function customRender(reactElement, container) {
  //   const dom = document.createElement(reactElement.type);
  //   dom.innerHTML = reactElement.props.children;
  //   dom.setAttribute("href", reactElement.props.href);
  //   dom.setAttribute("target", reactElement.props.target);
  //   container.appendChild(dom);

  const dom = document.createElement(reactElement.type);
  dom.innerHTML = reactElement.Children;
  for (const prop in reactElement.props) {
    if (prop === "children") container;
    dom.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(dom);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  Children: "Click Me",
};

const reactContainer = document.getElementById("root");
customRender(reactElement, reactContainer);
