declare function toLetter(int: number, isLowercase?: boolean): string;

declare function toRoman(num: number, isLowercase: boolean): string | false;

declare function sleep(timeout: number): Promise<void>;

declare function toBool(val: any): boolean;

declare function castPath(path: string | string[], obj?: any): string[];

declare function download(
    data: Blob | File | string | any[],
    name: string,
    type?: string
): void;

declare function extractUrls(str: string): string[];

declare function fill(
    list: any[],
    val: any,
    start?: number,
    end?: number
): any[];

declare namespace types {
    interface Collection<T> {}
    interface List<T> extends Collection<T> {
        [index: number]: T;
        length: number;
    }
    interface ListIterator<T, TResult> {
        (value: T, index: number, list: List<T>): TResult;
    }
    interface Dictionary<T> extends Collection<T> {
        [index: string]: T;
    }
    interface ObjectIterator<T, TResult> {
        (element: T, key: string, list: Dictionary<T>): TResult;
    }
    interface MemoIterator<T, TResult> {
        (prev: TResult, curr: T, index: number, list: List<T>): TResult;
    }
    interface MemoObjectIterator<T, TResult> {
        (prev: TResult, curr: T, key: string, list: Dictionary<T>): TResult;
    }
    type Fn<T> = (...args: any[]) => T;
    type AnyFn = Fn<any>;
    type PlainObj<T> = { [name: string]: T };
}
declare const types: {};

declare class Emitter {
    on(event: string, listener: types.AnyFn): Emitter;
    off(event: string, listener: types.AnyFn): Emitter;
    once(event: string, listener: types.AnyFn): Emitter;
    emit(event: string, ...args: any[]): Emitter;
    removeAllListeners(event?: string): Emitter;
    static mixin(obj: any): any;
}

declare namespace fullscreen {
    interface IFullscreen extends Emitter {
        request(el?: Element): void;
        exit(): void;
        toggle(el?: Element): void;
        isActive(): boolean;
        getEl(): Element | null;
        isEnabled(): boolean;
    }
}
declare const fullscreen: fullscreen.IFullscreen;

declare const hotkey: {
    on(key: string, listener: types.AnyFn): void;
    off(key: string, listener: types.AnyFn): void;
};

declare function loadCss(src: string, cb?: types.AnyFn): void;

declare function loadImg(src: string, cb?: types.AnyFn): void;

declare function loadJs(src: string, cb?: types.AnyFn): void;

declare function naturalSort<T extends any[]>(arr: T): T;

declare function parallel(tasks: types.AnyFn[], cb?: types.AnyFn): void;

declare const query: {
    parse(str: string): any;
    stringify(object: any): string;
};

declare function randomId(size?: number, symbols?: string): string;

declare function scrollTo(
    target: Element | string | number,
    options: {
        tolerance?: number;
        duration?: number;
        easing?: string | Function;
        callback?: types.AnyFn;
    }
);

declare function tryIt(fn: types.AnyFn, cb?: types.AnyFn): void;

declare function type(val: any, lowerCase?: boolean): string;

declare function fileSize(bytes: number): string;

declare function getUrlParam(name: string, url?: string): string | undefined;

declare function startWith(str: string, prefix: string): boolean;

declare function endWith(str: string, suffix: string): boolean;

declare function strTpl(str: string, data: types.PlainObj<any>): string;

declare function stripHtmlTag(str: string): string;

declare function isAbsoluteUrl(url: string): boolean;

declare function isDate(val: any): boolean;

declare function isEl(val: any): boolean;

declare function isEmail(val: string): boolean;

declare function isGeneratorFn(val: any): boolean;

declare function isJson(val: string): boolean;

declare function isMobile(ua?: string): boolean;

declare function isUrl(val: string): boolean;

declare function downloadImage(imageSrc: string, imageName?: string): Promise<void>;

declare const selectApiData: (data: any) => any;

declare function formatDate(date: any, format?: string): string | null;

export { castPath, download, downloadImage, endWith, extractUrls, fileSize, fill, formatDate, fullscreen, getUrlParam, hotkey, isAbsoluteUrl, isAbsoluteUrl as isDataUrl, isDate, isEl, isEmail, isGeneratorFn, isJson, isMobile, isUrl, loadCss, loadImg, loadJs, naturalSort, parallel, query, randomId, scrollTo, selectApiData, sleep, startWith, strTpl, stripHtmlTag, toBool, toLetter, toRoman, tryIt, type };
