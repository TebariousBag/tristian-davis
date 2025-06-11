window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.attack-btn').forEach(button => {
    button.addEventListener('click', () => {
      const section = button.getAttribute('data-section');
      const messageBox = document.querySelector('.message-box');

      const content = {
        about: `
          <h4>I’m Tristian Davis, a former restaurant general manager who is transitioning into web development. Leveraging years of leadership and problem-solving experience, I bring a strong work ethic and attention to detail as I pivot into a new industry. Currently, I am focused on expanding my skills in frontend and backend technologies. I enjoy combining creativity with technology and I'm excited to contribute to other projects and teams.</h4>
        `,
        portfolio: `
            <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
            <h4 style="text-align: center;">Here are some of my projects so far:</h4>
    
            <div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;">
            <a href="https://github.com/TebariousBag" target="_blank" title="GitHub" style="text-align: center; display: flex; flex-direction: column; align-items: center; text-decoration: none; color: inherit;">
            <img src="images/cooking-screenshot.png" alt="Chef Tristian" class="sshots" style="width: 250px; height: 250px;">
            <h4>Chef Tristian - Spoof Cooking Site</h4>
            </a>

            <a href="https://github.com/TebariousBag/atlas-smiling-school-javascript/blob/master/README.md" target="_blank" title="GitHub" style="text-align: center; display: flex; flex-direction: column; align-items: center; text-decoration: none; color: inherit;">
            <img src="images/smiling-school.png" alt="Atlas Smiling School" class="sshots" style="width: 250px; height: 250px;">
            <h4>Atlas Smiling School - Figma to file Bootstrap</h4>
            </a>

            <a href="https://github.com/TebariousBag/atlas-headphones/blob/main/README.md" target="_blank" title="GitHub" style="text-align: center; display: flex; flex-direction: column; align-items: center; text-decoration: none; color: inherit;">
            <img src="images/headphones.png" alt="Atlas Headphones" class="sshots" style="width: 250px; height: 250px;">
            <h4>Atlas Headphones - Figma file to Responsive Page</h4>
            </a>
           </div>
           </div>

        `,
        contact: `
          <h4>The best contact for me is by email: 
            <a href="mailto:tristiangdavis@gmail.com" style="color: #f8ff2e; text-decoration: underline;">
              tristiangdavis@gmail.com
            </a>
          </h4>
        `,
        social: `
          <h4 style="text-align: center;">Follow me on GitHub or LinkedIn!</h4>
          <div style="display: flex; gap: 20px; justify-content: center; align-items: center; margin-top: 10px;">
            <a href="https://github.com/TebariousBag" target="_blank" title="GitHub">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" class="socials" style="width: 150px; height: 150px;">
            </a>
            <a href="https://www.linkedin.com/in/tristiandavis/" target="_blank" title="LinkedIn">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" class="socials" style="width: 150px; height: 150px;">
            </a>
          </div>
        `,
      };

      messageBox.innerHTML = content[section] || "<h4>Select an option.</h4>";

      // Set same height for about and portfolio, different for others
      if (section === 'about' || section === 'portfolio') {
        messageBox.style.height = '550px';
      } else {
        messageBox.style.height = '275px';
      }
    });
  });
});
