import { useEffect, useState } from 'react';

export type RouteInfo =
  | { path: '/'; params: Record<string, string> }
  | { path: '/quiz'; params: Record<string, string> }
  | { path: '/result'; params: { id: string } }
  | { path: '/history'; params: Record<string, string> };

export function parseHash(hash: string): RouteInfo {
  const cleanHash = hash.replace(/^#/, '').trim() || '/';

  if (cleanHash === '/' || cleanHash === '') {
    return { path: '/', params: {} };
  }

  if (cleanHash === '/quiz' || cleanHash.startsWith('/quiz?')) {
    return { path: '/quiz', params: {} };
  }

  if (cleanHash === '/history' || cleanHash.startsWith('/history?')) {
    return { path: '/history', params: {} };
  }

  const resultMatch = cleanHash.match(/^\/result\/([^/?]+)/);
  if (resultMatch) {
    return { path: '/result', params: { id: decodeURIComponent(resultMatch[1]) } };
  }

  return { path: '/', params: {} };
}

export function navigate(path: string): void {
  const targetHash = path.startsWith('#') ? path : `#${path.startsWith('/') ? path : '/' + path}`;
  if (window.location.hash !== targetHash) {
    window.location.hash = targetHash;
  }
}

export function useHashRoute(): [RouteInfo, (path: string) => void] {
  const [route, setRoute] = useState<RouteInfo>(() => parseHash(window.location.hash));

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(parseHash(window.location.hash));
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return [route, navigate];
}
