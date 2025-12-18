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
  }
];
