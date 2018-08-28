<template>
  <div class="fold fold-item" :class="{ 'is-active': active }">
    <transition name="fade">
      <div class="fold-content" v-if="active">
        <slot></slot>
      </div>
    </transition>    
    <div class="fold-header" role="tab" :aria-expanded="active ? 'true' : 'false'" @click.prevent="toggle">
      {{ active ? 'Less information' : 'More information' }}</div>
  </div>
</template>

<script>
export default {
  name: "fold",
  data(){
    return {
      active: false
    }
  },
  props: {
    selected: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  created () {
    this._isfoldItem = true
    this.active = this.selected
  },
  ready () {
    if (this.active) {
      this.$emit('fold-open', this.index)
    }
  },
  methods: {
    toggle () {
      this.active = !this.active
      if (this.active) {
        this.$emit('fold-open', this.index)
      }
    }
  }
}
</script>
