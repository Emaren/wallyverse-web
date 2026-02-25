# Wallyverse Web

Next.js 13-page cinematic brochure scaffold.

## Run

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Notes

- Shared shell and nav live in `src/app/(site)/layout.tsx`
- The animated backdrop is `src/components/site/SwirlField.tsx`
- Page content model is `src/lib/wallyverse-content.ts`
- Waitlist form posts to `${NEXT_PUBLIC_API_BASE_URL}/v1/waitlist`
