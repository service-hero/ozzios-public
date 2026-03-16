import {
  Suspense,
  startTransition,
  useRef,
  useState,
  useEffect,
  type ComponentType,
  type ReactNode,
} from 'react';

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
 * near the viewport, using Intersection Observer + React 19 startTransition.
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
          startTransition(() => {
            setIsVisible(true);
          });
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

interface DeferredSectionProps {
  /** Children to render once the section is near the viewport */
  children: ReactNode;
  /** How far before the viewport edge to start rendering (CSS margin syntax) */
  rootMargin?: string;
  /** Placeholder shown before the section enters the viewport */
  fallback?: ReactNode;
}

/**
 * Defers rendering of inline children until near the viewport.
 * Uses React 19 startTransition to keep the UI responsive during hydration.
 * Use this for sections defined in the same file (not dynamically imported).
 */
export function DeferredSection({
  children,
  rootMargin = '200px',
  fallback = <div style={{ minHeight: 200 }} />,
}: DeferredSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startTransition(() => {
            setIsVisible(true);
          });
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return <div ref={ref}>{isVisible ? children : fallback}</div>;
}
