# Code Style Guide

## File Organization

```
src/
├── app/                  # Next.js pages and layouts
│   ├── (marketing)/      # Public pages (landing, pricing, docs)
│   ├── (dashboard)/      # Authenticated dashboard
│   └── api/              # API routes
├── components/
│   ├── ui/               # shadcn/ui primitives
│   ├── marketing/        # Landing page components
│   └── dashboard/        # Dashboard components
└── lib/
    ├── db/               # Drizzle schema, queries, migrations
    ├── stripe/           # Stripe client, webhook handlers
    ├── provisioning/     # Terraform execution, EC2 management
    ├── auth/             # NextAuth config
    └── utils/            # Shared utilities
```

## Naming Conventions

- **Files:** kebab-case (`agent-card.tsx`, `stripe-webhook.ts`)
- **Components:** PascalCase (`AgentCard`, `PricingTable`)
- **Functions:** camelCase (`createAgent`, `handleWebhook`)
- **Constants:** UPPER_SNAKE_CASE (`MAX_AGENTS_PER_TEAM`)
- **Types/Interfaces:** PascalCase, no `I` prefix (`Agent`, `Subscription`)
- **Database tables:** snake_case (`user_agents`, `billing_events`)

## Code Patterns

- Prefer `const` over `let`; never `var`
- Use early returns to reduce nesting
- Colocate types with their usage
- Server Components by default; `"use client"` only when needed
- Error boundaries at route segment level

## Testing Patterns

- Test files colocated: `feature.test.ts` next to `feature.ts`
- Describe blocks mirror module structure
- Use factories for test data, not fixtures
- Integration tests for API routes, unit tests for logic

## Documentation

- JSDoc for exported functions
- README in each major module directory
- ADRs for architectural decisions in `.writ/decision-records/`
