import { useState, useCallback, useRef } from 'react';

interface UseRateLimitOptions {
  cooldownMs?: number;
  maxAttempts?: number;
  windowMs?: number;
}

interface UseRateLimitReturn {
  isLimited: boolean;
  remainingTime: number;
  attemptSubmit: () => boolean;
  reset: () => void;
}

export const useRateLimit = ({
  cooldownMs = 5000,
  maxAttempts = 3,
  windowMs = 60000,
}: UseRateLimitOptions = {}): UseRateLimitReturn => {
  const [isLimited, setIsLimited] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);

  const attemptsRef = useRef<number[]>([]);
  const limitedUntilRef = useRef<number>(0);
  const cooldownTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCooldownTimer = useCallback(() => {
    if (cooldownTimerRef.current) {
      clearTimeout(cooldownTimerRef.current);
      cooldownTimerRef.current = null;
    }
  }, []);

  const startCooldownTimer = useCallback(
    (durationMs: number) => {
      clearCooldownTimer();
      const startTime = Date.now();

      const tick = () => {
        const elapsed = Date.now() - startTime;
        const remaining = Math.max(0, durationMs - elapsed);

        setRemainingTime(remaining);

        if (remaining > 0) {
          cooldownTimerRef.current = setTimeout(tick, 100);
        } else {
          setIsLimited(false);
          cooldownTimerRef.current = null;
        }
      };

      cooldownTimerRef.current = setTimeout(tick, 100);
    },
    [clearCooldownTimer]
  );

  const attemptSubmit = useCallback((): boolean => {
    const now = Date.now();

    if (now < limitedUntilRef.current) {
      const remaining = limitedUntilRef.current - now;
      setRemainingTime(remaining);
      startCooldownTimer(remaining);
      return false;
    }

    attemptsRef.current = attemptsRef.current.filter((timestamp) => now - timestamp < windowMs);

    attemptsRef.current.push(now);

    if (attemptsRef.current.length > maxAttempts) {
      limitedUntilRef.current = now + cooldownMs;
      setIsLimited(true);
      startCooldownTimer(cooldownMs);
      return false;
    }

    return true;
  }, [cooldownMs, maxAttempts, windowMs, startCooldownTimer]);

  const reset = useCallback(() => {
    clearCooldownTimer();
    attemptsRef.current = [];
    limitedUntilRef.current = 0;
    setIsLimited(false);
    setRemainingTime(0);
  }, [clearCooldownTimer]);

  return { isLimited, remainingTime, attemptSubmit, reset };
};
