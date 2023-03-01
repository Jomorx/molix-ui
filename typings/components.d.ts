import '@vue/runtime-core'

declare module '@vue/runtime-core' {

    export interface GlobalComponents {
        MlButton:typeof import('../packages/molix')['MlButton'],
        MlInput:typeof import('../packages/molix')['MlInput']
        MlAlert:typeof import('../packages/molix')['MlAlert']
        MlRate:typeof import('../packages/molix')['MlRate']
        MlCard:typeof import('../packages/molix')['MlCard']

    }
    interface ComponentCustomProperties {
        $message: typeof import('../packages/molix')['ElMessage']
      }
}