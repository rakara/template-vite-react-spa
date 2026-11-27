# Security Policy

Do not commit credentials, access tokens, service-role keys, private keys or production data. Treat all `NEXT_PUBLIC_`, `VITE_` and `EXPO_PUBLIC_` variables as public client configuration. Report security issues privately to the repository owner rather than opening a public issue with exploit details.

All application data access must be authorized at the database or trusted server boundary. Client-side route guards are not security controls.
