# Security Best Practices

## Input Validation

- Always validate and sanitize user input
- Validate on both client and server
- Use allowlists instead of denylists when possible
- Never trust user input; assume it's malicious

## XSS Prevention

- Use React's built-in escaping (don't use `dangerouslySetInnerHTML`)
- If you must use `dangerouslySetInnerHTML`, sanitize HTML with libraries like `DOMPurify`
- Always encode data from external sources
- Use `textContent` instead of `innerHTML` when possible

## CSRF Protection

- Use CSRF tokens for state-changing operations (POST, PUT, DELETE)
- Verify CSRF tokens on the backend
- Use SameSite cookie attribute: `SameSite=Strict` or `SameSite=Lax`

## Authentication & Authorization

- Never store sensitive data (passwords, tokens) in localStorage
- Use httpOnly cookies for authentication tokens
- Implement proper session timeout
- Validate user permissions on the backend for all operations
- Use JWT carefully; understand the risks

## API Security

- Never expose sensitive information in API responses that isn't needed
- Use HTTPS for all API calls
- Implement rate limiting to prevent brute force attacks
- Validate API responses on the client
- Use API versioning for backward compatibility

## Environment Variables

- Never commit secrets to version control
- Use `.env.local` (not tracked by git) for local development
- Rotate secrets regularly
- Use secrets management tools in production
- Separate different environment configs

## Error Handling

- Don't expose internal system details in error messages to users
- Log full errors for debugging but show generic messages to users
- Never log sensitive information in error messages
- Implement proper error monitoring with tools like Sentry
