export function isPromise(obj : any): obj is Promise<any>{
    return !!obj && typeof obj.then === 'function';
}

export function isJsObject(o: any): boolean {
  return o !== null && (typeof o === 'function' || typeof o === 'object');
}