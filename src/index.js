/*
 * @Author: your name
 * @Date: 2021-12-08 09:35:31
 * @LastEditTime: 2021-12-10 18:24:27
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \edcTreeselect\src\index.js
 */

import Treeselect from './components/Treeselect'
import treeselectMixin from './mixins/treeselectMixin'
import './style.less'

export default Treeselect
export { Treeselect, treeselectMixin }
export {
  // Delayed loading.
  LOAD_ROOT_OPTIONS,
  LOAD_CHILDREN_OPTIONS,
  ASYNC_SEARCH,
} from './constants'

export const VERSION = PKG_VERSION
