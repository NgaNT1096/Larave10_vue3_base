<script setup>
import { ref, computed } from 'vue'
import { mdiMinus, mdiPlus, mdiChevronDown, mdiChevronUp } from '@mdi/js'
import 'boxicons'
import { getButtonColor } from '@/colors.js'
import BaseIcon from '@/Components/BaseIcon.vue'
import AsideMenuList from '@/Components/AsideMenuList.vue'
import { Link } from '@inertiajs/vue3'
import { useDarkModeStore } from '@/stores/darkMode.js'
const darkModeStore = useDarkModeStore()

const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  isDropdownList: Boolean
})
const itemHref = computed(() => (props.item.route ? route(props.item.route) : props.item.href))
const activeInactiveStyle = computed(() => {
   console.log('activeInactiveStyle', props.item.route && route().current(props.item.route))
   console.log('current route', route().current(props.item.route) );
  if( props.item.route_list != null && props.item.route_list.includes(route().current(props.item.route)) == true){
    isDropdownActive.value = true;
  }
  if( props.item.group != null && route().current(props.item.route).includes(props.item.group) == true){
    isDropdownActive.value = true;
  }
//    console.log(props.item.route_list.includes(route().current(props.item.route)) );
  return ((props.item.route && route().current(props.item.route) ) || isDropdownActive.value == true )
    ? 'aside-menu-item-active font-bold text-[#696cff] bg-[#696cff29]'
    : 'text-[#697a8d] bg-[#ffffff]'
})
const activeIcon = computed(() => {
  // console.log('activeInactiveStyle', props.item.route && route().current(props.item.route))
  return props.item.route && route().current(props.item.route)
    ? '#696cff'
    : '#697a8d'
})
const emit = defineEmits(['menu-click'])

const hasColor = computed(() => props.item && props.item.color)

const asideMenuItemActiveStyle = computed(() =>
  hasColor.value ? '' : 'aside-menu-item-active text-aside_menu_item_active font-bold'
)

const isDropdownActive = ref(false)

const componentClass = computed(() => [
  props.isDropdownList ? 'py-3 px-6 text-sm' : 'py-3',
  hasColor.value
    ? getButtonColor(props.item.color, false, true)
    : `aside-menu-item dark:text-slate-300 dark:hover:text-white`
])

const activeItemClass = computed(() => {
  return props.item.route && route().current(props.item.route)
    ? 'bg-[#696cff] border-[3px] border-[#e7e7ff] w-4 h-4'
    : 'bg-[#b4bdc6] border-[3px]  w-4 h-4'
})
const activeHeaderClass = computed(() => {
  return props.item.route && route().current(props.item.route)
    ? 'font-bold'
    : ''
})

const hasDropdown = computed(() => !!props.item.menu)

const menuClick = (event) => {
  emit('menu-click', event, props.item)

  if (hasDropdown.value) {
    isDropdownActive.value = !isDropdownActive.value
  }
}
const checkOpenMenu = () => {

}
</script>

<template>
  <li>

    <component v-if="hasAnyPermission(item.permissions)" :is="item.route ? Link : 'div'" :href="itemHref"
      v-tooltip="item.label" :target="item.target ?? null" class="flex cursor-pointer items-center"
      :class="item.route && hasDropdown ? [componentClass,activeHeaderClass] : [componentClass, activeInactiveStyle]" @click="menuClick">
      <!-- <BaseIcon v-if="item.icon" :path="item.icon" class="flex-none " :class="activeInactiveStyle" w="w-16" :size="20" /> -->
      <box-icon v-if="item.icon_font" :name="item.icon_font"  class="mx-2 " :color="activeIcon" size="20px"></box-icon>
      <div v-else class="flex-none  rounded-full mx-2 " :class="activeItemClass" />
      <span v-if="item.icon" class="grow text-ellipsis line-clamp-1 text-[15px]" ::class="[{ 'pr-12': !hasDropdown }]">{{
        item.label }}  </span>
      <span v-else class="grow text-ellipsis line-clamp-1 text-[13px]" ::class="[{ 'pr-12': !hasDropdown }]">{{
        item.label }}</span>
      <BaseIcon v-if="hasDropdown" :path="isDropdownActive ? mdiChevronDown : mdiChevronUp" class="flex-none"
        w="w-12" />

    </component>
    <AsideMenuList v-if="hasDropdown" :menu="item.menu"
      :class="['aside-menu-dropdown', isDropdownActive ? 'block ' : 'hidden']" is-dropdown-list />
  </li>
</template>
