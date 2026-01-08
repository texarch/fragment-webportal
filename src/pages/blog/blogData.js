import BlogImage from "../../assets/Blog_Page_Image.png";

export const blogData = [
  {
    id: 1,
    title: "The Future of Web Development",
    date: "December 18, 2025",
    author: "Jane Doe",
    image: BlogImage,
    summary: "Explore the latest trends and technologies shaping the future of the web.",
    content: `
      <h2>The Evolution of the Web</h2>
      <p>Web development is constantly evolving. From static HTML pages to complex single-page applications, the journey has been remarkable. Today, we are on the cusp of an intelligent, decentralized, and ultra-fast web.</p>

      <h3>Key Trends to Watch</h3>
      <ul>
        <li><strong>AI-driven Development</strong>: Tools like GitHub Copilot and ChatGPT are assisting developers in writing code faster and with fewer errors. AI is also being integrated into user interfaces for smarter interactions.</li>
        
        <li><strong>WebAssembly (Wasm)</strong>: This technology allows code written in languages like C, C++, and Rust to run in the web browser at near-native speed. It opens the door for high-performance applications like video editing and gaming on the web.</li>
        
        <li><strong>Serverless Architectures</strong>: Moving beyond traditional servers, serverless computing allows developers to focus purely on code. Cloud providers manage the infrastructure, scaling automatically with demand.</li>
        
        <li><strong>Edge Computing</strong>: By processing data closer to the user (at the "edge" of the network), applications become faster and more responsive, reducing latency significantly.</li>
      </ul>

      <h3>The Road Ahead</h3>
      <p>As we move forward, these technologies will redefine how we build and interact with the web. The focus is shifting towards performance, accessibility, and creating seamless user experiences powered by intelligent systems.</p>
    `
  },
  {
    id: 2,
    title: "Mastering React Hooks",
    date: "November 25, 2025",
    author: "John Smith",
    image: BlogImage,
    summary: "A comprehensive guide to understanding and using React Hooks effectively.",
    content: `
      <h2>Why Hooks?</h2>
      <p>Hooks allow you to use state and other React features without writing a class. They make code cleaner, easier to reuse, and help avoid "wrapper hell" in complex components.</p>
      
      <h3>Core Hooks</h3>
      <ul>
        <li><strong>useState</strong>: The bread and butter of local state management.</li>
        <li><strong>useEffect</strong>: Handles side effects like data fetching and subscriptions. It replaces lifecycle methods like <code>componentDidMount</code> and <code>componentDidUpdate</code>.</li>
        <li><strong>useContext</strong>: Simplifies consuming context values without nested consumers.</li>
      </ul>

      <h3>Leveling Up: Advanced Hooks</h3>
      <p>Once you're comfortable with the basics, these hooks help optimize performance and manage complex logic:</p>
      <ul>
        <li><strong>useReducer</strong>: Great for complex state logic that involves multiple sub-values or when the next state depends on the previous one.</li>
        <li><strong>useMemo</strong> & <strong>useCallback</strong>: Essential for performance optimization by memoizing values and functions to prevent unnecessary re-renders.</li>
        <li><strong>useRef</strong>: Access DOM elements directly or persist values across renders without causing updates.</li>
      </ul>

      <h3>The Power of Custom Hooks</h3>
      <p>The real magic happens when you compose built-in hooks into your own <strong>Custom Hooks</strong>. This allowing you to extract and reuse stateful logic across different components, keeping your UI code semantic and clean.</p>
    `
  },
  {
    id: 3,
    title: "CSS Grid vs. Flexbox",
    date: "October 10, 2025",
    author: "Alice Johnson",
    image: BlogImage,
    summary: "Understanding when to use Grid and when to use Flexbox for layout.",
    content: `
      <h2>Layout Systems</h2>
      <p>CSS Grid and Flexbox are powerful tools. While Flexbox is great for one-dimensional layouts, Grid shines in two dimensions.</p>
      <h3>Best Practices</h3>
      <p>Use Flexbox for alignment within a container, and Grid for the overall page structure.</p>
    `
  },
  {
    id: 4,
    title: "The Rise of TypeScript",
    date: "September 15, 2025",
    author: "Michael Brown",
    image: BlogImage,
    summary: "Why TypeScript has become the industry standard for large-scale JavaScript applications.",
    content: `
      <h2>Type Safety Matters</h2>
      <p>TypeScript adds static typing to JavaScript, catching errors at compile time rather than runtime. This leads to more robust and maintainable codebases.</p>
      <h3>Adoption</h3>
      <p>Major frameworks like React, Angular, and Vue have embraced TypeScript, making it an essential skill for modern developers.</p>
    `
  },
  {
    id: 5,
    title: "Optimizing Web Performance",
    date: "August 20, 2025",
    author: "Sarah Wilson",
    image: BlogImage,
    summary: "Techniques and strategies to make your web applications load faster and run smoother.",
    content: `
      <h2>Speed is Key</h2>
      <p>User experience is directly tied to performance. Slow websites lead to higher bounce rates and lower conversion.</p>
      <h3>Tips</h3>
      <ul>
        <li>Lazy load images and components</li>
        <li>Minimize bundle sizes</li>
        <li>Use CDNs</li>
      </ul>
    `
  },
  {
    id: 6,
    title: "Introduction to GraphQL",
    date: "July 05, 2025",
    author: "David Lee",
    image: BlogImage,
    summary: "A beginner's look at GraphQL and how it compares to traditional REST APIs.",
    content: `
      <h2>What is GraphQL?</h2>
      <p>GraphQL is a query language for your API. It allows clients to request exactly the data they need, nothing more, nothing less.</p>
      <h3>Benefits</h3>
      <p>Avoids over-fetching and under-fetching data, providing a more efficient way to manage data in your applications.</p>
    `
  },
  {
    id: 7,
    title: "Modern UI Design Trends",
    date: "June 12, 2025",
    author: "Emma Davis",
    image: BlogImage,
    summary: "Exploring the latest aesthetic trends in web design for 2025.",
    content: `
      <h2>User-Centric Design</h2>
      <p>Modern design focuses on usability and accessibility while maintaining a visually stunning aesthetic.</p>
      <h3>Trends</h3>
      <p>Glassmorphism, dark mode, and micro-interactions continue to dominate the landscape.</p>
    `
  },
  {
    id: 8,
    title: "Understanding Asynchronous JavaScript",
    date: "May 28, 2025",
    author: "Chris Evans",
    image: BlogImage,
    summary: "Deep dive into Promises, Async/Await, and the Event Loop.",
    content: "<h2>Async JS</h2><p>Mastering asynchronous patterns is crucial for modern web apps.</p>"
  },
  {
    id: 9,
    title: "State Management in 2025",
    date: "May 15, 2025",
    author: "Patricia Moore",
    image: BlogImage,
    summary: "Comparing Redux, Recoil, Zustand, and Context API.",
    content: "<h2>Managing State</h2><p>Choosing the right state management library can make or break your app's scalability.</p>"
  },
  {
    id: 10,
    title: "Accessibility Standards (WCAG)",
    date: "April 30, 2025",
    author: "Robert Taylor",
    image: BlogImage,
    summary: "How to ensure your website is usable by everyone.",
    content: "<h2>Inclusive Design</h2><p>Web accessibility is not just a requirement; it's a moral imperative.</p>"
  },
  {
    id: 11,
    title: "The Power of Server-Side Rendering",
    date: "April 10, 2025",
    author: "Jennifer White",
    image: BlogImage,
    summary: "Benefits of SSR for SEO and initial load performance.",
    content: "<h2>SSR vs CSR</h2><p>Server-side rendering provides faster first pleasant paint and better search engine visibility.</p>"
  },
  {
    id: 12,
    title: "Securing Your Web Application",
    date: "March 25, 2025",
    author: "James Harris",
    image: BlogImage,
    summary: "Common vulnerabilities and how to protect against them.",
    content: "<h2>Web Security</h2><p>From XSS to CSRF, understanding security threats is essential for every developer.</p>"
  },
  {
    id: 13,
    title: "Deploying with Docker and Kubernetes",
    date: "March 12, 2025",
    author: "Linda Martin",
    image: BlogImage,
    summary: "Containerization strategies for scalable deployments.",
    content: "<h2>DevOps Basics</h2><p>Docker and Kubernetes have revolutionized how we deploy and manage applications at scale.</p>"
  },
  {
    id: 14,
    title: "Introduction to Next.js",
    date: "February 28, 2025",
    author: "Michael Thompson",
    image: BlogImage,
    summary: "Getting started with the popular React framework for production.",
    content: "<h2>Why Next.js?</h2><p>Next.js offers the best developer experience with all the features you need for production: hybrid static & server rendering.</p>"
  },
  {
    id: 15,
    title: "Mobile-First Design Principles",
    date: "February 15, 2025",
    author: "Elizabeth Garcia",
    image: BlogImage,
    summary: "Designing for smaller screens before scaling up.",
    content: "<h2>Responsive Design</h2><p>Starting with mobile ensures your core content and functionality are prioritized.</p>"
  },
  {
    id: 16,
    title: "Working with REST APIs",
    date: "January 30, 2025",
    author: "William Martinez",
    image: BlogImage,
    summary: "Best practices for consuming and building RESTful services.",
    content: "<h2>API Design</h2><p>REST remains the standard for web APIs. Learn how to design clean and predictable endpoints.</p>"
  },
  {
    id: 17,
    title: "Git Version Control Mastery",
    date: "January 15, 2025",
    author: "Barbara Robinson",
    image: BlogImage,
    summary: "Advanced Git commands and workflows for teams.",
    content: "<h2>Version Control</h2><p>Mastering Git is fundamental for collaboration and code management in any development team.</p>"
  },
  {
    id: 18,
    title: "Introduction to Svelte",
    date: "January 05, 2025",
    author: "Daniel Clark",
    image: BlogImage,
    summary: "Why Svelte is gaining popularity among frontend developers.",
    content: "<h2>Rethinking Reactivity</h2><p>Svelte shifts the work from the browser to the compile step, resulting in highly optimized vanilla JavaScript.</p>"
  }
];
