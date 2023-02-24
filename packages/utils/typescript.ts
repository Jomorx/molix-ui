import type { AppContext, Plugin } from "vue";
export const mutable = <T extends readonly any[] | Record<string, unknown>>(val: T) =>
    val as Mutable<typeof val>;
export type Mutable<T> = { -readonly [P in keyof T]: T[P] };

export type SFCWithInstall<T> = T & Plugin;

export type SFCInstallWithContext<T> = SFCWithInstall<T> & {
    _context: AppContext | null;
};
