import '@vue/runtime-core'

declare module '@vue/runtime-core' {

    export interface GlobalComponents {
        MlButton:typeof import('../packages/components')['MlButton'],
        MlInput:typeof import('../packages/components')['MlInput']
        MlAlert:typeof import('../packages/components')['MlAlert']
        MlRate:typeof import('../packages/components')['MlRate']
        MlMessage:typeof import('../packages/components')['MlMessage']
        MlCard:typeof import('../packages/components')['MlCard']

    }
}