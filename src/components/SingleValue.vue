<!--
 * @Author: your name
 * @Date: 2021-12-08 09:35:31
 * @LastEditTime: 2021-12-08 14:48:33
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \edcTreeselect\src\components\SingleValue.vue
-->
<script>
  import Input from './Input'
  import Placeholder from './Placeholder'

  export default {
    name: 'vue-treeselect--single-value',
    inject: ['instance'],
    methods: {
      renderSingleValueLabel() {
        const { instance } = this
        const node = instance.selectedNodes[0]
        const customValueLabelRenderer = instance.$scopedSlots['value-label']
        return customValueLabelRenderer
          ? customValueLabelRenderer({ node })
          : node.label
      }
    },
    render() {
		const { instance, $parent: { renderValueContainer }} = this
      const shouldShowValue = instance.hasValue && !instance.trigger.searchQuery
      return renderValueContainer([
        shouldShowValue && (
				<div class='vue-treeselect__single-value'>
					{ this.renderSingleValueLabel() }
				</div>
			),
			<Placeholder />,
			<Input ref='input' />
      ])
    }
  }
</script>
