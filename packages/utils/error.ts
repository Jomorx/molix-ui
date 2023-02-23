import { isString } from "lodash";
class MolixError extends Error {
    constructor(m: string) {
        super(m);
        this.name = "MolixError";
    }
}

export function throwError(scope: string, m: string): never {
    throw new MolixError(`[${scope}] ${m}`);
}

export function debugWarn(err: Error): void;
export function debugWarn(scope: string, message: string): void;
export function debugWarn(scope: string | Error, message?: string): void {
    if (process.env.NODE_ENV !== "production") {
        const error: Error = isString(scope) ? new MolixError(`[${scope}] ${message}`) : scope;
        // eslint-disable-next-line no-console
        console.warn(error);
    }
}
