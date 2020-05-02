// type ClassValue =
//   | string
//   | number
//   | ClassDictionary
//   | ClassArray
//   | undefined
//   | null
//   | false
//   | true;
type ClassValue =
  | string
  | number
  | StringDictionary
  | NumberDictionary
  | ClassArray
  | undefined
  | null
  | false
  | true;

interface ClassDictionary {
  [id: string]: boolean | undefined | null;
}

interface StringDictionary {
  [id: string]: boolean | undefined | number | null;
}

interface NumberDictionary {
  [id: number]: boolean | undefined | number | null;
}

type ClassArray = Array<ClassValue>;

const hasOwn = {}.hasOwnProperty;

export default function classNames(...args: ClassValue[]): string {
  const classes = [];

  for (let i = 0; i < args.length; i++) {
    const arg = args[i] as any;
    if (!arg) continue;

    const argType = typeof arg;

    if (argType === 'string' || argType === 'number') {
      classes.push(arg);
    } else if (Array.isArray(arg) && arg.length) {
      const inner = classNames.apply(null, arg);
      if (inner) {
        classes.push(inner);
      }
    } else if (argType === 'object') {
      for (const key in arg) {
        if (hasOwn.call(arg, key) && arg[key]) {
          classes.push(key);
        }
      }
    }
  }

  return classes.join(' ');
}
