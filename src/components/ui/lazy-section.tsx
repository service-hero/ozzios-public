import { Suspense, useRef, useState, useEffect, type ComponentType, type ReactNode } from 'react';

interface LazySectionProps {
  /** A React.lazy() component to render once visible */
  component: React.LazyExoticComponent<ComponentType>;
  /** How far before the viewport edge to start loading (CSS margin syntax) */
  rootMargin?: string;
  /** Fallback shown while the component JS is loading */
  fallback?: ReactNode;
}

/**
 * Defers loading and rendering of a React.lazy section until it's
 * near the viewport, using Intersection Observer.
 */
export function LazySection({
  component: Component,
  rootMargin = '200px',
  fallback = <div style={{ minHeight: 200 }} />,
}: LazySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref}>
      {isVisible ? (
        <Suspense fallback={fallback}>
          <Component />
        </Suspense>
      ) : (
        fallback
      )}
    </div>
  );
}
