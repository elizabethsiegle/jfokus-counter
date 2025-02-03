### Counter App

This is a simple counter app built with vanilla JavaScript and Cloudflare Workers and Cloudflare Durable Objects. It maintains state for a poll where users increment and decrement a counter value.

Built w/ Cursor/Claude-3.5-Sonnet ❤️

#### Setup
Clone the repository:
```bash
git clone https://github.com/elizabethsiegle/jfokus-counter.git
```
Install dependencies:
```bash
npm install
```
Configure your Cloudflare credentials:
```bash
wrangler login
```
Run the development server:
```bash
npm run dev
```

#### Deployment
Deploy to Cloudflare Workers:
```bash
npm run deploy
```
