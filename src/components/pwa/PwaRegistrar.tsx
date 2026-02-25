"use client";

import { useEffect } from "react";

export function PwaRegistrar() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      return;
    }

    if (!("serviceWorker" in navigator)) {
      return;
    }

    let updateIntervalId: number | null = null;
    let didReloadForUpdate = false;

    const handleControllerChange = () => {
      if (didReloadForUpdate) {
        return;
      }

      didReloadForUpdate = true;
      window.location.reload();
    };

    navigator.serviceWorker.addEventListener(
      "controllerchange",
      handleControllerChange,
    );

    const register = async () => {
      try {
        const registration = await navigator.serviceWorker.register("/sw.js", {
          updateViaCache: "none",
        });

        const requestImmediateActivation = () => {
          if (registration.waiting) {
            registration.waiting.postMessage({ type: "SKIP_WAITING" });
          }
        };

        registration.addEventListener("updatefound", () => {
          const installing = registration.installing;
          if (!installing) {
            return;
          }

          installing.addEventListener("statechange", () => {
            if (
              installing.state === "installed" &&
              navigator.serviceWorker.controller
            ) {
              requestImmediateActivation();
            }
          });
        });

        requestImmediateActivation();
        await registration.update();
        updateIntervalId = window.setInterval(() => {
          void registration.update().catch(() => {});
        }, 5 * 60 * 1000);
      } catch (error) {
        console.error("Service worker registration failed", error);
      }
    };

    if (document.readyState === "complete") {
      void register();
    } else {
      window.addEventListener("load", register, { once: true });
    }

    return () => {
      window.removeEventListener("load", register);
      navigator.serviceWorker.removeEventListener(
        "controllerchange",
        handleControllerChange,
      );
      if (updateIntervalId !== null) {
        window.clearInterval(updateIntervalId);
      }
    };
  }, []);

  return null;
}
