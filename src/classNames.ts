import { isObject, isString, isNumber } from './base/common/types';

type ClassValue =
  | string
  | number
  // | StringDictionary
  // | NumberDictionary
  | ClassArray
  // | object
  | Record<string, any>
  | undefined
  | null
  | false
  | true;

interface ClassDictionary {
  [id: string]: boolean | undefined | null;
}

interface StringDictionary {
  [id: string]: boolean | undefined | number | string | null;
}

interface NumberDictionary {
  [id: number]: boolean | undefined | number | null;
}

type ClassArray = Array<ClassValue>;

const hasOwn = {}.hasOwnProperty;

function isClassArray(arg: any): arg is ClassArray {
  return Array.isArray(arg);
}

export default function classNames(...args: ClassValue[]): string {
  const classes = [];

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (!arg) continue;

    // const argType = typeof arg;

    if (isString(arg) || isNumber(arg)) {
      classes.push(arg);
    } else if (isClassArray(arg)) {
      if (arg.length === 0) {
        break;
      }
      // const inner = classNames.apply(null, arg);
      const inner = classNames(...arg);
      if (inner) {
        classes.push(inner);
      }
      // } else if (argType === 'object') {
    } else if (isObject(arg)) {
      for (const key in arg) {
        if (hasOwn.call(arg, key) && arg[key]) {
          classes.push(key);
        }
      }
    }
  }

  return classes.join(' ');
}
