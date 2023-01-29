import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "wbfabric" | "zen" | "zennofooter"
declare module "D:/Code for Life/71. NAF Zen/NAF-Zen/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}