# Security Headers Configuration for KhanBlox

This file documents recommended security headers. For GitHub Pages, these should be 
implemented via Cloudflare or a reverse proxy since GitHub Pages doesn't support 
custom headers natively.

## Cloudflare Configuration

If using Cloudflare, configure these headers via Transform Rules:

### 1. Strict-Transport-Security (HSTS)
Forces HTTPS connections
```
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

### 2. Content-Security-Policy (CSP)
Prevents XSS and injection attacks
```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self'; frame-ancestors 'self'; base-uri 'self'; form-action 'self'
```

### 3. X-Content-Type-Options
Prevents MIME type sniffing
```
X-Content-Type-Options: nosniff
```

### 4. X-Frame-Options
Prevents clickjacking
```
X-Frame-Options: SAMEORIGIN
```

### 5. X-XSS-Protection
**Note: This header is deprecated.** Modern browsers have removed support for X-XSS-Protection in favor of Content-Security-Policy. Only include this for legacy browser support.
```
X-XSS-Protection: 1; mode=block
```

### 6. Referrer-Policy
Controls referrer information
```
Referrer-Policy: strict-origin-when-cross-origin
```

### 7. Permissions-Policy
Controls browser features
```
Permissions-Policy: geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()
```

## Implementation via Cloudflare Workers (Alternative)

If you need more control, create a Cloudflare Worker:

```javascript
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const response = await fetch(request)
  const newResponse = new Response(response.body, response)
  
  // Security Headers
  newResponse.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload')
  newResponse.headers.set('X-Content-Type-Options', 'nosniff')
  newResponse.headers.set('X-Frame-Options', 'SAMEORIGIN')
  newResponse.headers.set('X-XSS-Protection', '1; mode=block')
  newResponse.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  newResponse.headers.set('Permissions-Policy', 'geolocation=(), microphone=(), camera=()')
  
  // CSP for production
  newResponse.headers.set('Content-Security-Policy', 
    "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:;"
  )
  
  return newResponse
}
```

## Verification

Test your security headers using:
- https://securityheaders.com/
- https://observatory.mozilla.org/

## CORS Configuration

If you need CORS for API access:

```
Access-Control-Allow-Origin: https://www.khanblox.com
Access-Control-Allow-Methods: GET, POST, OPTIONS
Access-Control-Allow-Headers: Content-Type, Authorization
Access-Control-Max-Age: 86400
```

## Additional Security Measures

### 1. Enable DNSSEC
Configure in your DNS provider (Cloudflare supports this)

### 2. Use Subresource Integrity (SRI)
For external scripts/styles:
```html
<script src="https://cdn.example.com/script.js" 
        integrity="sha384-hash" 
        crossorigin="anonymous"></script>
```

### 3. Implement Rate Limiting
Via Cloudflare Rate Limiting rules:
- Login endpoints: 5 requests per minute
- API endpoints: 100 requests per minute
- General pages: 1000 requests per minute

### 4. Bot Protection
Enable Cloudflare Bot Fight Mode:
- Block known bad bots
- Challenge suspicious traffic
- Allow good bots (Google, Bing)

## Monitoring

Set up alerts for:
- SSL certificate expiration
- Unusual traffic patterns
- Failed login attempts (if applicable)
- 4xx/5xx error rate increases

## Compliance

Ensure compliance with:
- GDPR (if serving EU users)
- COPPA (children's online privacy)
- CCPA (California users)
- WCAG (accessibility standards)

---

*For implementation assistance, see DEPLOYMENT.md*
