import { menuItems } from "../model/menuModel.js";
import { showMenu } from "../view/showMenu.js";

export const getMenu = () => {
  showMenu(menuItems);
  console.log("gett");
};
