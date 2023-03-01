import "@vue/runtime-core";

declare module "@vue/runtime-core" {
    export interface GlobalComponents {
        MlButton: typeof import("@molix/components")["MlButton"];
        MlInput: typeof import("@molix/components")["MlInput"];
        MlAlert: typeof import("@molix/components")["MlAlert"];
        MlRate: typeof import("@molix/components")["MlRate"];
        MlMessage: typeof import("@molix/components")["MlMessage"];
        MlCard: typeof import("@molix/components")["MlCard"];
    }
}
