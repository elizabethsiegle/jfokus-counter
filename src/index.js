import html from '../static/index.html';

// Add Durable Object class for counter
export class ButtonCounter {
	constructor(state) {
		this.state = state;
		// Initialize counter if not exists
		this.counter = 0;
	}

	async initialize() {
		const stored = await this.state.storage.get("counter");
		this.counter = stored || 0;
	}

	async increment() {
		this.counter++;
		await this.state.storage.put("counter", this.counter);
		return this.counter;
	}

	async fetch(request) {
		await this.initialize();
		
		if (request.method === "POST") {
			const count = await this.increment();
			return new Response(count.toString());
		}
		
		return new Response(this.counter.toString());
	}
}

export default {
	async fetch(request, env, ctx) {
		const url = new URL(request.url);
		if (url.pathname === '/') {
			return new Response(html, {
				headers: { 'Content-Type': 'text/html' },
			});
		}

		// Handle counter endpoints via HTTP endpoints
		if (url.pathname.startsWith('/counter/')) {
			const buttonId = url.pathname.split('/')[2];
			const id = env.BUTTON_COUNTER.idFromName(buttonId);
			const obj = env.BUTTON_COUNTER.get(id);
			return obj.fetch(request);
		}

		return new Response('Hello World!');
	},
};
