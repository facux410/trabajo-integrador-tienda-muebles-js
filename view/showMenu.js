export const showMenu = (menuItems) => {
  console.log("cas");
  menuItems.forEach((element) => {
    console.log("en ff");
    const menuInicio = document.createElement("a");

    menuInicio.innerText = element.name;
    menuInicio.href = element.link;

    const container = document.querySelector("nav.navegacion");
    container.appendChild(menuInicio);
  });
};
