// 导入所有组件和方法构造 installer
import { makeInstaller } from "./make-installer";
import Components from "./component";
import Plugins from "./plugin";

export default makeInstaller([...Components, ...Plugins]);
