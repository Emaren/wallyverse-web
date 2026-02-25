"use client";

import { FormEvent, useMemo, useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

type WaitlistFormProps = {
  sourcePage: string;
};

const defaultApi =
  process.env.NODE_ENV === "production" ? "/api" : "http://localhost:8000";

export function WaitlistForm({ sourcePage }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [wantsShopSignals, setWantsShopSignals] = useState(false);
  const [honey, setHoney] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  const apiBase = useMemo(
    () => process.env.NEXT_PUBLIC_API_BASE_URL?.trim() || defaultApi,
    [],
  );

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (honey) {
      return;
    }

    setState("submitting");
    setMessage("");

    try {
      const response = await fetch(`${apiBase}/v1/waitlist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          source_page: sourcePage,
          wants_shop_signals: wantsShopSignals,
        }),
      });

      const payload = (await response.json()) as { message?: string; detail?: string };

      if (!response.ok) {
        throw new Error(payload.detail || payload.message || "Request failed.");
      }

      setState("success");
      setMessage(payload.message || "You're on the scroll. Watch the skies.");
      setEmail("");
      setWantsShopSignals(false);
    } catch (error) {
      const detail = error instanceof Error ? error.message : "Unknown error";
      setState("error");
      setMessage(detail);
    }
  };

  return (
    <form className="waitlist-form" onSubmit={onSubmit} id="waitlist">
      <label htmlFor="email" className="waitlist-label">
        Enter your email to receive Dispatches from the Outlander Team.
      </label>
      <input
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="you@domain.com"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        className="waitlist-input"
      />

      <label className="waitlist-check-row" htmlFor="shop-signals">
        <input
          id="shop-signals"
          type="checkbox"
          checked={wantsShopSignals}
          onChange={(event) => setWantsShopSignals(event.target.checked)}
        />
        <span>I want Shop signals too.</span>
      </label>

      <label className="honeypot" htmlFor="website">
        Website
      </label>
      <input
        id="website"
        name="website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={honey}
        onChange={(event) => setHoney(event.target.value)}
        className="honeypot"
      />

      <button
        type="submit"
        className="sigil-button"
        disabled={state === "submitting"}
        aria-busy={state === "submitting"}
      >
        {state === "submitting" ? "Opening Portal..." : "Join The Waitlist"}
      </button>

      {state !== "idle" ? (
        <p className={state === "error" ? "waitlist-message error" : "waitlist-message"}>{message}</p>
      ) : null}
    </form>
  );
}
