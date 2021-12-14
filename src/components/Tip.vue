<!--
 * @Author: your name
 * @Date: 2021-12-08 09:35:31
 * @LastEditTime: 2021-12-08 14:42:00
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \edcTreeselect\src\components\Tip.vue
-->
<script>
  export default {
    name: 'vue-treeselect--tip',
    functional: true,
    props: {
      type: {
        type: String,
        required: true
      },
      icon: {
        type: String,
        required: true
      }
    },
    render(_, context) {
      const { props, children } = context
      return (
			<div class={`vue-treeselect__tip vue-treeselect__${props.type}-tip`}>
				<div class='vue-treeselect__icon-container'>
					<span class={`vue-treeselect__icon-${props.icon}`} />
				</div>
				<span class={`vue-treeselect__tip-text vue-treeselect__${props.type}-tip-text`}>
					{children}
				</span>
			</div>
		)
    }
  }
</script>
