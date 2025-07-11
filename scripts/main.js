// Get references to input and output elements
const input = document.querySelector("#commandInput");
const output = document.querySelector("#output");

// Reusable welcome message
const welcomeMessage = `
  <div>welcome to <strong>kenneth plumstead's terminal portfolio</strong>.</div>
  <div>type <code>help</code> to get started.</div>
`;

// Set initial terminal content on page load
output.innerHTML = welcomeMessage;

// Handle command input
input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const command = input.value.trim();
    if (!command) return;

    printCommand(command);
    const response = handleCommand(command);
    printResponse(response);

    input.value = "";
    output.scrollTop = output.scrollHeight;
  }
});

// Show user-typed command
function printCommand(command) {
  const div = document.createElement("div");
  div.innerHTML = `<span class="prompt">user@portfolio:~$</span> ${command}`;
  output.appendChild(div);
}

// Show response/output content
function printResponse(response) {
  if (!response) return;
  const div = document.createElement("div");
  div.innerHTML = response;
  output.appendChild(div);
}

// Handle all available commands
function handleCommand(cmd) {
  switch (cmd.toLowerCase()) {
    case "help":
      return `
        Available commands:<br>
        <code>about</code> — Who I am<br>
        <code>skills</code> — What I know<br>
        <code>projects</code> — Featured work<br>
        <code>resume</code> — Get my resume<br>
        <code>contact</code> — Get in touch<br>
        <code>clear</code> — Clear the terminal
      `;

    case "about":
      return `
        Hello, I'm <strong>Kenneth Plumstead</strong> — a passionate web developer currently studying Mobile Web Development at triOS College.<br><br>
        I specialize in building clean, accessible, and performant websites and applications. I’m focused on becoming a full-stack developer with strong design thinking and problem-solving skills.<br><br>
        My goal is to grow into a senior developer or cloud engineer role, eventually launching my own developer-first platform.
      `;

    case "skills":
      return `
        <strong>Languages:</strong> HTML, CSS, JavaScript, Swift, Java, PHP<br>
        <strong>Frameworks/Libraries:</strong> React, Angular<br>
        <strong>CMS/Hosting:</strong> WordPress, Linux hosting, MAMP<br>
        <strong>Design:</strong> Adobe XD, Figma, UI/UX, Graphic Design<br>
        <strong>Tools:</strong> Git, GitHub, VS Code, MacOS Terminal<br>
        <strong>Currently Learning:</strong> Swift, iOS Dev, PHP, MySQL
      `;

    case "projects":
      return `
        <strong>Mr. Robot Fan Site</strong> — A WordPress & HTML fan hub with characters, media, and embedded YouTube trailer.<br>
        <a href="https://fsocietyfanhub.wordpress.com/" target="_blank" rel="noopener noreferrer" class="btn">View on WordPress</a><br><br>

        <strong>GitHub Assignments</strong> — View my open-source exercises and contributions:<br>
        <a href="https://github.com/kennethplumstead" target="_blank" rel="noopener noreferrer">github.com/kennethplumstead</a>
      `;

    case "resume":
      return `
        You can download my resume here:<br>
        <a href="assets/resume/Kenneth_Plumstead_Resume.pdf" target="_blank" rel="noopener noreferrer">Kenneth_Plumstead_Resume.pdf</a>
      `;

    case "contact":
      return `
        <span id="emailPlaceholder">📧 Email: <button onclick="revealEmail()" class="btn-inline">Click to reveal</button></span><br>
        🔗 LinkedIn: <a href="https://www.linkedin.com/in/kenneth-plumstead-464278347/" target="_blank" rel="noopener noreferrer">/kenneth-plumstead</a><br>
        💻 GitHub: <a href="https://github.com/kennethplumstead" target="_blank" rel="noopener noreferrer">/kennethplumstead</a><br>
        🌐 Website: <a href="https://kennethplumstead.github.io" target="_blank" rel="noopener noreferrer">kennethplumstead.github.io</a>
      `;

    case "clear":
      output.innerHTML = welcomeMessage;
      return "";

    default:
      return `<span class="error">command not found: <code>${cmd}</code></span><br>Type <code>help</code> to see available commands.`;
  }
}

// Reveal email safely (avoids spam bots, cause who likes bots!!)
function revealEmail() {
  const placeholder = document.querySelector("#emailPlaceholder");
  const user = "Kennethplumstead";
  const domain = "icloud.com";
  placeholder.innerHTML = `📧 Email: <a href="mailto:${user}@${domain}">${user}@${domain}</a>`;
}