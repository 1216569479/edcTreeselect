<!--
 * @Author: your name
 * @Date: 2021-12-08 09:35:31
 * @LastEditTime: 2021-12-08 16:42:15
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \edcTreeselect\src\components\Treeselect.vue
-->
<script>
import treeselectMixin from "../mixins/treeselectMixin";
import HiddenFields from "./HiddenFields";
import Control from "./Control";
import Menu from "./Menu";
import MenuPortal from "./MenuPortal";

export default {
  name: "vue-treeselect",
  mixins: [treeselectMixin],

  computed: {
    wrapperClass() {
      return {
        "vue-treeselect": true,
        "vue-treeselect--single": this.single,
        "vue-treeselect--multi": this.multiple,
        "vue-treeselect--searchable": this.searchable,
        "vue-treeselect--disabled": this.disabled,
        "vue-treeselect--focused": this.trigger.isFocused,
        "vue-treeselect--has-value": this.hasValue,
        "vue-treeselect--open": this.menu.isOpen,
        "vue-treeselect--open-above": this.menu.placement === "top",
        "vue-treeselect--open-below": this.menu.placement === "bottom",
        "vue-treeselect--branch-nodes-disabled": this.disableBranchNodes,
        "vue-treeselect--append-to-body": this.appendToBody,
      };
    },
  },

  render() {
    return (
      <div ref="wrapper" class={this.wrapperClass}>
        <HiddenFields />
        <Control ref="control" />
        {this.appendToBody ? <MenuPortal ref="portal" /> : <Menu ref="menu" />}
      </div>
    );
  },
};
</script>
