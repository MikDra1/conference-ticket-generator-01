export function ensureStartsWith(str, prefix) {
    if (!str.startsWith(prefix)) {
      return prefix + str;
    }
    return str;
  }