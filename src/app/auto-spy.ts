/** Create an object with methods that are autoSpy-ed to use as mock dependency */
export function autoSpy<T>(obj: new (...args: any[]) => T): SpyOf<T> {
    const res: SpyOf<T> = {} as any;

    Object.keys(obj.prototype).forEach(key => {
        res[key] = jest.fn();
    });

    return res;
}

/** Keeps the types of properties of a type but assigns type of Spy to the methods */
export type SpyOf<T> = T &
    Partial<{ [k in keyof T]: T[k] extends (...args: any[]) => infer R ? jest.SpyInstance<R, any[]> : T[k] }>;
